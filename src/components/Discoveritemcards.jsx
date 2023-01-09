import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { get_user } from "./allfun";

export default function Discoveritemcards() {

  const navigate = useNavigate();
  const [nftdata, setNftdata] = useState([]);
  const userauth = get_user()


  const getProfile = async () => {
    const postData = {user_id:userauth.id};
    const response = axios({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      url: process.env.REACT_APP_API_PATH + "nft",
    }).then(async function (response) {
      const res = await response.data.data;
      console.log("hdhdhddh");
      console.log(res.nfts);
      setNftdata(res.nfts);
    });
};
  function likefun(like_status) {
    if(like_status == 1)
    {
      console.log("statusok")
      like_status =0;
    }
    else if(like_status == 0)
    {
      console.log("status not ok")
      like_status=1
    };
  }
  useEffect(() => {
    getProfile()
  }, []);
  const getid =(id)=> {
    console.log(id)
     navigate(`/buynft/${id}`);
  }
  return (
    <>
      {nftdata.map((e) => {
        return (
        <div className="col-xl-3 col-lg-4 col-md-6 col-12">
              <div 
                className="card discoveritemcards border_none bg-transparent"
                key={e.id}
              >
                <img onClick={()=>
              getid(e.id)}
                  src={process.env.REACT_APP_CLOUD_IMG + e.hash_id}
                  className="w-100 rounded position-relative"
                  alt="..."
                />
                <span class="badge black_one_bg position-absolute like_btn">
                  <i type="button" onClick={()=>likefun(e.id,e.like_status)} class={(e.like_status) == 0 ? "fa-solid fa-heart fa-2x text-light" : "fa-solid fa-heart fa-2x text-danger"}></i>
                </span>
                <div className="card-body" onClick={()=>
              getid(e.id)}>
                  <div>
                    <h3 className="color_theme">{e.name}</h3>
                    <div className="d-flex justify-content-start">
                      <h6 className="bg_light_green p-1 color_theme">
                        {e.price}
                        {process.env.REACT_APP_COIN}
                      </h6>
                      <span className="color_pencile ms-2">
                        <b>Current bit</b>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        );
      })}
    </>
  );
}
