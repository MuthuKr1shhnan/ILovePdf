import { useState } from "react";
import { HiOutlineXMark } from "react-icons/hi2";
import { PiDotsNineBold } from "react-icons/pi";

const MobileDotDotMenu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const productsHoverItems = [
    {
      title: "Other Products",
      items: [
        {
          img: <i className='ico ico--iloveimg text-xl text-red-600' />,
          name: "iLoveIMG",
          description: "Effortless image editing",
          href: "https://www.iloveimg.com",
        },
        {
          img: <i className='ico ico--ilovesign text-xl text-red-600' />,
          name: "iLoveSign",
          description: "e-Signing made simple",
          href: "https://www.ilovesign.com",
        },
        {
          img: <i className='ico ico--iloveapi text-xl text-red-600' />,
          name: "iLoveAPI",
          description: "Document automation for developers",
          href: "https://www.iloveapi.com",
        },
        {
          img: <i className='ico ico--integrations text-xl text-red-600' />,
          name: "Integrations",
          description: "Zapier, Make, Wordpress...",
          href: "https://www.iloveapi.com/integrations",
        },
      ],
    },
    {
      title: "Solutions",
      items: [
        {
          name: "Business",
          description:
            "Streamlined PDF editing and workflows for business teams",
          icon: <i className='ico ico--business text-xl text-red-600' />,
          href: "https://www.ilovepdf.com/business",
        },
      ],
    },
    {
      title: "Applications",
      items: [
        {
          name: "Desktop App",
          description: "Available for Mac and Windows",
          icon: <i className='ico ico--desktop text-xl text-red-600' />,
          href: "https://www.ilovepdf.com/desktop",
        },
        {
          name: "Mobile App",
          description: "Available for iOS and Android",
          icon: <i className='ico ico--mobile text-xl text-red-600' />,
          href: "https://www.ilovepdf.com/mobile",
        },
      ],
    },
    {
      title: "Resources",
      items: [
        {
          name: "Pricing",
          icon: <i className='ico ico--pricing text-xl text-gray-600' />,
          href: "https://www.ilovepdf.com/pricing",
        },
        {
          name: "Security",
          icon: <i className='ico ico--security text-xl text-gray-600' />,
          href: "https://www.ilovepdf.com/security",
        },
        {
          name: "Features",
          icon: <i className='ico ico--features text-xl text-gray-600' />,
          href: "https://www.ilovepdf.com/features",
        },
        {
          name: "About us",
          icon: <i className='ico ico--about text-xl text-gray-600' />,
          href: "https://www.ilovepdf.com/about",
        },
      ],
    },
    {
      title: "Support",
      items: [
        {
          name: "Help Center",
          icon: <i className='ico ico--chevron-l text-xl text-gray-600' />,
          href: "https://www.ilovepdf.com/help",
          description: "FAQs and assistance",
        },
        {
          name: "Language",
          icon: <i className='ico ico--chevron-l text-xl text-gray-600' />,
          href: "https://www.ilovepdf.com/language",
        },
      ],
    },
  ];

  return (
    <div className='lg:hidden'>
      {/* Mobile menu button */}
      <button
        type='button'
        className=' text-black focus:outline-none '
        onClick={() => setMobileMenuOpen(true)}
        aria-label='Open menu'
      >
        <div className='mt-2 '>
          <PiDotsNineBold size={36} />
        </div>
      </button>

      {/* Mobile menu overlay and panel */}
      {mobileMenuOpen && (
        <div className='fixed inset-0 z-50 overflow-hidden'>
          {/* Overlay */}

          {/* Panel */}
          <div className='absolute inset-y-0 right-0 mobilenav w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out'>
            <div className='flex flex-col h-full overflow-y-auto'>
              <div className='flex items-center justify-between px-6 pt-6'>
                <h2 className='text-xl font-bold text-gray-900'>
                  iLovePDF Menu
                </h2>
                <button
                  type='button'
                  className='-mr-2 rounded-md p-2 text-gray-700 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500'
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label='Close menu'
                >
                  <HiOutlineXMark className='h-6 w-6' aria-hidden='true' />
                </button>
              </div>

              <div className='mt-6 px-6 space-y-8 divide-y divide-gray-200/50 flex-grow'>
                {productsHoverItems.map((section, sectionIdx) => (
                  <div key={sectionIdx} className='pt-8 first:pt-0'>
                    {section.title && (
                      <h3 className='text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4'>
                        {section.title}
                      </h3>
                    )}
                    <ul className='space-y-4'>
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <a
                            href={item.href}
                            className='group flex items-start p-3 -mx-3 rounded-lg hover:bg-gray-50 transition-colors'
                          >
                            {item.icon || item.img ? (
                              <div className='flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-lg bg-gray-100 text-gray-600 group-hover:bg-red-50 group-hover:text-red-600 mr-4'>
                                {item.icon || item.img}
                              </div>
                            ) : null}
                            <div className='flex-1 min-w-0'>
                              <p className='text-sm font-medium text-gray-900 truncate'>
                                {item.name}
                              </p>
                              {item.description && (
                                <p className='text-xs text-gray-500 mt-1'>
                                  {item.description}
                                </p>
                              )}
                            </div>
                            <i className='ico ico--arrow-r text-gray-400 ml-2' />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className='px-6 py-8 border-t border-gray-200/50'>
                <a
                  href='https://www.ilovepdf.com'
                  className='w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700'
                >
                  Go to iLovePDF
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileDotDotMenu;
