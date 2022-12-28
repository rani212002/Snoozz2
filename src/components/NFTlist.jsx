import { useState,useEffect } from 'react';
import axios from 'axios';
import { smdate } from './allfun';

export default function NFTlist() {
    const [nftlistdata , setnftlistdata] = useState([])
    useEffect(()=>{
        const response =  axios({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            url: process.env.REACT_APP_API_PATH + 'nftlist',
          }).then(async function (response) {
            const res = await response.data.data;
            console.log("hdhdhddh")
              console.log(res)
              setnftlistdata(res)
            });
            
    }, [])
  return (
    <>
      <div className="container-fluied   mx-3 mt-5">
       <h2 className='color_pencile text-center mt-5'>Buy Token History</h2>
        <div className="card bg-transparent border_theme_1px text-center mt-3 gl_morph ">
                <div className="card-header color_theme ">
                    <h5 className="h5 p-2 text-light">Featured</h5>
                </div>
                <div className="card-body table-responsive">
                    <table className="table text-light text-start border-2 wsnwrap">
                        <thead>
                            <tr className='text-center'>
                            <th >NFt</th>
                            <th >Price(SNOOZZ)</th>
                            <th >Royalty(%)	</th>
                            <th >Fees(%)</th>
                            <th >User Price(SNOOZZ)</th>
                            <th >Collection</th>
                            <th>Date</th>
                            <th>Status</th>

                            </tr>
                        </thead>
                        <tbody>
                            {nftlistdata.map((e) => {
                              return<tr key = {e.id} className='text-center'>
                              <td>
                                    <div className="d-flex justify-content-center">

                                    <img src={process.env.REACT_APP_CLOUD_IMG+e.hash_id} className='imge_icone'/>
                                    <div className='ms-2'>
                                    <b>{e.collection}</b><br></br>
                                    <b>{e.name}</b>
                                    </div>
                                    </div>
                                    </td>
                                <td>{e.price} {process.env.REACT_APP_COIN}</td>
                                <td>{e.royalty}</td>
                                <td>{e.fees}</td>
                                <td>{e.userprice}</td>
                                <td>{e.collection}</td>
                                <td>{smdate(e.created_at) }</td>
                                <td>{e.status}</td>

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
