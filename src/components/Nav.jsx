import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import * as HoverCard from "@radix-ui/react-hover-card";
import Products from "./Products";
import { Logo } from "../logo/logo";

const dropdownItems = {
  convert: {
    left: [
      { img: <i className="ico ico--jpgpdf"></i>, label: "JPG to PDF", to: "/jpg-to-pdf" },
      { img: <i className="ico ico--wordpdf"></i>, label: "WORD to PDF", to: "/word-to-pdf" },
      { img: <i className="ico ico--powerpointpdf"></i>, label: "POWERPOINT to PDF", to: "/ppt-to-pdf" },
      { img: <i className="ico ico--excelpdf"></i>, label: "EXCEL to PDF", to: "/excel-to-pdf" },
      { img: <i className="ico ico--htmlpdf"></i>, label: "HTML to PDF", to: "/html-to-pdf" },
    ],
    right: [
      { img: <i className="ico ico--pdfjpg"></i>, label: "PDF to JPG", to: "/pdf-to-jpg" },
      { img: <i className="ico ico--pdfword"></i>, label: "PDF to WORD", to: "/pdf-to-word" },
      { img: <i className="ico ico--pdfpowerpoint"></i>, label: "PDF to POWERPOINT", to: "/pdf-to-ppt" },
      { img: <i className="ico ico--pdfexcel"></i>, label: "PDF to EXCEL", to: "/pdf-to-excel" },
      { img: <i className="ico ico--pdfa"></i>, label: "PDF to PDF/A", to: "/pdf-to-pdfa" },
    ],
  },
};

const allTools = {
  "ORGANIZE PDF": [
    { img: <i className="ico ico--merge"></i>, label: "Merge PDF", to: "/merge-pdf" },
    { img: <i className="ico ico--split"></i>, label: "Split PDF", to: "/split-pdf" },
    { img: <i className="ico ico--remove"></i>, label: "Remove pages", to: "/remove-pages" },
    { img: <i className="ico ico--extract"></i>, label: "Extract pages", to: "/extract-pages" },
    { img: <i className="ico ico--organize"></i>, label: "Organize PDF", to: "/organize-pdf" },
    { img: <i className="ico ico--scan"></i>, label: "Scan to PDF", to: "/scan-to-pdf" },
  ],
  "OPTIMIZE PDF": [
    { img: <i className="ico ico--compress"></i>, label: "Compress PDF", to: "/compress-pdf" },
    { img: <i className="ico ico--repair"></i>, label: "Repair PDF", to: "/repair-pdf" },
    { img: <i className="ico ico--pdfocr"></i>, label: "OCR PDF", to: "/ocr-pdf" },
  ],
  "CONVERT TO PDF": [
    { img: <i className="ico ico--jpgpdf"></i>, label: "JPG to PDF", to: "/jpg-to-pdf" },
    { img: <i className="ico ico--wordpdf"></i>, label: "WORD to PDF", to: "/word-to-pdf" },
    { img: <i className="ico ico--powerpointpdf"></i>, label: "POWERPOINT to PDF", to: "/ppt-to-pdf" },
    { img: <i className="ico ico--excelpdf"></i>, label: "EXCEL to PDF", to: "/excel-to-pdf" },
    { img: <i className="ico ico--htmlpdf"></i>, label: "HTML to PDF", to: "/html-to-pdf" },
  ],
  "CONVERT FROM PDF": [
    { img: <i className="ico ico--pdfjpg"></i>, label: "PDF to JPG", to: "/pdf-to-jpg" },
    { img: <i className="ico ico--pdfword"></i>, label: "PDF to WORD", to: "/pdf-to-word" },
    { img: <i className="ico ico--pdfpowerpoint"></i>, label: "PDF to POWERPOINT", to: "/pdf-to-ppt" },
    { img: <i className="ico ico--pdfexcel"></i>, label: "PDF to EXCEL", to: "/pdf-to-excel" },
    { img: <i className="ico ico--pdfa"></i>, label: "PDF to PDF/A", to: "/pdf-to-pdfa" },
  ],
  "EDIT PDF": [
    { img: <i className="ico ico--rotate"></i>, label: "Rotate PDF", to: "/rotate-pdf" },
    { img: <i className="ico ico--pagenumber"></i>, label: "Add page numbers", to: "/add-page-numbers" },
    { img: <i className="ico ico--watermark"></i>, label: "Add watermark", to: "/add-watermark" },
    { img: <i className="ico ico--pdfcrop"></i>, label: "Crop PDF", to: "/crop-pdf" },
    { img: <i className="ico ico--editpdf"></i>, label: "Edit PDF", to: "/edit-pdf" },
  ],
  "PDF SECURITY": [
    { img: <i className="ico ico--unlock"></i>, label: "Unlock PDF", to: "/unlock-pdf" },
    { img: <i className="ico ico--protect"></i>, label: "Protect PDF", to: "/protect-pdf" },
    { img: <i className="ico ico--sign"></i>, label: "Sign PDF", to: "/sign-pdf" },
    { img: <i className="ico ico--redact"></i>, label: "Redact PDF", to: "/redact-pdf" },
    { img: <i className="ico ico--pdfcompare"></i>, label: "Compare PDF", to: "/compare-pdf" },
  ],
};

