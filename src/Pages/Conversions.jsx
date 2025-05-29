import FileConverter from "../components/FileConverter.jsx";
import jsPDF from "jspdf";
import { PDFDocument } from 'pdf-lib';


export const JpgToPdf = () => {
  const convertJpgToPdf = async (formData) => {
    const pdf = new jsPDF();
    const files = Array.from(formData.getAll("files"));

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const imgData = await readFileAsDataURL(file);

      await new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          const imgWidth = 210; // A4 width in mm
          const imgHeight = (img.height * imgWidth) / img.width;
          if (i > 0) pdf.addPage();
          pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, imgHeight);
          resolve();
        };
        img.src = imgData;
      });
    }

    // Return the PDF as a Blob URL
    const pdfBlob = pdf.output("blob");
    const pdfUrl = URL.createObjectURL(pdfBlob);

    return {
      fileUrl: pdfUrl,
      fileName: "converted.pdf",
    };
  };

  // Helper function to read file as Data URL
  const readFileAsDataURL = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  return (
    <div>
      <FileConverter
        title='JPG to PDF Converter'
        subtitle='Convert JPG images to PDF documents (Client-side)'
        acceptedFileTypes='image/jpeg,image/jpg'
        buttonText='Select JPG Images'
        convertButtonText='Convert to PDF'
        conversionApi={convertJpgToPdf}
        onFileSelect={(files) => console.log("Selected files:", files)}
        onConversionStart={() => console.log("Conversion started")}
        onConversionComplete={(result) =>
          console.log("Conversion complete:", result)
        }
        onError={(error) => console.error("Error:", error)}
      />
    </div>
  );
};



export const MergePdf = () => {
  const mergePdfs = async (formData) => {
    const files = Array.from(formData.getAll("files"));
    const mergedPdf = await PDFDocument.create();

    for (const file of files) {
      const fileBytes = await readFileAsArrayBuffer(file);
      const pdfDoc = await PDFDocument.load(fileBytes);
      
      const pages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
      pages.forEach(page => mergedPdf.addPage(page));
    }

    // Return the merged PDF as a Blob URL
    const mergedPdfBytes = await mergedPdf.save();
    const mergedPdfBlob = new Blob([mergedPdfBytes], { type: 'application/pdf' });
    const pdfUrl = URL.createObjectURL(mergedPdfBlob);
    
    return {
      fileUrl: pdfUrl,
      fileName: 'merged-document.pdf'
    };
  };

  // Helper function to read file as ArrayBuffer
  const readFileAsArrayBuffer = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  };

  return (
    <div>
      <FileConverter
        title="Merge PDF files"
        subtitle="Combine PDFs in the order you want with the easiest PDF merger available."
        acceptedFileTypes="application/pdf"
        buttonText="Select PDF Files"
        convertButtonText="Merge PDFs"
        conversionApi={mergePdfs}
        onFileSelect={(files) => console.log('Selected files:', files)}
        onConversionStart={() => console.log('Merging started')}
        onConversionComplete={(result) => console.log('Merging complete:', result)}
        onError={(error) => console.error('Error:', error)}
      />
    </div>
  );}
