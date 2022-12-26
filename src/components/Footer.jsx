import React from 'react'
import logo from "../img/logo.png";

export default function Footer() {
    return (
        <>

            <div className="black_one_bg">
                <hr></hr>
                <footer className="py-5 mx-5">
                    <div className="row">
                        <div className="col-md-3  mb-3">
                            <form>
                                <div className="d-flex justify-content-start">

                                    <img src={logo} className="" />
                                </div>

                                <p className='color_pencile fwm'>The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</p>
                                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                    <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                                </div>
                            </form>
                        </div>
                        <div className="col-6 col-md-2 mb-3 offset-md-3">
                            <h5 className='color_theme'>Section</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
                            </ul>
                        </div>

                        <div className="col-6 col-md-2 mb-3">
                            <h5 className='color_theme'>Section</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
                            </ul>
                        </div>

                        <div className="col-6 col-md-2 mb-3">
                            <h5 className='color_theme'>Section</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
                            </ul>
                        </div>


                    </div>
                    <hr></hr>
                    <div className="d-flex flex-column flex-sm-row justify-content-between">
                        <p className='color_pencile'>&copy; 2022 Company, Inc. All rights reserved.</p>
                        <ul className="list-unstyled d-flex">
                            <li className="ms-3"><a className="link-dark" href="#"> <i className="fa-brands fa-square-twitter color_theme fa-2x"></i></a></li>
                            <li className="ms-3"><a className="link-dark" href="#"> <i className="fa-brands fa-instagram color_theme fa-2x"></i></a></li>
                            <li className="ms-3"><a className="link-dark" href="#"> <i className="fa-brands fa-facebook color_theme fa-2x"></i></a></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </>
    )
}
