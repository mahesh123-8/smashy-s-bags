import React from "react";
import gridthree from "../../assets/img6.webp";
import gridsix from "../../assets/MxD2_0064.webp";
import gridone from "../../assets/grdi1.webp";
import gridtwo from "../../assets/grid2.webp";
import gridfour from "../../assets/img5.jpg";
import gridfive from "../../assets/athiya.webp";
import gridseven from '../../assets/bag1.webp'
const Gallery = () => {
  return (
    <section className="">
        <h1 className="p-5 text-4xl font-bold text-center text-black">Our Gallery</h1>
      <div className="w-full max-w-5xl gap-3 p-5 pb-10 mx-auto mb-10 space-y-5 columns-3">
        <div className="relative group">
          <img
            src={gridone}
            alt=""
            className="rounded-full shadow-2xl shadow-blue-900 hover:opacity-75 hover:duration-700 translate-x-0.5"
          />
          <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 rounded-full opacity-0 hover:bg-black hover:bg-opacity-50 group-hover:opacity-100">
            <p className="text-2xl font-bold text-white">Lovely bags</p>
          </div>
        </div>
        <div className="relative group ">
          <div></div>
          <img
            src={gridtwo}
            alt=""
            className="rounded-full shadow-2xl shadow-blue-900 shadow-black"
          />
          <div className="absolute inset-0 flex items-center justify-center duration-300 rounded-full shadow-2xl opacity-0 transiion-all hover:bg-black hover:bg-opacity-50 group-hover:opacity-100 shadow-blue-900 ">
            <p className="text-2xl font-bold text-white">Hearts bags</p>
          </div>
        </div>
        <div className="relative group">
          <img
            src={gridthree}
            alt=""
            className="rounded-full shadow-2xl shadow-blue-900"
          />
          <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 rounded-full shadow-2xl opacity-0 hover:bg-black hover:bg-opacity-50 group-hover:opacity-100 shadow-blue-900 ">
            <p className="text-2xl font-bold text-white">Special bags</p>
          </div>
        </div>

        <div className="relative group">
          <img
            src={gridfour}
            alt=""
            className="rounded-full shadow-2xl shadow-blue-900"
          />
          <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 rounded-full shadow-2xl opacity-0 hover:bg-black hover:bg-opacity-50 group-hover:opacity-100 shadow-blue-900 ">
            <p className="text-2xl font-bold text-white">Latest Bags </p>
          </div>
        </div>

        <div className="relative group">
          <img
            src={gridfive}
            alt=""
            className="rounded-full shadow-2xl shadow-blue-900"
          />
          <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 rounded-full shadow-2xl opacity-0 hover:bg-black hover:bg-opacity-50 group-hover:opacity-100 shadow-blue-900 ">
            <p className="text-2xl font-bold text-white"> Trending One</p>
          </div>
        </div>

        <div className="relative group">
          <img
            src={gridsix}
            alt=""
            className="rounded-full shadow-2xl shadow-blue-900"
          />
          <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 rounded-full shadow-2xl opacity-0 hover:bg-black hover:bg-opacity-50 group-hover:opacity-100 shadow-blue-900 ">
            <p className="text-2xl font-bold text-white"> For Your Love</p>
          </div>
        </div>
        <div className="relative group">
          <img
            src={gridseven}
            alt=""
            className="rounded-full shadow-2xl shadow-blue-900"
          />
          <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 rounded-full shadow-2xl opacity-0 hover:bg-black hover:bg-opacity-50 group-hover:opacity-100 shadow-blue-900 ">
            <p className="text-2xl font-bold text-white"> Heart bags</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
