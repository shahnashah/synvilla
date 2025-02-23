
// import React, { useState } from "react";
// import { FaUser, FaShoppingCart } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";

// const menuItems = [
//   {
//     name: "New Arrivals",
//     link: "/new-arrivals",
//     subMenu: [
//       { name: "New Decor", link: "/decor" },
//       { name: " Lighting", link: "/lighting" },
//       { name: " Furniture", link: "/furniture" },
//       { name: "Kitchen", link: "/Kitchen" },
//       { name: "Wall-decor", link: "/Wall-decor" },
//       { name: "Garden-decor", link: "/Garden-decor" },
//     ],
//   },
//   {
//     name: "Decor",
//     link: "/decor",
//     subMenu: [
//       { name: "Wall Art", link: "/wall-art" },
//       { name: "Table Decor", link: "/table-decor" },
//     ],
//   },

  
//   { name: "Kitchen & Dining", link: "/kitchen-dining", subMenu: [] },
//   { name: "Lighting", link: "/lighting", subMenu: [] },
//   { name: "Wall Decor", link: "/wall-decor", subMenu: [] },
//   { name: "Bath Decor", link: "/bath-decor", subMenu: [] },
//   { name: "Furniture", link: "/furniture", subMenu: [] },
// ];

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(null);
//   const navigate = useNavigate();

//   return (
//     <>
//       {/* Top Quote Strip */}
//       <div className="bg-[#D2B48C] flex justify-center text-[#5A3E36] font-bold shadow-md ">
//         🏡 "A home without furniture is like a body without a soul – make it warm, make it yours!" 🛋️✨
//       </div>

//       {/* Navbar */}
//       <nav className="bg-white shadow-md p-4">
//         <div className="container mx-auto flex justify-between items-center relative">
//           {/* Logo */}
//           <Link to="/" className="text-xl font-bold text-gray-700">
//             <h1 className="text-4xl font-extrabold text-[#5A3E36] tracking-wide">
//               Syn<span className="text-[#A0522D]">Villa</span>
//             </h1>
//           </Link>

//           {/* Navigation Menu */}
//           <ul className="flex space-x-6">
//             {menuItems.map((item, index) => (
//               <li
//                 key={index}
//                 className="relative group"
//                 onMouseEnter={() => setIsOpen(index)}
//                 onMouseLeave={() => setIsOpen(null)}
//               >
//                 <Link to={item.link} className="text-gray-700 hover:text-[#A0522D] font-semibold">
//                   {item.name}
//                 </Link>
//                 {item.subMenu.length > 0 && isOpen === index && (
//                   <div className="absolute top-full left-0 bg-white shadow-md p-2 w-48">
//                     {item.subMenu.map((sub, subIndex) => (
//                       <Link
//                         key={subIndex}
//                         to={sub.link}
//                         className="block px-4 py-2 text-gray-600 hover:text-[#A0522D] hover:bg-gray-100"
//                       >
//                         {sub.name}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>

//           {/* Search Bar */}
//           <div className="relative w-64">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="border border-gray-300 w-full rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#A0522D]"
//             />
//           </div>

//           {/* Icons Section */}
//           <div className="flex items-center space-x-6">
//             {/* User Icon with Dropdown */}
//             <div className="relative">
//               <button
//                 onClick={() => setIsOpen(isOpen === "user" ? null : "user")}
//                 className="text-gray-600 hover:text-[#A0522D]"
//               >
//                 <FaUser size={24} />
//               </button>
//               {isOpen === "user" && (
//                 <div className="absolute right-0 mt-2 bg-white shadow-md rounded-lg w-32">
//                   <button
//                     onClick={() => navigate("/login")}
//                     className="block px-4 py-2 text-gray-700 hover:bg-gray-200 w-full text-left"
//                   >
//                     Login
//                   </button>
//                 </div>
//               )}
//             </div>

//             {/* Cart Icon */}
//             <button
//               onClick={() => navigate("/cart")}
//               className="text-gray-600 hover:text-[#A0522D]"
//             >
//               <FaShoppingCart size={24} />
//             </button>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Header;


