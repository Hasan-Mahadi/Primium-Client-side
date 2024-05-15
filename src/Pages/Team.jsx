
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import Aos from 'aos';
import { FaFacebookSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const Team = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])



    return (




        <div >







            <h1 className="text-center font-bold text-4xl italic mt-40  mb-14"
                data-aos="flip-left">
                <img className='mx-auto pb-1' src="http://kodeforest.net/html/islamic/images/hdg-img.png"
                    alt="" />
               OUR TEAMS
            </h1>











            <div className='flex gap-5 ml-20 '>



                <div className="card card-compact w-64 h-80 bg-base-100      
                            mb-10    hover:text-4xl transform hover:scale-110
                  transition delay-150 duration-300 
                     hover:text-9xl  transform hover:scale-110  transition 
                      delay-150 duration-200  max-w-sm shadow-xl"
                    data-aos="zoom-in-left">
                    <figure><img className='h-80  rounded-xl 
                                    hover:text-4xltransform hover:scale-110
                                         transition delay-150 duration-300  ' src="https://i.ibb.co/
                                    9ttcT4Q/my-pic.png" alt="Shoes" /></
                    figure>
                    <div className="card-body bg-slate-700 text-white">
                        <p className='font-bold text-2xl text-center '>Hasan Mahadi
                        </p>
                        <div className='flex'>
                            <p className=' text-center'>CEO  Islamic Center </p>
                            <div className='text-4xl bg-blue-700'>
                                <Link to="https://www.facebook.com/hasan.mahadi.16503?mibextid=ZbWKwL

                                               "><FaFacebookSquare /></Link>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="card card-compact w-64 h-80 bg-base-100      
                mb-10    hover:text-4xl transform hover:scale-110
      transition delay-150 duration-300 
         hover:text-9xl  transform hover:scale-110  transition 
          delay-150 duration-200  max-w-sm shadow-xl"
                    data-aos="zoom-in-left">
                    <figure><img className='h-74  rounded-xl 
                        hover:text-4xltransform hover:scale-110
                             transition delay-150 duration-300  '
                        src="https://www.bvnews24.com/media/imgAll/2022November/mukhtar2-2304080749.jpg" alt="Shoes" /></
                    figure>
                    <div className="card-body bg-slate-700 
text-white">
                        <p className='font-bold text-2xl 
text-center '>Mokhter Ahmad
                        </p>
                        <div className='flex'>
                            <p className=' text-center'>Male Quran Teacher </p>
                            <div className='text-4xl bg-blue-700'>
                                <Link to="https://www.facebook.com/professormokhterahmad?mibextid=ZbWKwL

                                   "><FaFacebookSquare /></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card card-compact w-64 h-80 bg-base-100      
                mb-10    hover:text-4xl transform hover:scale-110
      transition delay-150 duration-300 
         hover:text-9xl  transform hover:scale-110  transition 
          delay-150 duration-200  max-w-sm shadow-xl"
                    data-aos="zoom-in-left">
                    <figure><img className='h-74  rounded-xl 
                        hover:text-4xltransform hover:scale-110
                             transition delay-150 duration-300  '
                        src="https://upload.wikimedia.org/wikipedia/commons/3/37/Sheikh_Ahmadullah.jpg" alt="Shoes" /></
                    figure>
                    <div className="card-body bg-slate-700 
text-white">
                        <p className='font-bold text-2xl 
text-center '>Shaikh Ahmadullah
                        </p>
                        <div className='flex'>
                            <p className=' text-center'>Chairman & Adviser </p>
                            <div className='text-4xl bg-blue-700'>
                                <Link to="https://www.facebook.com/sheikhahmadullahofficial?mibextid=ZbWKwL
                                   "><FaFacebookSquare /></Link>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="card card-compact w-64 h-80 bg-base-100      
                mb-10    hover:text-4xl transform hover:scale-110
      transition delay-150 duration-300 
         hover:text-9xl  transform hover:scale-110  transition 
          delay-150 duration-200  max-w-sm shadow-xl"
                    data-aos="zoom-in-left">
                    <figure><img className='h-74  rounded-xl 
                        hover:text-4xltransform hover:scale-110
                             transition delay-150 duration-300  '
                        src="https://netstorage-tuko.akamaized.net/images/f6b3d8e16d60277b.jpg?imwidth=900" alt="Shoes" /></
                    figure>
                    <div className="card-body bg-slate-700 
text-white">
                        <p className='font-bold text-2xl 
text-center '>Mishari Rashid

                        </p>
                        <div className='flex'>
                            <p className=' text-center'>Qari & Lecturer</p>
                            <div className='text-4xl bg-blue-700'>
                                <Link to="https://quran.com/en/reciters/7


                                   "><FaFacebookSquare /></Link>
                            </div>
                        </div>
                    </div>
                </div>



            </div>




        </div>



    )
};

export default Team;


















