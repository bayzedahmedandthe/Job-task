import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "./AuthProvider";

const Register = () => {
    const { createUser, updateUserProfile, setUser } = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        console.log(createUser);
        if (data.password.length < 6) {
            return toast.error("password must be 6 character")
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
        if (!passwordRegex.test(data.password)) {
            return toast.error("password must be one uppercase one lowercase")
        }
        createUser(data.email, data.password)
            .then(result => {
                console.log(result);
                toast.success("Sign up successful");
                const newUser = data.user;
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        setUser({ ...newUser, displayName: data.name, photoURL: data.photo });
                    })
                .catch(error => console.log(error))

            })
            .catch(error => {
                console.log(error);
                toast.error("auth/email already in use")
            })
    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#091646] to-[#491906] pt-44 md:py-28 lg:pt-36">
            <div className="max-w-sm  mx-auto bg-gradient-to-br from-[#132c85] to-[#8f320d] bg-opacity-95 rounded-md">
                <h3 className="text-secondary pl-8 font-semibold md:text-xl text-md pt-8">Sign up Now</h3>
                <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text font-semibol py-2 text-secondary md:text-xl text-md">Name</span>
                        </label>
                        <input {...register("name")} type="text" placeholder="name" className="input input-bordered bg-slate-300" required />
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text font-semibol py-2 text-secondary md:text-xl text-md">PhotoURL</span>
                        </label>
                        <input {...register("photo")} type="url" placeholder="PhotoURL" className="input input-bordered bg-slate-300" required />
                    </div>
                    <div className="form-control  ">
                        <label className="label">
                            <span className="label-text font-semibold py-2 text-secondary md:text-xl text-md">Email</span>
                        </label>
                        <input {...register("email")} type="email" placeholder="email" className="input input-bordered bg-slate-300" required />
                    </div>
                    <div className="form-control  ">
                        <label className="label">
                            <span className="label-text font-semibold py-2 text-secondary md:text-xl text-md">Password</span>
                        </label>
                        <input {...register("password")} type="password" placeholder="Password" className="input input-bordered bg-slate-300" required />
                    </div>
                    <div className="form-control pt-6 ">
                        <button className="btn btn-outline btn-secondary w-full md:text-xl text-md">Sign up</button>
                    </div>
                </form>
                <p className="pl-8 pb-8 text-secondary">Already have an account? <Link to="/"><span className="hover:text-lg hover:underline">Login now</span></Link></p>
            </div>
        </div>
    );
};

export default Register;