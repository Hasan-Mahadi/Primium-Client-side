import Aos from "aos";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../providers/Authproviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../Sociallogin/SocialLogin";



const Login = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])




    const [disabled, setDisabled] = useState(true);


    const { signIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])




    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                   
                    title: "Alhamdulillah  Your Login Succesful.",
                    
                    showConfirmButton: false,
                    timer: 5000
                });
                navigate(from, { replace: true });

            })
    }

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);

        }
        else {
            setDisabled(true)


        }
    }

    return (

        <div>
            <Helmet>
                <title>Islamic Center | Login</title>
            </Helmet>











            <div className="">









                <div className="hero min-h-screen bg-black ">





                    <div className="hero-content flex-col md:flex-row-reverse">

                        <div className="text-center md:w-1/2 lg:text-left" data-aos="flip-left">
                            <h1 className="text-5xl text-cyan-400 font-bold">Login now!</h1>
                            <p className="py-6 text-cyan-400 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. necessitatibus? Obcaecati, eligendi!</p>
                        </div>


                        <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100" data-aos="flip-right">


                            <form onSubmit={handleLogin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input border-b-4 bg-orange-300 input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered border-b-4 bg-orange-300 " required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">

                                        <LoadCanvasTemplate />


                                    </label>
                                    <input onBlur={handleValidateCaptcha} type="text" name="captcha"
                                        placeholder="type the captcha above" className="input 
                                      input-bordered border-b-4 bg-orange-300 "
                                        required />






                                </div>

                                <div className="form-control w-40 ml-14 mt-6">

                                    <input disabled={disabled} className="btn btn-primary font-bold" type="submit" value="Login" />

                                </div>
                            </form>
                            <p className="ml-16 -mt-5  italic font-bold">New Here? <Link className="text-orange-400" to="/signup">Create an Account</Link></p>
                            <div className="divider">OR</div>
                            <SocialLogin></SocialLogin>
                        </div>




              


                    </div>
                  
            
                   
                </div>
            </div>
        </div>
    )
};

export default Login