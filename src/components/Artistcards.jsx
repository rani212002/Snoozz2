import React from 'react'
import team from '../img/home/TEAM.png'

export default function Artistcards() {
    return (
        <>
            <div className="card  artist_card bg-transparent">
                <div class="card-body ">
                    <div className="d-flex justify-content-center">
                        <img src='https://snoozz.io/ver1/img/profileimage/Profile.png' class="w-50 artist_img" alt="..." />
                    </div>
                    <h5 class="card-title color_pencile mt-1">User</h5>
                    <p class="card-text color_pencile">0x127...1802</p>
                    <div className="d-flex justify-content-center">
                        <a href="#" class="Snoozz_fn_button p-3 w-50 shdow_green">Follow</a>
                    </div>
                </div>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <div className="artist_btn_left p-3 w-100">Volume<br /><span>0.00</span></div>
                    <div className=" artist_btn_right p-3 w-100">Items<br /><span>0.00</span></div>
                </div>
            </div>
        </>
    )
}
