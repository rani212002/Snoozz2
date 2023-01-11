import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../css/additem.css'
import dummy from '../img/dummy-nft.jpg'
import accrord from '../img/accordian_side.png'
import $ from "jquery";
import { get_user } from './allfun'
export default function Additem() {
    const userauth = get_user()
   const [collection,setcollection]=useState([])
  const [likestatus,setlikestatus]= useState([])
  const[resone,setresone]=useState([])
  const[restwo,setrestwo]=useState([])
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
        collection:"",
        itemterms:"",
        image_uploads:""
    })
    const getcollections= ()=>{
        const postData = { user_id: userauth.id };
        const response = axios({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            url: process.env.REACT_APP_API_PATH + 'add-item',
            data: postData
        }).then(async function (response) {
            const res = await response.data;
            console.log('res')
            console.log(res.data)
            setcollection(res.data)
    
        });
    }
    const handleChangecol =(e)=>{
        console.log(e.target.value)
        itemdata.collection =e.target.value
       }
       const handleChangeimg = function (e) {
        var images = document.getElementById("pic");
        images.src = URL.createObjectURL(e.target.files[0]);
        itemdata.image_uploads = e.target.files[0]
        setnft({
            image: e.target.files[0],
        })
        console.log(e.target.files[0])
    };
    const submitItem = async (e) => {
       console.log(itemdata)
       itemdata.itemterms = 1
        const formData = new FormData();
        formData.append("user_id", userauth.id);
        formData.append("title",itemdata.title);
        // formData.append("royalty",2);
        // formData.append("fees",8);
        formData.append("price",itemdata.price);
        formData.append("royalty",itemdata.royalty);
        formData.append("fees",itemdata.fees);
        formData.append("description",itemdata.desc);
        formData.append("collection",itemdata.collection);   
        formData.append("item-terms", "1");
        formData.append("image_uploads", itemdata.image_uploads);
        await axios({
            method: 'POST',
            url: process.env.REACT_APP_API_PATH + 'validate-item',
            data: formData,
        }).then(function (res) {
            console.log("resthen")
            console.log(res)
            if (res.status == 200) {
                console.log("res succes")
                uplaod()
            }
      
        }).catch((err) => {
            const errors = err.response;
            console.log('errors')
            console.log(errors)
        });
    };
    
    


    const uplaod = async()=>{
        console.log("upload running")
        const formData = new FormData();
        formData.append("user_id", userauth.id);
        formData.append("title",itemdata.title);
        formData.append("price",itemdata.price);
        formData.append("royalty",2);
        formData.append("fees",8);
        formData.append("royalty",itemdata.royalty);
        formData.append("fees",itemdata.fees);
        formData.append("description",itemdata.desc);
        formData.append("collection",itemdata.collection);   
        formData.append("item-terms", "1");
        formData.append("image_uploads", itemdata.image_uploads);
        formData.append("ipfs_hash", resone.IpfsHash);
        formData.append("insert_weekly_record", resone.insert_weekly_record);
        formData.append("update_weekly_record", resone.update_weekly_record);
        formData.append("increment_weekly_record",resone.increment_weekly_record);
        axios({
            method: 'POST',
            url: 'https://gama.profitsla.com/upload/upload_img',
            data: formData,
        }).then(function (res) {
            if (res){
                console.log("resthen")
                console.log(res)
                 if (res != "" && res.image_exist) {
                formData.append("ipfs_hash", res.IpfsHash);
                formData.append("insert_weekly_record", res.insert_weekly_record);
                formData.append("update_weekly_record", res.update_weekly_record);
                formData.append("increment_weekly_record",res.increment_weekly_record);
                setresone(res)
                console.log('innn')
              
        }
                setrestwo(res)
                submitall()
            }
        }).catch((err) => {
            const errors = err.response;
            console.log('errors')
            console.log(errors)
        })
    }
    const submitall = async(e)=>{
        console.log("submit all running")
        const formData = new FormData();
        formData.append("user_id", userauth.id);
        formData.append("title",itemdata.title);
        formData.append("price",itemdata.price);
        // formData.append("royalty",itemdata.royalty);
        formData.append("royalty",itemdata.royalty);
        formData.append("fees",itemdata.fees);
        // formData.append("fees",itemdata.fees);
        formData.append("description",itemdata.desc);
        formData.append("collection",itemdata.collection);   
        formData.append("item-terms", "1");
        formData.append("image_uploads", itemdata.image_uploads);
        formData.append("ipfs_hash", resone.IpfsHash);
        formData.append("insert_weekly_record", resone.insert_weekly_record);
        formData.append("update_weekly_record", resone.update_weekly_record);
        formData.append("increment_weekly_record",resone.increment_weekly_record);
        axios({
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            url: process.env.REACT_APP_API_PATH + 'submit_item',
            data: formData,
        }).then(function (res) {
            if (res)
            {
                console.log("submit res")
                console.log(res)
            }
          
        }).catch((err) => {
            const errors = err.response;
            console.log('errors')
            console.log(errors)
        })
    }
    const submitProfile = async (e) => {
        e.preventDefault();
        // submitImage()
        submitItem()
    };
    const checkfun = (e)=>{
        console.log(e.target.checked==1?"tru":"false")
        if(e.target.checked)
        {
        itemdata.itemterms= 1
        }else
        {
            itemdata.itemterms=0
        }
    }
    const handleChange = ({ currentTarget: input }) => {
        setitemdata({ ...itemdata, [input.name]: input.value })
       
    //     console.log(itemdata)
    //     let price = document.getElementById('price').value
    //     console.log(price)
    //  let royality= document.getElementById("royalites").value
    //  let fees= document.getElementById("service_fees").value
    //  let per = price * royality.value+fees.value/100
    //  console.log("per")
    //  console.log(royality +fees)
    //  document.getElementById("finalprice").value = (price+per);
    //  console.log(fees)
    }
    useEffect (()=>{
        getcollections()
       },[])
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mt-5">
                        <p className='color_pencile'>PREVIEW</p>
                        <img src={dummy} id='pic' className='w-100' />
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
                                <input type="number"  onChange={handleChange} name='royalty'   min="0" className="form-control bg-transparent border_theme_1px  color_theme p-2 " id="royalites" />
                            </div>
                            <div className="mb-3 mt-3">
                                <label htmlFor="service_fees" className="form-label color_pencile">Service Fees(%)</label>
                                <input type="number"  onChange={handleChange} name='fees'  min="0" className="form-control bg-transparent border_theme_1px  color_theme p-2 " id="service_fees" />
                            </div>
                            {/* <div className="mb-3 mt-3">
                                <label htmlFor="final_price" className="form-label color_pencile">Final Price(%)</label>
                                <input type="number"  onChange={handleChange} name='finalprice'  min="0" className="form-control bg-transparent border_theme_1px  color_theme p-2 " id='finalprice'/>
                            </div> */}
                            <label htmlFor="desc" className="form-label color_pencile">Description</label>
                            <div className="form-floating">
                                <textarea  onChange={handleChange} name='description' className="form-control bg-transparent border_theme_1px  color_theme p-2 " placeholder="Leave a comment here" id="desc"></textarea>
                            </div>
                            <div className="mb-3 mt-3">
                           
                            <label htmlFor="collectionlabel" className="form-label color_pencile">Collection</label>
                                <select className="form-select bg-transparent color_theme"  onChange={handleChangecol}  name='collection' aria-label="Default select example">
                                  {collection.map((e)=>{
                                    return <option value={e.name}>{e.name}</option>
                                  })}
                                </select>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input color_theme" onClick={checkfun} type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label color_theme" htmlFor="flexCheckDefault">By minting this NFT you agree that these works belong to you and only you. Please respect the creativity of other artists in the space. We would love you for it.
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
