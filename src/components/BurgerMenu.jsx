import { useState } from 'react';
import { X, Menu } from 'lucide-react';

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    {
      title: "ORGANIZE PDF",
      color: "text-red-600",
      items: ["Merge PDF", "Split PDF", "Remove pages", "Extract pages", "Organize PDF", "Scan to PDF"],
    },
    {
      title: "OPTIMIZE PDF",
      color: "text-green-600",
      items: ["Compress PDF", "Repair PDF", "OCR PDF"],
    },
    {
      title: "CONVERT TO PDF",
      color: "text-blue-600",
      items: ["JPG to PDF", "WORD to PDF", "POWERPOINT to PDF", "EXCEL to PDF", "HTML to PDF"],
    },
  ];

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-white bg-gray-800 rounded-md focus:outline-none"
      >
        {open ? <X /> : <Menu />}
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-40" onClick={() => setOpen(false)}></div>
      )}

      <div
        className={`fixed top-0 right-0 w-full h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 overflow-y-auto h-full">
          {navItems.map((section, index) => (
            <div key={index} className="mb-6">
              <h4 className={`font-semibold mb-3 ${section.color}`}>{section.title}</h4>
              <ul className="space-y-2">
                {section.items.map((item, idx) => (
                  <li key={idx} className="text-sm text-gray-800 hover:underline cursor-pointer">
                    {item}
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
