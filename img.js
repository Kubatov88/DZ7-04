import React, {useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Autoplay, Navigation, Pagination, Scrollbar} from "swiper";

const Photos = () => {
    const [photos, setPhotos] = useState([])


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(data => setPhotos(data))
    }, [])
    return (
        <div>
            <Swiper
                autoplay={{delay: 2000}}
                modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                style={{width: 1000, height: 400, marginTop: 200, paddingTop: 50}}
            >
                {
                    photos.slice(0, 20).map(i => <SwiperSlide
                        style={{width: 300, height: 300}}
                    >
                        <img
                            style={{width: 150, height: 150}}
                            src={i?.url} alt=""/>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Photos;