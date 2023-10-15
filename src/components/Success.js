import React from 'react'
import { Link } from "react-router-dom";
import correct from './correct.png'

const Success = () => {
  return (
    <div style={{'textAlign': 'center', 'margin': '50px', 'marginTop': '150px'}}>
    <img src={correct} alt="emptyNotifications" style={{
        'margin': 'auto',
        'width': '15%',
    }}/>
    <h2 style={{'textAlign': 'center'}}>Your Request Has Been Successfully Submitted!</h2>
    <h3 style={{'color': 'grey', 'textAlign': 'center'}}>Your Guidance Counselor Will Shortly Contact You 💪</h3>
    <Link to="/">
    <button type="submit" className="green_btn" style={{'margin': 'auto'}}>Go Back</button>
    </Link>
    </div>
  )
}

export default Success;