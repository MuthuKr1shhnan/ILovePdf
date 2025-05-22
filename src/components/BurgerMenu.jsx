import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";
import { Link } from "react-router-dom";
const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup on unmount (optional, good practice)
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  const allTools = {
    "ORGANIZE PDF": [
      {
        img: <i className='ico ico--merge'></i>,
        label: "Merge PDF",
        to: "/merge-pdf",
      },
      {
        img: <i className='ico ico--split'></i>,
        label: "Split PDF",
        to: "/split-pdf",
      },
      {
        img: <i className='ico ico--remove'></i>,
        label: "Remove pages",
        to: "/remove-pages",
      },
      {
        img: <i className='ico ico--extract'></i>,
        label: "Extract pages",
        to: "/extract-pages",
      },
      {
        img: <i className='ico ico--organize'></i>,
        label: "Organize PDF",
        to: "/organize-pdf",
      },
      {
        img: <i className='ico ico--scan'></i>,
        label: "Scan to PDF",
        to: "/scan-to-pdf",
      },
    ],
    "OPTIMIZE PDF": [
      {
        img: <i className='ico ico--compress'></i>,
        label: "Compress PDF",
        to: "/compress-pdf",
      },
      {
        img: <i className='ico ico--repair'></i>,
        label: "Repair PDF",
        to: "/repair-pdf",
      },
      {
        img: <i className='ico ico--pdfocr'></i>,
        label: "OCR PDF",
        to: "/ocr-pdf",
      },
    ],
    "CONVERT TO PDF": [
      {
        img: <i className='ico ico--jpgpdf'></i>,
        label: "JPG to PDF",
        to: "/jpg-to-pdf",
      },
      {
        img: <i className='ico ico--wordpdf'></i>,
        label: "WORD to PDF",
        to: "/word-to-pdf",
      },
      {
        img: <i className='ico ico--powerpointpdf'></i>,
        label: "POWERPOINT to PDF",
        to: "/ppt-to-pdf",
      },
      {
        img: <i className='ico ico--excelpdf'></i>,
        label: "EXCEL to PDF",
        to: "/excel-to-pdf",
      },
      {
        img: <i className='ico ico--htmlpdf'></i>,
        label: "HTML to PDF",
        to: "/html-to-pdf",
      },
    ],
    "CONVERT FROM PDF": [
      {
        img: <i className='ico ico--pdfjpg'></i>,
        label: "PDF to JPG",
        to: "/pdf-to-jpg",
      },
      {
        img: <i className='ico ico--pdfword'></i>,
        label: "PDF to WORD",
        to: "/pdf-to-word",
      },
      {
        img: <i className='ico ico--pdfpowerpoint'></i>,
        label: "PDF to POWERPOINT",
        to: "/pdf-to-ppt",
      },
      {
        img: <i className='ico ico--pdfexcel'></i>,
        label: "PDF to EXCEL",
        to: "/pdf-to-excel",
      },
      {
        img: <i className='ico ico--pdfa'></i>,
        label: "PDF to PDF/A",
        to: "/pdf-to-pdfa",
      },
    ],
    "EDIT PDF": [
      {
        img: <i className='ico ico--rotate'></i>,
        label: "Rotate PDF",
        to: "/rotate-pdf",
      },
      {
        img: <i className='ico ico--pagenumber'></i>,
        label: "Add page numbers",
        to: "/add-page-numbers",
      },
      {
        img: <i className='ico ico--watermark'></i>,
        label: "Add watermark",
        to: "/add-watermark",
      },
      {
        img: <i className='ico ico--pdfcrop'></i>,
        label: "Crop PDF",
        to: "/crop-pdf",
      },
      {
        img: <i className='ico ico--editpdf'></i>,
        label: "Edit PDF",
        to: "/edit-pdf",
      },
    ],
    "PDF SECURITY": [
      {
        img: <i className='ico ico--unlock'></i>,
        label: "Unlock PDF",
        to: "/unlock-pdf",
      },
      {
        img: <i className='ico ico--protect'></i>,
        label: "Protect PDF",
        to: "/protect-pdf",
      },
      {
        img: <i className='ico ico--sign'></i>,
        label: "Sign PDF",
        to: "/sign-pdf",
      },
      {
        img: <i className='ico ico--redact'></i>,
        label: "Redact PDF",
        to: "/redact-pdf",
      },
      {
        img: <i className='ico ico--pdfcompare'></i>,
        label: "Compare PDF",
        to: "/compare-pdf",
      },
    ],
  };

  return (
    <>
      <button onClick={() => setOpen(!open)} className='p-2 text-gray-800 '>
        <Menu size={32} />
      </button>

      <div
        className={`fixed top-0 right-0 w-full h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className='pr-6 pl-6 overflow-y-auto h-full flex overflow-x-hidden flex-col'>
          <div
            className=' bg-white h-auto p-4 flex w-full justify-end  sticky top-0 right-5'
            onClick={() => setOpen(false)}
          >
            <X size={32} />
          </div>
          {Object.entries(allTools).map(([section, items]) => (
            <div key={section} className='mb-6'>
              <h4 className='font-bold text-[#707078] mb-3 text-sm uppercase tracking-wide'>
                {section}
              </h4>
              <ul className='space-y-3'>
                {items.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className='text-[12px] hover:underline flex items-center gap-1'
                    >
                      {item.img} {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
