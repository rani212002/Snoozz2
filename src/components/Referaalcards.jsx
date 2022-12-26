import React from 'react'

export default function Referaalcards(props) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: play,

        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"

        }

    };
    return (
        <>
            <div className="card w-50 border_theme bg-transparent border_theme_1px">
                <div className="card-body">
                    <div className="d-flex justify-content-center">
                        <img src={props.img} className="" alt="..." />
                        <Lottie isClickToPauseDisabled={true}
                            options={defaultOptions}
                            height={100}
                            width={100}
                        />
                    </div>
                    <p className="card-text">{props.steps}</p>
                </div>
            </div>
        </>
    )
}
