import { useState } from 'react';

const UploadPage = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file first.");

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to process file");

      // Get PDF blob
      const blob = await response.blob();

      // Create a download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "processed.pdf";
      link.click();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Error:", err);
      alert("There was an error processing the file.");
    } finally {
      setLoading(false);
    }
  };

  return (
    
    <div className='tool__workarea'>
        <div className="p-4 max-w-md mx-auto border rounded shadow ">
          <h2 className="text-xl mb-4 font-semibold">Upload and Download Processed PDF</h2>
          <input type="file" onChange={handleFileChange} className="mb-4" />
          <button
            onClick={handleUpload}
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
            disabled={!file || loading}
          >
            {loading ? "Processing..." : "Upload & Convert"}
          </button>
        </div>
    </div>
  );
};

export default UploadPage;
