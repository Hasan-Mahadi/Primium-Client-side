
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';



const Pillars = () => {

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, [])

    return (

        <div className="mt-32 ">
            <h1 className="text-center font-bold text-4xl italic" data-aos="flip-left"> 5 PILLARS OF ISLAM</h1>

            <div className="mt-6 flex divide-x  divide-rose-950 p-10">

                <div className="p-5" data-aos="flip-right">
                    <div className='size-40 btn btn-outline base-300 ml-5 
rounded-full shadow-2xl bg-emerald-600'>
                        <p className='text-lg  font-bold '>
                            <img className="rounded-full w-20" src="https://t3.ftcdn.net/jpg/02/21/76/06/240_F_221760680_XcRsBwwu76nzTN26WtRb5jBD02r2KzHh.jpg" alt="" />
                            SHAHDAH</p>
                    </div>



                </div>
                <div className="ml-5 p-5"data-aos="flip-left">
                    <div className='size-40  btn btn-outline base-300 ml-5 
rounded-full 
      shadow-2xl bg-emerald-600'>
                        <p className='text-lg font-bold '>
                            <img className="rounded-full w-20" src="https://img.freepik.com/free-photo/eid-mubarak-blog-banner-with-greeting_53876-160662.jpg?t=st=1715618796~exp=1715622396~hmac=ec774d81067058b38a584b1feabb0332c7ca48ef5c8776510800d8ba2453f6d3&w=1380" alt="" />
                            SALAH</p>
                    </div>



                </div>
                <div className="ml-5 p-5"data-aos="flip-right">
                    <div className='size-40  btn btn-outline base-300 ml-5 
rounded-full  
     shadow-2xl bg-emerald-600'>
                        <p className='text-lg font-bold'>
                            <img className="rounded-full w-20" src="https://img.freepik.com/free-photo/saving-money-concept-preset-by-male-hand-putting-money-coin-stack-growing-business-arrange-coins-into-heaps-with-hands-content-about-money_1150-45705.jpg?t=st=1715618617~exp=1715622217~hmac=2bed722700cf02931772567b1820ed19ac8ffebbf35e214607bbbb3a7e52a9f0&w=996" alt="" />
                            ZAKAT</p>
                    </div>



                </div>

                <div className="ml-5 p-5"data-aos="flip-left">

                    <div className='size-40  btn btn-outline base-300 ml-2 
rounded-full 
      shadow-2xl bg-emerald-600'>

                        <p className='text-lg font-bold '>
                            <img className="rounded-full w-20" src="https://img.freepik.com/free-vector/
holy-kaaba-mecca-saudi-arabia-hand-drawn-sketch-vector-illustration_4608
48-10337.jpg?
t=st=1715617886~exp=1715621486~hmac=d79647f5306b6c7cf25d814b6e36163e1747
4b740c7120555ff8a5209f6894ed&w=900" alt="" />
                            HAJJ</p>
                    </div>



                </div>
                <div className="ml-5 p-5"data-aos="flip-right">
                    <div className='size-40  btn btn-outline base-300 ml-2 
rounded-full 
      shadow-2xl bg-emerald-600'>
                        <p className='text-lg font-bold'>
                            <img className="rounded-full w-20" src="https://img.freepik.com/free-photo/ramadan-kareem-blog-banner-with-greeting_53876-128624.jpg?t=st=1715618951~exp=1715622551~hmac=3e4a0d6df8ce874994e009beab5ec05b6a60cb98d44de4cbe85090a1a5d71481&w=1380" alt="" />
                            FASTING</p>
                    </div>



                </div>
            </div>







        </div>






    )
};

export default Pillars;