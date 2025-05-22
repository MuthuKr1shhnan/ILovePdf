import {
  Compress,
  Merge,
  PdfToWord,
  Split,
  PdfToPowerpoint,
  PdfToExcel,
  WordToPdf,
  PdfToJPG,
  PdfToPdfA,
  PageNumbers,
  ComparePdf,
  RedactPdf,
  CropPdf,
  RepairPDf,
  PowerPointToPdf,
  ExcelToPdf,
  EditPdf,
  JpgToPdf,
  SingPdf,
  Watermark,
  HtmlToPdf,
  UnlockPdf,
  ProtectPdf,
  OrganizePdf,
  ScanToPdf,
  OcrPdf,
  RotatePdf,
} from "../svgassets/svg";

const toolsData = [
  {
    title: "Merge PDF",
    description:
      "Combine PDFs in the order you want with the easiest PDF merger available.",
    link: "https://www.ilovepdf.com/merge_pdf",
    icon: <Merge />,
    new: false,
  },
  {
    title: "Split PDF",
    description:
      "Separate one page or a whole set for easy conversion into independent PDF files.",
    link: "https://www.ilovepdf.com/split_pdf",
    icon: <Split />,
    new: false,
  },
  {
    title: "Compress PDF",
    description: "Reduce file size while optimizing for maximal PDF quality.",
    link: "https://www.ilovepdf.com/compress_pdf",
    icon: <Compress />,
    new: false,
  },
  {
    title: "PDF to Word",
    description: `Easily convert your PDF files into easy to edit DOC and DOCX
                  documents. The converted WORD document is almost 100%
                  accurate.`,
    link: "https://www.ilovepdf.com/pdf_to_word",
    icon: <PdfToWord />,
    new: false,
  },
  {
    title: "PDF to PowerPoint",
    description: `Turn your PDF files into easy to edit PPT and PPTX slideshows.`,
    link: "https://www.ilovepdf.com/pdf_to_word",
    icon: <PdfToPowerpoint />,
    new: false,
  },
  {
    title: "PDF to Excel",
    description: ` Pull data straight from PDFs into Excel spreadsheets in a few
                  short seconds.`,
    link: "https://www.ilovepdf.com/pdf_to_word",
    icon: <PdfToExcel />,
    new: false,
  },
  {
    title: "Word to Pdf",
    description: ` Make DOC and DOCX files easy to read by converting them to
                  PDF.`,
    link: "https://www.ilovepdf.com/pdf_to_word",
    icon: <WordToPdf />,
    new: false,
  },
  {
    title: "PowerPoint to Pdf",
    description: `  Make PPT and PPTX slideshows easy to view by converting them
                  to PDF.`,
    link: "https://www.ilovepdf.com/pdf_to_word",
    icon: <PowerPointToPdf />,
    new: false,
  },
  {
    title: "Excel to Pdf",
    description: `   Make EXCEL spreadsheets easy to read by converting them to
                  PDF.`,
    link: "https://www.ilovepdf.com/pdf_to_word",
    icon: <ExcelToPdf />,
    new: false,
  },
  {
    title: "Edit Pdf",
    description: `   Add text, images, shapes or freehand annotations to a PDF
                  document. Edit the size, font, and color of the added content.`,
    link: "https://www.ilovepdf.com/pdf_to_word",
    icon: <EditPdf />,
    new: true,
  },
  {
    title: "Pdf to JPG",
    description: `  Convert each PDF page into a JPG or extract all images
                  contained in a PDF.`,
    link: "https://www.ilovepdf.com/pdf_to_word",
    icon: <PdfToJPG />,
    new: false,
  },
  {
    title: "JPG to PDF",
    description: `   Convert JPG images to PDF in seconds. Easily adjust
                  orientation and margins.`,
    link: "https://www.ilovepdf.com/pdf_to_word",
    icon: <JpgToPdf />,
    new: false,
  },
  {
    title: "Sign PDF",
    description: `   Sign yourself or request electronic signatures from others.`,
    link: "https://www.ilovepdf.com/pdf_to_word",
    icon: <SingPdf />,
    new: false,
  },
  {
    title: "Watermark",
    description: `   Stamp an image or text over your PDF in seconds. Choose the
                  typography, transparency and position.`,
    icon: <Watermark />,
    new: false,
  },
  {
    title: "Rotate PDF",
    description: `    Rotate your PDFs the way you need them. You can even rotate
                  multiple PDFs at once!`,
    icon: <RotatePdf />,
    new: false,
  },
  {
    title: "Html To PDF",
    description: `     Convert webpages in HTML to PDF. Copy and paste the URL of the
                  page you want and convert it to PDF with a click.`,
    icon: <HtmlToPdf />,
    new: false,
  },
  {
    title: "Unlock PDF",
    description: `      Remove PDF password security, giving you the freedom to use
                  your PDFs as you want.`,
    icon: <UnlockPdf />,
    new: false,
  },
  {
    title: "Protect PDF",
    description: `      Protect PDF files with a password. Encrypt PDF documents to
                  prevent unauthorized access.`,
    icon: <ProtectPdf />,
    new: false,
  },
  {
    title: "Organize PDF",
    description: `      Sort pages of your PDF file however you like. Delete PDF pages
                  or add PDF pages to your document at your convenience.`,
    icon: <OrganizePdf />,
    new: false,
  },

  {
    title: "PDF To PDF/A",
    description: `      Transform your PDF to PDF/A, the ISO-standardized version of
                  PDF for long-term archiving. Your PDF will preserve formatting
                  when accessed in the future.`,
    icon: <PdfToPdfA />,
    new: false,
  },
  {
    title: "Repair PDF",
    description: `      Transform your PDF to PDF/A, the ISO-standardized version of
                  PDF for long-term archiving. Your PDF will preserve formatting
                  when accessed in the future.`,
    icon: <RepairPDf />,
    new: false,
  },

  {
    title: "Page Numbers",
    description: `      Add page numbers into PDFs with ease. Choose your positions,
                  dimensions, typography.`,
    icon: <PageNumbers />,
    new: false,
  },
  {
    title: "Scan To PDf",
    description: `     Capture document scans from your mobile device and send them
                  instantly to your browser.`,
    icon: <ScanToPdf />,
    new: false,
  },
  {
    title: "OCR PDf",
    description: `     Easily convert scanned PDF into searchable and selectable
                  documents.`,
    icon: <OcrPdf />,
    new: false,
  },
  {
    title: "Compare PDf",
    description: `       Show a side-by-side document comparison and easily spot
                  changes between different file versions.`,
    icon: <ComparePdf />,
    new: false,
  },
  {
    title: "Redact PDF",
    description: `       Redact text and graphics to permanently remove sensitive
                  information from a PDF.`,
    icon: <RedactPdf />,
    new: false,
  },

  {
    title: "Crop PDF",
    description: `      Crop margins of PDF documents or select specific areas, then
                  apply the changes to one page or the whole document.`,
    icon: <CropPdf />,
    new: false,
  },
];

export const LandingPage = () => {
  return (
    <div className='main'>
      <div className='pattern-bg' />
      <div className='home-title'>
        <h1 className='home-title__title'>
          Every tool you need to work with PDFs in one place
        </h1>
        <h2 className='home-title__subtitle'>
          Every tool you need to use PDFs, at your fingertips. All are 100% FREE
          and easy to use! Merge, split, compress, convert, rotate, unlock and
          watermark PDFs with just a few clicks.
        </h2>
      </div>

      <div className='tools'>
        <div className='tools__container flex flex-col md:flex-row'>
          {toolsData.map((tool) => (
            <div className='tools__item' key={tool.title}>
              {tool.new && <div class='badge badge--new'>New!</div>}
              <a href={tool.link} title={tool.title}>
                <div className='tools__item__icon'>{tool.icon}</div>
                <h3>{tool.title}</h3>
                <div className='tools__item__content'>
                  <p>{tool.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
