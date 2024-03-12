import React from "react";
import blog from '../../assets/img5.jpg';

const Blog = () => {
  return (
    <section className="w-full h-screen bg-white">
      <h1 className="p-8 text-4xl font-bold text-center ">Blogs</h1>
      <div className="grid grid-cols-1 gap-4 mx-auto sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 max-w-7xl">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="w-full p-8 py-4 mx-auto bg-white border border-black rounded-md shadow-sm shadow-blue-800"
          >
            <div className="mb-4">
              <img src={blog} alt="" className="w-full h-auto rounded-md" />
            </div>
            <div className="p-5">
              <h1 className="mb-2 text-xl font-bold">
                Blog Title {item}
              </h1>
              <p className="text-gray-700">
                Hello Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores ullam necessitatibus exercitationem, sed delectus
                eveniet repudiandae quidem quos modi aut nihil cumque quaerat
                ad quas nobis rerum eius perspiciatis consectetur!
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;