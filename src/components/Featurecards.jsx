
import React from 'react'

export default function Featurecards(props) {
    return (
        <>

            <div className="col-lg-4 mz-2 mt-2">
                <div class="cards_shadow h-100">
                    <div class="d-flex justify-content-center">
                        <img src={props.img} class="w-25" />
                    </div>
                    <h5 class="text-center color_pencile"><b>{props.title}</b></h5>
                    <p class="text-center color_pencile">
                        {props.content}
                    </p>
                </div>
            </div>
            <br />
        </>
    )
}
