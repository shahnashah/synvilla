import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import bgImage from "../assets/home-bg.jpg";
import sofa from "../assets/coffeetable.jpg";
import chair from "../assets/blur.jpg";
import table from "../assets/woodentable.jpg";
import homeVisitImg from "../assets/homevisit.webp";
import touchFeelImg from "../assets/feel.webp";
import consultationImg from "../assets/free.webp";
import bannerImage from "../assets/bannerone.webp";
import livingAreaImg from "../assets/living.jpg";
import bedroomImg from "../assets/bedroom1.jpg";
import newArrivalImg from "../assets/newArrival.jpg";
import gardenImg from "../assets/bedroom.jpg";

import swiper1 from "../assets/swiper1.jpg"
import swiper2 from "../assets/swiper2.jpg"
import swiper3 from "../assets/swiper3.jpg"
import swiper4 from "../assets/swiper4.jpg"
import swiper5 from "../assets/swiper5.jpg"
import swiper6 from "../assets/swiper6.jpg"
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import samll1 from "../assets/small1.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import clock from "../assets/clocks.jpg";
import candle from "../assets/candle-stands.jpg";
import incense from  "../assets/incense-holders.jpg";
import bookends from "../assets/bookends.jpg" ;
import photo from "../assets/photo-frames.jpg";
import centrepiece from "../assets/centerpiece.jpg" ;
import plates from "../assets/decorative-plates.jpg" ;

import Footer from "../components/Footer";

const slides = [
  { img: swiper1, title: "BIRD FIGURINES" },
  { img: swiper2, title: "CAST IRON COLLECTION" },
  { img: swiper3, title: "VASES" },
  { img: swiper4, title: "PHOTO FRAMES" },
  { img: swiper5, title: "ANIMAL FIGURINES" },
  { img: swiper6, title: "DECORATIVE PLATES" },
  { img: swiper1, title: "BIRD FIGURINES" },
  { img: swiper2, title: "CAST IRON COLLECTION" },
  { img: swiper3, title: "VASES" },
  { img: swiper4, title: "PHOTO FRAMES" },
];

const slide = [
  {
    img: img1,
    
  },
  {
    img: img2,
    
  },
  {
    img: img3,
   
  },
  {
    img: samll1,
   
  },
 
];

const categories = [
  { name: "Clocks", img: clock },
  { name: "Candle Stands", img: candle },
  { name: "Incense Holders", img: incense },
  { name: "Bookends", img: bookends },
  { name: "Photo Frames", img:photo  },
  { name: "Centrepiece Decorative Bowls", img:centrepiece },
  { name: "Decorative Plates", img:plates },
];



