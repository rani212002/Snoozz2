import { useState,useEffect } from 'react';
import axios from 'axios';

export default function StakingrewardTable() {
    const [stakingrewarddata , setstakingrewarddata] = useState([])
    useEffect(()=>{
        const response =axios({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            url: process.env.REACT_APP_API_PATH + 'staking-rewards',
          }).then(async function (response) {
            const res = await response.data.data;
            if(res=="")
            {
              console.log("there is no data in response")
            }
            console.log("hdhdhddh")
              console.log(res)
              setstakingrewarddata(res)
            });
            
    }, [])
  return (
    <>
       <div className="container-fluied  auto_height mx-3 mt-5">
       <h2 className='color_pencile text-center mt-5'>Buy Token History</h2>
        <div className="card bg-transparent border_theme_1px text-center mt-3 gl_morph ">
                <div className="card-header color_theme ">
                    <h5 className="h5 p-2 text-light">Featured</h5>
                </div>
                <div className="card-body table-responsive">
                    <table className="table text-light text-start border-2 wsnwrap">
                        <thead>
                            <tr className='text-center'>
                            <th >Date</th>
                            <th >Currency</th>
                            <th >Percentage(%)	</th>
                            <th >Symbol Price($)</th>
                            <th >Conversion Price	</th>
                            <th >Amount($)</th>
                            <th>SNOOZZ Tokens</th>
                            <th>ZSNOOZZ</th>

                            </tr>
                        </thead>
                        <tbody>
                            {/* {stakingrewarddata.map((e) => {
                              return<tr key = {e.id} className='text-center'>
                               <td>{e.created_at}</td>
                                <td>{e.selected_coin}</td>
                                <td>{e.per}</td>
                                <td>{e.token_price}</td>
                                <td>{e.coin_dlr_price}</td>
                                <td>{e.amount}</td>
                                <td>{e.tokens}</td>
                                <td>{e.token_price}</td>
                            </tr>
                          })}
                          */}
                        </tbody>
                    </table>
                </div>
            </div>
     </div>
    </>
  )
}
