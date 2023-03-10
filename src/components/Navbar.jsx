import React, { useEffect } from "react";
import { useState } from "react";
import { ethers } from 'ethers'
import logo from "../img/logo.png";
import "../css/style.css";
import $ from "jquery"
import axios from 'axios'
import { smallwalletaddress } from './allfun'
import { getUserauth, removesession, } from './Auth.js'
import { ToastContainer, toast } from 'react-toastify';
import '../css/navbar.css'
export default function Navbar() {
  // useEffect(() => {
  //   requestAccount()
  //   if (walladdress) {
  //     connectWallet();
  //   }
  // }, [])

  useEffect(() => {
    $(".pages_btn, .main_pages_btn, .pagesli").mouseover(function () {
      $(".pages_btn").addClass("show");
      $(".main_pages_btn").addClass("show");
    });
    $(".pages_btn, .main_pages_btn, .pagesli").mouseout(function () {
      $(".pages_btn").removeClass("show");
      $(".main_pages_btn").removeClass("show");
    });

  })
  //  metamask connnection code
  const [walladdress, setwalletaddress] = useState("")
  const [smwalladdress, setsmwalletaddress] = useState("")
  const [wall_content, setwall_content] = useState("Connect")
  const [data, setdata] = useState([])
  const [haveMetamask, sethaveMetamask] = useState(true);
  const session_userauth = getUserauth;
  const [userauth, setUserauth] = useState(session_userauth);

  const { ethereum } = window;

  useEffect(() => {
    const { ethereum } = window;
    const checkMetamaskAvailability = async () => {
      if (!ethereum) {
        sethaveMetamask(false);
        setwall_content("Disconnected")
      }
      sethaveMetamask(true);
    };
    checkMetamaskAvailability();
    connectWallet();
  }, []);


  // async function requestAccount() {


  //   if (window.ethereum) {
  //     try {
  //       const account = await window.ethereum.request({
  //         method: "eth_requestAccounts",
  //       })
  //       if (account.length > 0) {
  //         setwalletaddress(account[0])
  //         let wallet = account[0]
  //         const postData = { wallet: wallet };
  //         const response = await axios({
  //           method: 'POST',
  //           headers: { 'Content-Type': 'application/json' },
  //           url: process.env.REACT_APP_API_PATH + 'login',
  //           data: postData,
  //         }).then(async function (response) {
  //           const res = await response.data.data.user_data;
  //           setdata(res)
  //           let a = localStorage.getItem("userauth")
  //           let localauthuser = JSON.stringify(res)
  //           localStorage.setItem("userauth",localauthuser)


  //         });
  //         let a = account[0].slice(0, 4)
  //         let b = account[0].slice(-3)
  //         let c = a + "..." + b
  //         setsmwalletaddress(c)
  //         console.log(smwalladdress)
  //         setwall_content("Disconnect")
  //         localStorage.setItem("smwallet",c)
  //       }

  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   else {
  //     console.log("not detected")
  //   }
  // }

  const connectWallet = async () => {
    console.log("connect wallet is running")
    try {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      let balance = await provider.getBalance(accounts[0]);
      if (accounts[0]) {
        setAccount(accounts[0])
      }
      let bal = ethers.utils.formatEther(balance);
    } catch (error) {
      setUserauth("");
    }
  }

  const setAccount = async (wallet) => {
    const postData = { wallet: wallet };
    const response = await axios({
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      url: process.env.REACT_APP_API_PATH + 'login',
      data: postData,
    }).then(async function (response) {
      const res = await response.data.data;
      localStorage.setItem('userauth', JSON.stringify(res.user_data))
      setUserauth(getUserauth)
      console.log(userauth)
      let id = userauth.id
      setsmwalletaddress(smallwalletaddress(userauth.wallet))
      setwall_content("disconnec")
      // let a = account[0].slice(0, 4)
      //     let b = account[0].slice(-3)
      //     let c = a + "..." + b
      //     setsmwalletaddress(c)
      //     console.log(smwalladdress)
      //     setwall_content("Disconnect")
      //     localStorage.setItem("smwallet",c)

    }).catch((err) => {
      if (err.response.data.message) {
        toast(err.response.data.message);
      }
    });
  };
  const disconnect = async () => {
    removesession()
    setUserauth(null)
    console.log("disconnectedd")
    setsmwalletaddress("")


  }

  if (window.ethereum) {
    window.ethereum.on('accountsChanged', () => {
      removesession()
      setUserauth(null)
      connectWallet()
      setwall_content("Disconnected")
      // console.log("disconnected544545454d")
      // setsmwalletaddress("")
      // window.location.href = '/'
    })
  }

  // var userid = data.id


  // async function connectWallet() {
  //   if (typeof window.ethereum !== 'undefined') {
  //     await requestAccount()
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   }
  // }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark black_one_bg">
        <div className="container-fluid">
          <a className="navbar-brand d-flex justify-content-center" href="#">
            <img src={logo} className="w-50" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link mx-2 active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown pagesli">
                <a className="nav-link mx-2 dropdown-toggle pages_btn" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Pages
                </a>
                <ul className="dropdown-menu dd_menue main_pages_btn black_one_bg border_theme_1px">
                  <div className="row">
                    <div className="col-sm-3 col-6">
                      <li>
                        <a className="dropdown-item dd_item" href="/activity" name="nsadsjadhakjsdhakjdhsakj">
                          Activity
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item dd_item" href="/addcollection">
                          Add-collection
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item dd_item" href="/additem">
                          Add Item
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item dd_item" href="/buytoken">
                          BuyToken
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item dd_item" href="/BuyNft">
                          BuyNFT
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item dd_item" href="/dashboard">
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item dd_item" href="/watchlist">
                          Watch List
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item dd_item" href="/usercollection">
                          User Collection
                        </a>
                      </li>
                    </div>
                    <div className="col-sm-3 col-6">
                      <li>
                        <a className="dropdown-item dd_item" href="/artist">
                          Asrtist
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item dd_item" href="/verify">
                          Verify
                        </a>
                      </li>
                      {/* <li>
                        <a className="dropdown-item dd_item" href="/contact">
                          ContactUS
                        </a>
                      </li> */}
                      <li>
                        <a className="dropdown-item dd_item" href="/likecol">
                          Like Collection
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item dd_item" href="/discoveritem">
                          Discover Items
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item dd_item" href="/buytokenlist">
                          Buy Token List
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item dd_item" href="/nftlist">
                          NFT LIST
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item dd_item" href="/support">
                          Support
                        </a>
                      </li>
                    </div>
                    <div className="col-sm-3 col-6">
                      <li>
                        <a className="dropdown-item dd_item" href="/discovercollection">
                          Discover collection
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item dd_item" href="/popularcollection">
                          Popular collection
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item dd_item" href="/referaal">
                          Referaal
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item dd_item" href="/profile">
                          Profile
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item dd_item" href="/stakingreward">
                          Staking Reward
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item dd_item" href="/staking">
                          Staking
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item dd_item" href="/artist-collected">
                          Artistcollected
                        </a>
                      </li>
                    </div>
                    <div className="col-sm-3 col-6">
                      <li>
                        <a className="dropdown-item dd_item" href="/adminsetting">
                          Admin Setting
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item dd_item" href="/adminuser">
                          Admin user
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item dd_item" href="/adduser">
                          Add User
                        </a>
                      </li><li>
                        <a className="dropdown-item dd_item" href="/adminverify">
                          Admin Verify
                        </a>
                      </li>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="Landing">About</a>
              </li>
            </ul>
            <form className="d-flex justify-content-end  w-25" role="search">
              <button className="btn  theme_two mx-2" type="submit">
                {smwalladdress}
              </button>
              <div class="btn-group dropstart">
                <button type="button" class="Snoozz_fn_button p-2 shdow_green dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="fa-solid fa-wallet"></i>
                </button>
                <ul class="dropdown-menu bg-dark">
                  <li><a class="dropdown-item text-light" onClick={connectWallet}><i class="fa-solid fa-plus color_theme me-2"></i>Connect</a></li>
                  <li><a class="dropdown-item text-light" onClick={disconnect} href="#"><i class="fa-solid fa-right-from-bracket color_theme me-2"></i>Disconnect</a></li>
                </ul>
              </div>
              {/* <button onClick={connectWallet} className="w-50 Snoozz_fn_button shdow_green p-3 fwthin">
                connect
              </button>
              <button onClick={disconnect} className="Snoozz_fn_button shdow_green p-2 fwthin mx-2">
              <i className="fa-solid fa-right-from-bracket ms-2"></i>
              </button> */}
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}