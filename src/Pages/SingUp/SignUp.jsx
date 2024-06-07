
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/Authproviders";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const SignUp = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { createUser, updateuserProfile } = useContext(AuthContext);
    const navigate = useNavigate();



    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateuserProfile(data.name, data.photo)
                    .then(() => {
                        console.log('user profile info updated')
                        reset();
                        Swal.fire({
                            position: "top-center",
                            icon: "success",

                            title: "Alhamdulillah Sign-Up SuccessFully!!!",

                            showConfirmButton: false,
                            timer: 5000
                        });
                        navigate('/');

                    })
                    .catch(error => console.log(error));
            })
    };




    return (
        <div>

            <Helmet>
                <title>Islamic Center | Sign-Up</title>
            </Helmet>




            <div>
                <div className="hero min-h-screen bg-black">
                    <div className="hero-content flex-col lg:flex-row-reverse" data-aos="flip-right">
                        <div className="text-center lg:text-left text-cyan-400">
                            <h1 className="text-5xl font-bold">Sign-Up Now!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut exercitationem quasi. </p>
                        </div>
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl " data-aos="flip-left">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Name</span>
                                    </label>
                                    <input type="text"{...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" required />

                                    {errors.name && <span className="text-red-400">This field is required</span>}
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Photo URL</span>
                                    </label>
                                    <input type="text"{...register("photoURL", {
                                        required: true
                                    })}
                                        placeholder="photo Url" className="input input-bordered" required />
                                    {errors.PhotoURL && <span
                                        className="text-red-400">photo url  is
                                        required</span>}
                                </div>



                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Email</
                                        span>
                                    </label>
                                    <input type="email"{...register("email", { required: true })} name="email" placeholder="email"
                                        className="input input-bordered" required />
                                    {errors.email && <span className="text-red-400">This field is
                                        required</span>}
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Password</span>
                                    </label>
                                    <input type="password" {...register("password", { required: true, maxLength: 20, minLength: 6 })} placeholder="password" className="input input-bordered" required />
                                    {errors.password && <span className="text-red-400 ">Password minimum 6 character</span>}


                                    <label className="label">
                                        <a href="#" className="label-text-alt text-white link link-hover ">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Register" />

                                </div>
                                <p className="ml-10  mb-10 italic 
                                           font-bold text-white">Already Have an Account?<Link
                                        className="text-orange-400 ml-3" to="/logins">
                                        Login
                                    </Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SignUp;