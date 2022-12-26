import React from 'react'

export default function Socialmedia() {
    return (
        <>
            <div className="col-lg-4">
                <div className="card m-3 bg-transparent text-center">

                    <div className="bg_grey rounded position-relative">
                        <div className="d-flex justify-content-center position-absolute  social_div">
                            <img src="#" className="w-50 mb-5" alt="..." />
                        </div>
                        <h1 className="card-title ps-5 pe-5 mt-5 mb-2 text-start color_pencile"><b>Join Community</b>
                        </h1>
                        <p className="card-text ps-5 pe-5 text-start color_pencile">We always want to center artists and their perspectives in
                            all that
                            we do, which includes
                            ensuring the work uploaded to Snoozz is authentic to the creator. We take this seriously because
                            building
                            trust is essential to sustaining a healthy community.</p>
                        <div className="row justify-content-center mb-2">
                            <div className="col-5 mx-1 p-4 rounded mt-2 mb-2 bg-dark listing_cards">
                                <i className="fa-brands fa-discord color_theme"></i>

                                <p className="text-light">Join our Discord server</p>
                            </div>
                            <div className="col-5 mx-1 p-4 rounded mt-2 mb-2 bg-dark listing_cards">
                                <i className="fa-brands fa-telegram color_theme"></i>
                                <p className="text-light">Join Our Telegram channel</p>
                            </div>
                            <div className="col-5 mx-1 p-4 rounded mt-2 mb-2 bg-dark listing_cards">
                                <i className="fa-brands fa-square-twitter color_theme"></i>
                                <p className="text-light">Follow us on Twitter</p>
                            </div>
                            <div className="col-5 mx-1 p-4 rounded mt-2 mb-2 bg-dark listing_cards">
                                <i className="fa-brands fa-instagram color_theme"></i>
                                <p className="text-light">Follow us on Instagram</p>
                            </div>
                            <div className="col-5 mx-1 p-4 rounded mt-2 mb-2 bg-dark listing_cards">
                                <i className="fa-brands fa-linkedin color_theme"></i>
                                <p className="text-light">Follow our Linkedin page</p>
                            </div>
                            <div className="col-5 mx-1 p-4 rounded mt-2 mb-2 bg-dark listing_cards">
                                <i className="fa-brands fa-facebook color_theme"></i>
                                <p className="text-light">Follow our page on Facebook</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
