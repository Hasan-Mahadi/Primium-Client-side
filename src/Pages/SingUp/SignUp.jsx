
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";



const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
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
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-200" data-aos="flip-left">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text"{...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" required />

                                    {errors.name && <span className="text-red-400">This field is required</span>}
                                </div>

                                <div className="form-control">
                                    <label className="label"> 
                                        <span className="label-text ">Email</
                                        span>
                                    </label>
                                    <input type="email"{...register("email", { required: true })} name="email" placeholder="email"
                                        className="input input-bordered" required />
                                    {errors.email && <span className="text-red-400">This field is
                                        required</span>}
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register("password", { required: true, maxLength: 20 ,minLength:6})} placeholder="password" className="input input-bordered" required />
                                    {errors.password && <span className="text-red-400 ">Password minimum 6 character</span>}


                                    <label className="label">
                                        <a href="#" className="label-text-alt text-white link link-hover ">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SignUp;