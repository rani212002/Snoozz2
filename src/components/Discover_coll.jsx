import React from 'react'
import Discovercollectioncard from './Discovercollectioncard'
// import '../css/discover.css'


export default function Discover_coll() {
    return (
        <>
            <div className="container  mt-5">
                <h2 className='color_pencile text-center mt-5'>Explore Collections</h2>
                <p className='color_pencile text-center'>Explore all collections on Snoozz marketplace.</p>
                <div className="d-flex justify-content-center">
                    <div class="w-25">
                        <input type="text" class="form-control border_theme_1px bg-transparent" id="nft_serch" placeholder="Search" />
                    </div>
                    <button type="button" class="btn btn_squre_theeme ms-2 ">Search</button>
                </div>
                <div className="mt-5">
                    <div className="row">
                    <Discovercollectioncard />
                    </div>
                </div>
            </div>
        </>
    )
}
