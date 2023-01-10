import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../css/additem.css'
import accrord from '../img/accordian_side.png'
import { get_user } from './allfun'
export default function Additem() {
    const userauth = get_user()
    const [nft, setnft] = useState(
        {
            image: "",
        }
    )
    const [itemdata, setitemdata] = useState({
        title:"",
        price:"",
        royalty:"",
        fees:"",
        description:"",
        collection:""

    })

    const submitImage = async (e) => {
  
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


    
    const submitItem = async (e) => {
       
        const formData = new FormData();
        formData.append("user_id", userauth.id);
        formData.append("id",2);
        formData.append("title",itemdata.title);
        formData.append("price",itemdata.price);
        formData.append("royalty",itemdata.royalty);
        formData.append("fees",itemdata.fees);
        formData.append("description",itemdata.desc);
        formData.append("collection","NFT1");   
        formData.append("insert_weekly_record",1)
        formData.append("ipfs_hash","fjkefhfdhfdjkshfjkfhjskfhdkjfhjks")
        await axios({
            method: 'POST',
            url: process.env.REACT_APP_API_PATH + 'validate_item',
            data: formData,
        }).then(function (res) {
            console.log("resthen")
            console.log(res)
        }).catch((err) => {
            const errors = err.response;
            console.log('errors')
            console.log(errors)
        });
    };
    
    const submitProfile = async (e) => {
        e.preventDefault();
        submitImage()
        submitItem()
    };

    const handleChangeimg = function (event) {
        var images = document.getElementById("pic");
        images.src = URL.createObjectURL(event.target.files[0]);
        setnft({
            image: event.target.files[0],
        })
        console.log(event.target.files[0])
    };

    const handleChange = (e) => {
        setitemdata({ ...itemdata, [e.name]: e.value })
        
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mt-5">
                        <p className='color_pencile'>PREVIEW</p>
                        <img src='https://snoozz.io/ver1/img/dummy-nft.jpg' id='pic' className='w-100' />
                    </div>
                    <div className="col-lg-8 mt-5">
                        <form onSubmit={submitProfile} encType="multipart/form-data" id="imageForm" >
                            <div className="container p-5 select_container mt-5">
                                <p className='color_theme text-center'> PNG, JPG, JPEG
                                    Height: 500, Width: 500</p>
                                <div className='d-flex justify-content-center'>
                                    <input type="file" id='nft_img' onChange={handleChangeimg} className="Snoozz_fn_button select_width shdow_green p-3 fwthin">
                                    </input>
                                </div>
                            </div>
                            <div className="mb-3 mt-3">
                                <label htmlFor="title" className="form-label color_pencile">Title</label>
                                <input type="text"  onChange={handleChange} name='title' className="form-control bg-transparent border_theme_1px  color_theme p-2 " id="title" />
                            </div>
                            <div className="mb-3 mt-3">
                                <label htmlFor="price" className="form-label color_pencile">Price</label>
                                <input type="number"  onChange={handleChange} name='price' min="0" className="form-control bg-transparent border_theme_1px  color_theme p-2 " id="price" />
                            </div>
                            <div className="mb-3 mt-3">
                                <label htmlFor="royalites" className="form-label color_pencile">Royalties(%)</label>
                                <input type="number"  onChange={handleChange} name='royalty' min="0" className="form-control bg-transparent border_theme_1px  color_theme p-2 " id="royalites" />
                            </div>
                            <div className="mb-3 mt-3">
                                <label htmlFor="service_fees" className="form-label color_pencile">Service Fees(%)</label>
                                <input type="number"  onChange={handleChange} name='fees' min="0" className="form-control bg-transparent border_theme_1px  color_theme p-2 " id="service_fees" />
                            </div>
                            <label htmlFor="desc" className="form-label color_pencile">Description</label>
                            <div className="form-floating">
                                <textarea  onChange={handleChange} name='description' className="form-control bg-transparent border_theme_1px  color_theme p-2 " placeholder="Leave a comment here" id="desc"></textarea>
                            </div>
                            <div className="mb-3 mt-3">
                            <label htmlFor="collectionlabel" className="form-label color_pencile">Collection</label>
                                <select className="form-select bg-transparent color_theme"  onChange={handleChange} name='collection' aria-label="Default select example">
                                    <option defaultValue>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input color_theme" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label color_theme" htmlFor="flexCheckDefault">
                                    By minting this NFT you agree that these works belong to you and only you. Please respect the creativity of other artists in the space. We would love you for it.
                                </label>
                            </div>
                            <button type="submit" className="Snoozz_fn_button p-3 shdow_green mt-2" onClick={() => submitProfile()}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
