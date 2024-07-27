import React from "react";
import { QRCode } from "react-qrcode-logo";

const App = () => {
  const [url, setUrl] = React.useState("");

  const submitit = (e) => {
    e.preventDefault();
    setUrl(e.target.elements.urlInput.value);
  };

  const downloadQRCode = () => {
    const canvas = document.getElementById("qrcode");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "QRCode.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100 p-4">
      <form onSubmit={submitit} className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-100">QR Code Generator</h1>
        <input
          name="urlInput"
          type="text"
          placeholder="Enter the Link"
          required
          className="w-full p-3 mb-4 border border-gray-600 rounded-md bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
        />
        <button
          type="submit"
          className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
        >
          Generate
        </button>
      </form>
      {url && (
        <div className="mt-10 flex flex-col items-center justify-center bg-gray-800 rounded-lg p-6 shadow-lg w-full max-w-md">
          <QRCode
            id="qrcode"
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={url}
          />
          <button
            onClick={downloadQRCode}
            className="mt-6 py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
          >
            Download QR Code
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
