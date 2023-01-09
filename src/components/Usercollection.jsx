
import React, { useState, useEffect } from "react";
import axios from "axios";
import { get_user } from "./allfun";
import { useParams } from 'react-router-dom';
import "../css/Usercollection.css";
import Uercollectioncards from "./Uercollectioncards";
export default function Usercollection() {
    
  const [nftdata, setNftdata] = useState([]);
  const [userdata, setuserdata] = useState([]);
  const userauth = get_user()
  const param = useParams();
  useEffect(() => {
      // const postData = {user_id:userauth.id,id:param.id}
    const postData = {user_id:2,id:2}
    const response = axios({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      url: process.env.REACT_APP_API_PATH + "user-collection",
      data:postData
    }).then(async function (response) {
      const res = await response.data.data;
      console.log("hdhdhddh");
      console.log(res);
      setuserdata(res.user_details)
      setNftdata(res.nftproducts);
    });
  }, []);
  function likefun() {
    nftdata.like_status = 1;
  }
    return (
        <>
            <div className="container-fluied">
                <div className="bg_cover"></div>
                <div className="black_one_bg mt-2">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="d-flex justify-content-center  mt-2 mb-2">
                                <div className="text-end">
                                    <img
                                        src="https://snoozz.io/ver1/img/profileimage/Profile.png"
                                        className="artist_img"
                                        alt="..."
                                    />
                                </div>
                                <div className="mt-3 ms-1">
                                    <h5 className="color_pencile">{userdata.name}</h5>
                                    <p className="color_pencile">Created by {userdata.uname}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex justify-content-center  mt-3 mb-2">
                                <div className="text-end">
                                    <button ty pe="submit" className="Snoozz_fn_button p-3 shdow_green mt-2 mx-2"><i class="fa-solid fa-heart color_theme fa-sm me-1"></i>1 Like</button>

                                </div>
                                <div className="ms-1">
                                    <button ty pe="submit" className="Snoozz_fn_button p-3 border_theme_1px mt-2 mx-2"><i class="fa-solid fa-plus color_theme fa-sm"></i> Add to Watchlist </button>

                                </div>
                                <div className="ms-1">
                                    <div className="dropdown mt-2">
                                        <a className="btn p-2 bg-transparen color_theme border_theme_1px menue black_one_bg dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="fa-solid fa-ellipsis"></i>
                                        </a>
                                        <ul className="dropdown-menu  border_theme_1px black_one_bg" >
                                            <li><a className="dropdown-item dd_text" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">Share</a></li>
                                            <li><a className="dropdown-item dd_text" href="#">Another action</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="d-flex justify-content-start mt-3 mx-5">
                    <div className="w-25">
                        <input type="text" className="form-control border_theme_1px bg-transparent" id="nft_serch" placeholder="Search Collection" />
                    </div>
                    <button type="button" className="btn btn_squre_theeme ms-2 ">Search</button>
                </div>
                <hr></hr>
            </div>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content black_one_bg border_theme_1px">
            <div className="modal-header">
              <h1 className="modal-title fs-5 color_pencile" id="exampleModalLabel">Share</h1>
             <i class="fa-solid fa-xmark color_pencile" data-bs-dismiss="modal" aria-label="Close"></i>
            </div>
            <div className="modal-body text-center">
              <h6 className='color_theme'>Beeple</h6>
            <a class="facebook media_icone mx-1" href="https://www.facebook.com/sharer/sharer.php?u=http://snoozz.io/artist-collected/2" target="_blank"><i class="fa-brands fa-facebook mx-1 fa-2x social_icone p-2"></i></a>
            <i class="fa-brands fa-twitter mx-1 fa-2x social_icone p-2"></i>
            <i class="fa-brands fa-instagram mx-1 fa-2x social_icone p-2"></i>
            </div>
            {/* <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div> */}
          </div>
        </div>
      </div>
      <div className="row mx-5">

      <Uercollectioncards/>
      <Uercollectioncards/>

      </div>
        </>
    );
}
