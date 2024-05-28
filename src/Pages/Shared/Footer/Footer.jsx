import { FaLocationDot } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { TbPhoneCalling } from "react-icons/tb";


const Footer = () => {
    return (
        <footer>
            <div>
                <div className="footer p-10 bg-neutral text-neutral-content rounded-t-lg">
                    <aside>
                        <img className="ml-4" src="http://kodeforest.net/html/islamic/images/footer-logo.png" alt="" />

                        <p className="ml-5 mt-2">
                            There are many variations of passages of Lorem <br />Ipsum availableThere are many variations of <br />passages of Lorem Ipsum available...</p>


                        <div className="flex mt-5 font-bold ml-4">
                            < p className="mt-1 ">   <FaLocationDot /></p>
                            <p className="ml-2">
                                Islamic Center, Plot-C 70, Road No. 3, Block-C,
                                Dhaka-1212.</p>
                        </div>
                        <div className="flex font-bold ml-4">
                            <p className="mt-1 font-bold"><TbPhoneCalling /></p>
                            <p className="ml-2">01766-627499</p>

                        </div>

                        <div className="flex font-bold ml-4">
                            <p className="mt-1 font-bold"><MdAttachEmail />
                            </p>
                            <p className="ml-2">hasanmahadiius22@gmail.com</p>
                        </div>
                        <div className="flex font-bold ml-4">
                            <p className="mt-1 font-bold"><MdAttachEmail />
                            </p>
                            <p className="ml-2">Islamic-center@gmail.com</p>
                        </div>

                        <h6 className="footer-title ml-5 text-xl mt-5 underline font-bold">Social</h6>

                        <div className="grid grid-flow-col ml-5 gap-10">
                           
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                            <a><svg xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" viewBox="0 0 24 24"
                                className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                            <a><svg xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" viewBox="0 0 24 24"
                                className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                        </div>


                    </aside>




                  <div>
                        <h1 className="text-3xl text-white font-bold">GET IN TOUCH</h1>
                  </div>

                      


                            
                 
                 
                </div>
            </div>
            <footer className="footer footer-center p-2 bg-red-600 text-base-content rounded-b-lg">
                <aside className="text-white">
                    <p>Copyright © 2024 - All right reserved by Hasan Mahadi</p>
                </aside>
            </footer>
        </footer>
    );
};

export default Footer;