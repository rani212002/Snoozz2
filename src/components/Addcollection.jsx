import React, { useState } from 'react'
import { get_user } from './allfun';
import axios from 'axios';

export default function Addcollection() {
    const userauth = get_user()
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
            // colname: e.target.name.value,
            image: e.target.files[0],
            cover: e.target.files[0]
        });
    }
    const handlename = (e) => {

        setcollname({
            colname: e.target.value,
        });
    }
    console.log(collname.colname)

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
            } else {
            }
            console.log(res)
        }).catch((err) => {

            const errors = err.response;
            console.log(errors)
            console.log('errors')
            console.log(errors)
        });
    };
    const closeMessage = (e) => {
        if (e == 1) {

        }
    }
    return (
        <>
            <div className="container-fluied auto_height mt-5">
                <h2 className='color_pencile text-center m-5'>Your Activity</h2>
                <div className="d-flex justify-content-center">
                    <div className="card  bg-transparent form_card form_width">
                        <div className="card-body">
                            <form onSubmit={submitProfile} encType="multipart/form-data" id="imageForm">
                                <div className="mb-3">
                                    <label htmlfor="collection" className="form-label color_pencile">Collection</label>
                                    <input type="text" className="form-control bg-transparent border_theme_1px inp_radius color_theme  rounded" onChange={handlename} name="colname" />
                                </div>
                                <div className="mb-3">
                                    <label htmlfor="formFile" className="form-label color_pencile">Image</label>
                                    <input type="file" className="form-control bg-transparent border_theme_1px rounded inp_radius" onChange={handleChange} name="image" id="image" />
                                </div>
                                <div className="mb-3">
                                    <label htmlfor="coverimg" className="form-label color_pencile">Cover Image(Image dimension 1400 x 400)</label>
                                    <input type="file" className="form-control bg-transparent border_theme_1px rounded inp_radius" onChange={handleChange} name="cover" id="coverimg" />
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
