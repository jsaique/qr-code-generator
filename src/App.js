import { useState } from "react";
import QRCode from "react-qr-code";

function App() {
  const [text, setText] = useState("");
  const [showQR, setShowQR] = useState(false);

  const handleChange = (e) => {
    // Setting the form text value
    setText(e.target.value);
    // Hide QR code when the input change
    setShowQR(false);
  };

  const generateQR = (e) => {
    // Prevents the form to load
    e.preventDefault();
    // Show the QR code when the button is pressed
    setShowQR(true);
  };

  return (
    <main className="App">
      <div className="title-container">
        <h1 className="main-title">Create your QR Code</h1>
      </div>
      <div className="input-container">
        <form onSubmit={generateQR}>
          <input
            onChange={handleChange}
            className="qr-input"
            type="text"
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

export default App;
