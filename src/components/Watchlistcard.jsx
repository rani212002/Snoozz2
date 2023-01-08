import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Watchlistcard() {
    const[userid,setuserid] = useState()
    const [watchlist , setwatchlist] = useState([])
    const navigate = useNavigate();

    useEffect(()=>{
        let localData=localStorage.getItem('userauth');
        let data = JSON.parse(localData)
        console.log('data');
        console.log(data.id);
        setuserid(data)
        console.log('userid')
        // console.log(userid)
        
        const postData = { user_id: userid };
        const response =  axios({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            url: process.env.REACT_APP_API_PATH + 'activity',
            data: postData,
          }).then(async function (response) {
            const res = await response.data.data;
            console.log("hdhdhddh")
              console.log(res)
              setwatchlist(res)
            });
    }, [])
    console.log("i am activity")
    console.log(watchlist)
    
  const getid =(id)=> {
    console.log(id)
     navigate(`/buynft/${id}`);

  }
  return (
    <>
      {watchlist.map((e) => {
        return (
          <div className="col-xl-3 col-lg-4 col-md-6 col-12">
            <div onClick={()=>getid(e.pid)}
              className="card discoveritemcards border_none bg-transparent"
              key={e.id}
            >
              <img
                src={process.env.REACT_APP_CLOUD_IMG + e.hash_id}
                className="w-100 rounded position-relative"
                alt="..."
              />
              <span class="badge black_one_bg position-absolute like_btn">
                <i type="button" class={(e.like_status)==0?"fa-solid fa-heart fa-2x text-light":"fa-solid fa-heart fa-2x text-danger"}></i>
              </span>
              <div className="card-body">
                <div>
                  <h3 className="color_theme">{e.name}</h3>
                  <div className="d-flex justify-content-start">
                    <h6 className="bg_light_green p-1 color_theme">
                      {e.price}
                      {process.env.REACT_APP_COIN}
                    </h6>
                    <span className="color_pencile ms-2">
                      <b>Current bit</b>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  )
}
