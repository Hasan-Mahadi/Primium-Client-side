import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';



const AboutUs = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });

    }, [])


    return (
        <section>

            <div className="flex mt-28 ">



                <div className="mb-5 ml-32 " data-aos="flip-left">

                    <div className="gap-2 grid md:grid-cols-3 ">


                        <div className="card card-compact w-60 bg-base-100    shadow-xl max-w-sm rounded-xl hover:text-7xl
                             transform hover:scale-110  transition delay-150 duration-300 
                                 ease-in-outoverflow-hidden" >

                            <figure><img className="rounded-xl h-48" src="http://kodeforest.net/html/islamic/extra-images/mosque1.jpg" 
                               
                               alt="Shoes" />

                                <div className="absolute rounded-xl inset-0 bg-black bg-opacity-50 text-white flex 
justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                                    <p className="text-xl">Mosque-1</p>
                                </div>
                            </figure>




                        </div>
                        <div className="card card-compact w-60 bg-base-100 shadow-xl max-w-sm rounded-xl hover:text-7xl
                              transform hover:scale-110  transition delay-150 duration-300 
                               ease-in-outoverflow-hidden">

                            <figure><img className="rounded-xl h-48 " src="https://img.freepik.com/free-psd/
                                       mosque-building-isolated_23-2151388951.jpg?t=st=1715427183~exp=1715430783~hmac=2d2b68bdd67164be2691ed089e486b53ab7995f20fa6525fff7a7b4df7d27ce2&w=996" alt="Shoes" />

                                <div className="absolute rounded-xl inset-0 bg-black bg-opacity-50 text-white flex 
                                  justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                                    <p className="text-xl">Mosque-2</p>
                                </div>


                            </figure>




                        </div>

                    </div>

                    <div className="flex gap-2 mt-2">
                        <div className="card card-compact w-60 bg-base-100 shadow-xl max-w-sm rounded-xl hover:text-7xl
transform hover:scale-110  transition delay-150 duration-300 
ease-in-outoverflow-hidden">

                            <figure><img className="rounded-xl h-48 " src=" http://kodeforest.net/html/islamic/extra-images/mosque.jpg" alt="Shoes" />
                                <div className="absolute rounded-xl inset-0 bg-black bg-opacity-50 text-white flex 
justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                                    <p className="text-xl">Library</p>
                                </div>

                            </figure>




                        </div>
                        <div className="card card-compact w-60 bg-base-100 shadow-xl max-w-sm rounded-xl hover:text-7xl
transform hover:scale-110  transition delay-150 duration-300 
ease-in-outoverflow-hidden">

                            <figure><img className="rounded-xl h-48" src="https://img.freepik.com/free-photo/white-concrete-lighthouse-sunset_209690-442.jpg?t=st=1715427327~exp=1715430927~hmac=30eed0c0c9eaaa2a1462ee5e8259b99ab04c6dd072995e6302fb2cd3008ad64f&w=996" alt="Shoes" />
                                <div className="absolute rounded-xl inset-0 bg-black bg-opacity-50 text-white flex 
justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                                    <p className="text-xl">Madrasa</p>
                                </div>
                            </figure>




                        </div>
                    </div>
                </div>


                <div className="ml-20 " data-aos="flip-right">
                    <h1 className="font-bold text-2xl underline text-black   ">About Us...</h1>
                    <p className="italic mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        <br />  Perferendis fuga perspiciatis quia facere nam harum recusandae aut, <br />
                        asperiores corrupti atque repellat reprehenderit doloribus cupiditate. <br />
                        Veniam exercitationem quaerat odio commodi numquam.</p>


                    <div className="mt-6 flex  ">
                        <div className="">
                            <div className=' btn btn-outline btn-accent ml-5 rounded-full 
                         shadow-2xl bg-black'>

                                <p className='text-lg '> 10</p>

                            </div>
                            <div>
                                <h1 className="font-bold mt-2">MADRASAS</h1>
                            </div>
                        </div>

                        <div className="ml-5">
                            <div className=' btn btn-outline btn-accent ml-5 rounded-full 
                         shadow-2xl bg-black'>

                                <p className='text-lg '> 20</p>

                            </div>
                            <div>
                                <h1 className="font-bold mt-2">MOSQUES</h1>
                            </div>
                        </div>
                        <div className="ml-5">
                            <div className=' btn btn-outline btn-accent ml-5 rounded-full  
                        shadow-2xl bg-black'>

                                <p className='text-lg '> 2K</p>

                            </div>
                            <div>
                                <h1 className="font-bold mt-2" >STUDENTS</h1>
                            </div>
                        </div>
                        <div className="ml-5">
                            <div className=' btn btn-outline btn-accent ml-2 rounded-full 
                         shadow-2xl bg-black'>

                                <p className='text-lg '> 50</p>

                            </div>
                            <div>
                                <h1 className="font-bold ml-2 mt-2" >IMAMS</h1>
                            </div>
                        </div>
                        <div className="ml-5">
                            <div className=' btn btn-outline btn-accent ml-2 rounded-full 
                         shadow-2xl bg-black'>

                                <p className='text-lg '>1L</p>

                            </div>
                            <div>
                                <h1 className="font-bold ml-2 mt-2" >BOOKS</h1>
                            </div>
                        </div>




                    </div>

                   
                    <Link to='blogs'>
                        <a className="btn btn-ghost  btn btn-outline 
       btn-accent 
  font-bold mt-5  ">Read More</a>
                    </Link>

                    <Link to='contact'>
                        <a className="btn btn-ghost  btn btn-outline btn-accent
ml-12 mb-5 font-bold mt-5 ml-5 ">Join Us Now</a>
                    </Link>
                    

                </div>



            </div>








        </section>






    );
};

export default AboutUs;