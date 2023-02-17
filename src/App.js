import { useEffect, useState } from "react";
import QRCode from "react-qr-code";

export default function App() {
  const [text, setText] = useState("");
  const [showQR, setShowQR] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    // Setting the form text value
    setText(e.target.value);
    // Hide QR code when the input change
    setShowQR(false);
    // Clears the error when input is filled
    setError("");
  };

  const generateQR = (e) => {
    console.log("generateQR called");
    // Prevents the form to load
    e.preventDefault();
    // Verify if the input is empty
    if (!text) {
      setShowQR(false);
      setError("* Please enter a text or link");
    } else {
      // Show the QR code when the button is pressed
      setShowQR(true);
    }
  };

  useEffect(() => {
    if (showQR) {
      // Clear the input field
      setText("");
    }
  }, [showQR]);

  return (
    <main className="App">
      <div className="title-container">
        <h1 className="main-title">Create your QR Code</h1>
      </div>
      <div className="input-container">
        <form onSubmit={generateQR}>
          <p className="error-msg">{error}</p>
          <input
            onChange={handleChange}
            className="qr-input"
            type="text"
            value={text}
            placeholder="Enter your text/link here"
          />
          <button className="btn" type="submit">
            Generate
          </button>
        </form>
      </div>
      <div className="qr-container">
        {showQR && (
          <QRCode
            value={text}
            size={256}
            style={{ height: "50%", maxWidth: "70%", width: "70%" }}
          />
        )}
      </div>
    </main>
  );
}
