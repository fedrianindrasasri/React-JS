import React from 'react';
import './YoutubeComp.css'


const YoutubeComp = (props) => {
    return (
        <div className='youtube-wrapper'>
            <div className="img-thumb">
                <img src="https://yt3.ggpht.com/yti/AJo0G0nCrNSkbZhpG5GP9p6jP6EarYQb9F758kXdbQRr=s108-c-k-c0x00ffffff-no-rj" alt="" srcset="" />
                <p className='time'>{props.time}</p>
            </div>
            <p className='title'>{props.title}</p>
            <p className='desc'>{props.desc}</p>
        </div>
    )
}


YoutubeComp.defaultProps = {
    time: '00:00',
    title: 'Title Here',
    desc: 'Desc Here'
}

export default YoutubeComp;