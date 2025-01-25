import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { LuEye } from "react-icons/lu";
import { FaPlay, FaPause } from "react-icons/fa";
import videoTest from "../../images/videoplayback.mp4";

const VideoComponent = () => {
  const [videoStates, setVideoStates] = useState(
    [...Array(5)].map(() => ({ playing: false, paused: false }))
  );
  const videoRefs = useRef([]);

  // Play/Pause funksiyasi
  const togglePlayPause = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      setVideoStates((prev) =>
        prev.map((state, i) =>
          i === index
            ? { playing: !state.playing, paused: state.playing }
            : { playing: false, paused: false }
        )
      );

      if (video.paused) {
        videoRefs.current.forEach((vid, idx) => {
          if (vid && idx !== index) vid.pause();
        });
        video.play();
      } else {
        video.pause();
      }
    }
  };

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        video.onplay = () =>
          setVideoStates((prev) =>
            prev.map((state, i) =>
              i === index ? { playing: true, paused: false } : { playing: false, paused: false }
            )
          );

        video.onpause = () =>
          setVideoStates((prev) =>
            prev.map((state, i) =>
              i === index ? { playing: false, paused: true } : state
            )
          );

        video.onended = () =>
          setVideoStates((prev) =>
            prev.map((state, i) =>
              i === index ? { playing: false, paused: false } : state
            )
          );
      }
    });
  }, []);

  return (
    <div>
      <div className="w-full h-full flex flex-col font-rubik px-[120px] py-[40px] gap-[40px] mt-0">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-[36px] text-[#3A3C3A] font-bold">
            Производственные процессы
          </h1>
          <p className="text-[20px] font-[100]">
            Lorem ipsum dolor sit amet consectetur. Nec id lacus ullamcorper enim maecenas.
          </p>
        </div>
      </div>

      <div className="relative mb-[40px]">
        <Swiper
          slidesPerView={1.5}
          centeredSlides={true}
          spaceBetween={50}
          loop={true}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {videoStates.map((state, index) => (
            <SwiperSlide key={index} className="custom-slide">
              <div className="slide-box flex items-end relative">
                {/* Video */}
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  className="w-full absolute z-0 top-0 right-0"
                  src={videoTest}
                  loop={false}
                  muted
                  playsInline
                  controls={true}
                  autoPlay={false}
                />

                {/* Play/Pause tugmasi */}
                <button
                  onClick={() => togglePlayPause(index)}
                  className={`absolute inset-0 flex justify-center items-center transition-opacity duration-300 ${
                    state.playing ? "opacity-0" : "opacity-100"
                  } bg-black bg-opacity-40`}
                >
                  <div className="w-16 h-16 flex items-center justify-center bg-[#A8BC44] rounded-full">
                    {state.paused ? (
                      <FaPause className="text-white text-3xl" />
                    ) : (
                      <FaPlay className="text-white text-3xl" />
                    )}
                  </div>
                </button>

                {/* Pastki overlay matn */}
                <div className="w-full z-[2] relative inset-0 bg-gradient-to-b from-transparent via-[#3D3E3D] to-[#3D3E3D] p-4 text-white">
                  <p className="text-[16px] font-bold">Lorem ipsum</p>
                  <p className="text-[12px]">
                    Lorem ipsum dolor sit Nec id lacus ullamcorper enim maecenas.
                  </p>
                  <div className="flex justify-end items-center mt-[0px] gap-[25px]">
                    <span className="border-[.5px] flex-1 border-[#FFFFFF70]"></span>
                    <p className="text-[#ffffff] text-[12px]">12.01.2024</p>
                    <span className="flex items-center gap-[5px] text-[12px]">
                      22 <LuEye className="text-[16px]" />
                    </span>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default VideoComponent;
