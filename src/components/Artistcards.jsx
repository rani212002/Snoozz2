import team from '../img/home/TEAM.png'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import { Wallet } from "ethers";
import { smallwalletaddress } from './allfun';

export default function Artistcards() {
    const [artistData, setartistData] = useState([]);
    const[userid,setuserid]= useState("")
    useEffect(() => {
        let localData=localStorage.getItem('userauth');
        let data = JSON.parse(localData)
        // console.log('data');
        // console.log(data);
        setuserid(data.id)
        // console.log(userid)
        // console.log(wallet)
        
        
        const postData = { user_id: userid };
      const response = axios({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        url: process.env.REACT_APP_API_PATH+"artist",
        data:postData
      }).then(async function (response) {
        const res = await response.data.data;
        console.log("res");
        console.log(res);
        setartistData(res);
      });
    }, []);
    console.log(artistData)

    return (
        <>
     {artistData.map((e) => {
        
        return <div className="col-xl-3 col-lg-4 col-md-6 col-12 mt-3">
        <div className="card  artist_card bg-transparent  h-100">
                <div className="card-body ">
                    <div className="d-flex justify-content-center">
                        <img src='https://snoozz.io/ver1/img/profileimage/Profile.png' className="w-50 artist_img" alt="..." />
                    </div>
                    <h5 className="card-title color_pencile mt-1">{e.name==""?"user":e.name}</h5>
                    <p className="card-text color_pencile">{e.wallet ==""?smallwalletaddress(e.Wallet):e.wallet}</p>
                    <div className="d-flex justify-content-center">
                        <a href="#" className="Snoozz_fn_button p-3 w-50 shdow_green">{e.follow_status==1?"Followed":"Follow"}</a>
                    </div>
                </div>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <div className="artist_btn_left p-3 w-100">Volume<br /><span>{e.volume}</span></div>
                    <div className=" artist_btn_right p-3 w-100">Items<br /><span>{e.total_items}</span></div>
                </div>
            </div>
            </div>
      })}
    
        </>
    )
}
