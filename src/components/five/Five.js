import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import './five.css'

// import required modules
import { EffectCreative } from 'swiper/modules';

export default function Five() {
    return (
        <>
            <Swiper
                grabCursor={true}
                effect={'creative'}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        origin: 'left center',
                        translate: ['-5%', 0, -200],
                        rotate: [0, 100, 0],
                    },
                    next: {
                        origin: 'right center',
                        translate: ['5%', 0, -200],
                        rotate: [0, -100, 0],
                    },
                }}
                modules={[EffectCreative]}
                className="mySwiper6"
            >
                <SwiperSlide>
                    <div className='one_girl'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='two_girl'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='three_girl'>

                    </div>
                </SwiperSlide><SwiperSlide>
                <div className='four_girl'>

                </div>
            </SwiperSlide>
                <SwiperSlide>
                    <div className='five_girl'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='six_girl'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='seven_girl'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='eight_girl'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='nine_girl'>

                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
}
