import React from 'react';
import "./AddProject.css"
import { useForm } from "react-hook-form";
const AddProjects = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = (data) => {
        console.table(data)
        alert("successfully submitted")
        // reset()
    };
    useForm({
        required: true,
      })

    return (
        <>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>

                <input  {...register("project_name", { required: true })} autoComplete="off" placeholder="project_name" autoFocus />
                <input type='number' min={1} placeholder="id" {...register("id", { required: true })} />
                <input  {...register("videoUrl", { required: true })} autoComplete="off" placeholder="videoUrl"/>
                <input  {...register("imgUrl", { required: true })} autoComplete="off" placeholder="imgUrl"/>
                <input  {...register("title", { required: true })} autoComplete="off"placeholder="title" />
                <input  {...register("frontEnd", { required: true })} autoComplete="off"placeholder="frontEnd" />
                <input  {...register("BackEnd", { required: true })} autoComplete="off"placeholder="BackEnd" />
                <input  {...register("deployment", { required: true })} autoComplete="off"placeholder="deployment" />
                <input  {...register("description", { required: true })} autoComplete="off"placeholder="description" />
                <input className="my-3" type="submit" value="REQUEST TO DONATE" />
                
            </form>
        </>
    );
};

export default AddProjects;