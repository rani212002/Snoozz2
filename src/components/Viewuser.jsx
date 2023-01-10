
import axios from 'axios';
import { useEffect,useState } from 'react';
import { get_user } from './allfun';
import { useParams } from 'react-router-dom';
export default function Viewuser() {
  const[userid,setuserid] = useState()
  const [userdata , setuserdata] = useState([])
  const userauth = get_user();

  const param = useParams()
  useEffect(()=>{
    
      const postData = { user_id: userauth.id,id:param.id};
      const response =  axios({
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          url: process.env.REACT_APP_API_PATH + 'view-users',
          data: postData,
        }).then(async function (response) {
          const res = await response.data.data;
          console.log("hdhdhddh")
            console.log(res.user_details)
            setuserdata(res.user_details)
          });
          
  }, [])
  return (
    <>
   <div className="border_theme_1px p-lg-5 p-3 rounded mt-5 mx-lg-5 mx-2">
    <div className="d-flex justify-content-end">
   <a type="a" class="btn btn_squre_theeme mx-1 ms-auto" href='/adminuser'>Back</a>
    </div>
    <h3 className='text-light'>Personal Information of user</h3>
      <div className="border_theme_1px p-lg-3 p-2 rounded">
        <div className="row text-center">
          <div className="col-lg-4">
            <p className='color_theme'><b>Name</b></p>
            <p className='text-light'>{userdata.name}</p>
          </div>
          <div className="col-lg-4">
          <p className='color_theme'>Username</p>
            <p className='text-light'>{userdata.uname}</p>
          </div>
          <div className="col-lg-4">
          <p className='color_theme'>E-mail</p>
            <p className='text-light'>{userdata.email}</p>
          </div>
        </div>
      </div>
    <p className='text-light mt-3'><b>Personal Information of user</b></p>
      <div className="border_theme_1px p-lg-5  p-2 rounded">
        <div className="row">
          <div className="col-lg-6">
          <p className='color_theme'>Wallet Address</p>
            <p className='text-light'>{userdata.wallet}</p>
            <hr></hr> <p className='color_theme'>NFT Wallet</p>
            <p className='text-light'>{userdata.bonus_wallet}</p>
            <hr></hr> <p className='color_theme'>Bounty Balanace</p>
            <p className='text-light'>0.00</p>
            <hr></hr> <p className='color_theme'>Your Referrals</p>
            <p className='text-light'>{userauth.referral}</p>
            <hr></hr>
          </div>
          <div className="col-lg-6">
          <p className='color_theme'>Total Wallet Balance</p>
            <p className='text-light'>{userdata.tot_wallet_bal}</p>
            <hr></hr> <p className='color_theme'>Pre Sale Token Balance</p>
            <p className='text-light'>0</p>
            <hr></hr> <p className='color_theme'>Staking Rewards</p>
            <p className='text-light'>0.00</p>
            <hr></hr> <p className='color_theme'>System User</p>
            <p className='text-light'>{userdata.system_user= "0"?"no":"yes"}</p>
            <hr></hr>
          </div>
        </div>
      </div>
   </div>
    </>
  )
}
