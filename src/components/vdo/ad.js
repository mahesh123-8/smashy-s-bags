import React from "react";

const Video = () => {
  return (
    <section className="pt-5 ">
      <video
        id="Mp4Video-template--17244735635668__e540fe60-35f6-4790-b20f-4b6e0d26c400"
        className="rounded-full video-div"
        data-type="mp4"
        src="https://cdn.shopify.com/videos/c/o/v/2464d4b7bbd04e6b960f4995379287fb.mp4"
        loop
        muted
        playsInline
        autoPlay  // Add this line if you want the video to autoplay
      ></video>
    </section>
  );
};

export default Video;
