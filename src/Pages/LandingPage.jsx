import { Link } from "react-router-dom";
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
  PremiumPic,
} from "../svgassets/svg";
import { useState, useEffect, useRef } from "react";

const toolsData = [
  {
    title: "Merge PDF",
    description:
      "Combine PDFs in the order you want with the easiest PDF merger available.",
    link: "merge-pdf",
    icon: <Merge />,
    new: false,
  },
  {
    title: "Split PDF",
    description:
      "Separate one page or a whole set for easy conversion into independent PDF files.",
    link: "/split-pdf",
    icon: <Split />,
    new: false,
  },
  {
    title: "Compress PDF",
    description: "Reduce file size while optimizing for maximal PDF quality.",
    link: "/compress-pdf",
    icon: <Compress />,
    new: false,
  },
  {
    title: "PDF to Word",
    description: `Easily convert your PDF files into easy to edit DOC and DOCX
                  documents. The converted WORD document is almost 100%
                  accurate.`,
    link: "/pdf-to-word",
    icon: <PdfToWord />,
    new: false,
  },
  {
    title: "PDF to PowerPoint",
    description: `Turn your PDF files into easy to edit PPT and PPTX slideshows.`,
    link: "/pdf-to-powerpoint",
    icon: <PdfToPowerpoint />,
    new: false,
  },
  {
    title: "PDF to Excel",
    description: ` Pull data straight from PDFs into Excel spreadsheets in a few
                  short seconds.`,
    link: "/pdf-to-excel",
    icon: <PdfToExcel />,
    new: false,
  },
  {
    title: "Word to Pdf",
    description: ` Make DOC and DOCX files easy to read by converting them to
                  PDF.`,
    link: "/word-to-pdf",
    icon: <WordToPdf />,
    new: false,
  },
  {
    title: "PowerPoint to Pdf",
    description: `  Make PPT and PPTX slideshows easy to view by converting them
                  to PDF.`,
    link: "/powerpoint-to-pdf",
    icon: <PowerPointToPdf />,
    new: false,
  },
  {
    title: "Excel to Pdf",
    description: `   Make EXCEL spreadsheets easy to read by converting them to
                  PDF.`,
    link: "/excel-to-pdf",
    icon: <ExcelToPdf />,
    new: false,
  },
  {
    title: "Edit Pdf",
    description: `   Add text, images, shapes or freehand annotations to a PDF
                  document. Edit the size, font, and color of the added content.`,
    link: "/edit-pdf",
    icon: <EditPdf />,
    new: true,
  },
  {
    title: "Pdf to JPG",
    description: `  Convert each PDF page into a JPG or extract all images
                  contained in a PDF.`,
    link: "/pdf-to-jpg",
    icon: <PdfToJPG />,
    new: false,
  },
  {
    title: "JPG to PDF",
    description: `   Convert JPG images to PDF in seconds. Easily adjust
                  orientation and margins.`,
    link: "/jpg-to-pdf",
    icon: <JpgToPdf />,
    new: false,
  },
  {
    title: "Sign PDF",
    description: `   Sign yourself or request electronic signatures from others.`,
    link: "/sign-pdf",
    icon: <SingPdf />,
    new: false,
  },
  {
    title: "Watermark",
    description: `   Stamp an image or text over your PDF in seconds. Choose the
                  typography, transparency and position.`,
    icon: <Watermark />,
    link: "/watermark",
    new: false,
  },
  {
    title: "Rotate PDF",
    description: `    Rotate your PDFs the way you need them. You can even rotate
                  multiple PDFs at once!`,
    icon: <RotatePdf />,
    link: "rotate-pdf",
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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setDropdownOpen((open) => !open);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
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
              {tool.new && <div className='badge badge--new'>New!</div>}
              <Link to={tool.link} title={tool.title}>
                <div className='tools__item__icon'>{tool.icon}</div>
                <h3>{tool.title}</h3>
                <div className='tools__item__content'>
                  <p>{tool.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* second section in landing page */}
      <div className='premiumsection premiumsection--white'>
        <div className='premiumsection__container'>
          <div className='premiumsection__header'>
            <div className='title1'>Looking for another solution?</div>
          </div>
          <div className='premiumsection__body'>
            <div className='row justify-content-center'>
              <div className='col-md-4'>
                <div className='infounit infounit--fill'>
                  <div className='infounit__title'>iLovePDF Desktop</div>
                  <div className='infounit__body'>
                    Download the <a href='/desktop'>iLovePDF Desktop</a> App to
                    work with your favorite PDF tools on your Mac or Windows PC.
                    Get a lightweight PDF app that helps you process heavy PDF
                    tasks offline in seconds.{" "}
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='infounit infounit--fill'>
                  <div className='infounit__title'>iLovePDF Mobile</div>
                  <div className='infounit__body'>
                    Get the <a href='/mobile'>iLovePDF Mobile</a> App to manage
                    documents remotely or on the move. Turn your Android or
                    iPhone device into a PDF Editor &amp; Scanner to annotate,
                    sign, and share documents with ease.{" "}
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='infounit infounit--fill'>
                  <div className='infounit__title'>iLoveIMG</div>
                  <div className='infounit__body'>
                    <a href='https://www.iloveimg.com'>iLoveIMG</a> is the web
                    app that helps you modify images in bulk for free. Crop,
                    resize, compress, convert, and more. All the tools you need
                    to enhance your images in just a few clicks.{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* third section in landing page */}
      <div className='premiumsection premiumsection--grey-admin'>
        <div className='premiumsection__container'>
          <div className='premiumsection__header'>
            <div className='title1 text-center'>
              The PDF software trusted by millions of users
            </div>
            <div className='subtitle1 text-center'>
              iLovePDF is your number one web app for editing PDF with ease.
              Enjoy all the tools you need to work efficiently with your digital
              documents while keeping your data safe and secure.
            </div>
          </div>
          <div className='premiumsection__body'>
            <div className='new-premium__logos'>
              <img
                src='/iso.svg'
                className='tooltip tooltip--top'
                alt='ISO27001 certified'
                data-title='iLovePDF is ISO 27001 certified, adhering to international standards for information security through a structured Information Security Management System (ISMS). This ensures the protection of sensitive data with risk management, policies, and continuous improvement.'
              />
              <img
                src='/ssl.svg'
                className='tooltip tooltip--top'
                alt='Secure connection Https'
                data-title='Secure connection HTTPS. HTTPS ensures secure communication by encrypting data between you and iLovePDF safely uploading, processing and downloading your files with privacy and protection.'
              />
              <img
                src='/pdf.svg'
                alt='PDF Association'
                className='tooltip tooltip--top'
                data-title='iLovePDF is member of the PDF Association. The PDF Association is an industry group that promotes the development and adoption of open standards for PDF technology.'
                title='iLovePDF is member of the PDF Association. The PDF Association is an industry group that promotes the development and adoption of open standards for PDF technology.'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='premiumsection premiumsection--black '>
        <div className='premiumsection__container flex justi'>
          <div className='row align-items-center justify-content-center d-lg-flex'>
            <div className='col-lg-7 col-md-12 section__item'>
              <div className='title1'>Get more with Premium</div>
              <div className='subtitle1'>
                Complete projects faster with batch file processing, convert
                scanned documents with OCR and e-sign your business agreements.{" "}
              </div>
              <a href='/user/premium' className='btn btn--premium'>
                Get Premium
              </a>
            </div>
            <div className='col-lg-5 col-md-8 col-sm-8 mt-md-5 mt-sm-5 d-flex justify-content-lg-end section__item'>
              <PremiumPic />
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}

      <footer className='bg-gray-100 text-gray-800 text-sm'>
        <div className='max-w-7xl mx-auto px-4 py-12'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            <div>
              <h3 className='text-red-600 font-bold mb-4'>ILOVEPDF</h3>
              <ul className='space-y-2'>
                <li>
                  <a href='/' className='hover:underline'>
                    Home
                  </a>
                </li>
                <li>
                  <a href='/pricing' className='hover:underline'>
                    Pricing
                  </a>
                </li>
                <li>
                  <a href='/help/security' className='hover:underline'>
                    Security
                  </a>
                </li>
                <li>
                  <a href='/help/documentation' className='hover:underline'>
                    Tools
                  </a>
                </li>
                <li>
                  <a href='/help/faq' className='hover:underline'>
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-red-600 font-bold mb-4'>PRODUCT</h3>
              <ul className='space-y-2'>
                <li>
                  <a href='/desktop' className='hover:underline'>
                    iLovePDF Desktop
                  </a>
                </li>
                <li>
                  <a href='/mobile' className='hover:underline'>
                    iLovePDF Mobile
                  </a>
                </li>
                <li>
                  <a
                    href='https://developer.ilovepdf.com'
                    target='_blank'
                    className='hover:underline'
                  >
                    Developers
                  </a>
                </li>
                <li>
                  <a href='/features' className='hover:underline'>
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.iloveimg.com/'
                    target='_blank'
                    className='hover:underline'
                  >
                    iloveimg.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-red-600 font-bold mb-4'>SOLUTIONS</h3>
              <ul className='space-y-2'>
                <li>
                  <a href='/business' className='hover:underline'>
                    Business
                  </a>
                </li>
                <li>
                  <a href='/education' className='hover:underline'>
                    Education
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-red-600 font-bold mb-4'>COMPANY</h3>
              <ul className='space-y-2'>
                <li>
                  <a href='/help/about' className='hover:underline'>
                    Our Story
                  </a>
                </li>
                <li>
                  <a href='/blog' className='hover:underline'>
                    Blog
                  </a>
                </li>
                <li>
                  <a href='/press' className='hover:underline'>
                    Press
                  </a>
                </li>
                <li>
                  <a href='/help/legal' className='hover:underline'>
                    Legal & Privacy
                  </a>
                </li>
                <li>
                  <a href='/contact' className='hover:underline'>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className='flex flex-col-reverse md:flex-row justify-between items-center mt-10 gap-6'>
            <div className='flex space-x-4 order-1 md:order-2'>
              <a
                href='https://play.google.com/store/apps/details?id=com.ilovepdf.www'
                target='_blank'
              >
                <img
                  src='/google_play.svg'
                  alt='Google Play'
                  className='h-10'
                />
              </a>
              <a
                href='https://itunes.apple.com/es/app/ilovepdf/id1207332399?mt=8'
                target='_blank'
              >
                <img src='/app_store.svg' alt='App Store' className='h-10' />
              </a>
            </div>

            <div
              ref={dropdownRef}
              className='relative inline-block text-left order-2 md:order-1'
            >
              <button
                onClick={toggleDropdown}
                className='inline-flex items-center gap-2 px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50'
              >
                <svg
                  className='w-4 h-4'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4z'
                  />
                </svg>
                English
                <svg
                  className='w-4 h-4'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </button>
              {dropdownOpen && (
                <div className='absolute z-10 mt-2 w-40 bg-white shadow-lg border border-gray-200'>
                  <a href='#' className='block px-4 py-2 hover:bg-gray-100'>
                    English
                  </a>
                  <a href='#' className='block px-4 py-2 hover:bg-gray-100'>
                    Español
                  </a>
                  <a href='#' className='block px-4 py-2 hover:bg-gray-100'>
                    Français
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className='border-t border-gray-200 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-600'>
            <p>© iLovePDF 2025 ® - Your PDF Editor</p>
            <div className='flex space-x-4 mt-4 md:mt-0'>
              <a href='https://twitter.com/ilovepdf_com' target='_blank'>
                <i className='fab fa-x-twitter text-xl'></i>
              </a>
              <a
                href='https://www.facebook.com/ilovepdfcom-238648522858564/'
                target='_blank'
              >
                <i className='fab fa-facebook text-xl'></i>
              </a>
              <a
                href='https://www.linkedin.com/company/ilovepdf/'
                target='_blank'
              >
                <i className='fab fa-linkedin text-xl'></i>
              </a>
              <a
                href='https://www.instagram.com/ilovepdf_official/'
                target='_blank'
              >
                <i className='fab fa-instagram text-xl'></i>
              </a>
              <a
                href='https://www.tiktok.com/@ilovepdf_official'
                target='_blank'
              >
                <i className='fab fa-tiktok text-xl'></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
