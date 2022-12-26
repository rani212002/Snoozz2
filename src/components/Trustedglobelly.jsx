import React from 'react'

export default function Trustedglobelly(props) {


    return (
        <>
            <div className="col-lg-2 card_trusted color_pencile p-2 mx-1 text-center">
                <h5 className='mt-3'><b>{props.value}</b></h5>
                <p>{props.title}</p>
            </div>
        </>
    )
}
