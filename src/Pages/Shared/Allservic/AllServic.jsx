import { useEffect } from "react";
import { FaArrowRight, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';


const AllServic = ({ item }) => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])




    const { image, name, text, time, price } = item




    return (

        <div>


            <div className='mt-20 ' data-aos="flip-right" >



                <div className=' hover:text-9xl  transform 
                                     hover:scale-110  transition
                                  delay-150 duration-200  max-w-sm '>
                    <div className="card card-compact w-64 h-80 bg-base-100  
                          hover:text-9xl shadow-xl transform hover:scale-110  
                               transition delay-150 duration-200  max-w-sm"
                    >
                        <figure>
                            <img className="h-40 w-full" src={image} alt="" />
                        </ figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold"> <p>{name}</p>
                            </h2>
                            <div className='flex '>
                                <p className='mt-1'> < FaClock /></p>
                                <p className='mr-2'> {time}</p>
                            </div>
                            <p className='font-bold pt-2'>{text}</p>

                            <div className="card-actions justify-end flex mt-2 ">

                                <div className="pt-4  mr-14 font-bold text-xl ">
                                    <p className="">${price}</p>
                                </div>
                                


                                <div>
                                    <Link to="/prodcust"
                                        className=''>

                                        <button className="btn btn-accent     
                                            border-0 border-b-4 bg-slate-200 btn-outline">Take
                                            Now</button>

                                    </Link>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AllServic;