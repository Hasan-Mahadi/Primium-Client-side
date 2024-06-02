import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating';
import { FaCommentAlt } from 'react-icons/fa';



const Testmoniyal = () => {

    const [Testmoniyal, setTestmoniyal] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setTestmoniyal(data))
    }, [])

    return (
        <div>
            <h1 className="text-center font-bold text-4xl italic mt-40  mb-14"
                data-aos="flip-left">
                <img className='mx-auto pb-1' src="http://kodeforest.net/html/islamic/images/hdg-img.png"
                    alt="" />

                <p>What Our clinet say...</p>
            </h1>




            <div className='my-20'>
               
                <Swiper navigation={true} modules={[Navigation]}
                    className="mySwiper">

                    {
                        Testmoniyal.map(review => <SwiperSlide
                            key={review._id}
                        >
                            
                            <div className='mx-24 my-16  flex flex-col items-center '>
                             
                             
                             
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                               
                                <p className='py-8'>{review.details}</p>
                                <p className='text-2xl text-orange-400'>{review.name}</p>
                            </div>
                        </SwiperSlide>)
                    }

                </Swiper>
            </div>














        </div>
    )
};

export default Testmoniyal;