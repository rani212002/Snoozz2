import React from 'react'
import { useState } from 'react';
import Lottie from 'react-lottie';
import SwiperCard from './SwiperCard';
import play from '../loitte/play.json';
import stake_tab1 from '../img/Stakenow_tab1.png';
import stake_tab2 from '../img/staking_reward_sec_one.png'
import accord_img from '../img/accordian_side.png'
import coinsmian from '../img/coinsmain.png'
import listing from './DataJson'
import "../css/landing.css";
import Slider from "react-slick";
import Landing_tabs from './Landing_tabs';
import Landing_accrodian from './Landing_accrodian';
import Accrod_data from './accordian_Sec3data';
import nft_tabs_img from '../img/nft_tabs_img.png'
import referral_img from '../img/referaal_tabs_img.png'
import stakingreward_img from '../img/staking_reward_sec_one.png'
import stakingre from '../img/stake_tab_img.png'
import Feature_tabs from './Feature_tabs';
import Coins from './Coins';
import Coinsmaindata from './Coinsmaindata';
import Trustedglobelly from './Trustedglobelly';
import trusted from '../components/Trusteddata';

import Socialmedia from './Socialmedia';
export default function Landing(props) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: play,

        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"

        }

    };
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const sliderListingData = listing.map((listing) => {
        return (
            < SwiperCard
                key={listing.key}
                img={listing.img}
                content={listing.desc}
            />
        )
    })
    const coinsmain = Coinsmaindata.map((data) => {
        return (
            < Coins
                key={data.key}
                img={data.img}
                title={data.title}
                Desc={data.Desc}

            />
        )
    })
    const trusted_div = trusted.map((data) => {
        return (
            < Trustedglobelly
                key={data.key}
                title={data.title}
                value={data.value}

            />
        )
    })
    const Accordian_sec = Accrod_data.map((data) => {
        return (
            < Landing_accrodian
                key={data.key}
                img={data.img}
                tab_heading={data.tab_heading}
                tab_content={data.tab_content}
                acc_heading_id={data.acc_heading_id}
                area_labeled={data.area_labeled}
                collapse_id={data.collapse_id}
                collapse_id_databs={data.collapse_id_databs}
                area_controls={data.area_controls}
            />
        )
    })
    return (
        <>
            <div className="mx-5 sec_margin">
                <div className="row">
                    <div className="col-lg-6 mt-5">
                        <h1 className="h1_heading color_pencile">
                            No code <span className='color_theme'>Whitelabel</span> NFT Marketplace
                        </h1>
                        <div className="d-flex">
                            <Lottie isClickToPauseDisabled={true}
                                options={defaultOptions}
                                height={100}
                                width={100}
                            />
                            <h5 className="mt-4 ms-1 color_muted fwthin">
                                Empowers you to launch your own white-label NFT
                                store or NFT Marketplace without any technical knowledge
                            </h5>
                        </div>
                        <div className="d-flex justify-content-end">
                            <div>
                                <a id="loginButton" className="ms_main Snoozz_fn_button shdow_green smallcon p-4 fwthin ms-lg-3 mt-2" role="button">
                                    Get started today!</a>
                                <p className="color_theme ms-5 mt-2">No credit card necessary</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <Landing_tabs tab1_title="Stake" tab1_id="stake_nft-tab" stake_tab1_con_id="stake_nft-tab-pane" stake_tab1_dbt="#stake_nft-tab-pane" btn_vissible1="d-none" tab2_title="Stake Now" tab2_id="staking-tab" stake_tab2_con_id="staking-tab-pane" stake_tab2_dbt="#staking-tab-pane" btn_vissible2="d-none" tab3_title="Staking Reward" tab3_id="stake-tab" stake_tab3_con_id="stake-tab-pane" stake_tab3_dbt="#stake-tab-pane" btn_vissible3="d-none" stake_tab1_img={stake_tab1} stake_tab2_img={stake_tab2} stake_tab3_img="image" />
                    </div>
                </div>
                <div className='mx-5'>
                    <h1 className='text-white text-center'> As <span className='color_theme'>Seen ON</span></h1>
                    <Slider {...settings}>
                        {sliderListingData}
                    </Slider>
                </div>
                <div className="mt-5">
                    <h1 className='text-white text-start'><span className='color_theme'>Fullstack </span> NFT Solution</h1>
                    <div className="row">
                        <div className="col-lg-6">
                            {Accordian_sec}
                            <a id="loginButton" className="Snoozz_fn_button shdow_green  p-3 mt-2 w-25" role="button">
                                Buy Now</a>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex justify-content-center">
                                <img src={accord_img} className='w-100' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mx-5">
                <div className="col-lg-6">
                    <h1 className='text-white text-start'>Trusted and loved <span className='color_theme'>by clients across the Globe</span></h1>

                    <Landing_tabs tab1_title="Referral" tab1_id="referral-tab" stake_tab1_con_id="referral-tab-pane" stake_tab1_dbt="#referral-tab-pane" btn_vissible1="d-block" btn_vissible1_con="Referral" tab2_title="NFT" tab2_id="nft-tab" stake_tab2_con_id="nft-tab-pane" stake_tab2_dbt="#nft-tab-pane" btn_vissible2_con="NFT" tab3_title="Staking Reward" tab3_id="staking_re-tab" stake_tab3_con_id="staking_re-tab-pane" stake_tab3_dbt="#staking_re-tab-pane" btn_vissible3_con="Staking Reward" stake_tab1_img={referral_img} stake_tab2_img={nft_tabs_img} stake_tab3_img={stakingre} />
                </div>
                <div className="col-lg-6"></div>
            </div>
            <div className="mx-5 mt-5">
                <h1 className='text-white text-start'>What’s better than OpenSea?<br /><span className='color_theme'>own OpenSea</span></h1>
                <Feature_tabs tab1_title="ent" tab1_id="ent-tab" stake_tab1_con_id="ent-tab-pane" stake_tab1_dbt="#ent-tab-pane" tab2_title="Support" tab2_id="support-tab" stake_tab2_con_id="support-tab-pane" stake_tab2_dbt="#support-tab-pane" tab3_title="NFT Feature" tab3_id="nftfeature_re-tab" stake_tab3_con_id="nftfeature_re-tab-pane" stake_tab3_dbt="#nftfeature_re-tab-pane" />
            </div>
            <div className="mx-5 mt-5">
                <h1 className='text-white text-start'>ZSnoozz Token<br /><span className='color_theme'>Powering Snoozz</span></h1>
                <div className="row">
                    <div className="col-lg-6">
                        <img src={coinsmian} className="w-75" />
                    </div>
                    <div className="col-lg-6">
                        <b><p className='color_pencile'>Ecosystem Token to Power Everything in the.</p></b>
                        <div className="row">
                            {coinsmain}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-5 mt-5">
                <div className="row">
                    <div className="col-lg-3">

                        <h1 className='text-white text-start'><span className='color_theme'>Trusted</span>Globelly</h1>
                    </div>
                    <div className="col-lg-9">

                        <div className="row justify-content-center">
                            {trusted_div}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-2 mt-5">
                <div className="row mt-5">
                    <Socialmedia />
                    <Socialmedia />
                    <Socialmedia />
                </div>
            </div>
        </>
    )
}
