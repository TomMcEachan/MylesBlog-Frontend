
import React from 'react'
import ReactPlayer from 'react-player/youtube'

export default function VideoPlayer({video}) {
  


    return (
        <div>
           <ReactPlayer url={video} />
        </div>
    )

}

