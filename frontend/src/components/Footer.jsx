import "./Footer.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaCheckCircle, FaExclamationCircle,FaInstagram } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function Footer() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  
  // Custom Notification State
  const [notification, setNotification] = useState({ 
    show: false, 
    type: "", 
    message: "" 
  });

  // Auto-hide notification after 3 seconds
  useEffect(() => {
    if (notification.show) {
      const timer = setTimeout(() => {
        setNotification({ ...notification, show: false });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    const SERVICE_ID = import.meta.env.VITE_SERVICE_KEY;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        () => {
          setNotification({
            show: true,
            type: "success",
            message: "Message sent successfully! 🚀"
          });
          form.current.reset();
        },
        (error) => {
          setNotification({
            show: true,
            type: "error",
            message: "Failed to send message. Please try again."
          });
          console.error(error);
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <footer className="footer-section" id="contact">
      {/* Premium Notification Box */}
      {notification.show && (
        <div className={`notification-box ${notification.type}`}>
          <div className="notification-content">
            {notification.type === "success" ? <FaCheckCircle /> : <FaExclamationCircle />}
            <span>{notification.message}</span>
          </div>
          <div className="notification-progress"></div>
        </div>
      )}

      <div className="footer-container">
        {/* LEFT SIDE */}
        <div className="footer-info">
          <h2 className="footer-title">Let's Build Something Together</h2>
          <p className="footer-text">
            I'm currently looking for new opportunities. Whether you have a question about 
            **CardioGuard** or **SecureSend**, my inbox is always open.
          </p>

          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/ibrahim-kapadwanchwala/" target="_blank" rel="noreferrer" className="social-link linkedin">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Ibrahimkapadwanchwala" target="_blank" rel="noreferrer" className="social-link github">
              <FaGithub />
            </a>
            <a href="mailto:ikapadwanchwala@gmail.com" className="social-link email">
              <FaEnvelope />
            </a>
            <a href="https://www.instagram.com/kapadwanchwala" className="social-link email">
              <FaInstagram />
            </a>
          </div>
          <p className="footer-email-text">ikapadwanchwala@gmail.com</p>
        </div>

        {/* RIGHT SIDE (Form) */}
        <div className="footer-form-wrapper">
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <input type="text" name="name" placeholder="Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn" disabled={isSending}>
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Ibrahim Kapadwanchwala. Computer Engineer.</p>
      </div>
    </footer>
  );
}