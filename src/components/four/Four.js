import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './four.css';

// import required modules
import { EffectCards } from 'swiper/modules';

export default function Four() {
    return (
        <>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <div className='one_kr'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='two_kr'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='three_kr'>

                    </div>
                </SwiperSlide><SwiperSlide>
                <div className='four_kr'>

                </div>
            </SwiperSlide>
                <SwiperSlide>
                    <div className='five_kr'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='six_kr'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='seven_kr'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='eight_kr'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='nine_kr'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='ten_kr'>

                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
}
