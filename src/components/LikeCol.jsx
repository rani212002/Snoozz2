import React from 'react'
import '../css/discover.css'
import LikeColcards from './LikeColcards'

export default function LikeCol() {
  return (
    <>
       <div className="container  mt-5">
                <h2 className='color_pencile text-center mt-5'>Explore Liked Collection Items</h2>
                
                <div className="mt-5">
                <div className="row">
                    <LikeColcards />
                </div>
                </div>
            </div>
    </>
  )
}
