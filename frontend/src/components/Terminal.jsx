import { useEffect, useRef, useState } from "react";
import "./Terminal.css";

export default function Terminal({ onOpenProject, projects }) {
  const [output, setOutput] = useState("");
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setTyping] = useState(true);

  const terminalBodyRef = useRef(null);
  const inputRef = useRef(null);

  // Manual focus helper that prevents the browser from jumping to #terminal
  useEffect(() => {
    if (!isTyping && inputRef.current) {
      inputRef.current.focus({ preventScroll: true });
    }
  }, [isTyping]);

  // Improved internal scroll logic
  useEffect(() => {
    if (terminalBodyRef.current) {
      const { scrollHeight, clientHeight } = terminalBodyRef.current;
      if (scrollHeight > clientHeight) {
        terminalBodyRef.current.scrollTo({
          top: scrollHeight,
          behavior: "smooth",
        });
      }
    }
  }, [history, output]);

  // Smooth Typing Effect
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

  const runCommand = (cmd) => {
    let result = "";
    const cleanCmd = cmd.toLowerCase().trim();

    if (cleanCmd === "--help") {
      result = "Available: --help, show projects, cd <project_name>";
    } else if (cleanCmd === "show projects") {
      result = projects.map((p) => p.title).join(", ");
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
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !isTyping && input.trim()) {
      runCommand(input);
      setInput("");
    }
  };

  return (
    <section id="terminal" className="terminal-section">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="dot red"></div>
          <div className="dot yellow"></div>
          <div className="dot green"></div>
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