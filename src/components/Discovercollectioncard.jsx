
import { useState,useEffect } from 'react'; 
import React from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import {get_user} from '../components/allfun.js'
import { useNavigate } from 'react-router-dom';


export default function Discovercollectioncard() {
  const navigate = useNavigate();
    const [collnftdata, setcollnftdata] = useState([]);
    const userauth = get_user()
    useEffect(() => {
      const postData = { user_id: userauth.id };
      const response = axios({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        url: process.env.REACT_APP_API_PATH + "collection",
        data: postData,
      }).then(async function (response) {
        const res = await response.data.data;
        console.log(res.collections);
        setcollnftdata(res.collections);
      });
    }, []);
    const getid =(id)=> {
      console.log(id)
       navigate(`/usercollection/${id}`);
    }
    return (
        <>
         {collnftdata.map((e) => {  
        return (
          <>
         
          <div className="col-lg-4 col-md-6 col-12 mt-2">
            <div className="card discovercollcard  bg-transparent" key={e.id} >
                <div className="row">
                    <div className='col-4'>
                        <img src='https://snoozz.io/ver1/img/profileimage/Profile.png' class="w-75 artist_img ms-2 mt-2" alt="..." />
                    </div>  
                    <div className='col-5'  onClick={()=>
              getid(e.id)}>
                        <h4 className='color_theme mt-4'>{e.name}</h4>
                        <p className='color_pencile'>created by<span className='color_theme'>Rani</span></p>
                    </div>
                    <div className='col-3'>
                        <span className="badge black_one_bg me-3 mt-3 like_btn"><i class={(e.like_status)==0?"fa-solid fa-heart fa-2x text-light":"fa-solid fa-heart fa-2x text-danger"}></i></span>
                    </div>
                </div>
                <div className="card-body">
                    <img src="https://gateway.pinata.cloud/ipfs//bafkreia45xaqia5kfjep5oa44e35v6uw2btnmzyzljwy42xrubrww73vla" className="w-100 rounded position-relative" alt="..." />
                </div>
            </div>
          </div>
        
          </>
        );
      })}
        </>
    )
}
