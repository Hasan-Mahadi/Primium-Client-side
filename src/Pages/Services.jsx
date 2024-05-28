
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaArrowRight, FaClock } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Services = () => {







    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (



        <section>
            <Helmet>
                <title>Islamic Center | Services</title>
            </Helmet>

            <h1 className="text-center font-bold text-4xl italic mt-28  mb-14" data-aos="flip-left">
                <img className='mx-auto pb-1' src="http://kodeforest.net/html/islamic/images/hdg-img.png"
                    alt="" />
                    OUR SERVICES</h1>







            <div className='flex gap-20 center ml-52' >






                <div className=' hover:text-9xl  transform 
                   hover:scale-110  transition
                       delay-150 duration-200  max-w-sm '>

                    <div className="card card-compact w-64 h-80 bg-base-100  hover:text-9xl shadow-xl transform hover:scale-110  transition delay-150 duration-200  max-w-sm" data-aos="zoom-in-right">
                        <figure><img className='' src="http://kodeforest.net/html/islamic/extra-images/service.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold">QURAN CLASS
                            </h2>
                            <div className='flex '>
                                <p className='mt-1'> < FaClock /></p>

                                <p className='mr-2'> Timing : 09:00 A.M - 03:00 P.M</p>
                            </div>
                            <div className="card-actions justify-end pt-10">
                                <p className='font-bold'>Read Quran, know Allah...</p> <Link to="/prodcust" className='btn-outline  btn-ghost'> <  FaArrowRight /></Link>
                            </div>


                        </div>
                    </div>

                </div>


                <div className=' hover:text-9xl  transform 
hover:scale-110  transition
 delay-150 duration-200  max-w-sm '>


                    <div className="card card-compact w-64 h-80 bg-base-100 hover:text-9xl  transform hover:scale-110  transition delay-150 duration-200  max-w-sm shadow-xl" data-aos="zoom-in-left">
                        <figure><img className='h-40' src="https://ahmadullah.info/site/contents/cropped/1190x512x1x100xffffffx0/img_404f3.jpg" alt="Shoes" /></
                        figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold">COUNSELLING
                            </h2>
                            <div className='flex '>
                                <p className='mt-1'> < FaClock /></p>
                                <p className='mr-2'>Timing : 04:00 A.M - 06:00 P.M</p>
                            </div>
                            <div className="card-actions justify-end pt-10">
                                <p className='font-bold'>Take best Counselling...</p>
                                <Link to="/prodcust" className='btn-outline  
                                    btn-ghost'> <  FaArrowRight /></Link>
                            </div>

                        </div>
                    </div>
                </div>
                
                <div className=' hover:text-9xl  transform 
hover:scale-110  transition
 delay-150 duration-200  max-w-sm '>


                    <div className="card card-compact w-64 h-80 bg-base-100 hover:text-9xl shadow-xl transform hover:scale-110  transition 
 delay-150 duration-200  max-w-sm shadow-xl
shadow-xl"data-aos="zoom-in-right">
                        <figure><img src="https://i0.wp.com/icsta.org.uk/wp-content/uploads/2020/01/Matrimonial-Service-Islamic-Centre-1.jpg?fit=870%2C400&ssl=1" alt="Shoes" /></
                        figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold">NIKAH SERVICES

                            </h2>
                            <div className='flex '>
                                <p className='mt-1'> < FaClock /></p>
                                <p className='mr-2'> Timing : 03:00 A.M - 01:00 P.M

                                </p>
                            </div>
                            <div className="card-actions justify-end pt-10">
                                <p className='font-bold'>Take Nikah Services...</p>
                                <Link to="/prodcust" className='btn-outline  
                                   btn-ghost'> <  FaArrowRight /></Link>
                            </div>

                        </div>
                    </div>


                </div>







            </div>


            <div className='flex gap-20 center ml-52 mt-10 mb-5'>
                <div className=' hover:text-9xl  transform 
hover:scale-110  transition
 delay-150 duration-200  max-w-sm '>

                    <div className="card card-compact w-64 h-80 bg-base-100 hover:text-9xl shadow-xl transform hover:scale-110  transition 
 delay-150 duration-200  max-w-sm shadow-xl
shadow-xl"data-aos="zoom-in-left">
                        <figure><img src="http://kodeforest.net/html/islamic/extra-images/service3.jpg" alt="Shoes" /></
                        figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold">HADITH SCHOOL

                            </h2>
                            <div className='flex '>
                                <p className='mt-1'> < FaClock /></p>
                                <p className='mr-2'> Timing : 07:00 A.M - 04:00 P.M</p>
                            </div>
                            <div className="card-actions justify-end pt-10">
                                <p className='font-bold'>Know the hadith, invite...</p> <Link to="/prodcust" className='btn-outline  
                                   btn-ghost'> <  FaArrowRight /></Link>

                            </div>

                        </div>
                    </div>
                </div>

                <div className=' hover:text-9xl  transform 
hover:scale-110  transition
 delay-150 duration-200  max-w-sm '>


                    <div className="card card-compact w-64 h-80 bg-base-100 hover:text-9xl shadow-xl transform hover:scale-110  transition 
 delay-150 duration-200  max-w-sm shadow-xl
shadow-xl"data-aos="zoom-in-right">
                        <figure><img src="http://kodeforest.net/html/islamic/extra-images/service4.jpg" alt="Shoes" /></
                        figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold">FUNERAL SERVICES

                            </h2>
                            <div className='flex '>
                                <p className='mt-1'> < FaClock /></p>
                                <p className='mr-2'> Timing : 09:00 A.M - 03:00 P.M</p>
                            </div>
                            <div className="card-actions justify-end pt-10">
                                <p className='font-bold'>Take Funeral Services...</p>
                                <Link to="/prodcust" className='btn-outline  
                                    btn-ghost'> <  FaArrowRight /></Link>
                            </div>

                        </div>
                    </div>
                </div>







                <div className=' hover:text-9xl  transform hover:scale-110  transition
                delay-150 duration-200  max-w-sm '>
                    <div className="card card-compact w-64 h-80 bg-base-100  
   shadow-xl"data-aos="zoom-in-left">
                        <figure><img className='' src="http://kodeforest.net/html/islamic/
extra-images/service5.jpg" alt="Shoes" /></
                        figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold">OUR ACADEMIS
                            </h2>
                            <div className='flex '>
                                <p className='mt-1'> < FaClock /></p>
                                <p className='mr-2'> Timing : 09:00 A.M - 03:00 P.
                                    M</p>
                            </div>
                            <div className="card-actions justify-end pt-10">
                                <p className='font-bold'>About More...</p>
                                <Link to="/prodcust" className='btn-outline  
                                      btn-ghost'> <  FaArrowRight /></Link>
                            </div>
                        </div>
                    </div>
                </div>
















            </div>







        </section>
    )
};

export default Services;