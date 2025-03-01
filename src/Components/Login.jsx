import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
    const { loginUser, loginWithGoogle } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        loginUser(data.email, data.password)
            .then(result => {
                toast.success("Login in successful")
                console.log(result);
            })
            .catch(error => {
                toast.error("Invalid credentials")
                console.log(error);
            })
    }
    const handleLoginWithgoogle = () => {
        loginWithGoogle()
        .then(result => {
            console.log("success", result);
        })
        .catch(error => {
            console.log(error);
        })
       
    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#091646] to-[#491906] pt-44 md:py-28 lg:pt-36">
            <div className="max-w-sm  mx-auto bg-gradient-to-br from-[#132c85] to-[#8f320d] bg-opacity-95 rounded-md">
                <h3 className="text-secondary font-semibold pl-8 md:text-xl text-md pt-8">Login Now</h3>
                <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control  ">
                        <label className="label">
                            <span className="label-text font-semibold py-2 text-secondary md:text-xl text-md">Email</span>
                        </label>
                        <input {...register("email")} type="email" placeholder="email" className="input input-bordered bg-slate-300" required />
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text font-semibol py-2 text-secondary md:text-xl text-md">Password</span>
                        </label>
                        <input {...register("password")} type="password" placeholder="password" className="input input-bordered bg-slate-300" required />
                    </div>
                    <div className="form-control pt-6 ">
                        <button className="btn btn-outline btn-secondary w-full md:text-xl text-md">Login</button>
                    </div>
                </form>
                <div className=" ">
                    <button onClick={handleLoginWithgoogle} className="btn btn-outline btn-secondary w-[320px] mx-auto md:text-xl text-md flex items-center">Login with Google <span className="text-2xl"><FcGoogle /></span></button>
                </div>
                <p className="pl-8 py-6 text-secondary">New to this website? <Link to="/register"><span className="hover:text-lg hover:underline">Sign up now</span></Link></p>
            </div>
        </div>
    );
};

export default Login;