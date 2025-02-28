import { useForm } from "react-hook-form";

const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        console.log(data);
    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#091646] to-[#491906] pt-44 md:py-28 lg:pt-36">
            <div className="max-w-sm  mx-auto bg-gradient-to-br from-[#132c85] to-[#8f320d] bg-opacity-95 rounded-md">
                <h3 className="text-secondary pl-8 font-semibold md:text-xl text-md pt-8">Sign In Now</h3>
                <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text font-semibol py-2 text-secondary md:text-xl text-md">Name</span>
                        </label>
                        <input {...register("name")} type="text" placeholder="name" className="input input-bordered bg-slate-300" required />
                    </div>
                    <div className="form-control  ">
                        <label className="label">
                            <span className="label-text font-semibold py-2 text-secondary md:text-xl text-md">Email</span>
                        </label>
                        <input {...register("email")} type="email" placeholder="email" className="input input-bordered bg-slate-300" required />
                    </div>
                    <div className="form-control pt-6 ">
                        <button className="btn btn-outline btn-secondary w-full md:text-xl text-md">Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;