import { Link, NavLink } from "react-router-dom";

import * as HoverCard from "@radix-ui/react-hover-card";
import DotDotMenu from "./DotDotMenu.jsx";
import { Logo } from "../svgassets/logo/logo.jsx";
import { useState, useEffect } from "react";
import BurgerMenu from "../components/BurgerMenu.jsx";
import { GoTriangleDown } from "react-icons/go";

const dropdownItems = {
  convert: {
    left: [
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
    right: [
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
  },
};

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

export default function Nav() {
  const [mobileNav, setMobileNav] = useState(false);
  const [allMenuMobileNav, setAllMenuMobileNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 850 && window.innerWidth <1000) {
        setAllMenuMobileNav(true);
        setMobileNav(true);
      } else if (window.innerWidth < 850) {
        setMobileNav(true);
      } else if (window.innerWidth > 1100) {
        setAllMenuMobileNav(false);
        setMobileNav(false)
      } else {
        setMobileNav(false);
        setAllMenuMobileNav(false);
      }
    };

    // Run on mount
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <nav className='w-full fixed top-0 shadow-md nav  px-8 py-4 flex items-center justify-between bg-white z-50 '>
      <div className='flex items-center gap-8'>
        {!mobileNav ? (
          <div className={`flex ${window.innerWidth<1100? 'gap-8':'gap-16'} items-center` }>
            <Link to='/'>
              <Logo />
            </Link>
            <NavLink
              to='/merge-pdf'
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 nav__font  hover:text-[#e5322d]"
                  : "text-[#161616] nav__font  hover:text-[#e5322d]"
              }
            >
              MERGE PDF
            </NavLink>
            <NavLink
              to='/split-pdf'
              className={({ isActive }) =>
                isActive
                  ? "text-[#e5322d]   nav__font  hover:text-[#e5322d]"
                  : "text-[#161616]   nav__font  hover:text-[#e5322d]"
              }
            >
              SPLIT PDF
            </NavLink>
            <NavLink
              to='/compress-pdf'
              className={({ isActive }) =>
                isActive
                  ? "text-red-500   nav__font  hover:text-[#e5322d] "
                  : "text-[#161616]   nav__font  hover:text-[#e5322d]"
              }
            >
              COMPRESS PDF
            </NavLink>

            {/* Convert PDF HoverCard */}
            <HoverCard.Root openDelay={0} closeDelay={100}>
              <HoverCard.Trigger asChild>
                <button className='flex items-center text-[#161616] gap-1 dropdown__text group'>
                  <span className='group-hover:text-[#e5322d] nav__font  group-data-[state=open]:text-[#e5322d]'>
                    CONVERT PDF
                  </span>
                  <GoTriangleDown className='w-4 h-4 group-hover:text-[#e5322d] group-data-[state=open]:text-[#e5322d]' />
                </button>
              </HoverCard.Trigger>

              <HoverCard.Content
                sideOffset={32}
                className='z-50 bg-white shadow-xl rounded-lg p-6 grid grid-cols-2 gap-6 w-[500px] dropdown'
              >
                <HoverCard.Arrow className='fill-white' />
                {/* Rest of your dropdown content remains the same */}
                <div>
                  <h4 className='font-bold text-[#707078] mb-2 group'>
                    CONVERT TO PDF
                  </h4>
                  <ul className='space-y-1'>
                    {dropdownItems.convert.left.map((item) => (
                      <li key={item.to}>
                        <NavLink
                          to={item.to}
                          className={({ isActive }) =>
                            isActive
                              ? "text-[#e5322d] hover:underline text-sm flex items-center gap-1"
                              : "text-gray-700 hover:underline text-sm flex items-center gap-1"
                          }
                        >
                          {item.img}
                          {item.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div>
                    <h4 className='font-bold text-[#707078] mb-2'>
                      CONVERT FROM PDF
                    </h4>
                    <ul className='space-y-1'>
                      {dropdownItems.convert.right.map((item) => (
                        <li key={item.to}>
                          <NavLink
                            to={item.to}
                            className={({ isActive }) =>
                              isActive
                                ? "text-[#e5322d] hover:underline text-sm flex items-center gap-1"
                                : "text-gray-700 hover:underline text-sm flex items-center gap-1"
                            }
                          >
                            {item.img} {item.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </HoverCard.Content>
            </HoverCard.Root>

            {/* All PDF Tools HoverCard */}
            <HoverCard.Root openDelay={0} closeDelay={100}>
              <HoverCard.Trigger asChild>
                <button className='flex items-center gap-1  text-[#161616] group'>
                  <span className='group-hover:text-[#e5322d] nav__font  group-data-[state=open]:text-[#e5322d]'>
                    ALL PDF TOOLS
                  </span>
                  <GoTriangleDown className='w-4 h-4 group-hover:text-[#e5322d] group-data-[state=open]:text-red-500' />
                </button>
              </HoverCard.Trigger>

              <HoverCard.Content
                sideOffset={32}
                className='z-50 bg-white shadow-xl rounded-xl p-6 grid grid-cols-6 gap-6 w-[1100px]'
              >
                <HoverCard.Arrow className='fill-white' />
                {Object.entries(allTools).map(([section, items]) => (
                  <div key={section}>
                    <h4 className='font-bold text-[#707078] mb-3 text-sm uppercase tracking-wide'>
                      {section}
                    </h4>
                    <ul className='space-y-3'>
                      {items.map((item) => (
                        <li key={item.to}>
                          <NavLink
                            to={item.to}
                            className={({ isActive }) =>
                              isActive
                                ? "text-[#e5322d] hover:underline text-sm flex items-center gap-1"
                                : "text-gray-700 hover:underline text-sm flex items-center gap-1"
                            }
                          >
                            {item.img} {item.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </HoverCard.Content>
            </HoverCard.Root>
          </div>
        ) : (
          <div className='flex gap-8'>
            <BurgerMenu />
            <Link to='/' className='flex items-center gap-1 font-bold text-xl'>
              <Logo />
            </Link>
          </div>
        )}
      </div>
      {allMenuMobileNav && (
        <div
          className={` w-full ml-8 ${
            allMenuMobileNav ? "flex" : " hidden"
          } items-center justify-start`}
        >
          <HoverCard.Root openDelay={0} closeDelay={100}>
            <HoverCard.Trigger asChild>
              <button className='flex items-center gap-1 text-[#161616] group'>
                <span className='group-hover:text-[#e5322d] nav__font  group-data-[state=open]:text-[#e5322d]'>
                  ALL PDF TOOLS
                </span>
                <GoTriangleDown
                  size={16}
                  className='group-hover:text-[#e5322d] group-data-[state=open]:text-red-500'
                />
              </button>
            </HoverCard.Trigger>
            <HoverCard.Content
              sideOffset={32}
              className='z-50 bg-white shadow-xl rounded-xl p-6 grid grid-cols-6 gap-6 w-[1100px]'
            >
              <HoverCard.Arrow className='fill-white' />
              {Object.entries(allTools).map(([section, items]) => (
                <div key={section}>
                  <h4 className='font-bold text-[#707078] mb-3 text-sm uppercase tracking-wide'>
                    {section}
                  </h4>
                  <ul className='space-y-3'>
                    {items.map((item) => (
                      <li key={item.to}>
                        <NavLink
                          to={item.to}
                          className={({ isActive }) =>
                            isActive
                              ? "text-[#e5322d] hover:underline text-sm flex items-center gap-1"
                              : "text-gray-700 hover:underline text-sm flex items-center gap-1"
                          }
                        >
                          {item.img} {item.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </HoverCard.Content>
          </HoverCard.Root>
        </div>
      )}
      <div className='flex items-center gap-4'>
        {!mobileNav && (
          <Link
            to='/login'
            className='text-[14px]  hover:text-[#e5322d]'
          >
            {" "}
            Login{" "}
          </Link>
        )}
        {!mobileNav && (
          <Link
            to='/signup'
            className='bg-[#e5322d] text-white pt-[8px] pb-[8px] pl-[12px] pr-[12px]  rounded-md  font-semibold hover:bg-[#b22a25]'
          >
            Sign up
          </Link>
        )}
        <button className='w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100'>
          <DotDotMenu />
        </button>
      </div>
    </nav>
  );
}
