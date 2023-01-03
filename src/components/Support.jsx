import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { get_user,smdate } from './allfun';
export default function Support() {
    const [getsupportdata, setgetsupportdata] = useState([])
    const [supportdata,setsupportdata] = useState(
        {
            subject: "",
            message: "",

        }
    );

    

    const [errors, setErrors] = useState()
    const userauth = get_user()
    const getsupport = () =>{
        const postData = { user_id: 2};
        const response = axios({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            url: process.env.REACT_APP_API_PATH + 'support',
            data: postData
        }).then(async function (response) {
            const res = await response.data.data;
            console.log(res)
            setgetsupportdata(res)
        });
    }
    const submitsupport = () =>{
        supportdata.user_id = 2
        const postData = supportdata;
        console.log('postData')
        console.log(postData)
        const response = axios({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            url: process.env.REACT_APP_API_PATH + 'submit-support',
            data: postData
        }).then(async function (response) {
            const res = await response.data.data;
            console.log(res)
            // setsupportdata(res)
        }).catch((err) => {

            const errors = err.response.data.data;
            console.log(errors)
            setErrors(errors)
            console.log('errors')
            console.log(errors)
        });
    } 
    const handleChange = ({ currentTarget: input }) => {
        setsupportdata({ ...supportdata, [input.name]: input.value })

        if (input.name == "") {
            setErrors([])
        }
        if (input.value == '') {
            setErrors({ ...errors, [input.name]: input.placeholder + ' is required!' })
        } else {
            // setErrors({ ...errors, [input.name]: false })
        }
    }
    console.log(errors)
    useEffect(()=>{
        getsupport()
    },[])
    return (
        <>
            <div className="container-fluied mx-5 mt-5 ">
                <div className="border_theme_1px p-5 rounded">
                    <b><h5 className='text-light'>Raised a Support Ticket</h5></b>
                    <form>
                    <div class="mb-3">
                        <input type="email" class="form-control text-dark input" name='subject' value={supportdata.subject} onChange={handleChange}  id="exampleFormControlInput1" placeholder="Subject" />
                    </div>
                    <div class="mb-3">
                        <textarea class="form-control text-dark input" value={supportdata.message} name='message' onChange={handleChange}  id="exampleFormControlTextarea1" rows="8"></textarea>
                    </div>
                    <div className="d-flex justify-content-center">
                                <button type='button'onClick={() => submitsupport()} className="Snoozz_fn_button p-3 border_grey_2px mt-3">Submit</button>
                                </div>
                    </form>
                </div>
                <div className="card bg-transparent border_theme_1px text-center mt-3 gl_morph ">
                <div className="card-header color_theme ">
                    <h5 className="h5 p-2 text-light">Featured</h5>
                </div>
                <div className="card-body table-responsive">
                    <table className="table text-light text-start border-2 wsnwrap">
                        <thead>
                            <tr className='text-center'>
                                <th>Sr no</th>
                            <th >Date</th>
                            <th >Ticket ID</th>
                            <th >Subject</th>
                            <th >Message</th>
                            <th >Status</th>
                            <th>Comment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {getsupportdata.map((e,index) => {
                              return<tr key = {e.id} className='text-center'>
                                <td>{index+1}</td>
                               <td>{smdate(e.created_at)}</td>
                                <td>{e.ticketNo}</td>
                                <td>{e.subject}</td>
                                <td>{e.message}</td>
                                <td>{e.message}</td>
                                <td>{e.tokens}</td>
                                <td>{e.comment}</td>
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
