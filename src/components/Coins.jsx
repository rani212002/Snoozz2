import React from 'react'

export default function Coins(props) {

    return (
        <>  <div class="col-lg-3 align-item-center col-6 m-lg-2">
            <div class="d-flex mt-2 p-3 coins_div">
                <div>
                    <img src={props.img} />
                </div>
                <div>
                    <p className='color_pencile'><b>{props.title}</b></p>
                    <h6 className='color_pencile'><b>{props.Desc}</b></h6>
                </div>
            </div>
        </div>
        </>
    )
}
