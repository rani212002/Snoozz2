import React from 'react'
import '../css/referaal.css'
import discover from '../loitte/discover.json'
import Lottie from 'react-lottie';
import Search from '../loitte/search.json'
import stakenft from '../loitte/stakenft.json'
import Reward from '../loitte/reward.json'
import Table from './Table'
import Staking_reward from '../img/staking_reward.png'
export default function StakingReward() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: discover,

        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"

        }
    }
    const defaultOptions2 = {
        loop: true,
        autoplay: true,
        animationData: Search,

        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"

        }
    }
    const defaultOptions3 = {
        loop: true,
        autoplay: true,
        animationData: stakenft,

        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"

        }
    }
    const defaultOptions4 = {
        loop: true,
        autoplay: true,
        animationData: Reward,

        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"

        }
    }
    return (
        <>
            <div className="container-fluied">
                <div className="row mx-5 ">
                    <div className="col-lg-6  order-lg-1 order-2 top_sec_margin">
                        <h1 className='color_theme'>Stake Your NFT. Get Rewards.</h1>
                        <p className='text-light'><b>You're just steps away from receiving your reward.</b></p>
                        <h2 className='color_theme'>Your Referral:0</h2>
                        <p className='color_pencile'>Referaal Link:</p>
                        <div className="input-group flex-nowrap w-75">
                            <input type="text" class="form-control text-dark" placeholder="Referaal" aria-label="Referaal" aria-describedby="addon-wrapping" />
                            <span className="input-group-text bg-light border_none" id="addon-wrapping"><i class="fa-solid fa-copy color_theme"></i></span>
                        </div>
                    </div>
                    <div className="col-lg-6 order-lg-2 order-1">
                        <div className="d-flex justify-content-center">
                            <img src={Staking_reward} className="mx-auto referaal_img" />
                        </div>
                    </div>
                </div>
                <hr className='border_theme_2px'></hr>
                <h1 className='text-center m-3 color_pencile'>How to Stake Your NFT</h1>
                <div className="row mx-5">
                    <div className="col-lg-3 mt-2">
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
                                    <p className="card-text text-center color_theme">1: Go To Discover Item Select your nft</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 mt-2">
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
                                    <p className="card-text text-center color_theme">2:Select your Percentage As per month</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 mt-2">
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
                                    <p className="card-text text-center color_theme">3:Click On Stake Now And Stake Your NFT</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 mt-2">
                        <div className="mx-auto">
                            <div className="card  border_theme bg-transparent border_theme_1px">
                                <div className="card-body">
                                    <div className="d-flex justify-content-center">
                                        <Lottie isClickToPauseDisabled={true}
                                            options={defaultOptions4}
                                            height={150}
                                            width={150}
                                        />
                                    </div>
                                    <p className="card-text text-center color_theme">4:Get Staking Reward As per your plans.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="mx-5">
                    <Table />
                </div>
            </div>
        </>
    )
}