export default function Nav() {
  return (
    <nav className="w-full fixed top-0 shadow-md px-8 py-2 flex items-center justify-between bg-white z-50 ">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-1 font-bold text-xl">
          <Logo />
        </Link>

        <div className="flex gap-6">
          <Link to="/merge-pdf">MERGE PDF</Link>
          <Link to="/split-pdf">SPLIT PDF</Link>
          <Link to="/compress-pdf">COMPRESS PDF</Link>

          {/* Convert PDF HoverCard */}
          <HoverCard.Root openDelay={0} closeDelay={100}>
            <HoverCard.Trigger asChild>
              <button className="flex items-center gap-1">
                CONVERT PDF <ChevronDown className="w-4 h-4" />
              </button>
            </HoverCard.Trigger>

            <HoverCard.Content
              sideOffset={32}
              className="z-50 bg-white shadow-xl rounded-lg p-6 grid grid-cols-2 gap-6 w-[500px]"
            >
              <HoverCard.Arrow className="fill-white mt-auto" />
              <div>
                <h4 className="font-bold text-gray-700 mb-2">CONVERT TO PDF</h4>
                <ul className="space-y-1">
                  {dropdownItems.convert.left.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        className="hover:underline text-sm flex items-center gap-1"
                      >
                        {item.img}
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-700 mb-2">CONVERT FROM PDF</h4>
                <ul className="space-y-1">
                  {dropdownItems.convert.right.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        className="hover:underline text-sm flex items-center gap-1"
                      >
                        {item.img} {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </HoverCard.Content>
          </HoverCard.Root>

          {/* All PDF Tools HoverCard */}
          <HoverCard.Root openDelay={0} closeDelay={100}>
            <HoverCard.Trigger asChild>
              <button className="flex items-center gap-1 text-gray-700 font-semibold">
                ALL PDF TOOLS <ChevronDown className="w-4 h-4" />
              </button>
            </HoverCard.Trigger>

            <HoverCard.Content
              sideOffset={32}
              className="z-50 bg-white shadow-xl rounded-xl p-6 grid grid-cols-6 gap-6 w-[1100px]"
            >
              <HoverCard.Arrow className="fill-white" />
              {Object.entries(allTools).map(([section, items]) => (
                <div key={section}>
                  <h4 className="font-bold text-[#707078] mb-3 text-sm uppercase tracking-wide">
                    {section}
                  </h4>
                  <ul className="space-y-3">
                    {items.map((item) => (
                      <li key={item.to}>
                        <Link
                          to={item.to}
                          className="text-[12px] hover:underline flex items-center gap-1"
                        >
                          {item.img} {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </HoverCard.Content>
          </HoverCard.Root>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Link to="/login">Login</Link>
        <Link
          to="/signup"
          className="bg-red-500 text-white px-4 py-1 rounded-md font-semibold hover:bg-red-600"
        >
          Sign up
        </Link>
        <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100">
          <Products />
        </button>
      </div>
      
    </nav>
  );
}
