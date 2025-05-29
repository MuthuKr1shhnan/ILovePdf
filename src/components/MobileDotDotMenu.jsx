import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const MobileDotMenu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuSections = [
    {
      title: "OTHER PRODUCTS",
      items: [
        {
          icon: <i className="ico ico--iloveimg text-red-600 text-xl" />,
          title: "iLoveIMG",
          description: "Effortless image editing",
          href: "https://www.iloveimg.com"
        },
        {
          icon: <i className="ico ico--ilovesign text-red-600 text-xl" />,
          title: "iLoveSign",
          description: "e-Signing made simple",
          href: "https://www.ilovesign.com"
        },
        {
          icon: <i className="ico ico--iloveapi text-red-600 text-xl" />,
          title: "iLoveAPI",
          description: "Document automation for developers",
          href: "https://www.iloveapi.com"
        },
        {
          icon: <i className="ico ico--integrations text-red-600 text-xl" />,
          title: "Integrations",
          description: "Zapier, Make, Wordpress...",
          href: "https://www.iloveapi.com/integrations"
        }
      ]
    },
    {
      title: "SOLUTIONS",
      items: [
        {
          icon: <i className="ico ico--business text-red-600 text-xl" />,
          title: "Business",
          description: "Streamlined PDF editing and workflows for business teams",
          href: "https://www.ilovepdf.com/business"
        }
      ]
    },
    {
      title: "APPLICATIONS",
      items: [
        {
          icon: <i className="ico ico--desktop text-red-600 text-xl" />,
          title: "Desktop App",
          description: "Available for Mac and Windows",
          href: "https://www.ilovepdf.com/desktop"
        },
        {
          icon: <i className="ico ico--mobile text-red-600 text-xl" />,
          title: "Mobile App",
          description: "Available for iOS and Android",
          href: "https://www.ilovepdf.com/mobile"
        }
      ]
    },
    {
      items: [
        {
          icon: <i className="ico ico--pricing text-gray-500 text-xl" />,
          title: "Pricing",
          href: "https://www.ilovepdf.com/pricing"
        },
        {
          icon: <i className="ico ico--security text-gray-500 text-xl" />,
          title: "Security",
          href: "https://www.ilovepdf.com/security"
        },
        {
          icon: <i className="ico ico--features text-gray-500 text-xl" />,
          title: "Features",
          href: "https://www.ilovepdf.com/features"
        },
        {
          icon: <i className="ico ico--about text-gray-500 text-xl" />,
          title: "About us",
          href: "https://www.ilovepdf.com/about"
        }
      ]
    },
    {
      items: [
        {
          icon: <i className="ico ico--help text-gray-500 text-xl" />,
          title: "Help",
          href: "https://www.ilovepdf.com/help"
        },
        {
          icon: <i className="ico ico--language text-gray-500 text-xl" />,
          title: "Language",
          href: "https://www.ilovepdf.com/language"
        }
      ]
    }
  ];

  return (
    <div className="lg:hidden">
      {/* 3-dot menu button */}
      <button
        onClick={() => setMobileMenuOpen(true)}
        className="p-2 -mr-2 rounded-md hover:bg-gray-100 focus:outline-none"
        aria-label="Open menu"
      >
        <div className="grid grid-cols-3 gap-1">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-gray-700 rounded-full" />
          ))}
        </div>
      </button>

      {/* Mobile menu with transitions */}
      <Transition show={mobileMenuOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-50 overflow-y-auto" onClose={setMobileMenuOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black/30" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="ease-in duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                <Dialog.Title className="text-lg font-semibold text-gray-900">
                  Menu
                </Dialog.Title>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 -mr-2 rounded-md text-gray-700 hover:text-red-600 focus:outline-none"
                  aria-label="Close menu"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>

              {/* Menu content */}
              <div className="px-6 py-4 overflow-y-auto h-[calc(100vh-64px)]">
                {menuSections.map((section, sectionIdx) => (
                  <div key={sectionIdx} className={sectionIdx > 0 ? "mt-8" : ""}>
                    {section.title && (
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#707078] mb-3">
                        {section.title}
                      </h3>
                    )}
                    <ul className="space-y-2">
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <a
                            href={item.href}
                            className="flex items-center p-3 -mx-3 rounded-lg hover:bg-gray-50 group"
                          >
                            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center mr-3">
                              {item.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 group-hover:text-red-600">
                                {item.title}
                              </p>
                              {item.description && (
                                <p className="text-xs text-gray-500 mt-1">
                                  {item.description}
                                </p>
                              )}
                            </div>
                            <i className="ico ico--arrow-r text-gray-400 ml-2" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  );
};

export default MobileDotMenu;