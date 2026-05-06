import { useEffect, useRef, useState } from "react";
import "./Terminal.css";

export default function Terminal({ onOpenProject, projects }) {
  const [output, setOutput] = useState("");
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setTyping] = useState(true);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyPointer, setHistoryPointer] = useState(-1);

  const terminalBodyRef = useRef(null);
  const inputRef = useRef(null);

  /* =========================
      AUTO FOCUS & CLICK FOCUS
  ========================= */
  useEffect(() => {
    if (!isTyping && inputRef.current) {
      inputRef.current.focus({ preventScroll: true });
    }
  }, [isTyping]);

  const focusInput = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  /* =========================
      AUTO SCROLL
  ========================= */
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history, output, input]);

  /* =========================
      INTRO TYPING EFFECT
  ========================= */
  useEffect(() => {
    const lines = [
      "> Initializing Ibrahim's Environment...",
      "> Welcome to terminal",
      "> Type --help to begin",
    ].join("\n");

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      setOutput(lines.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex >= lines.length) {
        clearInterval(typingInterval);
        setTyping(false);
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, []);

  /* =========================
      COMMAND RUNNER
  ========================= */
  const runCommand = (cmd) => {
    const cleanCmd = cmd.toLowerCase().trim();
    let result = "";

    // 1. Handle Clear separately
    if (cleanCmd === "clear") {
      setHistory([]);
      setCommandHistory((prev) => [...prev, cmd]);
      setHistoryPointer(-1);
      return;
    }

    // 2. Standard Commands
    if (cleanCmd === "--help") {
      result = "Available: --help, show projects, cd <project_name>, clear";
    } else if (cleanCmd === "show projects") {
      result = projects.length > 0 
        ? projects.map((p) => p.title).join(", ") 
        : "No projects found.";
    } else if (cleanCmd.startsWith("cd ")) {
      const name = cleanCmd.replace("cd ", "").trim();
      const project = projects.find((p) => p.title.toLowerCase() === name);

      if (project) {
        onOpenProject(project);
        result = `Success: Opening ${project.title}...`;
      } else {
        result = `Error: Project "${name}" not found.`;
      }
    } else {
      result = `Command not found: ${cmd}`;
    }

    setHistory((prev) => [...prev, { cmd, result }]);
    setCommandHistory((prev) => [...prev, cmd]);
    setHistoryPointer(-1); // Reset history navigation
  };

  /* =========================
      KEYBOARD HANDLER
  ========================= */
  const handleKey = (e) => {
    if (isTyping) return;

    // ENTER
    if (e.key === "Enter") {
      if (input.trim()) {
        runCommand(input);
        setInput("");
      }
      return;
    }

    // ARROW UP (Older commands)
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length === 0) return;

      const nextPointer = historyPointer + 1;
      if (nextPointer < commandHistory.length) {
        setHistoryPointer(nextPointer);
        setInput(commandHistory[commandHistory.length - 1 - nextPointer]);
      }
    }

    // ARROW DOWN (Newer commands)
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextPointer = historyPointer - 1;

      if (nextPointer >= 0) {
        setHistoryPointer(nextPointer);
        setInput(commandHistory[commandHistory.length - 1 - nextPointer]);
      } else {
        setHistoryPointer(-1);
        setInput("");
      }
    }
  };

  return (
    <section id="terminal" className="terminal-section">
      <div className="terminal-window" onClick={focusInput}>
        <div className="terminal-header">
          <div className="dot red"></div>
          <div className="dot yellow"></div>
          <div className="dot green"></div>
          <span className="terminal-title">ibrahim — terminal</span>
        </div>

        <div className="terminal-body" ref={terminalBodyRef}>
          <div className="res-line intro-text">{output}</div>

          {history.map((entry, i) => (
            <div key={i} className="history-group">
              <div className="cmd-line">
                <span className="prompt">❯</span>
                <span className="user-cmd">{entry.cmd}</span>
              </div>
              <div className="res-line response-text">{entry.result}</div>
            </div>
          ))}

          {!isTyping && (
            <div className="input-line">
              <span className="prompt">❯</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                className="terminal-input"
                spellCheck="false"
                autoComplete="off"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}