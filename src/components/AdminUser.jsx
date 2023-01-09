import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { smallwalletaddress, smdate } from './allfun';
import { useNavigate } from 'react-router-dom';

export default function AdminUser() {
  const navigate = useNavigate();
    const [user, setuser] = useState([]);
    useEffect(() => {
      const response = axios({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        url: process.env.REACT_APP_API_PATH + "users",
      }).then(async function (response) {
        const res = await response.data.data;
        console.log("hdhdhddh");
        console.log(res);
        setuser(res);
      });
    }, []);
    const getid =(id)=> {
      console.log(id)
       navigate(`/Viewuser/${id}`);
    }
    const getidview =(id)=> {
      console.log(id)
       navigate(`/adminverify/${id}`);
    }
  return (
   
    <>
      <div className="container-fluied mx-5  mt-5">
                <h2 className='color_pencile text-center mt-5'>Explore User List</h2>
                <p className='color_pencile text-center'>Explore all collections on Snoozz marketplace.</p>
                <div className="mt-5">
                <div className="card bg-transparent border_theme_1px text-center mt-3 gl_morph ">
                <div className="card-header color_theme ">
                    <h5 className="h5 p-2 text-light">Users</h5>
                </div>
                <div className="card-body table-responsive">
                    <table className="table text-light text-start border-2 wsnwrap">
                        <thead>
                            <tr className='text-center'>
                            <th >Sr no</th>
                            <th >Name</th>
                            <th >Username</th>
                            <th >Email	</th>
                            <th >Wallet</th>
                            <th >Created At</th>
                            <th >Status</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user.map((e,index) => {
                              return<tr key = {e.id} className='text-center'>
                               <td>{index + 1}</td>
                               <td>{e.name}</td>
                                <td>{e.uname}</td>
                                <td>{e.email}</td>
                                {/* <td>{smallwalletaddress(e.wallet)}</td> */}
                                <td>{e.wallet}</td>
                                <td>{smdate(e.created_at)}</td>
                                <td>{e.verify}</td>
                                <td>
                                    <div className="d-flex justify-content-center">
                                    <button type="button" class="btn bg_theme mx-1"  onClick={()=>
              getid(e.id)}><a><i class="fa-solid fa-eye"></i></a></button>
                                    <button type="button" class="btn btn_squre_theeme mx-1" onClick={()=>
              getidview(e.id)} >View Verification</button>
                                    </div>
                                </td>
                            </tr>
                          })}
                        </tbody>
                    </table>
                </div>
            </div>
                </div>
            </div>
    </>
  )
}
