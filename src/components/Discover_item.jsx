import React from 'react'
import '../css/discover.css'
import Discoveritemcards from './Discoveritemcards'

export default function Discover_item() {
    return (
        <>
            <div className="container  mt-5">
                <h2 className='color_pencile text-center mt-5'>Explore NFT Items</h2>
                <p className='color_pencile text-center'>Explore all NFT items on Snoozz marketplace.</p>
                <div className="d-flex justify-content-center">
                    <div class="w-25">
                        <input type="text" class="form-control border_theme_1px bg-transparent" id="nft_serch" placeholder="Search" />
                    </div>
                    <button type="button" class="btn btn_squre_theeme ms-2 ">Search</button>
                </div>

                <div className="mt-5">
                    <Discoveritemcards />
                </div>
            </div>
        </>
    )
}
