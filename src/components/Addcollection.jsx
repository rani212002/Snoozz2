import React, { useState } from 'react'
import { get_user } from './allfun';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Addcollection() {
    const userauth = get_user()
    const [errors, setErrors] = useState([])

    const [data, setdata] = useState(
        {
            image: "",
            cover: ""
        }
    )
    const [collname, setcollname] = useState(
        {
            colname: "",
        }
    )
    const handleChange = (e) => {
        e.preventDefault()
        setdata({
            image: e.target.files[0],
            cover: e.target.files[0]
        });
    }
    const handlename = (e) => {
        setcollname({
            colname: e.target.value,
        });
    }
    const submitProfile = async (e) => {
        e.preventDefault();
        console.log(data)
        console.log(collname.colname)
        const formData = new FormData();
        formData.append("name", collname.colname);
        formData.append("cover", data.cover);
        formData.append("image", data.image);
        formData.append("user_id", userauth.id);
        console.log("formData")
        console.log(formData)
        await axios({
            method: 'POST',
            url: process.env.REACT_APP_API_PATH + 'submit-collection',
            data: formData,
        }).then(function (res) {
            if (res.data.success && res.data.success == 1) {
                console.log('res')
                console.log(res)
                toast("Token Buyes Successfully!",{
                    autoClose: 1000,
                });
            } else {
            }
            console.log(res)
        }).catch((err) => {
            const errors = err.response.data.data;
            console.log(errors)
            console.log('errors')
            console.log(errors)
            setErrors(errors)
            toast("Someting went wronge",{
                autoClose: 1000,
            });
        });
    };
    const closeMessage = (e) => {
        if (e == 1) {
        }
    }
    return (
        <>
           <ToastContainer/>
            <div className="container-fluied auto_height mt-5">
                <h2 className='color_pencile text-center m-5'> Add Your Collection</h2>
                <div className="d-flex justify-content-center">
                    <div className="card  bg-transparent form_card form_width">
                        <div className="card-body">
                            <form onSubmit={submitProfile} encType="multipart/form-data" id="imageForm">
                                <div className="mb-3">
                                    <label htmlFor="collection" className="form-label color_pencile">Collection</label>
                                    <input type="text" className="form-control bg-transparent border_theme_1px inp_radius color_theme  rounded" onChange={handlename} name="colname" />
                                    {errors && <span className="text-danger">{errors.name}</span>}
                                   {console.log(errors)}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formFile" className="form-label color_pencile">Image</label>
                                    <input type="file" className="form-control bg-transparent border_theme_1px rounded inp_radius" onChange={handleChange} name="image" id="image" />
                                    {errors && <span className="text-danger">{errors.image}</span>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="coverimg" className="form-label color_pencile">Cover Image(Image dimension 1400 x 400)</label>
                                    <input type="file" className="form-control bg-transparent border_theme_1px rounded inp_radius" onChange={handleChange} name="cover" id="coverimg" />
                                    {errors && <span className="text-danger">{errors.cover}</span>}
                                </div>
                                <button type="submit" className="Snoozz_fn_button p-3 shdow_green mt-2">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
