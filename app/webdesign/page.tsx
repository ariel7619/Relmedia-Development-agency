"use client";


import ShowcaseNavbar from "@/components/showcase-navbar";
import { PiCheckCircle } from "react-icons/pi";
import { motion } from "framer-motion";
import Link from "next/link";

const checkItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const Webdesign = () => {



  return (
    <div className="
    flex flex-col  w-full  
     overflow-clip inset-0 -z-10 
  bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pb-10
    
    ">
      <ShowcaseNavbar />
      <div className="md:px-0 px-6 xl:w-4/5 2xl:w-[68%] justify-between md:mt-14 md:flex mx-auto">
        <div className="md:w-5/5">
          <h1 className="text-4xl font-semibold pt-10   ">Digital Design (UI/UX)</h1>
          <p className="text-lg text-gray-500 py-4">Relmedia&apos;s world of digital design - where creativity meets technology and innovation becomes reality. Our mission is to help your business create a strong digital presence through design solutions that not only look great, but also work smoothly and efficiently. By combining in-depth understanding of user experience (UX), visual appeal and technical performance, we deliver designs that make a difference.
          </p>

          {[
                {
                  title: "Unique Design for Your Needs",
                  description:
                    "We know that every business is unique, which is why we create digital designs that reflect your identity and goals. Whether you need web design, UX/UI or application design, our team has the expertise and tools to take your business to the next level. Let us help you create something that stands out and engages your audience.",
                },

                {
                  title: "Web design services",
                  description:
                    "Your website is your digital shop window - and we make sure it impresses. Through carefully planned web design, we create user-friendly, aesthetically pleasing and functional websites that help you achieve your business goals. We ensure that every detail, from layout to interactivity, is optimized for the best possible experience.",
                },
                {
                  title: "Brand identity",
                  description:
                    "Your brand is more than a logo - it's an experience. We help you build a strong and consistent brand identity that stands out in the market. Through a combination of strategy and creative design, we create visual elements that engage and attract your target audience. Together, we build a brand profile that strengthens your presence and increases your company's recognition.",
                },
                {
                  title: "UX/UI Design",
                  description:
                    "Good design doesn't just look good - it works. We help you understand your users and create smooth, intuitive and engaging experiences that convert. Our UX/UI team specializes in developing user experiences that make it easy for your customers to navigate and interact with your website or app, increasing engagement and loyalty.",
                },
                {
                  title: "Application design",
                  description:
                    "We don't just create apps - we create innovative solutions that help your business achieve its goals. Working with our development experts, we create customized application designs that combine aesthetics and functionality. Whether it's a mobile or web application, we deliver designs that work seamlessly for both users and businesses.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={checkItemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 1.8 }}
                  className="flex gap-x-4 py-4"
                >
                  <PiCheckCircle className=" rounded-md text-[#3d80d7] text-2xl flex-shrink-0" />
                  <ul>
                    <h3 className="text-lg font-bold text-gray-700">
                      {item.title}
                    </h3>
                    <div className="text-gray-400">{item.description}</div>
                  </ul>
                </motion.div>
              ))}
        </div>

    <div className="md:w-1/2">
      </div>
      </div>
    </div>
  );
};

export default Webdesign;
