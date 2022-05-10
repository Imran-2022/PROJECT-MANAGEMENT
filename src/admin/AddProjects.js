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

    return (
        <>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>

                <input  {...register("project_name", { required: true })} autoComplete="off" placeholder="project_name" autoFocus />
                {errors.project_name && <p>This field is required</p>}
                <input type='number' min={1} placeholder="id" {...register("id", { required: true })} />
                {errors.id && <p>This field is required</p>}
                <input  {...register("videoUrl", { required: true })} autoComplete="off" placeholder="videoUrl"/>
                {errors.videoUrl && <p>This field is required</p>}
                <input  {...register("imgUrl", { required: true })} autoComplete="off" placeholder="imgUrl"/>
                {errors.imgUrl && <p>This field is required</p>}
                <input  {...register("title", { required: true })} autoComplete="off"placeholder="title" />
                {errors.title && <p>This field is required</p>}
                <input  {...register("frontEnd", { required: true })} autoComplete="off"placeholder="frontEnd" />
                {errors.frontEnd && <p>This field is required</p>}
                <input  {...register("BackEnd", { required: true })} autoComplete="off"placeholder="BackEnd" />
                {errors.BackEnd && <p>This field is required</p>}
                <input  {...register("deployment", { required: true })} autoComplete="off"placeholder="deployment" />
                {errors.deployment && <p>This field is required</p>}
                <input  {...register("description", { required: true })} autoComplete="off"placeholder="description" />
                {errors.description && <p>This field is required</p>}
                
                <input className="my-3" type="submit" value="REQUEST TO DONATE" />
            </form>
        </>
    );
};

export default AddProjects;