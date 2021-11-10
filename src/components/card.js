import React from 'react'


const card = (props) => {
    return (
        <>
           <div className="container">
                <video className="card-img-top" controls  poster={props.poster}>
                    <source src={props.vidsrc} type='video/mp4' />
                </video>
            </div>
           
        </>
    )
}

export default card
