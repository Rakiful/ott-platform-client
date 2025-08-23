"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";

export default function HeroSlider() {
  const slides = [
    "https://cdn.bongo-solutions.com/919f93a7-400e-4149-a70d-204beb589074/content/d8435451-f584-4bc3-8ac9-105aa6094aa9/02ad0ed6-b353-4908-ad68-cc228f6d5822.jpg?width=2400",
    "https://cdn.bongo-solutions.com/abfea462-f64d-491e-9cd9-75ee001f45b0/content/55072731-f526-457f-b7dd-8da4ff3d32ec/db1d7181-83f8-45d1-8821-e0452fcdb4f3.jpg?width=2400",
    "https://cdn.bongo-solutions.com/abfea462-f64d-491e-9cd9-75ee001f45b0/content/0128b895-82df-404d-9902-20dfd5628bca/d91eaa92-98c4-4511-9bf4-f78b7ad2fe24.jpg?width=2400",
  ];

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop={true}
      className="h-40 md:h-164"
    >
      {slides.map((src, index) => (
        <SwiperSlide key={index} className="flex justify-center items-center">
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover rounded-t-lg"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