const HeroSection = () => {
  const bgRef = useRef(null);
  const textRef = useRef(null);
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    gsap.fromTo(
      bgRef.current,
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 2, ease: "power2.out" }
    );
    gsap.fromTo(
      textRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power3.out", delay: 1 }
    );
  }, []);

  const addToCart = (name, description) => {
    setCart([...cart, { name, description }]);
    setSelectedProduct({ name, description });
  };

  return (
    <div className="relative w-full flex flex-col items-center overflow-hidden bg-gray-100">

      {/* Hero Section */}
      <div className="relative h-[80vh] w-full flex flex-col justify-center items-center overflow-hidden">
  {/* Background Image with Opacity */}
  <div
    ref={bgRef}
    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
    style={{ backgroundImage: `url(${bgImage}) `}}
  >
    {/* Opacity Overlay */}
    <div className="absolute inset-0 bg-black/50">
    </div>
  </div>

  {/* Text Content */}
  <div ref={textRef} className="relative z-10 text-center max-w-2xl p-5">
    <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
      Elevate Your Living Space 🏡
    </h1>
    
    <p className="text-lg md:text-xl mt-4 text-white drop-shadow-lg tracking-wide italic">
      Discover the perfect blend of <span className="font-bold">comfort</span> and <span className="font-bold">elegance</span> with our exclusive furniture collection.
    </p>

    <button
      onClick={() => navigate("/new-arrival")}
      className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-black hover:bg-yellow-500 transition-all duration-300 rounded-lg shadow-lg"
    >
      Explore Now
    </button>
  </div>
</div>

<div className="flex justify-center gap-6 py-8">
      {categories.map((category, index) => (
        <div
          key={index}
          className="flex flex-col items-center cursor-pointer"
          onClick={() => setSelected(index)}
        >
          <div
            className={`w-24 h-24 rounded-full overflow-hidden border-2 ${
              selected === index ? "border-green-600" : "border-transparent"
            }`}
          >
            <img
              src={category.img}
              alt={category.name}
              className="w-full h-full object-cover"
            />
          </div>
          <p
            className={`mt-2 text-sm ${
              selected === index ? "text-green-600 font-semibold" : "text-black"
            }`}
          >
            {category.name}
          </p>
        </div>
      ))}
    </div>

<div className="w-full h-[500px] relative overflow-hidden mt-15">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {slide.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[500px] flex items-center">
              <img
                src={slide.img}
                alt="Slide"
                className="w-full h-full object-cover absolute inset-0"
              />
             
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>












<div className="w-full max-w-7.3xl mx-auto py-8 px-4 bg-white">
      <h2 className="text-center text-lg uppercase tracking-widest font-semibold text-gray-700">
        Finishing Touches: Decor Favourites
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={5}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="mt-7"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="flex justify-center ">
            <motion.div
              className="relative w-[350px] h-[580px]  shadow-lg overflow-hidden  rounded-t-full p-3"
              whileHover={{ scale: 1.02 }}
            >
              {/* Image with Arch Border */}
              <motion.img
                src={slide.img}
                alt={slide.title}
                className="w-full h-[500px]  border-t- 5 border-4 border-none rounded-t-full rounded-b-none" whileHover={{ scale: 1.05 }} initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              />

              {/* Title */}
              <div className="absolute bottom-10 w-full text-center py-3  bg-white">
                <h3 className="text-md font-medium text-gray-700">{slide.title}</h3>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  


































      {/* Product Showcase Section */}
      <motion.div
        className="w-full py-16 bg-gray-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
          Our Products Are <span className="text-gray-500">Custom Made</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 justify-center">
          {[
            { img: sofa, name: "Blue Vase", desc: "A handcrafted blue vase to add charm to your space." },
            { img: chair, name: "Elegant Chair", desc: "Elegant wooden chair with premium finish." },
            { img: table, name: "Wooden Chair", desc: "Sleek and stylish wooden chair for modern interiors." }
          ].map((product, index) => (
            <motion.div
              key={index}
              className="relative w-80 h-96 bg-gray-100 rounded-xl overflow-hidden shadow-lg mx-auto flex flex-col justify-end"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <button
                className="absolute top-4 left-1/2 transform -translate-x-1/2 text-gray-800 text-lg font-semibold transition-all duration-300 group"
                onClick={() => addToCart(product.name, product.desc)}
              >
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Categories Section */}
      <motion.div
        className="w-full py-16 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
          Explore Our <span className="text-gray-500">Categories</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 justify-center">
        {[{ img: newArrivalImg, title: "New Arrivals", desc: "Check out the latest trends in furniture and home décor."  },
            { img: livingAreaImg, title: "Living Area", desc: "Transform your living space with stylish & comfortable furniture." },
            { img: bedroomImg, title: "Bedroom", desc: "Upgrade your bedroom with cozy, modern, and elegant designs." },
            { img: gardenImg, title: "Garden Area", desc: "Bring elegance to your outdoor spaces with our premium garden collection." }]
            .map((reason, index) => (
              
             <div
  key={index}
  className="p-6 bg-gray-100 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-t-xl"
>
  <img
    src={reason.img}
    alt={reason.title}
    className="w-100 h-80 object-contain rounded-t-xl"
  />
  <h3 className="text-xl font-semibold text-gray-800 mt-4 text-center">
    {reason.title}
  
  <p className="text-gray-600 mt-2 text-sm text-center">{reason.desc}

  {reason.title}
  </p>
</h3>
<p className="text-gray-600 mt-2 text-sm text-center">
  {reason.desc}
</p>

              </div>
          ))}

        </div>
      </motion.div>

      <div className="w-full py-16 bg-white">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
           Why <span className="text-gray-500">Visit Us?</span>
         </h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 justify-center">
           {[{ img: homeVisitImg, title: "Home Visits", desc: "Experience our furniture in your own home before buying." },
            { img: touchFeelImg, title: "Touch & Feel", desc: "Feel the quality and comfort of our materials." },
            { img: consultationImg, title: "Free Consultation", desc: "Get expert advice for the perfect fit for your space." }]
            .map((reason, index) => (
              <div key={index} className="p-6 bg-gray-100 rounded-xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <img src={reason.img} alt={reason.title} className="w-100 h-80 object-contain rounded-lg" />
                <h3 className="text-xl font-semibold text-gray-800 mt-4 text-center">
  {reason.title}
</h3>
<p className="text-gray-600 mt-2 text-sm text-center">
  {reason.desc}
</p>

              </div>
          ))}
        </div>
      </div>

      {/* Banner Image */}
      <div className="w-full">
        <motion.img
          src={bannerImage}
          alt=""
          className="w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
      </div>
<Footer/>
    </div>
  );
};

export default HeroSection;