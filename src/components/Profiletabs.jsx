import React from 'react'
import '../css/profile.css'
export default function Profiletabs() {
    return (
        <>
            <nav>
                <div className="nav nav-tabs nav_tabs" id="nav-tab" role="tablist">
                    <button className="nav-link nav_link active mx-1" id="nav-personalsetting-tab" data-bs-toggle="tab" data-bs-target="#nav-personalsetting" type="button" role="tab" aria-controls="nav-personalsetting" aria-selected="true">personalsetting</button>
                    <button className="nav-link nav_link mx-1" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane  tab_pane fade show active" id="nav-personalsetting" role="tabpanel" aria-labelledby="nav-personalsetting-tab" tabindex="0">
                    <form>
                        <div className="container p-5 select_container mt-5">
                            <p className='color_theme text-center'> PNG, JPG, JPEG
                                Height: 500, Width: 500</p>
                            <div className='d-flex justify-content-center'>
                                <input type="file" className="Snoozz_fn_button select_width shdow_green p-3 fwthin">
                                </input>
                            </div>

                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="name" className="form-label color_pencile">Name</label>
                            <input type="text" className="form-control bg-transparent border_theme_1px  color_theme p-2" placeholder='Name' id="name" />
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="username" className="form-label color_pencile">Username</label>
                            <input type="text" className="form-control bg-transparent border_theme_1px  color_theme p-2" placeholder='Username' id="username" />
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="email" className="form-label color_pencile">E-mail</label>
                            <input type="text" className="form-control bg-transparent border_theme_1px  color_theme p-2" placeholder='E-mail' id="email" />
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="wallet" className="form-label color_pencile">Country</label>
                            <input type="text" className="form-control bg-transparent border_theme_1px  color_theme p-2 " placeholder='Country' id="wallet" />
                        </div>
                        <button type='submit' className="btn w-25 btn_submit">
                            Submit
                        </button>
                    </form>
                </div>
                <div className="tab-pane  tab_pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">...</div>
            </div>
        </>
    )
}
