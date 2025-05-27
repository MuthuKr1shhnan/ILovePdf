import React, { useRef, useState } from "react";
import { jsPDF } from "jspdf";

const Uploading = () => {
  const fileInputRef = useRef(null);
  const [images, setImages] = useState([]);

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const jpgFiles = files.filter(file =>
      file.type === "image/jpeg" || file.type === "image/jpg"
    );
    setImages(jpgFiles);
  };

  const convertToPDF = async () => {
    if (images.length === 0) return alert("No JPG files selected.");

    const pdf = new jsPDF();

    for (let i = 0; i < images.length; i++) {
      const imgData = await toBase64(images[i]);

      const img = new Image();
      img.src = imgData;

      await new Promise((resolve) => {
        img.onload = () => {
          const imgWidth = 210; // A4 size
          const imgHeight = (img.height * imgWidth) / img.width;
          if (i > 0) pdf.addPage();
          pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, imgHeight);
          resolve();
        };
      });
    }

    pdf.save("converted.pdf");
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  return (
    <div className='main'>
      <div className='tool'>
        <div className='tool__workarea flex flex-col mt-auto'>
          <div id='dropArea'></div>
          <div className='tool__header'>
            <h1 className='tool__header__title'>JPG to PDF</h1>
            <h2 className='tool__header__subtitle'>
              Convert JPG images to PDF in seconds. Easily adjust orientation
              and margins.
            </h2>
          </div>

          <div className='uploading__bar uploading__bar--small'>
            <span className='uploading__bar__completed'></span>
          </div>

          <div className="uploader ml-auto">
            <input
              type="file"
              accept="image/jpeg"
              multiple
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />

            <button
              className="uploader__btn"
              id="pickfiles"
              title="Add more files"
              data-title="Add more files"
              onClick={handleFileClick}
            >
              <span>Select JPG images</span>
            </button>

            {images.length > 0 && (
              <button
                className="uploader__btn ml-4 bg-green-600 text-white px-3 py-1 rounded"
                onClick={convertToPDF}
              >
                Convert to PDF
              </button>
            )}

            <div className="uploader__extra flex">
              <a
                className="btn-icon uploader__extra__btn tooltip tooltip--right active"
                id="uploadDisk"
                href="javascript:;"
                title="Upload from your computer"
              >
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="#fff" fill-rule="nonzero"><desc>Upload from computer.</desc><path d="M4.8 19c-.442 0-.8-.448-.8-1s.358-1 .8-1h10.4c.442 0 .8.448.8 1s-.358 1-.8 1H4.8z"></path><path d="M7 15h6l-1 3H8z"></path><path d="M2 2v11h16V2H2zM1 0h18a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1z"></path></svg>
              </a>
              <a
                id="gdrive_file_selector"
                className="btn-icon uploader__extra__btn tooltip tooltip--right active"
                title="Select images from Google Drive"
                data-title="Select images from Google Drive"
              >
                   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16"><path fill="#FFF" d="M8.7375,5.80725 L3.021,15.70725 L0.12375,10.69725 L5.847,0.795 L8.7375,5.80725 Z M17.865,10.38225 L12.078,10.39125 L6.378,0.489 L12.1725,0.489 L17.865,10.38225 Z M17.87625,10.9875 L14.9865,15.9975 L3.5415,15.99 L6.43425,10.98375 L17.87625,10.9875 Z"></path></svg>
              </a>
              <a
                id="dropbox_file_selector"
                className="btn-icon uploader__extra__btn tooltip tooltip--right active"
                title="Select images from Dropbox"
                data-title="Select images from Dropbox"
              >
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path fill="#FFF" d="M5.3475,0.7035 L0.096,4.125 L3.708,7.03725 L9.018,3.765 L5.3475,0.7035 Z M17.904,4.14 L12.66525,0.7275 L9.01875,3.7725 L14.29875,7.03875 L17.904,4.14 Z M9.01875,10.305 L12.66525,13.35975 L17.904,9.945 L14.2995,7.0395 L9.01875,10.305 Z M0.096,9.9585 L5.3475,13.35975 L9.01875,10.305 L3.70875,7.0455 L0.096,9.9585 Z M9.01875,10.9635 L5.35575,14.0385 L3.786,13.02 L3.786,14.16 L9.01875,17.30475 L14.271,14.15175 L14.271,13.0125 L12.693,14.031 L9.01875,10.9635 Z"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uploading;
