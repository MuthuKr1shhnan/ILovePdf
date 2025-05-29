import * as HoverCard from "@radix-ui/react-hover-card";
import MobileDotDotMenu from "./MobileDotDotMenu";

const productsHoverItems = [
  {
    title: "Other Products",
    items: [
      {
        img: (
          <div className='navbar__item__icon'>
            <i className='ico ico--iloveimg' />
          </div>
        ),
        name: "iLoveIMG",
        description: "Effortless image editing",
      },
      {
        img: (
          <div className='navbar__item__icon'>
            <i className='ico ico--ilovesign' />
          </div>
        ),
        name: "iLoveSign",
        description: "e-Signing made simple",
      },
      {
        img: (
          <div className='navbar__item__icon'>
            <i className='ico ico--iloveapi'></i>
          </div>
        ),
        name: "iLoveAPI",
        description: "Document automation for developers",
      },
      {
        name: (
          <a
            href='https://www.iloveapi.com/integrations'
            title='Integrations'
            class='navbar__item navbar__item--sm navbar__item--sub'
          >
            {" "}
            <div className='navbar__item__icon'>
              <i className='ico ico--integrations'></i>
            </div>{" "}
            <div className='navbar__item__content'>
              {" "}
              <div className='navbar__item__title'>Integrations</div>
              <div className='navbar__item__description'>
                Zapier, Make, Wordpress...
              </div>{" "}
            </div>{" "}
            <div className='navbar__item__go'>
              <i className='ico ico--arrow-r'></i>
            </div>
          </a>
        ),
      },
    ],
  },
  {
    title: "Solutions",
    items: [
      {
        name: (
          <div className='flex gap-3 navbar__item navbar__item--lg'>
            <div className='navbar__item__icon  '>
              <i className='ico ico--business'></i>
            </div>{" "}
            <div className='navbar__item__content'>
              {" "}
              <div className='navbar__item__title'>Business</div>
              <div className='navbar__item__description'>
                Streamlined PDF editing and workflows for business teams
              </div>{" "}
            </div>{" "}
            <div className='navbar__item__go'>
              <i className='ico ico--arrow-r'></i>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    title: "Applications",
    items: [
      {
        name: (
          <li>
            <div className='flex w-[400px] items-center justify-around rounded-xl bg-[#fafafb] p-4 shadow-sm'>
              <a
                href='https://www.ilovepdf.com/desktop'
                title='Desktop App'
                className='w-full flex items-center justify-between'
              >
                <div className='flex  items-center gap-3'>
                  <div className='text-red-600 mr-4'>
                    <i className='ico ico--desktop ' />
                  </div>
                  <div>
                    <div className='text-sm font-medium text-start text-black'>
                      Desktop App
                    </div>
                    <div className='text-xs text-gray-500'>
                      Available for Mac and Windows
                    </div>
                  </div>
                </div>
                <div>
                  <i className='ico ico--arrow-r text-gray-400' />
                </div>
              </a>
            </div>
          </li>
        ),
      },
      {
        name: (
          <li>
            <div className='flex w-[400px] items-center justify-around rounded-xl bg-[#fafafb] p-4 shadow-sm'>
              <a
                href='https://www.ilovepdf.com/mobile'
                title='Mobile App'
                className='w-full flex items-center justify-between'
              >
                <div className='flex items-center gap-3'>
                  <div className='text-red-600 mr-4'>
                    <i className='ico ico--mobile' />
                  </div>
                  <div>
                    <div className='text-sm font-medium text-black text-start'>
                      Mobile App
                    </div>
                    <div className='text-xs text-gray-500'>
                      Available for iOS and Android
                    </div>
                  </div>
                </div>
                <div>
                  <i className='ico ico--arrow-r text-gray-400' />
                </div>
              </a>
            </div>
          </li>
        ),
      },
    ],
  },
  {
    title: "",
    items: [
      { img: <i className='ico ico--pricing'></i>, name: "Pricing" },
      { img: <i className='ico ico--security'></i>, name: "Security" },
      { img: <i className='ico ico--features '></i>, name: "Features" },
      { img: <i className='ico ico--about'></i>, name: "About us" },
    ],
  },

  {
    title: "",
    items: [
      {
        img: <i className='ico ico--chevron-l'></i>,
        name: "Help",
        hoverCardContent: (
          <div className='text-sm text-gray-700 p-3 w-60'>
            <p className='font-semibold text-black mb-1'>Need Help?</p>
            <p className='text-xs text-gray-600 mb-2'>
              Visit our support center for FAQs and assistance.
            </p>
            <a
              href='https://www.ilovepdf.com/help'
              className='text-red-600 text-xs underline hover:text-red-800 transition'
            >
              Go to Support Center
            </a>
          </div>
        ),
      },
      {
        img: <i className='ico ico--chevron-l'></i>,
        name: "Language",
      },
    ],
  },
];

export default function Products() {
  return (
    <div className=''>
      <div className='hidden md:block'>
        <HoverCard.Root openDelay={0} closeDelay={100}>
          <HoverCard.Trigger asChild>
            <div className='flex items-center gap-1 hover:text-red-600 transition-colors'>
              {" "}
             <div className='grid grid-cols-3 gap-1 '>
                {[...Array(9)].map((_, i) => (
                  <div key={i} className='w-1.5 h-1.5 bg-black rounded-full' />
                ))}
              </div>
            </div>
          </HoverCard.Trigger>
          <HoverCard.Content
            sideOffset={32}
            className='z-50 bg-white shadow-lg rounded-md p-6 w-[1000px] mr-5 flex gap-8'
          >
            <HoverCard.Arrow className='fill-white' />
            {/* Column 1: Other Products */}
            <div className='space-y-4 pr-8 border-r border-gray-200'>
              <h4 className='font-bold text-[#707078] text-xs uppercase tracking-wider'>
                OTHER PRODUCTS
              </h4>
              <ul className='space-y-4 '>
                {productsHoverItems[0].items.map((item, index) => (
                  <li key={index} className='flex gap-3 items-start'>
                    <div className='flex justify-center items-center gap-5'>
                      {item.img && (
                        <div className='w-8 h-8 shrink-0 flex items-center justify-center'>
                          {item.img}
                        </div>
                      )}
                      <div className='flex flex-col  items-start'>
                        <span className='font-semibold text-[16px] text-gray-800 group-hover:text-red-600 transition-colors'>
                          {item.name}
                        </span>
                        {item.description && (
                          <p className='text-[12px] text-gray-500'>
                            {item.description}{" "}
                          </p>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* Column 2: Solutions + Applications */}
            <div className='space-y-8 pr-8 border-r border-gray-200'>
              <div>
                <h4 className='font-bold text-[#707078] text-xs uppercase tracking-wider'>
                  SOLUTIONS
                </h4>
                <ul className='space-y-4 mt-2'>
                  {productsHoverItems[1].items.map((item, index) => (
                    <li key={index} className='flex '>
                      {/* <div className='w-8 h-8 bg-black rounded-md shrink-0' /> */}
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className='font-bold text-[#707078] text-xs uppercase tracking-wider'>
                  APPLICATIONS
                </h4>
                <ul className='space-y-4 mt-2'>
                  {productsHoverItems[2].items.map((item, index) => (
                    <li key={index} className='flex gap-3 items-start'>
                      <div>
                        <span className='font-semibold text-xs text-gray-800 group-hover:text-red-600 transition-colors'>
                          {item.name}
                        </span>
                        <p className='text-xs text-gray-500'>
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Column 3: Extra Links */}
            <div className='space-y-8'>
              <div>
                <ul className='space-y-3'>
                  {productsHoverItems[3].items.map((item, index) => (
                    <li key={index}>
                      <span className='text-xs hover:text-red-600 transition-colors cursor-pointer'>
                        <div className='w-full flex items-center'>
                          {item.img} {item.name}
                        </div>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='w-full h-[1px] bg-[#e5e7eb]' />
              <div className='mt-[70px] flex flex-col'>
                <ul className='space-y-3'>
                  <ul className='space-y-3'>
                    {productsHoverItems[4].items.map((item, index) => {
                      if (item.name === "Help") {
                        return (
                          <HoverCard.Root
                            key={index}
                            openDelay={0}
                            closeDelay={100}
                          >
                            <HoverCard.Trigger asChild>
                              <li className='text-xs hover:text-red-600 transition-colors cursor-pointer flex items-center '>
                                {item.img} {item.name}
                              </li>
                            </HoverCard.Trigger>
                            <HoverCard.Content
                              sideOffset={30}
                              side='left'
                              className='z-50 rounded-md bg-white shadow-md p-4'
                            >
                              {item.hoverCardContent}
                            </HoverCard.Content>
                          </HoverCard.Root>
                        );
                      }
                      return (
                        <li key={index}>
                          <span className='text-xs hover:text-red-600 transition-colors cursor-pointer flex items-center '>
                            {item.img} {item.name}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </ul>
              </div>
            </div>
          </HoverCard.Content>
        </HoverCard.Root>
      </div>
      <div className='block md:hidden'>
        <MobileDotDotMenu />
      </div>
    </div>
  );
}
