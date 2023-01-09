import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import { get_user ,smdate} from './allfun';
import axios from 'axios';
export default function Adminsetting() {

    const [success, setSuccess] = useState("")
    const [errors, setErrors] = useState([])
    const [bonuspertable,setbonuspertable] = useState([])
    const [settingdetails,setsettingdetails] = useState([])
    const [rewardper,setrewardper] = useState([])

    const [setting, setsetting] = useState(
        {
            bonus_percentages: "",
            bonus_fdates: "",
            bonus_edates: "",
            srvcfees: "",
            percentages:"",
            twitter_post:"twitter",  
        }
    )
    const userauth = get_user()

 
    useEffect(() => {
      
        const postData = { user_id: userauth.id };
        const response = axios({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            url: process.env.REACT_APP_API_PATH + 'setting',
            data: postData
        }).then(async function (response) {
            const res = await response.data.data;
            console.log(res)
            settingdetails.bper_details = res.bper_details
            setsetting(res)
            setbonuspertable(res.bper_details)
            setrewardper(res.percentages)
            console.log(rewardper)
        });
    }, []);
    const handleChange = (e,per) => {
        console.log(e.target.value)
        console.log(per)
        setsetting({ ...setting, [e.target.name]: e.target.value })
        console.log(setting)
    }

    const submitsetting = async () => {
        setting.user_id = userauth.id;
        
        const postData = {bper:setting.bonus_percentages,per:8,sdate:setting.bonus_fdates,edate:setting.bonus_edates,user_id:userauth.id};
        await axios({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            url: process.env.REACT_APP_API_PATH + 'submit-setting',
            data: postData,
        }).then(function (res) {
            if (res.data.success && res.data.success == 1) {
                // setsetting(res)
                setSuccess(res.data.message)
                console.log(res)
            } else {
                setErrors(errors)
            }
            console.log(res)
        }).catch((err) => {
            const errors = err.response.data.data;
            console.log(errors)
            setErrors(errors)
            console.log('errors')
            console.log(errors)
            setSuccess("")
        });
    };
    const closeMessage=(e) => {
		if (e == 1) {
			// setError("")
			setSuccess("")
		}
	}
    return (
        <>
            <div className="container-fluied mx-5 top_sec_margin">
                <form>
                    <div className="row">
                        <div className="col-lg-6">

                            <div className="border_theme_1px p-3 rounded">

                                <div className="mb-3">
                                    <label htmlFor="bonuspercentage" className="form-label color_theme">Bonus Percentage</label>
                                    <input type="number" name="bonus_percentages" value={setting.bonus_percentages} onChange={handleChange}  className="form-control text-dark input" id="bonuspercentage" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="sdate" className="form-label color_theme">Start Date</label>
                                    <input type="date" name="bonus_fdates" value={setting.bonus_fdates}  onChange={handleChange}   className="form-control text-dark input " id="sdate" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edate" className="form-label color_theme">End Date</label>
                                    <input type="date" name="bonus_edates" value={setting.bonus_edates} onChange={handleChange}   className="form-control text-dark input " id="edate" />
                                </div>
                            </div>
                            <div className="border_theme_1px p-3 rounded mt-2">
                                <div className="mb-3">
                                    <label htmlFor="number" className="form-label color_theme">Service Fees Percentage</label>
                                    <input type="number"  onChange={handleChange} value={setting.srvcfees} className="form-control text-dark input"   name="srvcfees" id="servicep" />
                                </div>
                            </div>  
                        </div>
                        <div className="col-lg-6">
                            <div className="border_theme_1px p-3 rounded">
                                <label htmlFor="edate" className="form-label color_theme">Reward Percentage</label>
                                {rewardper.map((e)=>{
                                    return <div className="mb-2" key={e.id}>
                                    <input type="number" onChange={handleChange}   value={e.per}  name="percentages" className="form-control text-dark input" id="bonuspercentage" />
                                </div>
                                })
                                }
                                <label htmlFor="floatingTextarea2" name="twitter_post" className="form-label color_theme">Twitter Post</label>
                                <textarea className="form-control text-dark input"  onChange={handleChange}   name="twitter_post" placeholder="Twitter POST" id="floatingTextarea2"></textarea>
                            </div>
                            <div className="d-flex justify-content-center">
                            <button type="button" className="Snoozz_fn_button p-3 border_grey_2px mt-3" onClick={() => submitsetting()}>Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
                <hr>
                </hr>
                <div className="card bg-transparent border_theme_1px text-center mt-3 gl_morph ">
                <div className="card-header color_theme ">
                    <h5 className="h5 p-2 text-light">Bonus Percentage</h5>
                </div>
                <div className="card-body table-responsive">
                    <table className="table text-light text-start border-2 wsnwrap">
                        <thead>
                            <tr className='text-center'>
                           <th>Sr No</th>
                            <th >Percentage(%)	</th>
                            <th >Start Date</th>
                            <th >End Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bonuspertable.map((e,index) => {
                              return<tr key = {e.id} className='text-center'>
                                <td>{index+1}</td>
                               <td>{e.percentage}</td>
                                <td>{e.from_date}</td>
                                <td>{e.end_date}</td>
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
