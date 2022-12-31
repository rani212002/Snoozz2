import React, { useEffect, useState } from 'react'
import Table from './Table'
import axios from 'axios';
import '../css/Activity.css'
import { smallwalletaddress, smdate, get_user } from './allfun';

export default function Activity(props) {

    const [userid, setuserid] = useState()
    const [activitydata, setactivitydata] = useState([])
    const userauth = get_user();

    useEffect(() => {

        const postData = { user_id: userauth.id };
        const response = axios({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            url: process.env.REACT_APP_API_PATH + 'activity',
            data: postData,
        }).then(async function (response) {
            const res = await response.data.data;
            console.log("hdhdhddh")
            console.log(res)
            setactivitydata(res)
        });

    }, [])

    return (
        <>
            <h2 className='color_pencile text-center mt-5 '>Activity</h2>
            <div className="container-fluied mx-2 mt-5">
                <div className="card bg-transparent border_theme_1px text-center mt-3 gl_morph ">
                    <div className="card-header color_theme ">
                        <h5 className="h5 p-2 text-light">Featured</h5>
                    </div>
                    <div className="card-body table-responsive">
                        <table className="table text-light text-start border-2 wsnwrap">
                            <thead>
                                <tr className='text-center'>
                                    <td>Sr</td>
                                    <th >Item</th>
                                    <th >From</th>
                                    <th >To</th>
                                    <th >Price</th>
                                    <th >Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {activitydata.map((e, index) => {
                                    return <tr key={e.id} className='text-center'>
                                        <td>{index + 1}</td>
                                        <td>
                                            <div className="d-flex justify-content-center">
                                                <img src={process.env.REACT_APP_CLOUD_IMG + e.hash_id} className='imge_icone' />
                                                <div className='ms-2'>
                                                    <b>{e.collection}</b><br></br>
                                                    <b>{e.name}</b>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{e.from_user}</td>
                                        <td>{e.touser}</td>
                                        <td>{e.nft_price}</td>
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
