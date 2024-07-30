import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import './three.css'

import { EffectCube, Pagination } from 'swiper/modules';

export default function App() {
    return (
        <>
            <Swiper
                effect={'cube'}
                grabCursor={true}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                pagination={true}
                modules={[EffectCube, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='one_naruto'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='two_naruto'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='three_naruto'>

                    </div>
                </SwiperSlide><SwiperSlide>
                <div className='four_naruto'>

                </div>
            </SwiperSlide>
                <SwiperSlide>
                    <div className='five_naruto'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='six_naruto'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='seven_naruto'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='eight_naruto'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='nine_naruto'>

                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
