import React from 'react'
import Artistcards from './Artistcards'
import '../css/artist.css'

export default function Artist() {
    return (
        <>
            <div className="container text-center mt-5">
                <h1 className='color_pencile'>Our Artists</h1>
                <p className='color_pencile'>Meet our artists on Snoozz marketplace.</p>
                <Artistcards />
            </div>

        </>
    )
}
