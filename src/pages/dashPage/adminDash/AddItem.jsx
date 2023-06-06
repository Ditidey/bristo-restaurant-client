import React from 'react';
import useTitle from '../../../components/useTitle';
import SectionTitle from '../../../components/SectionTitle';
import { useForm } from "react-hook-form";
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const img_token = import.meta.env.VITE_IMG_TOKEN;

const AddItem = () => {
    useTitle('add item');
    const [axiosSecure] = useAxiosSecure();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const img_url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_TOKEN}`

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(img_url, {
            method: 'POST',
            body: formData
        }).then(res => res.json()).then(file => {
            if (file.success) {
                const imgURL = file.data.display_url;
                const newItem = {
                    image: imgURL,
                    price: data.price,
                    name: data.name,
                    recipe: data.recipe,
                    category: data.category,
                }
                console.log(newItem)
                 axiosSecure.post('/menu', newItem).then(res =>{
                    if(res.data.insertedId){
                        reset()
                        Swal.fire({
                            icon: 'success',
                            timer: '1500',
                            text: 'Item added successfully',
                            showConfirmButton: false,
                        })
                    }
                 })
            }
        }
        )
    };
    return (
        <div className='w-full px-8'>
            <SectionTitle heading={'Add an Item'} subheading={"What's new?"}></SectionTitle>

            <form onSubmit={handleSubmit(onSubmit)} className='bg-slate-100 px-20 m-8 py-16 rounded-md'>
                <label htmlFor="name">Recipe Name</label>
                <input
                    className="input w-full input-bordered" type='text'
                    {...register("name", { required: true })}
                    aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name?.type === 'required' && <p role="alert" className='text-red-500'>Name is required</p>}

                <div className='flex items-center justify-between'>
                    <div className='w-full me-2'>
                        <label className="label">
                            <span className="label-text">Category</span>

                        </label>
                        <select {...register("category", { required: true })} className="select w-full  select-bordered">
                            <option disabled selected>Category</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Pizza</option>
                            <option>Drinks</option>
                            <option>Dessert</option>
                            <option>Desi</option>
                        </select>
                        {errors.category && <p role="alert" className='text-red-500'>{errors.price?.message}</p>}
                    </div>
                    <div className='w-full mt-1 ms-4'>
                        <label className="label-text">Price</label>
                        <input className="input w-full input-bordered mt-1" type='number'
                            {...register("price", { required: "Price is required" })}
                            aria-invalid={errors.mail ? "true" : "false"}
                        />
                        {errors.price && <p role="alert" className='text-red-500'>{errors.price?.message}</p>}
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recipe details </span>
                    </label>
                    <textarea  {...register("recipe", { required: "Details is required" })} className="textarea textarea-bordered h-24" placeholder="details"></textarea>
                    {errors.recipe && <p role="alert" className='text-red-500'>{errors.recipe?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Item Image</span>
                    </label>
                    <input type="file"  {...register("image", { required: true })} className="file-input file-input-bordered w-full bg-red-200 max-w-xs" />
                    {errors.image && <p role="alert" className='text-red-500'>{errors.price?.message}</p>}
                </div>
                <input type="submit" value={"Add item"} className='btn btn-sm w-full mt-8 bg-red-400' />
            </form>
        </div>


    );
};

export default AddItem;