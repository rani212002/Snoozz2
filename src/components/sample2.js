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
    const [coin,setcoin] = useState()
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
    const getcoin = async (e) => {
        await axios({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            url: 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BNB,USDT,ETH&tsyms=USD&api_key=1441933b04b3be0a07c3007578213370dabed7c1f55e8ba29c027cbb67415a57',
        }).then(function (res) {
            console.log(res.data)
            const price_table_json = res.data;
            const price_table_json_BNB = price_table_json.BNB.USD;
            const price_table_json_USDT = price_table_json.USDT.USD;
            const price_table_json_ETH = price_table_json.ETH.USD;
            localStorage.setItem('price_table_json_BNB', price_table_json_BNB);
            localStorage.setItem('price_table_json_USDT', price_table_json_USDT);
            localStorage.setItem('price_table_json_ETH', price_table_json_ETH);
                // localStorage.setItem('per', per);
                    // localStorage.removeItem('coin_dlr_price', price_table_json_BNB);

                localStorage.setItem('check', 0);
                
          
                localStorage.removeItem('conv_coin_price');
        }).catch((err) => {
            const errors = err.response;
            console.log(errors)
            console.log('errors')
            console.log(errors)
        });
    };
    function handlechange(e) {
        setcoin(e)
        console.log(e)
        console.log(coin)
      
        localStorage.setItem('conv_coin', e);
        let coin_dlr ='price_table_json_' + e
        let coin_dlr_table = localStorage.setItem('coin_dlr_table', coin_dlr)
        let coin_table_val = localStorage.getItem(coin_dlr_table)
     


        if (e)
        {
            localStorage.setItem('coin_dlr_price', localStorage.getItem(localStorage.getItem("coin_dlr_table")));
            $(".coin-two-price").onKeyUp();
        }
        // $(".coin-two-price").onKeyUp()
        // console.log(e == "bnb")

        // if(e == "BNB")   
        //         {
            //   console.log(price_table_json_BNB)
            //   let bnbprice = localStorage.getItem("price_table_json_BNB");
              
                // }
                // else if(e = "ETH"){
                //    let price_table_json_ETH = localStorage.getItem( price_table_json_ETH);
                //     localStorage.setItem('coin_dlr_price', price_table_json_ETH);
                // }else if(e = "USD")
                // {   let price_table_json_USDT=  localStorage.getItem( price_table_json_USDT)
                //     localStorage.setItem('coin_dlr_price', price_table_json_USDT);

                // }
                getcoin()
    }


const inptwo = (e)=>{   
    var conv_coin = localStorage.getItem('conv_coin');
    if (!conv_coin) {
        alert("Error!", "Please select coin!", "error");
        return false;
    }
    var conv_coin_price =$(".coin-two-price").val();
   
    var coin_dlr_price = localStorage.getItem('coin_dlr_price');
    
    var coin_one_price = conv_coin_price * coin_dlr_price;
    coin_one_price = coin_one_price.toFixed(2);
    var total_amt_conv_coin = (conv_coin_price / coin_dlr_price).toFixed(2);
    $(".coin-one-price").val(total_amt_conv_coin);
    localStorage.setItem('total_amt_conv_coin', total_amt_conv_coin);
    localStorage.setItem('conv_coin_price', conv_coin_price);
    localStorage.setItem('coin_one_price', total_amt_conv_coin);
    var per = localStorage.getItem('per');
    gettokens(conv_coin_price, per)
}
function gettokens(amount, per) {
    if (amount >= 0) {
        $.ajax({
            url: process.env.REACT_APP_API_PATH + "gettokens",
            type: 'POST',
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            dataType: 'JSON',
            data: {
                amount: amount,
                per: per,
            },
            success: function (response) {
                var total_amount = (response.total_tokens + response.bonus_tokens).toFixed(2);
                $(".tokens").html('Total Tokens = ' + response.total_tokens + ' + Bonus Tokens = ' +
                    response.bonus_tokens);
                $(".bonus-tokens").html(total_amount);
                localStorage.setItem('tokens', total_amount);
                localStorage.setItem('bonus_tokens', total_amount);
            }
        });
    }
}



useEffect(()=>{
    getcoin()
},[])
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
                                <input type="number" className="form-control text-dark coin-two-price"  aria-label=".." onKeyUp={inptwo} />
                            </div>
                            <div className="col-6 p-2">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control text-dark coin-one-price btn_inp"  aria-label="Text input with dropdown button" />
                                    <button className="btn btn-outline-secondary dropdown-toggle"  id="conv-value" type="button" data-bs-toggle="dropdown" aria-expanded="false">{coin}</button>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li onClick={
                                            e=>
                                            {
                                                e.preventDefault();
                                            handlechange('BNB')
                                            }
                                            } id="active-BNB" class="conv-coin"><a className="dropdown-item color_theme d-flex coin" href="#"><div><img src={bnb} className="coin_image"></img></div><div><p className='mt-1'>BNB</p></div></a></li>
                                        <li onClick={
                                            e=>
                                            {
                                                e.preventDefault();
                                            handlechange('ETH')
                                            }
                                            } class="conv-coin" id="active-USDT"><a className="dropdown-item color_theme d-flex coin" href="#"><div><img src={eth} className="coin_image"></img></div><div><p className='mt-1'>ETH</p></div></a></li>
                                        <li onClick={
                                            e=>
                                            {
                                                e.preventDefault();
                                            handlechange('USDT')
                                            }
                                            } class="conv-coin" id="active-ETH"><a className="dropdown-item color_theme d-flex coin"  href="#"><div><img src={trc} className="coin_image"></img></div><div><p className='mt-1'>USDT</p></div></a></li>
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
