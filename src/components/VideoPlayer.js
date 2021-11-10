import React, { useState } from 'react'
import Card from './card'
import VData from './VData'

const VideoPlayer = () => {
    const [viewVid, setViewVid] = useState(false)

    return (
        <>
        {
            viewVid ? null : <div className="text-center">
        <button className='btn btn-dark' onClick={()=>setViewVid(true)}>view videos</button>
        </div>
        }
        
        {
            viewVid ? <div className=" container mt-5 card-vid">
            {VData.map((val)=>{
                return(
                    <Card 
                        key={val.id}
                        vidsrc={val.vidsrc}
                        poster={val.poster}
                        title={val.title}
                        disc={val.disc}
                />
                )
            })}
        </div> : null
        }
        
        </>
    )
}

export default VideoPlayer
