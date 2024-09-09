// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper Syles
import "swiper/css";
import "swiper/css/bundle";
// Banner Images
import banner_1 from "../../assets/banner-img/slide1.1.jpg";
import banner_2 from "../../assets/banner-img/slide1.2.jpg";
import banner_3 from "../../assets/banner-img/slide4.1.jpg";

const Banner = () => {
  return (
    <div className="z-0">
      <Swiper
        // install Swiper modules
        modules={[
          Autoplay,
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          EffectFade,
        ]}
        spaceBetween={50}
        effect="fade"
        slidesPerView={1}
        // navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {/* Slide-1 */}
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${banner_1})`,
            }}
            className="bg-no-repeat bg-cover bg-center py-10 px-10 md:py-14 md:px-10 lg:px-28 lg:h-screen"
          >
            <div className="lg:mt-20">
              <h3 className="font-medium text-lg text-[#8A8989] font-playFair tracking-wide md:tracking-[.20em]">
                DECORATIVE CERAMIC VASES
              </h3>
              <h3 className="text-6xl font-playFair text-[#000] my-5">
                Art Vase Ceramic
              </h3>
              <h3 className="font-medium text-lg text-[#8A8989] font-playFair">
                Vintage Hand Made Pottery Vase
              </h3>
              <button className="btn btn-outline mt-10 px-8 uppercase">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        {/* Slide-2 */}
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${banner_2})`,
            }}
            className="bg-no-repeat bg-cover bg-center py-10 px-10 md:py-14 md:px-10 lg:px-28 lg:h-screen"
          >
            <div className="lg:mt-20">
              <h3 className="font-medium text-lg text-[#8A8989] font-playFair tracking-wide md:tracking-[.20em]">
                DECORATIVE CERAMIC VASES
              </h3>
              <h3 className="text-6xl font-playFair text-[#000] my-5">
                Floral Pottery Vase
              </h3>
              <h3 className="font-medium text-lg text-[#8A8989] font-playFair">
                Vintage Hand Made Pottery Vase
              </h3>
              <button className="btn btn-outline mt-10 px-8 uppercase">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        {/* Slide-3 */}
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${banner_3})`,
            }}
            className="bg-no-repeat bg-cover bg-center py-10 px-10 md:py-14 md:px-10 lg:px-28 lg:h-screen"
          >
            <div className="lg:mt-20">
              <h3 className="font-medium text-lg text-[#8A8989] font-playFair tracking-wide md:tracking-[.20em]">
                DECORATIVE CERAMIC VASES
              </h3>
              <h3 className="text-6xl font-playFair text-[#000] my-5">
                Vase & Cup Ceramic
              </h3>
              <h3 className="font-medium text-lg text-[#8A8989] font-playFair">
                Vintage Hand Made Pottery Vase
              </h3>
              <button className="btn btn-outline mt-10 px-8 uppercase">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
