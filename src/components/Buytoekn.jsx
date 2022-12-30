import React from 'react'
import Buytokencards from '../components/Boutokencards'
import '../css/Buytoken.css'
import Buytokenmain from './Buytokenmain'

export default function Buytoekn() {
    return (
        <>
            <div className="container-fluied mx-5 mt-5">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="border_theme_1px text-center rounded">
                            <p className='color_theme mt-3'>Trading NFT</p>
                        </div>
                        <div className="row">
                            <Buytokencards />
                            <Buytokencards />
                            <Buytokencards />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <Buytokenmain />
                    </div>
                </div>
            </div>
        </>
    )
}
