import React from "react";
import bikeDelivery from "../images/delivery.png";
import heroImg from "../images/heroBg.png";
import I1 from "../images/i1.png";
import { heroData } from "../utils/data";

const Home = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2" id="home">
      <div className="p-4 flex flex-1 flex-col justify-center items-start gap-6">
        <div className="flex items-center justify-center gap-3 bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-orange-500 font-semibold text-base">
            Bike Delivery
          </p>
          <div className="w-8 h-8 bg-white rounded-full drop-shadow-xl">
            <img
              className="w-full h-full object-contain overflow-hidden"
              src={bikeDelivery}
              alt="bike delivery"
            />
          </div>
        </div>
        <p className="capitalize text-[3.5rem] lg:text-[5rem] font-bold text-textColor">
          The fastest <br /> delivery in{" "}
          <span className="text-orange-600 text-[4rem] lg:text-[6rem]">
            your <br /> city
          </span>
        </p>
        <p className="text-base text-textColor md:w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iusto
          dolorum praesentium unde quia rerum dolor ut animi voluptate? Commodi
          eveniet quibusdam aut assumenda, illum amet, optio iure provident
          perferendis consectetur, veritatis voluptates tempora molestias qui!
          Saepe vero ad ratione eligendi debitis! Ipsam repudiandae aut aperiam
          vero, dicta ullam optio!
        </p>
        <button className="bg-orange-500 w-full lg:w-auto px-4 py-2 font-bold text-white rounded-md">
          Order Now
        </button>
      </div>
      <div className="p-4 flex-1 items-center relative">
        <img
          src={heroImg}
          className="ml-auto w-full lg:w-auto h-420 lg:h-650 items-center justify-center"
          alt="hero img"
        />

        <div className="w-full h-full absolute top-0 left-0 flex  items-center justify-center flex-wrap px-40 py-4 gap-4">
          {heroData &&
            heroData.map((item) => (
              <div className="w-190 min-w-[190px] bg-cardOverlay flex flex-col items-center justify-center rounded-3xl backdrop-blur-md p-4">
                <img
                  src={item.imageSrc}
                  className="w-40 -mt-20"
                  alt="Ice-cream img"
                />
                <p className="text-xl font-semibold text-textColor">
                  {item.name}
                </p>

                <p className="text-sm font-semibold text-lighttextGray my-3">
                  {item.description}
                </p>
                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-red-600 text-sm">$ </span>
                  {item.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
