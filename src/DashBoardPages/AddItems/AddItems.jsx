import React from 'react';
import Sectiontitle from '../../sheared/SectionTitle/Sectiontitle';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AddItems = () => {
    const [axiosSecure] = useAxiosSecure();
    const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_APP_IMAGE_ACCESS_TOKEN}`
    const { register, handleSubmit, formState: { errors },reset } = useForm();
    const onSubmit = data => {
        const formData=new FormData()
        formData.append("image",data.image[0])
        console.log(data);
        fetch(imageHostingUrl,{
            method:"POST",
            body:formData
        })
        .then(res=>res.json())
            .then(imgResponse =>{
                console.log(imgResponse);
                if (imgResponse.success) {
                    const imageURL = imgResponse.data.display_url 
                    console.log(imageURL);
                    const { category, price, recipeDetails, recipeName }=data 
                    const newitems = { name: recipeName, category, recipe: recipeDetails, image: imageURL, price: parseFloat(price)}
                    console.log(newitems);
                    axiosSecure.post("/addallFoodMenu",newitems)
                    .then(data=>{
                        console.log("After Added Product",data.data)
                        if (data.data.insertedId) {
                            reset()
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Your work has been saved',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            
                        }
                
                })
                }

            })
    };
    console.log(errors);
    return (
        <div className=' w-[70%] mx-auto '>
            <Sectiontitle heading={"ADD AN ITEM"} subHeading={"---What's new?---"}></Sectiontitle>
            <div className=' bg-[#F3F3F3]  mx-auto px-16 py-5 '>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Recipe name*</span>
                        </label>
                        <input type="text" {...register("recipeName", { required: true})} name='recipeName' placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                    <div className="flex gap-6">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue={"Pick one"} {...register("category", { required: true })} name='category' className="select select-bordered">
                                <option>Pick one</option>
                                <option>salad</option>
                                <option>pizza</option>
                                <option>soup</option>
                                <option>dessert</option>
                                <option>drinks</option>
                            </select>
                        </div>
                        <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text">Price*</span>
                                    </label>
                            <input type="number" {...register("price", { required: true, })} placeholder="Type here" className="input input-bordered w-full " />
                                   
                                </div>
                      
                            
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>
                        </label>
                        <textarea {...register("recipeDetails", { required: true,})} className="textarea textarea-bordered h-[250px]" placeholder="Recipe Details"></textarea>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Pick a file</span>
                        </label>
                        <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                    </div>
                    <input type="submit" className="btn btn-sm my-5 btn-warning" value="Add An Item" />

                </form>

            </div>
            
        </div>
    );
};

export default AddItems;