import React from 'react'
import Profiletabs from './Profiletabs'
export default function Profile() {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card bg-transparent border_none w-100">
                            <div className="card-body">
                                <div className="d-flex justify-content-center">
                                    <img src="https://snoozz.io/ver1/img/profileimage/Profile.png" className="w-75 artist_img" alt="..." />
                                </div>
                                {/* <div className='d-flex justify-content-center mt-2'>
                                    <input type="file" onchange="pressed()" className="Snoozz_fn_button select_width shdow_green p-3 fwthin w-50" />

                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <Profiletabs />
                    </div>
                </div>
            </div>

        </>
    )
}
