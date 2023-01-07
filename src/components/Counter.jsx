import React from 'react'
export default function Counter(props) {
var countDownDate = props.seconds

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  // console.log("props.seconds")
  // console.log(props.seconds)
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  // console.log(days)
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("days").innerHTML = days ;
  document.getElementById("hours").innerHTML = hours ;
  document.getElementById("min").innerHTML = minutes ;
  document.getElementById("min").innerHTML = minutes ;
 document.getElementById("sec").innerHTML = seconds; 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
  return (
    <>
       <div className="row">
                            <div className="col text-center">
                                <h4 className='color_theme' id='days'></h4>
                                <p className='text-light'>Days</p>
                            </div>
                            <div className="col text-center">
                                <h4 className='color_theme' id='hours'></h4>
                                <p className='text-light'>Hours</p>
                            </div>
                            <div className="col text-center">
                                <h4 className='color_theme' id='min'></h4>
                                <p className='text-light'>Min</p>
                            </div>
                            <div className="col text-center">
                                <h4 className='color_theme' id='sec'></h4>
                                <p className='text-light'>Sec</p>
                            </div>
                        </div>
    </>
  )
}
