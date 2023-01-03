import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import '../css/dashboard.css'
import { get_user } from './allfun';


export default function Dashboard() {
    const [dashboard , setdashboard] = useState([])
    const usersauth = get_user()
    useEffect(()=>{
      
        const postData = { user_id: usersauth.id };
        const response =  axios({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            url: process.env.REACT_APP_API_PATH + 'dashboard',
            data: postData,
          }).then(async function (response) {
            const res = await response.data.data;
            console.log("hdhdhddh")
              console.log(res)
              setdashboard(res)
            });
            
    }, [])
    return (
        <>
            <div className="container top_sec_margin">
                <div className="row">
                    <div className="col-lg-6">

                        <div className="row justify-content-evenly mt-1">
                            <div className="col-sm-11 mt-2 h-100  border_theme_1px p-2  pricecard">
                                <h3 className='color_theme pt-3 ps-3'>Hello Rani</h3>
                                <h6 className='text-light  ps-3'>Wallet Address:</h6>
                            </div>
                            <div className="col-sm-5 mt-2 h-100  border_theme_1px p-2 text-center pricecard">
                                <i class="fa-sharp fa-solid fa-clock color_theme "></i>
                                <h6 className='color_pencile text-center'>Current Price</h6>
                                <p className='color_theme'>${dashboard.snoozz_current_price}</p>
                            </div>
                            <div className="col-sm-5 mt-2 h-100  border_theme_1px p-2 text-center pricecard">
                                <i class="fa-sharp fa-solid fa-clock color_theme "></i>
                                <h6 className='color_pencile text-center'>Next Price</h6>
                                <p className='color_theme'>${dashboard.snoozz_next_price}</p>
                            </div>
                            <div className="col-sm-5 mt-2 h-100  border_theme_1px p-2 text-center pricecard">
                                <i class="fa-sharp fa-solid fa-clock color_theme "></i>
                                <h6 className='color_pencile text-center'>Pre Sale Token Balance</h6>
                                <p className='color_theme'>{dashboard.token_wallet}</p>
                            </div>
                            <div className="col-sm-5 mt-2 h-100  border_theme_1px p-2 text-center pricecard">
                                <i class="fa-sharp fa-solid fa-clock color_theme "></i>
                                <h6 className='color_pencile text-center'>NFT Wallet</h6>
                                <p className='color_theme'>{dashboard.reward_wallet}</p>
                            </div>
                            <div className="col-sm-5 mt-2 h-100  border_theme_1px p-2 text-center pricecard">
                                <i class="fa-sharp fa-solid fa-clock color_theme "></i>
                                <h6 className='color_pencile text-center'>Staking Rewards</h6>
                                <p className='color_theme'>$0.0222</p>
                            </div>
                            {/* <div className="col-sm-5 mt-2 h-100  border_theme_1px p-2 text-center pricecard">
                                <i class="fa-sharp fa-solid fa-clock color_theme "></i>
                                <h6 className='color_pencile text-center'>Bounty Balanace</h6>
                                <p className='color_theme'>$0.0222</p>
                            </div> */}
                            {/* <div className="col-sm-5 mt-2 h-100  border_theme_1px p-2 text-center pricecard">
                                <i class="fa-sharp fa-solid fa-clock color_theme "></i>
                                <h6 className='color_pencile text-center'>
                                    Referral Rewards</h6>
                                <p className='color_theme'>{dashboard.reward_wallet}</p>
                            </div> */}
                            <div className="col-sm-5 mt-2 h-100  border_theme_1px p-2 text-center pricecard">
                                <i class="fa-sharp fa-solid fa-clock color_theme "></i>
                                <h6 className='color_pencile text-center'>Your Referrals</h6>
                                <p className='color_theme'>{dashboard.referral}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-2">
                        <div className="row">
                            <div className="col-lg-6 h-100">
                                <div class="card border_theme_1px bg-transparent pricecard">
                                    <div class="card-body">
                                        <h6 className='text-start text-light'>Snoozz Staking Reward</h6>
                                        <p className='text-center color_theme'>0.00 Snoozz</p>
                                        <div className="d-flex justify-content-center">
                                            <button type="button" class="btn theme_two me-2 ">Secondary</button>
                                            <button type="button" class="btn theme_two">Secondary</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 h-100">
                                <div class="card border_theme_1px bg-transparent pricecard">
                                    <div class="card-body">
                                        <h6 className='text-start text-light'>Snoozz Staking Reward</h6>
                                        <p className='text-center color_theme'>0.00 Snoozz</p>
                                        <div className="d-flex justify-content-center">
                                            <button type="button" class="btn theme_two me-2 ">Secondary</button>
                                            <button type="button" class="btn theme_two">Secondary</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-2 h-100">
                                <div class="card border_theme_1px bg-transparent pricecard">
                                    <div class="card-body">
                                        <h4 className='text-light'>Buy More NFT</h4>
                                        <h6 className='text-start color_theme'>Buy More NFT's From Our MVP & get Our free Token with one NFT</h6>
                                        <button type="button" class="btn theme_two">Secondary</button>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-2 h-100">
                                <div class="card border_theme_1px bg-transparent pricecard">
                                    <div class="card-body">
                                        <h4 className='text-light'>Referral Link</h4>
                                        <input type="email" class="form-control text-dark mt-1 mb-1" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <div className="text-center">
                                            <i class="fa-brands fa-instagram fa-2x color_theme mx-1"></i>
                                            <i class="fa-brands fa-whatsapp fa-2x color_theme mx-1"></i>
                                            <i class="fa-brands fa-twitter fa-2x color_theme mx-1"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-2 h-100">
                                <div class="card border_theme_1px bg-transparent pricecard">
                                    <div class="card-body">
                                        <h4 className='text-light'>Snoozz Social Media</h4>
                                    </div>
                                    <div className="text-center mb-2">
                                        <i class="fa-brands fa-instagram fa-2x color_theme mx-1"></i>
                                        <i class="fa-brands fa-whatsapp fa-2x color_theme mx-1"></i>
                                        <i class="fa-brands fa-twitter fa-2x color_theme mx-1"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
