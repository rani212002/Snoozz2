import React from 'react'
import { Link } from 'react-router-dom'

export default function Buynftdicitem(props) {
  
  return (
    <div className='mx-2'>
    
            <div
              className="card discoveritemcards border_none bg-transparent"
              key={props.id}
            > 
              <img
                src={process.env.REACT_APP_CLOUD_IMG + props.hash_id}
                className="w-100 rounded position-relative"
                alt="..."
                href="/buynft"
              />
              <span class="badge black_one_bg position-absolute like_btn">
                <i type="button" class={(props.like_status) == 0 ? "fa-solid fa-heart fa-2x text-light" : "fa-solid fa-heart fa-2x text-danger"}></i>
              </span>
              <div className="card-body">
                <div>
                  <h3 className="color_theme">{props.name}</h3>
                  <div className="d-flex justify-content-start">
                    <h6 className="bg_light_green p-1 color_theme">
                      {props.price}
                      {process.env.REACT_APP_COIN}
                    </h6>
                    <span className="color_pencile ms-2">
                      <b>Current bit</b>
                    </span>
                  </div>
                </div>
              </div>
            </div>

    </div>
  )
}
