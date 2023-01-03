
import React, { useState, useEffect } from "react";
import axios from "axios";
import '../css/discover.css'
import { get_user } from "./allfun";


export default function Uercollectioncards() {

  return (
    <>
       <div className="col-xl-3 col-lg-4 col-md-6 col-12">
            <div
              className="card discoveritemcards border_none bg-transparent">
              <img
                src="https://gateway.pinata.cloud/ipfs//bafkreia45xaqia5kfjep5oa44e35v6uw2btnmzyzljwy42xrubrww73vla"
                className="w-100 rounded position-relative"
                alt="..."/>
              <span class="badge black_one_bg position-absolute like_btn">
                <i type="button" class="fa-solid fa-heart fa-2x text-light"></i>
              </span>
              <div className="card-body">
                <div>
                  <h3 className="color_theme">NFT1</h3>
                  <div className="d-flex justify-content-start">
                    <h6 className="bg_light_green p-1 color_theme">
                      0.2222
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
    </>
  )
}
