import { useEffect } from "react";
import { FaArrowRight, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useContext } from "react";
import { AuthContext } from "../../../providers/Authproviders";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import useAxiosSEcour from "../../../hooks/useAxiosSEcour";
import useCart from "../../../hooks/useCart";


const AllServic = ({ item }) => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])




    const { image, name, text, time, price, _id } = item;
    const { user } = useAuth()
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSEcour();
    const [, refetch] = useCart();



    const handleAddToCart = () => {
        if (user && user.email) {
            // send cart item to the database
            //    console.log(user.email, Course);
            const coursitem = {
                coursid: _id,
                email: user.email,
                name,
                image,
                price,

            }
            axiosSecure.post('/carts', coursitem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-center",
                            icon: "success",
                            title: `${name} added to your Cart   Alhamdulillah`,
                            showConfirmButton: false,
                            timer: 5000
                        });

                        //refetch cart to update the cart items count
                        refetch();
                    }
                })


        }
        else {
            Swal.fire({
                title: "You are Not Logged In",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {

                    //send the user to the login page
                    navigate('/logins', { state: { from: location } });



                }
            });
        }
        // console.log(Course, user.email);
    }




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

                                        <button onClick={handleAddToCart} className="btn btn-accent     
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