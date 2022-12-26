import React from 'react'

export default function Discovercollectioncard() {
    return (
        <>
            <div className="card discovercollcard  bg-transparent" >
                <div className="row">
                    <div className='col-4'>
                        <img src='https://snoozz.io/ver1/img/profileimage/Profile.png' class="w-75 artist_img ms-2 mt-2" alt="..." />
                    </div>
                    <div className='col-5'>
                        <h4 className='color_theme mt-4'>Col1</h4>
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
        </>
    )
}
