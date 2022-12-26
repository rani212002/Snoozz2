import React from 'react'

export default function Popularcollection() {
    return (
        <>
            <div className="container  mt-5 auto_height">
                <h2 className='color_pencile text-center mt-5'>Popular Collections</h2>
                <p className='color_pencile text-center'>Explore all collections on Snoozz marketplace.</p>
                <div className="d-flex justify-content-center">
                    <div className="w-25">
                        <input type="text" className="form-control border_theme_1px bg-transparent" id="nft_serch" placeholder="Search Collection" />
                    </div>
                    <button type="button" className="btn btn_squre_theeme ms-2 ">Search</button>
                </div>
                <div className="mt-5">
                </div>
            </div>
        </>
    )
}
