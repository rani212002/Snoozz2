import React, { useEffect, useState } from 'react'
import Table from './Table'
import axios from 'axios';


export default function Activity(props) {

    const [userid , setuserid] = useState("")
    const[activity,setActivity] = useState()
    

    useEffect(()=>{
        let localData=localStorage.getItem('userauth');
        let data = JSON.parse(localData)
        // console.log('data');
        // console.log(data);
        setActivity(data)
        
        const postData = { user_id: userid };
        const response =  axios({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            url: process.env.REACT_APP_API_PATH + 'activity',
            data: postData,
          }).then(async function (response) {
            const res = await response.data.data;
              console.log(res)
            });
            
    }, [])
    console.log('fbkgfjkdfgkjas')
    console.log(activity)

 
        return (
        <>
           
        </>
    )
}
