import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import Aos from 'aos';

const Membars = () => {

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, [])


    return (
        <div>
            <h1 className="text-center font-bold text-4xl italic mt-40  mb-14"
                data-aos="flip-left">
                <img className='mx-auto pb-1' src="http://kodeforest.net/html/
islamic/images/hdg-img.png"
                    alt="" />
                MEMBER’S GALLERY
            </h1>




            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 w-9/12 mx-auto	h-3/6	">
                <div className="grid gap-4">
                    <div>
                        <img className="h-80 max-w-full rounded-lg" src="https://ahmadullah.info/site/contents/cropped/416x280x1x100xffffffx0/maszid-sulaymaniyah-(sulayman-alqanuni)-7_1.jpg" alt="" />


                    </div>
                    <div>
                        <img className="h-48 max-w-full rounded-lg" src="https://ahmadullah.info/site/contents/cropped/416x280x1x100xffffffx0/moszid-abu-ayub-ansari-3.jpg" alt="" />
                    </div>



                </div>
                <div className="grid gap-4">



                    <div>
                        <img className="h-80 max-w-full rounded-lg" src="https://ahmadullah.info/site/contents/cropped/416x280x1x100xffffffx0/whatsapp-image-2023-03-13-at-6.48.29-pm.jpeg" alt="" />
                    </div>
                    <div>
                        <img className="h-48 w-96 max-w-full rounded-lg" src="https://ahmadullah.info/site/contents/cropped/432x290x1x100xffffffx0/386150670_916749953354492_6723707766130851334_n_1.jpg" alt="" />
                        
                    </div>
                    

                    
                    
                    
                    
                    
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-96 max-w-full rounded-lg" src="https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2023/07/27/3927666-928191022.jpg?itok=cuF55HYr" alt="" />
                    </div>






                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlu-cF_AXBoyCIkbLED_zH_tlf9cMRspgY6YKWymg31A&s" alt="" />
                    </div>
                    <div>
                        <img className="h-80 max-w-full rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUd6cdwyd7J9dcgFpVAA21OXvVybBzP_QlwACfIwnMg&s" alt="" />
                    </div>



                </div>
            </div>






        </div>
    )
};

export default Membars;
