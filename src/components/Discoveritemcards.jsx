import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { get_user } from "./allfun";

export default function Discoveritemcards() {

  const navigate = useNavigate();
  const [nftdata, setNftdata] = useState([]);
  const [likestatus,setlikestatus]= useState([])
  const userauth = get_user()
  const getNft = async () => {
   
    const postData = {user_id:userauth.id};
    axios({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      url: process.env.REACT_APP_API_PATH + "nft",
    }).then(async function (response) {
      const res = await response.data.data;
    
      console.log(res);
      setNftdata(res.nfts);
    });
};
const likenft = async (id) => {
  const postData = { user_id:userauth.id,id:id};
  const response = axios({
    method: "POST",
    headers: { "Content-Type": "application/json" },
    url: process.env.REACT_APP_API_PATH+"like",
    data:postData
  }).then(async function (response) {
    const res = await response.data
    console.log(res.data)
    setlikestatus(res.data)
    getNft()
  });
  }
  useEffect(() => {
    getNft()
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
                  <i type="button" onClick={() => likenft(e.id)}  className={e.like_status==1?"fa-solid fa-heart color_theme fa-2x ":"fa-solid fa-heart text-light fa-2x "}></i>
                  {/* <i type="button" onClick={() => likenft(e.id)} class={(e.like_status) == 0 ? "fa-solid fa-heart fa-2x text-light" : "fa-solid fa-heart fa-2x text-danger"}></i> */}
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
