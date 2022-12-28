import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import './allfun.js'
import{smallwalletaddress} from './allfun.js'
export default function Stakingcards() {
    const [popularcollnftdata, setpopularcollnftdata] = useState([]);
    useEffect(() => {
      const response = axios({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        url: process.env.REACT_APP_API_PATH + "staking",
      }).then(async function (response) {
        const res = await response.data.data;
        console.log("hdhdhddh");
        setpopularcollnftdata(res.stakings);
        console.log(res.stakings)

      });
    }, []);
  return (
    <>
     {popularcollnftdata.map((e) => {
        return (
            <div className="col-lg-4 col-md-6 col-12 mt-2">
            <div className="card discovercollcard  bg-transparent" key={e.key}>
                {/* <div className="row">
                    <div className='col-4'>
                        <img src='https://snoozz.io/ver1/img/profileimage/Profile.png' class="w-75 artist_img ms-2 mt-2" alt="..." />
                    </div>
                    <div className='col-5'>
                        <h4 className='color_theme mt-4'>{e.name}</h4>
                        <p className='color_pencile'>created by<span className='color_theme'>{(e.uname)==""?" User":(e.uname)}</span></p>
                    </div>
                    <div className='col-3'>
                        <span className="badge black_one_bg me-3 mt-3 like_btn"><i class={(e.status)==1?"fa-solid fa-heart fa-2x text-light":"fa-solid fa-heart fa-2x text-danger"}></i></span>
                     

                    </div>
                </div> */}

                <div className="card-body">
                  <div className="d-flex justify-content-between mt-1">
                  <div>
                    <h5 className='text-light'>{e.name}</h5>
                    </div>
                    <div>
                    <h6 className='color_theme'>{e.nft_price} {process.env.REACT_APP_COIN}</h6>
                    </div>
                  </div>
           
                    <img src={process.env.REACT_APP_CLOUD_IMG+e.hash_id} className="w-100 rounded position-relative" alt="..." />
                   <div className="d-flex justify-content-between mt-2">
                    <div>
                    <p className='color_theme m-0 p-1'><b>User:</b></p>
                    <p className='color_theme m-0 p-1'><b>Month:</b></p>
                    <p className='color_theme m-0 p-1'><b>APY:</b></p>
                    <p className='color_theme m-0 p-1'><b>Status:</b></p>
                    <p className='color_theme m-0 p-1'><b>Start Date:</b></p>
                    <p className='color_theme m-0 p-1'><b>End Date:</b></p>
                    </div>
                    <div className='text-end'>
                    <p className='color_theme m-0 p-1'>{smallwalletaddress(e.wallet)}</p>
                    <p className='color_theme m-0 p-1'>{e.month} months</p>
                    <p className='color_theme m-0 p-1'>{e.per}%</p>
                    <p className='color_theme m-0 p-1'>{(e.status)==1?"Active":"In-Active"}</p>
                    <p className='color_theme m-0 p-1'>{e.start_date}</p>
                    <p className='color_theme m-0 p-1'>{e.end_date}</p>

                    </div>
                    </div> 
                    <p className='color_theme'></p>
                </div>
            </div>
          </div>
        );
      })}
     
    </>
  )
}
