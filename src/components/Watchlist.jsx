import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Watchlistcard from './Watchlistcard'

export default function Watchlist() {
  
  return (
    <>
       <div className="container  mt-5 ">
                <h2 className='color_pencile text-center mt-5'>Explore Collections Watchlist</h2>
                <p className='color_pencile text-center'>Explore all collections on Snoozz marketplace..</p>
                <div className="d-flex justify-content-center">
                    <div className="w-25">
                        <input type="text" className="form-control border_theme_1px bg-transparent" id="nft_serch" placeholder="Search Collection" />
                    </div>
                    <button type="button" className="btn btn_squre_theeme ms-2 ">Search</button>
                </div>
                <div className="mt-5">
                    <div className="row">
                      <Watchlistcard/>
                    </div>
                </div>
            </div>
    </>
  )
}