import React, { useState } from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const menuItems = [
  {
    name: "New Arrivals",
    link: "/new-arrivals",
    subMenu: [
      {
        heading: "Trending Styles",
        items: ["Modern Decor", "Minimalist Lighting", "Luxury Furniture"]
      },
      {
        heading: "New Collections",
        items: ["Seasonal Decor", "Contemporary Lights", "Designer Chairs"]
      }
    ]
  },
  {
    name: "Decor",
    link: "/decor",
    subMenu: [
      {
        heading: "Wall Decor",
        items: ["Wall Art", "Canvas Prints", "Wall Hangings"]
      },
      {
        heading: "Table Decor",
        items: ["Vases & Jars", "Showpieces", "Photo Frames"]
      }
    ]
  },
  {
    name: "Kitchen & Dining",
    link: "/kitchen-dining",
    subMenu: [
      {
        heading: "Dinnerware",
        items: ["Plates", "Bowls", "Glass Sets"]
      },
      {
        heading: "Kitchen Storage",
        items: ["Canisters", "Spice Racks", "Storage Jars"]
      }
    ]
  },
  {
    name: "Lighting",
    link: "/lighting",
    subMenu: [
      {
        heading: "Ceiling Lights",
        items: ["Chandeliers", "Pendant Lights", "Flush Mounts"]
      },
      {
        heading: "Wall Lights",
        items: ["Sconces", "Display Lights", "Vanity Lights"]
      },
      {
        heading: "Lamps",
        items: ["Table Lamps", "Floor Lamps", "Desk Lamps"]
      }
    ]
  },
  {
    name: "Furniture",
    link: "/furniture",
    subMenu: [
      {
        heading: "Living Room",
        items: ["Sofas", "Coffee Tables", "TV Units"]
      },
      {
        heading: "Bedroom",
        items: ["Beds", "Wardrobes", "Dressing Tables"]
      }
    ]
  }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(null);
  const navigate = useNavigate();

  return (
    <>
      {/* Top Quote Strip */}
      <div className="bg-[#D2B48C] flex justify-center text-[#5A3E36] font-bold shadow-md p-2">
        🏡 "A home without furniture is like a body without a soul – make it warm, make it yours!" 🛋️✨
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center relative">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-gray-700">
            <h1 className="text-4xl font-extrabold text-[#5A3E36] tracking-wide">
              Syn<span className="text-[#A0522D]">Villa</span>
            </h1>
          </Link>

          {/* Navigation Menu */}
          <ul className="flex space-x-6">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="relative group"
                onMouseEnter={() => setIsOpen(index)}
                onMouseLeave={() => setIsOpen(null)}
              >
                <Link to={item.link} className="text-gray-700 hover:text-[#A0522D] font-semibold">
                  {item.name}
                </Link>
                {item.subMenu.length > 0 && isOpen === index && (
                  <div className="absolute top-10 left-0 bg-white shadow-md p-4 grid grid-cols-2 gap-4 w-80">
                    {item.subMenu.map((sub, subIndex) => (
                      <div key={subIndex}>
                        <h3 className="font-bold text-[#A0522D] mb-2">{sub.heading}</h3>
                        {sub.items.map((subItem, i) => (
                          <Link key={i} to="/" className="block text-gray-600 hover:text-[#A0522D]">
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Search Bar */}
          <div className="relative w-64">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 w-full rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#A0522D]"
            />
          </div>

          {/* Icons Section */}
          <div className="flex items-center space-x-6">
            {/* User Icon with Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsOpen(isOpen === "user" ? null : "user")}
                className="text-gray-600 hover:text-[#A0522D]"
              >
                <FaUser size={24} />
              </button>
              {isOpen === "user" && (
                <div className="absolute right-0 mt-2 bg-white shadow-md rounded-lg w-32">
                  <button
                    onClick={() => navigate("/login")}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200 w-full text-left"
                  >
                    Login
                  </button>
                </div>
              )}
            </div>

            {/* Cart Icon */}
            <button
              onClick={() => navigate("/cart")}
              className="text-gray-600 hover:text-[#A0522D]"
            >
              <FaShoppingCart size={24} />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
