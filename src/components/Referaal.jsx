import React from 'react'
import referaal_img from '../img/referral_page.png'
import '../css/referaal.css'
import share from '../loitte/share.json'
import Lottie from 'react-lottie';
import reward from '../loitte/reward.json'
import invite from '../loitte/invite.json'
import Table from './Table';
import ReferaalTable from './ReferaalTable';

export default function Referaal(props) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: share,

        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"

        }
    }
    const defaultOptions2 = {
        loop: true,
        autoplay: true,
        animationData: invite,

        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"

        }
    }
    const defaultOptions3 = {
        loop: true,
        autoplay: true,
        animationData: reward,

        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"

        }
    }
 
    return (
        <>
            <div className="container-fluied">
                <div className="row mx-5 ">
                    <div className="col-lg-6  order-lg-1 order-2 top_sec_margin">
                        <h1 className='color_theme'>Refer Friends. Get 10% Rewards.</h1>
                        <p className='text-light'><b>You're just steps away from receiving your reward.</b></p>
                        <h2 className='color_theme'>Your Referral:0</h2>
                        <p className='color_pencile'>Referaal Link:</p>
                        <div className="input-group flex-nowrap w-75">
                            <input type="text" class="form-control text-dark" placeholder="Referaal" aria-label="Referaal" aria-describedby="addon-wrapping" />
                            <span className="input-group-text bg-light border_none" id="addon-wrapping"><i type="button" class="fa-solid fa-copy color_theme"></i></span>
                        </div>
                    </div>
                    <div className="col-lg-6 order-lg-2 order-1">
                        <div className="d-flex justify-content-center">
                            <img src={referaal_img} className="mx-auto referaal_img" />
                        </div>
                    </div>
                </div>
                <hr className='border_theme_2px'></hr>
                <div className="row mx-5">
                    <div className="col-lg-4">
                        <div className="mx-auto">
                            <div className="card  border_theme bg-transparent border_theme_1px">
                                <div className="card-body">
                                    <div className="d-flex justify-content-center">
                                        <Lottie isClickToPauseDisabled={true}
                                            options={defaultOptions}
                                            height={150}
                                            width={150}
                                        />
                                    </div>
                                    <p className="card-text text-center color_theme">1:Share your referral link with friends</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="mx-auto">
                            <div className="card  border_theme bg-transparent border_theme_1px">
                                <div className="card-body">
                                    <div className="d-flex justify-content-center">
                                        <Lottie isClickToPauseDisabled={true}
                                            options={defaultOptions2}
                                            height={150}
                                            width={150}
                                        />
                                    </div>
                                    <p className="card-text text-center color_theme">2:Invite friends to sign up and deposit more than</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="mx-auto">
                            <div className="card  border_theme bg-transparent border_theme_1px">
                                <div className="card-body">
                                    <div className="d-flex justify-content-center">
                                        <Lottie isClickToPauseDisabled={true}
                                            options={defaultOptions3}
                                            height={150}
                                            width={150}
                                        />
                                    </div>
                                    <p className="card-text text-center color_theme">3:Receive 10% cashback voucher each</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="mx-5">
                    <ReferaalTable/>
                </div>
            </div>

        </>
    )
}
