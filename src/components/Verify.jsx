import React from 'react'

export default function Verify() {
    return (
        <>
            <div className="container-fluied  mt-5">
                <h2 className='color_pencile text-center mt-5'>Artist Verification</h2>
                <p className='color_pencile text-center'>Fill up the Form and our team will verify you within 24 hrs</p>
                <div className="d-flex justify-content-center">
                    <div className="card  bg-transparent form_card form_width">
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label color_pencile">Name</label>
                                    <input type="text" className="form-control bg-transparent border_theme_1px inp_radius color_theme  rounded" placeholder='Your Name' id="name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="e-mail" className="form-label color_pencile">Email</label>
                                    <input type="text" className="form-control bg-transparent border_theme_1px inp_radius color_theme  rounded" placeholder='youremail@gmail.com' id="e-mail" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="twitter" className="form-label color_pencile">Twitter</label>
                                    <input type="text" className="form-control bg-transparent border_theme_1px inp_radius color_theme  rounded" id="collection" placeholder='Your Twitter' />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="collection" className="form-label color_pencile">Coin Market Cap Username</label>
                                    <input type="text" className="form-control bg-transparent border_theme_1px inp_radius color_theme  rounded" placeholder='Your coinmarket cap username' id="collection" />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button type="submit" className="Snoozz_fn_button p-3 border_grey_2px mt-3">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
