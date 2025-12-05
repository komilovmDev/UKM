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

  const togglePlayPause = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

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
  };

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      video.onplay = () =>
        setVideoStates((prev) =>
          prev.map((state, i) =>
            i === index
              ? { playing: true, paused: false }
              : { playing: false, paused: false }
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
    });
  }, []);

  return (
    <section className="w-full">
      {/* Title */}
      <div className="w-full h-full flex flex-col font-rubik px-4 sm:px-6 lg:px-[120px] py-[40px] gap-[40px]">
        <div className="w-full flex flex-col justify-center items-center text-center gap-2">
          <h1 className="text-[26px] sm:text-[32px] lg:text-[36px] text-[#3A3C3A] font-bold">
            Производственные процессы
          </h1>
          <p className="text-[14px] sm:text-[16px] lg:text-[20px] font-[100] text-[#3A3C3A]">
            Lorem ipsum dolor sit amet consectetur. Nec id lacus ullamcorper
            enim maecenas.
          </p>
        </div>
      </div>

      {/* Slider */}
      <div className="relative mb-[40px]">
        <Swiper
          slidesPerView={1.15}
          centeredSlides
          spaceBetween={18}
          loop
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            640: { slidesPerView: 1.25, spaceBetween: 24 },
            1024: { slidesPerView: 1.5, spaceBetween: 50 },
          }}
          className="!pb-10"
        >
          {videoStates.map((state, index) => (
            <SwiperSlide
              key={index}
              className={[
                "w-full h-full relative flex justify-center transition-transform duration-500 ease-in-out",
                "opacity-70 scale-90",
                "[&.swiper-slide-active]:opacity-100 [&.swiper-slide-active]:scale-100 [&.swiper-slide-active]:z-10",
              ].join(" ")}
            >
              {/* vidComp */}
              <div
                className={[
                  "relative w-full",
                  "h-[380px] sm:h-[480px] lg:h-[600px]", // responsive, но смысл как 600px
                  "rounded-[12px] overflow-hidden",
                  "border border-[#FFFFFF]",
                  "bg-[#333]",
                  "flex items-end",
                ].join(" ")}
              >
                {/* video-player */}
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  className="absolute inset-0 z-0 w-full h-full object-cover rounded-[12px]"
                  src={videoTest}
                  loop={false}
                  muted
                  playsInline
                  controls
                  autoPlay={false}
                />

                {/* overlay play button */}
                <button
                  onClick={() => togglePlayPause(index)}
                  type="button"
                  className={[
                    "absolute inset-0 z-[1] flex items-center justify-center",
                    "transition-opacity duration-300",
                    state.playing ? "opacity-0" : "opacity-100",
                    "bg-black bg-opacity-40",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ABBA27] focus-visible:ring-offset-2 focus-visible:ring-offset-[#3D3E3D]",
                  ].join(" ")}
                  aria-label={
                    state.paused ? "Продолжить видео" : "Воспроизвести видео"
                  }
                >
                  {/* play-button */}
                  <div className="w-[60px] h-[60px] bg-[#A8BC44] rounded-full flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.2)]">
                    {state.paused ? (
                      <FaPause className="text-[#FFFFFF] text-[24px]" />
                    ) : (
                      <FaPlay className="text-[#FFFFFF] text-[24px] translate-x-[1px]" />
                    )}
                  </div>
                </button>

                {/* info */}
                <div className="w-full z-[2] relative bg-gradient-to-b from-transparent via-[#3D3E3D] to-[#3D3E3D] p-4 text-[#FFFFFF]">
                  <p className="text-[16px] font-bold">Lorem ipsum</p>
                  <p className="text-[12px]">
                    Lorem ipsum dolor sit Nec id lacus ullamcorper enim
                    maecenas.
                  </p>

                  <div className="flex justify-end items-center mt-[0px] gap-[25px]">
                    <span className="border-[.5px] flex-1 border-[#FFFFFF70]" />
                    <p className="text-[#FFFFFF] text-[12px]">12.01.2024</p>
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
    </section>
  );
};

export default VideoComponent;
