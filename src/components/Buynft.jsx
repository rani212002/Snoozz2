import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/buynft.css'
import SwiperCard from './SwiperCard'
import Slider from "react-slick";
import listing from './DataJson'
import Discoveritemcards from './Discoveritemcards';
import Buynftdicitem from './Buynftdicitem'
import { get_user } from './allfun';
import { useParams } from 'react-router-dom';
import Buynftextracards from './Buynftextracards';
import Buynftextracrds2 from './Buynftextracrds2';
export default function Buynft(props) {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
  // const [nftdata, setNftdata] = useState([]);
  // const userauth = get_user()
  // useEffect(() => {
  //   const response = axios({
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     url: process.env.REACT_APP_API_PATH + "nft",
  //   }).then(async function (response) {
  //     const res = await response.data.data;
  //     console.log("hdhdhddh");
  //     // console.log(res.nfts);
  //     setNftdata(res.nfts);
  //   });
  //   buynft()
  // }, []);

  const userauth = get_user()
  const param = useParams();
  console.log(param.id)
  const [nftproductdata, setnftproductdata] = useState("")
  const [data, setdata] = useState("")
  const [percentage, setpercentage] = useState()
  const [nftdata, setnftdata] = useState([])

  const buynft = async (e) => {
    // const postData = {user_id:userauth.id,id:param.id}
    const postData = { user_id: 49, id: 2 }
    const response = axios({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      url: process.env.REACT_APP_API_PATH + "buynft",
      data: postData
    }).then(async function (response) {
      const res = await response.data.data;
      console.log("hdhdhddh");
      setdata(res)
      setnftproductdata(res.nftproduct)
      setpercentage(res.percentage)
      setnftdata(res.nftproducts)
      console.log(res);
    });
  };

  const stakenft = async (status) => {
  
    if(status==0)
    {
      const postData = data;
      console.log('profiledata');
      console.log(data);
      await axios({
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          url: process.env.REACT_APP_API_PATH + 'submit-buynft',
          data: postData,
      }).then(function (res) {
          if (res.data.success && res.data.success == 1) {
          } else  {
          }
      }).catch((err) => {
  
          const errors = err.response.data.data;
          console.log(errors)
          console.log('errors')
          console.log(errors)
      });
  
    }
    else
    {
      alert("this nft is already on staking")
    }
   
    // set profile image
};

  

  const sliderListingData = nftdata.map((e) => {
    return (
      < Buynftdicitem
        key={e.key}
        hash_id={e.hash_id}
        content={e.desc}
        name={e.name}
        price={e.price}
      />
    )
  })
  useEffect(() => {

    buynft()
  }, [])
  return (
    <>
      <div className="container">
        <div className="row top_sec_margin">
          <div className="col-xl-4 col-md-6 col-12">
            <div
              className="card discoveritemcards border_none bg-transparent">
              <img
                src={process.env.REACT_APP_CLOUD_IMG + nftproductdata.hash_id}
                className="w-100 rounded position-relative"
                alt="..."
              />
              <div className="card-body">
                <div>
                  <div className="d-flex justify-content-start">
                    <div>
                      <span className="badge black_one_bg  like_btn ">
                        <i type="button" className="fa-solid fa-heart fa-2x text-light"></i>
                      </span><span className='color_theme mt-3 ms-2'>{data.count_like}Like</span>
                    </div>
                    <div className='ms-auto'>
                      <h2 className='color_theme'>{nftproductdata.name}</h2>
                    </div>
                  </div>
                  <div className="d-flex justify-content-start">
                    <div>
                      <h5 className='color_theme mt-2'>Owner:</h5>
                      <h5 className='color_theme mt-2'>collection:</h5>
                    </div>
                    <div className='ms-auto'>
                      <h5 className='color_theme mt-2'>Prads</h5>
                      <h5 className='color_theme mt-2'>{nftproductdata.collection}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-md-6 col-12">
            <div className="card  black_one_bg ">
              <div className="card-body">
                <div className="p-3">
                  <h5 className="card-title color_pencile">Current Price</h5>
                  <h2 className="card-title color_pencile">{nftproductdata.price} {process.env.REACT_APP_COIN}</h2>
                  <p className="color_pencile">$({data.total_price})</p>
                </div>
                <hr></hr>
                <div className="p-3">
                  <p className='color_pencile'>Percentage</p>
                  <ul className="list-group  bg-transparent border_none">
                    {console.log(percentage)}
                    {/* {percentage.map((e)=>{
                                    return<li className="list-group-item bg-transparent border_none text-light" key={e.id}>
                                    <input className="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" />
                                    <label className="form-check-label ms-2" for="firstRadio">{e.per} %(For {e.month} Months)</label>
                                  </li>
                                })} */}
                  </ul>
                  <div className="d-flex justify-content-center">
                    <button type='button' className="Snoozz_fn_button p-3 border_grey_2px mt-3" onClick={() => stakenft(nftproductdata.status)}>Stake Now</button>
                  </div>
                </div>
              </div>
            </div>
            <Buynftextracards />
          </div>
        </div>
        <div className="row">
          <Buynftextracrds2 />
        </div>
        <h3 className='color_pencile mt-5'>More Items From Collection</h3>
        <div className="row">

          <Slider {...settings}>
            {sliderListingData}
          </Slider>
        </div>
      </div>
    </>
  )
}
