import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { smallwalletaddress } from './allfun';
import { smdate } from './allfun';

export default function ReferaalTable() {
  const [referral , setreferral] = useState([])
    useEffect(()=>{
        const response =  axios({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            url: process.env.REACT_APP_API_PATH + 'referral',
          }).then(async function (response) {
            const res = await response.data.data;
            console.log("hdhdhddh")
              console.log(res.referrals)
              setreferral(res.referrals)
            });
            
    }, [])
  return (
    <>
       <div className="container-fluied   mx-3 mt-5">
       <h2 className='color_pencile text-center mt-5'>Referaal</h2>
        <div className="card bg-transparent border_theme_1px text-center mt-3 gl_morph ">
                <div className="card-header color_theme ">
                    <h5 className="h5 p-2 text-light">Featured</h5>
                </div>
                <div className="card-body table-responsive">
                    <table className="table text-light text-start border-2 wsnwrap">
                        <thead>
                            <tr className='text-center'>
                            <th>Sr No</th>
                            <th >Sponsor</th>
                            <th >Referral</th>
                            <th >Date	</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            {referral.map((e,index) => {
                              return<tr key = {e.id} className='text-center'>
                                <td>{index+1}</td>
                                <td>{e.refer_by}</td>
                                <td>{smallwalletaddress(e.wallet)}</td>
                                <td>{smdate(e.created_at)}</td>
                                
                            </tr>
                          })}
                         
                        </tbody>
                    </table>
                </div>
            </div>
    </div>
    </>
  )
}
