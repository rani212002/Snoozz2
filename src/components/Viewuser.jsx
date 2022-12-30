import React from 'react'

export default function Viewuser() {
  return (
    <>
   <div className="border_theme_1px p-5 rounded mt-5 mx-5">
    <div className="d-flex justify-content-end">

   <a type="a" class="btn btn_squre_theeme mx-1 ms-auto" href='/adminuser'>Back</a>
    </div>

    <h3 className='text-light'>Personal Information of user</h3>
      <div className="border_theme_1px p-3 rounded">
        <div className="row text-center">
          <div className="col-lg-4">
            <p className='color_theme'><b>Name</b></p>
            <p className='text-light'>abcd</p>
          </div>
          <div className="col-lg-4">
          <p className='color_theme'>Username</p>
            <p className='text-light'>abcd</p>
          </div>
          <div className="col-lg-4">
          <p className='color_theme'>E-mail</p>
            <p className='text-light'>abcd</p>
          </div>
        </div>
      </div>
    <p className='text-light mt-3'><b>Personal Information of user</b></p>
      <div className="border_theme_1px p-5 rounded">
        <div className="row">
          <div className="col-lg-6">
          <p className='color_theme'>Wallet Address</p>
            <p className='text-light'>0xc37...5f6b</p>
            <hr></hr> <p className='color_theme'>NFT Wallet</p>
            <p className='text-light'>0</p>
            <hr></hr> <p className='color_theme'>Bounty Balanace</p>
            <p className='text-light'>0.00</p>
            <hr></hr> <p className='color_theme'>Your Referrals</p>
            <p className='text-light'>0</p>
            <hr></hr>
          </div>
          <div className="col-lg-6">
          <p className='color_theme'>Total Wallet Balance</p>
            <p className='text-light'>ABCD</p>
            <hr></hr> <p className='color_theme'>Pre Sale Token Balance</p>
            <p className='text-light'>0</p>
            <hr></hr> <p className='color_theme'>Staking Rewards</p>
            <p className='text-light'>0.00</p>
            <hr></hr> <p className='color_theme'>System User</p>
            <p className='text-light'>No</p>
            <hr></hr>
          </div>
        </div>
      </div>
   </div>
    </>
  )
}
