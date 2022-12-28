import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Popularcollectioncards() {
    const [popularcollnftdata, setpopularcollnftdata] = useState([]);
    useEffect(() => {
      const response = axios({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        url: process.env.REACT_APP_API_PATH + "popular-collection",
      }).then(async function (response) {
        const res = await response.data.data;
        console.log("hdhdhddh");
        console.log(res.collections)
        setpopularcollnftdata(res.collections);

      });
    }, []);
  return (
    <>
         {popularcollnftdata.map((e) => {
        return (<div className="col-lg-4 col-md-6 col-12 mt-2">
            <div className="card discovercollcard  bg-transparent" key={e.id}>
                <div className="row">
                    <div className='col-4'>
                        <img src='https://snoozz.io/ver1/img/profileimage/Profile.png' class="w-75 artist_img ms-2 mt-2" alt="..." />
                    </div>
                    <div className='col-5'>
                        <h4 className='color_theme mt-4'>{e.name}</h4>
                        <p className='color_pencile'>created by<span className='color_theme'>Rani</span></p>
                    </div>
                    <div className='col-3'>
                        <span className="badge black_one_bg me-3 mt-3 like_btn"><i class="fa-regular fa-heart fa-2x"></i></span>
                    </div>
                </div>
                <div className="card-body">
                    <img src="https://gateway.pinata.cloud/ipfs//bafkreia45xaqia5kfjep5oa44e35v6uw2btnmzyzljwy42xrubrww73vla" className="w-100 rounded position-relative" alt="..." />
                </div>
            </div>
          </div>
        );
      })}
    </>
  )
}
