import React, { useEffect,useState } from 'react'
import { bootstrap } from 'bootstrap/dist/js/bootstrap.bundle.min';
import eth from '../img/et.png'
import bnb from '../img/bnb.png'
import trc from '../img/trc_20.png'
import { get_user } from './allfun';
import axios from 'axios';
import $ from "jquery"


export default function Buytokenmain() {
    useEffect(() => {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

      
    })
    const [buytoken , setbuytoken] = useState([])
    const [coin,setcoin] = useState("select coin")
    const usersauth = get_user()
    useEffect(()=>{
      
        const postData = { user_id: 2,id:2};
        const response =  axios({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            url: process.env.REACT_APP_API_PATH + 'buy-token',
            data: postData,
          }).then(async function (response) {
            const res = await response.data.data;
            console.log("hdhdhddh")
              console.log(res)
              setbuytoken(res)
            });
            
    }, [])

function handlechange(e) {

    setcoin(e)
    console.log(e)


}
    return (
        <>
            <div className="border_theme_1px text-center rounded">
                <p className='color_theme mt-3 '>{"Current Price : "+  buytoken.snoozz_current_price}</p>
            </div>
            <div className="border_theme_1px rounded mt-2">
                <div className="p-3">
                    <h1 className='color_theme'>${buytoken.goal_per}</h1>
                    <div className="d-flex justify-content-between">
                        <div className='me-3'>
                            <p className='text-light'>0% of minimum goal raised</p>
                        </div>
                        <div>
                            <i className="fa-solid fa-info bg_theme p-1 rounded"></i>

                        </div>
                    </div>
                    <div className="progress">
                        <div className="progress-bar w-25" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className='text-end color_theme'>${buytoken.goal}</p>
                    <div className="border_theme_1px d-flex justify-content-between rounded p-1">
                        <h6 className='text-light mt-2'>Participants</h6>
                        <h3 className='text-light'>{buytoken.participant}</h3>
                    </div>
                    <div className="border_theme_1px mt-2 rounded">
                        <h5 className='text-light p-2'>{buytoken.per}% bonus end in:</h5>
                        <div className="row">
                            <div className="col text-center">
                                <h4 className='color_theme'>1066</h4>
                                <p className='text-light'>Days</p>
                            </div>
                            <div className="col text-center">
                                <h4 className='color_theme'>1066</h4>
                                <p className='text-light'>Hours</p>
                            </div>
                            <div className="col text-center">
                                <h4 className='color_theme'>1066</h4>
                                <p className='text-light'>Min</p>
                            </div>
                            <div className="col text-center">
                                <h4 className='color_theme'>1066</h4>
                                <p className='text-light'>Sec</p>
                            </div>
                        </div>
                    </div>
                    <div className="border_theme_1px rounded mt-2">
                        <p className='text-light p-2'>{buytoken.per}% bonus end in:</p>
                        <div className="row mx-1">
                            <div className="col-6 p-2">
                                <input type="text" className="form-control text-dark" aria-label=".." />
                            </div>
                            <div className="col-6 p-2">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control text-dark" aria-label="Text input with dropdown button" />
                                    <button className="btn btn-outline-secondary dropdown-toggle"  id='coinmain' type="button" data-bs-toggle="dropdown" aria-expanded="false">{coin}</button>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li onClick={
                                            e=>
                                            {
                                                e.preventDefault();
                                            handlechange('BNB')
                                            }
                                            }><a className="dropdown-item color_theme d-flex coin" href="#"><div><img src={bnb} className="coin_image"></img></div><div><p className='mt-1'>BNB</p></div></a></li>
                                        <li onClick={
                                            e=>
                                            {
                                                e.preventDefault();
                                            handlechange('ETH')
                                            }
                                            }><a className="dropdown-item color_theme d-flex coin" href="#"><div><img src={eth} className="coin_image"></img></div><div><p className='mt-1'>ETH</p></div></a></li>
                                        <li onClick={
                                            e=>
                                            {
                                                e.preventDefault();
                                            handlechange('TRC')
                                            }
                                            }><a className="dropdown-item color_theme d-flex coin"  href="#"><div><img src={trc} className="coin_image"></img></div><div><p className='mt-1'>TRC</p></div></a></li>
                                    </ul>
                                   
                                </div>

                            </div>
                            <p className='text-start text-light'>Snoozz Amount:</p>
                            <p className='text-start text-light'>ZSnoozz Amount:</p>
                            <div class="mb-3 ms-3 d-flex justify-content-center form-check">
                                <input type="checkbox" class="form-check-input me-2" id="exampleCheck1" />
                                <label class="form-check-label text-light" for="exampleCheck1">I agree with Terms and Conditions !!</label>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className="d-flex justify-content-center mt-2  ">
                <button className="w-25 Snoozz_fn_button shdow_green p-3 fwthin">
                    submit
                </button>
            </div>

        </>
    )
}
