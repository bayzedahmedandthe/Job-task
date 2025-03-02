import { useForm } from "react-hook-form";
import useAxios from "./UseAxios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";
const HomePage = () => {
    const [tasks, setTasks] = useState([]);
    const { user } = useContext(AuthContext);
    const userEmail = user?.email;
    const { register, handleSubmit, reset } = useForm();
    const axios = useAxios();
    const currentTime = new Date().toDateString();
    const onSubmit = data => {
        const updateData = { ...data, currentTime, userEmail };
        axios.post("/allTask", updateData)
            .then(res => {
                Swal.fire({
                    title: "Task added successful",
                    icon: "success",
                    draggable: true
                });

                // console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        console.log(updateData);
        reset();
    }

        
    useEffect(() => {
        axios.get(`allTasks/${userEmail}`)
            .then(res => {
                setTasks(res.data)
                // console.log(res.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);
    // console.log(tasks);
    const toDo = tasks.filter(item => item.category === "To-Do");
    // console.log(toDo);
    const inProgress = tasks.filter(item => item.category === "In Progress");
    // console.log(inProgress);
    const done = tasks.filter(item => item.category === "Done");
    // console.log(done);
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#091646] to-[#491906]">
            <div className="w-11/12 mx-auto ">
                <h2 className="text-lg md:text-2xl font-semibold text-white py-8">My Trun Board</h2>
                <form className="md:flex md:items-center md:justify-between md:space-y-0 space-y-8" onSubmit={handleSubmit(onSubmit)}>
                    <div className="md:w-[350px] ">

                        <textarea {...register("title", { required: true })} className="textarea w-full" placeholder="Title"></textarea>
                    </div>
                    <div className="md:w-[350px] ">

                        <select defaultValue="default" {...register("category", { required: true })} className="select select-secondary w-full">
                            <option disabled value="default">Select a Category</option>
                            <option>To-Do</option>
                            <option>In Progress</option>
                            <option>Done</option>
                        </select>
                    </div>
                    <div className="md:w-[350px]">
                        <button className="btn btn-outline btn-secondary w-full  md:text-xl text-md">Add a Task</button>
                    </div>
                </form>
                <div className="md:flex md:items-center md:justify-between md:space-y-0 space-y-8 md:pt-28 pt-8">
                    <div className="border border-secondary rounded-sm">dfstgrf</div>
                    <div className="border border-secondary rounded-sm">dfstgrf</div>
                    <div className="border border-secondary rounded-sm">dfstgrf</div>
                </div>

            </div>
        </div>
    );
};

export default HomePage;