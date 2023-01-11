import team from '../img/home/TEAM.png'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import { Wallet } from "ethers";
import { smallwalletaddress, get_user } from './allfun';
import profile from '../img/Profile.png'
export default function Artistcards() {
    const [artistData, setartistData] = useState([]);
    const userauth = get_user();
    const [followstatus , setfollowstatus]=useState()
  
    useEffect(() => {
      getartist()
    }, []);

    //get artist data
    const getartist = async (id) => {
    
      const postData = { user_id: userauth.id};
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
    }
    //follow artist
    const followartist = async (id) => {
    const postData = { user_id:userauth.id,id:id};
    const response = axios({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      url: process.env.REACT_APP_API_PATH+"follow-artist",
      data:postData
    }).then(async function (response) {
      const res = await response.data
      getartist()
      setfollowstatus(res)
    });
    }
    return (
        <>
     {artistData.map((e) => {
        return <div className="col-xl-3 col-lg-4 col-md-6 col-12 mt-3">
        <div className="card  artist_card bg-transparent  h-100">
                <div className="card-body ">
                    <div className="d-flex justify-content-center">
                        <img src={profile} className="w-50 artist_img" alt="..." />
                    </div>
                    <h5 className="card-title color_pencile mt-1">{e.name==""?"user":e.name}</h5>
                    <p className="card-text color_pencile">{e.wallet ==""?smallwalletaddress(e.Wallet):e.wallet}</p>
                    <div className="d-flex justify-content-center">
                        <a href="#" onClick={() => followartist(e.id)} className="Snoozz_fn_button p-3 w-50 shdow_green">{<i id={"ficone-" + e.id} class={e.follow_status==0?"fa-sharp fa-solid fa-plus me-1":"fa-solid fa-check me-1"}></i>}{e.follow_status==1?"Followed":"Follow"}</a>
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
