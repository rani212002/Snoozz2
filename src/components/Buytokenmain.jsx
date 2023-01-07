import React, { useEffect,useState } from 'react'
import { bootstrap } from 'bootstrap/dist/js/bootstrap.bundle.min';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import eth from '../img/et.png'
import bnbb from '../img/bnb.png'
import ethh from '../img/eth.png'
import trc from '../img/trc_20.png'
import { get_user } from './allfun';
import axios from 'axios';
import $ from "jquery"


export default function Buytokenmain() {
    useEffect(() => {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    })
    const [usd,setusd] = useState()
    const [eth,seteth] = useState()
    const [bnb,setbnb] = useState()
    const [result, setresult] = useState()
    const [currentinp,setcurrentinp] = useState()
    const [buytoken , setbuytoken] = useState([])
    const [gettokenval,setgettokenval] = useState([])
    const [coin,setcoin] = useState("Select Your Coin")
    const usersauth = get_user()

    // set all coin values 
    const getcoin = async (e) => {
        await axios({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            url: 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BNB,USDT,ETH&tsyms=USD&api_key=1441933b04b3be0a07c3007578213370dabed7c1f55e8ba29c027cbb67415a57',
        }).then(function (res) {
            console.log(res.data)
            setbnb(res.data.BNB.USD)
            seteth(res.data.ETH.USD)
            setusd(res.data.USDT.USD)
            localStorage.setItem("bnb",res.data.BNB.USD)
            localStorage.setItem("eth",res.data.ETH.USD)
            localStorage.setItem("usd",res.data.USDT.USD)
        }).catch((err) => {
            const errors = err.response;
            console.log(errors)
            console.log('errors')
            console.log(errors)
        });
    };
 

    // get amount
    const inptwo = (e)=>{   
        e.target.value = Math.abs(e.target.value)
        setcurrentinp(e.target.value)
        localStorage.setItem("currentinp",e.target.value)
        handlechange(localStorage.getItem("selectedcoin"))
        gettoken()
    }
    //select coin 

    function handlechange(e) {
        getcoin()
        gettoken()
        console.log(e)
        console.log(coin)
        localStorage.setItem("selectedcoin",e)
        setresult(localStorage.getItem("currentinp")/localStorage.getItem(localStorage.getItem("selectedcoin")))
        setcoin(e)
    }

    //onpage data
    useEffect(()=>{
        const postData = { user_id: 2,id:2};
        const response =  axios({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            url: process.env.REACT_APP_API_PATH + 'buy-token',
            data: postData,
          }).then(async function (response) {
            const res = await response.data.data;
              console.log(res)
              setbuytoken(res)
              
            });
    }, [])

    
    const gettoken = (e) => {
        const postData = {amount:currentinp,per:buytoken.per };
        console.log("postData")
        // console.log(postData)
        const response =  axios({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            url: process.env.REACT_APP_API_PATH + 'gettokens',
            data: postData,
          }).then(async function (response) {
            const res = await response.data;
            //   console.log(res.data)
              setgettokenval(res.data)
            });
    }
//alert design
    const submitbuytoken = async (props) => {
        const formData = new FormData();

        formData.append("user_id", usersauth.id);
        formData.append("id", 2);
        formData.append("selected_coin",coin)
        formData.append("coin_dlr_price",eth)
        formData.append("per",buytoken.per)
        formData.append("coin_one_price",currentinp)
        formData.append("coin_two_price",result)
        formData.append("tokens",gettokenval.total_tokens)
        formData.append("bonus_tokens", gettokenval.bonus_tokens)
        console.log(formData)
        const  postData = formData;
        console.log("formData") 
        await axios({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            url: process.env.REACT_APP_API_PATH + 'buytoken-post',
            data: postData,
        }).then(function (res) {
            if(res)
            console.log(res)
            {
                toast("Token Buyes Successfully!",{
                    autoClose: 1000,
                });
            }
        }).catch((err) => {
            const errors = err.response.data.data;
            toast("something Went Wronge",{
                autoClose: 1000,
            });
            console.log(errors)
            console.log('errors')
            console.log(errors)
        });
    };
useEffect(()=>{
    getcoin()
    console.log(localStorage.getItem("selectedcoin")==null)

  if(!localStorage.getItem("selectedcoin")!==null)
  {
    localStorage.setItem("selectedcoin", "bnb")
    setcoin(bnb)
  }
},[])
//timer code
var countDownDate = buytoken.seconds_in_date
var x = setInterval(function() {
    var now = new Date().getTime();
    console.log(now)
    var distance = now - countDownDate;
    console.log(distance)
    // console.log("props.seconds")
    // console.log(props.seconds)
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    // console.log(days)
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML = days ;
    document.getElementById("hours").innerHTML = hours ;
    document.getElementById("min").innerHTML = minutes ;
    document.getElementById("min").innerHTML = minutes ;
   document.getElementById("sec").innerHTML = seconds; 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 5000);

    return (
        <>
         <ToastContainer/>

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
                                <h4 className='color_theme' id='days'></h4>
                                <p className='text-light'>Days</p>
                            </div>
                            <div className="col text-center">
                                <h4 className='color_theme' id='hours'></h4>
                                <p className='text-light'>Hours</p>
                            </div>
                            <div className="col text-center">
                                <h4 className='color_theme' id='min'></h4>
                                <p className='text-light'>Min</p>
                            </div>
                            <div className="col text-center">
                                <h4 className='color_theme' id='sec'></h4>
                                <p className='text-light'>Sec</p>
                            </div>
                        </div>
                    </div>
                    <div className="border_theme_1px rounded mt-2">
                        <p className='text-light p-2'>{buytoken.per}% bonus end in:</p>
                        <div className="row mx-1">
                            <div className="col-6 p-2">
                            <div className="input-group mb-3">
                                <input type="number" className="form-control text-dark coin-two-price"   min="0" aria-label=".." onKeyUp={inptwo} />
                                <span class="input-group-text color_theme bg-transparent">USD</span>
                                </div>
                            </div>
                            <div className="col-6 p-2">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control text-dark coin-one-price btn_inp" value={result}  aria-label="Text input with dropdown button"   readOnly/>
                                    <button className="btn btn-outline-secondary dropdown-toggle color_theme bg-transparent"  id="conv-value" type="button" data-bs-toggle="dropdown" aria-expanded="false">{localStorage.getItem("selectedcoin")}</button>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li onClick={
                                            e=>
                                            {
                                                e.preventDefault();
                                            handlechange('bnb')
                                            }
                                            } id="active-BNB" class="conv-coin"><a className="dropdown-item color_theme d-flex coin" href="#"><div><img src={bnbb} className="coin_image"></img></div><div><p className='mt-1'>BNB</p></div></a></li>
                                        <li onClick={
                                            e=>
                                            {
                                                e.preventDefault();
                                            handlechange('eth')
                                            }
                                            } class="conv-coin" id="active-USDT"><a className="dropdown-item color_theme d-flex coin" href="#"><div><img src={ethh} className="coin_image"></img></div><div><p className='mt-1'>ETH</p></div></a></li>
                                        <li onClick={
                                            e=>
                                            {
                                                e.preventDefault();
                                            handlechange('usd',e.id)
                                            }
                                            } class="conv-coin" id="active-ETH"><a className="dropdown-item color_theme d-flex coin"  href="#"><div><img src={trc} className="coin_image"></img></div><div><p className='mt-1'>USDT</p></div></a></li>
                                    </ul>
                                   
                                </div>

                            </div>
                            <div className="d-flex">

                            <p className='text-start text-light'>Snoozz Amount:</p>
                            <p className='text-light ms-2'>Total Tokens = {gettokenval.total_tokens} + Bonus Tokens = {gettokenval.bonus_tokens}</p>
                            </div>
                            <div className="d-flex">

                            <p className='text-start text-light'>ZSnoozz Amount:</p>
                            <p className='text-light ms-2'>{gettokenval.total_tokens +gettokenval.bonus_tokens} </p>
                            </div>
                            <div class="mb-3 ms-3 d-flex justify-content-center form-check">
                                <input type="checkbox" class="form-check-input me-2" id="exampleCheck1" />
                                <label class="form-check-label text-light" for="exampleCheck1">I agree with Terms and Conditions !!</label>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className="d-flex justify-content-center mt-2  ">
                <button className="w-25 Snoozz_fn_button shdow_green p-3 fwthin" onClick={() => submitbuytoken()}>
                    submit
                </button>
            </div>
        </>
    )
}
