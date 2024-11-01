"use client";

import ShowcaseNavbar from "@/components/showcase-navbar";
import { PiCheckCircle } from "react-icons/pi";
import { motion } from "framer-motion";

const checkItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const Development = () => {



  return (
    <div className="
    flex flex-col  w-full  
     overflow-clip inset-0 -z-10 
  bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pb-10
    
    ">
      <ShowcaseNavbar />
      <div className="md:px-0 px-6 xl:w-4/5 2xl:w-[68%] justify-between md:mt-14 md:flex mx-auto">
        <div className="md:w-5/5">
          <h1 className="text-4xl font-semibold pt-10">Development</h1>
          <p className="text-lg text-gray-500 py-4">
          Our team offers comprehensive development services to our clients. 
          We have creative and experienced technical professionals who build customized 
          and advanced websites with unique features. With our expertise, you can be sure 
          that your website meets a high standard of functionality and user experience.
          </p>

          {[
                {
                  title: "Customized web development",
                  description:
                    "We specialize in developing websites that are as unique as our clients. Whether you need a bespoke WordPress solution or an e-commerce platform, we have the technical expertise and vision to deliver. Our goal is to create a smooth, responsive experience that engages your visitors and converts them into loyal customers.",
                },

                {
                  title: "Application development",
                  description:
                    "We don't just build websites - we create powerful applications for businesses that want to grow and scale up. Whether it's web-based platforms or mobile applications for iOS and Android, we deliver solutions that are scalable and future-proof. With our focus on React Native and other modern frameworks, we can develop applications that are fast, secure and user-friendly.",
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

      <div className="md:px-0 px-6 xl:w-4/5 2xl:w-[68%] justify-between md:mt-14 md:flex mx-auto">
        <div className="md:w-5/5">
          <h1 className="text-4xl font-semibold pt-10">We'll help you with development, integrations and the technical side of things.</h1>
          <p className="text-lg text-gray-500 py-4">
          At Relmedia, we offer comprehensive digital solution development services. Our team of experienced developers and designers specialize in creating custom solutions that are optimized for conversion and impressive for your online presence. We work with various technologies and frameworks to ensure that your solution is tailored to your needs and goals.
          </p>
        </div>

    <div className="md:w-1/2">
      </div>
      </div>
    </div>
  );
};

export default Development;
