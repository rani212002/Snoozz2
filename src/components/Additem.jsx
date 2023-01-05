import React, { useState,useEffect } from 'react'
import axios from 'axios'
import '../css/additem.css'
import accrord from '../img/accordian_side.png'
import { get_user } from './allfun'
export default function Additem() {
    const userauth = get_user()
    const [nft,setnft] = useState(
        {
            image: "",
        }
    )
    const submitProfile = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", nft.image);
        formData.append("user_id", userauth.id);
        await axios({
            method: 'POST',
            url: process.env.REACT_APP_API_PATH + 'validate-item',
            data: formData,
        }).then(function (res) {
            if (res.data.success && res.data.success == 1) {
                console.log('res')
                console.log(res)
            } else {
            }
            console.log("resthen")
            console.log(res)
        }).catch((err) => {
            const errors = err.response;
            console.log('errors')
            console.log(errors)
        });
    };

    const handleChange = function (event) 
    {
      var images = document.getElementById("pic");
      images.src =URL.createObjectURL(event.target.files[0]);
      setnft({
        image:event.target.files[0],
      })
      console.log(event.target.files[0])
    };
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mt-5">
                        <p className='color_pencile'>PREVIEW</p>
                        <img src='https://snoozz.io/ver1/img/dummy-nft.jpg'  id='pic' className='w-100' />
                    </div>
                    <div className="col-lg-8 mt-5">
                        <form  onSubmit={submitProfile} encType="multipart/form-data" id="imageForm" >
                            <div className="container p-5 select_container mt-5">
                                <p className='color_theme text-center'> PNG, JPG, JPEG
                                    Height: 500, Width: 500</p>
                                <div className='d-flex justify-content-center'>
                                    <input type="file" id='nft_img'  onChange={handleChange} className="Snoozz_fn_button select_width shdow_green p-3 fwthin">
                                    </input>
                                </div>
                            </div>
                            <div className="mb-3 mt-3">
                                <label htmlFor="title" className="form-label color_pencile">Title</label>
                                <input type="text" className="form-control bg-transparent border_theme_1px  color_theme p-2 " id="title" />
                            </div>
                            <div className="mb-3 mt-3">
                                <label htmlFor="price" className="form-label color_pencile">Price</label>
                                <input type="text" className="form-control bg-transparent border_theme_1px  color_theme p-2 " id="price" />
                            </div>
                            <div className="mb-3 mt-3">
                                <label htmlFor="royalites" className="form-label color_pencile">Royalties(%)</label>
                                <input type="text" className="form-control bg-transparent border_theme_1px  color_theme p-2 " id="royalites" />
                            </div>
                            <div className="mb-3 mt-3">
                                <label htmlFor="service_fees" className="form-label color_pencile">Service Fees(%)</label>
                                <input type="text" className="form-control bg-transparent border_theme_1px  color_theme p-2 " id="service_fees" />
                            </div>
                            <div className="mb-3 mt-3">
                                <label htmlFor="final_price" className="form-label color_pencile">Final Price</label>
                                <input type="text" className="form-control bg-transparent border_theme_1px  color_theme p-2 " id="final_price" />
                            </div>
                            <label htmlFor="desc" className="form-label color_pencile">Description</label>
                            <div className="form-floating">
                                <textarea className="form-control bg-transparent border_theme_1px  color_theme p-2 " placeholder="Leave a comment here" id="desc"></textarea>
                            </div>

                            <div className="mb-3 mt-3">
                                <label htmlFor="final_price" className="form-label color_pencile">Final Price</label>
                                <input type="text" className="form-control bg-transparent border_theme_1px  color_theme p-2 " id="final_price" />
                            </div>

                            <div className="form-check">
                            <input className="form-check-input color_theme" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label color_theme" for="flexCheckDefault">
                            By minting this NFT you agree that these works belong to you and only you. Please respect the creativity of other artists in the space. We would love you for it.
                            </label>
                            </div>
                            <button type="submit" className="Snoozz_fn_button p-3 shdow_green mt-2">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
