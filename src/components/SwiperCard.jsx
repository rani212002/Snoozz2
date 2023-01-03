import React from 'react';
import PropTypes from "prop-types";

function SwiperCard(props) {
  return (
    <>
      <div class="card bg-transparent listing_cards">
        <div class="card-body mt-3">
          <img src={props.img} class="listing_logo w-75" />
          <p class="listing_para listing_font text-light">
            {props.content}
          </p>
        </div>
      </div>

    </>
  )
}
export default SwiperCard;
