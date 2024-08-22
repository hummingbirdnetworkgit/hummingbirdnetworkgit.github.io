import React, { useState } from "react";
import "./styles.css";
import Footer from "./Footer";
import { isMobile } from "react-device-detect";

const Body = () => {
    const currentContent = [
        {
            name: "Hummingbird Showcase",
            title: "Freestyle Series",
            desc: 'A unique and dynamic project dedicated to spotlight the best artists.',
            type: "RECORDING",
            image: "/img/projects/project1.png",
            videoUrl: "https://www.youtube.com/embed/videoseries?si=BZbhHEZ5Yx_FV5kC&amp;list=PLuquG6ioTM99KTAyhThOYwDwS6KwVXVcb"
        },
        {
            name: "Hummingbird Interviews",
            title: "Interview Series",
            desc: 'Exploring the minds and works of the people from around the globe.',
            type: "INTERVIEW",
            image: "/img/projects/interview.jpg",
            videoUrl: "https://www.youtube.com/embed/fxVCvOMKY3U?si=Cx31p0Y8G9zgV-6J"
        },
        {
            name: "Music Video",
            title: "SOUNDMAKER - Take Me Where You Wanna Official MV (Dir. Alex Night)",
            desc: "Premier music video production services.",
            type: "MUSIC",
            image: "/img/projects/alex_head.png",
            videoUrl: "https://www.youtube.com/embed/XFXltA5UD6E?si=Gyhk3jjCsnfiKLJG"
        }
    ]

    const [projectState, setProjectState] = useState("ALL");
    const [selectedItem, setSelectedItem] = useState("");

    const renderContent = () => {
        switch(projectState){
            case 'ALL':
                return (<div className="project-list">
                    {currentContent.map((obj, idx) => {
                        return (idx % 2 == 0 ? <div className="project-item" style={{paddingLeft: isMobile ? '30vw' : '12vw'}}>
                            <div className="project-item-text-left">
                                <p className="project-item-title">{obj.title}</p>
                                <p className="project-item-desc">{obj.desc}</p>
                            </div>
                            <div className="project-item-image">
                                <img className="project-item-image-bg w-100" src="/img/projects/coverbg.png"/>
                                <img className="project-item-cover" src={obj.image} onClick={()=>setSelectedItem(obj)}/>
                                <div className="project-item-name-container">
                                    <span className="project-item-name" onClick={()=>setSelectedItem(obj)}>{obj.name}</span>
                                </div>
                            </div>
                        </div> : <div className="project-item" style={{paddingRight: isMobile ? '30vw' : '12vw', marginLeft: 'auto'}}>
                            <div className="project-item-text-right">
                                <p className="project-item-title">{obj.title}</p>
                                <p className="project-item-desc">{obj.desc}</p>
                            </div>
                            <div className="project-item-image">
                                <img className="project-item-image-bg-right w-100" src="/img/projects/coverbg.png"/>
                                <img className="project-item-cover-right" src={obj.image} onClick={()=>setSelectedItem(obj)} />
                                <div className="project-item-name-right-container">
                                    <span className="project-item-name-right" onClick={()=>setSelectedItem(obj)}>{obj.name}</span>
                                </div>
                            </div>
                        </div>)
                    })}
                </div>);
            case "INTERVIEW":
                const interviews = currentContent.filter((content)=>content.type==="INTERVIEW");
                return (<div className="project-list">
                    {interviews.map((obj, idx) => {
                        return (idx % 2 == 0 ? <div className="project-item" style={{paddingLeft: isMobile ? '30vw' : '12vw'}}>
                            <div className="project-item-text-left">
                                <p className="project-item-title">{obj.title}</p>
                                <p className="project-item-desc">{obj.desc}</p>
                            </div>
                            <div className="project-item-image">
                                <img className="project-item-image-bg w-100" src="/img/projects/coverbg.png"/>
                                <img className="project-item-cover" src={obj.image} onClick={()=>setSelectedItem(obj)} />
                                <div className="project-item-name-container">
                                    <span className="project-item-name" onClick={()=>setSelectedItem(obj)}>{obj.name}</span>
                                </div>
                            </div>
                        </div> : <div className="project-item" style={{paddingRight: isMobile ? '30vw' : '12vw', marginLeft: 'auto'}}>
                            <div className="project-item-text-right">
                                <p className="project-item-title">{obj.title}</p>
                                <p className="project-item-desc">{obj.desc}</p>
                            </div>
                            <div className="project-item-image">
                                <img className="project-item-image-bg-right w-100" src="/img/projects/coverbg.png"/>
                                <img className="project-item-cover-right" src={obj.image} onClick={()=>setSelectedItem(obj)}/>
                                <div className="project-item-name-right-container">
                                    <span className="project-item-name-right" onClick={()=>setSelectedItem(obj)}>{obj.name}</span>
                                </div>
                            </div>
                        </div>)
                    })}
                </div>);
            case "RECORDING":
                const recordings = currentContent.filter((content)=>content.type==="RECORDING");
                return (<div className="project-list">
                    {recordings.map((obj, idx) => {
                        return (idx % 2 == 0 ? <div className="project-item" style={{paddingLeft: isMobile ? '30vw' : '12vw'}}>
                            <div className="project-item-text-left">
                                <p className="project-item-title">{obj.title}</p>
                                <p className="project-item-desc">{obj.desc}</p>
                            </div>
                            <div className="project-item-image">
                                <img className="project-item-image-bg w-100" src="/img/projects/coverbg.png"/>
                                <img className="project-item-cover" src={obj.image} onClick={()=>setSelectedItem(obj)} />
                                <div className="project-item-name-container">
                                    <span className="project-item-name" onClick={()=>setSelectedItem(obj)}>{obj.name}</span>
                                </div>
                            </div>
                        </div> : <div className="project-item" style={{paddingRight: isMobile ? '30vw' : '12vw', marginLeft: 'auto'}}>
                            <div className="project-item-text-right">
                                <p className="project-item-title">{obj.title}</p>
                                <p className="project-item-desc">{obj.desc}</p>
                            </div>
                            <div className="project-item-image">
                                <img className="project-item-image-bg-right w-100" src="/img/projects/coverbg.png"/>
                                <img className="project-item-cover-right" src={obj.image} onClick={()=>setSelectedItem(obj)}/>
                                <div className="project-item-name-right-container">
                                    <span className="project-item-name-right" onClick={()=>setSelectedItem(obj)}>{obj.name}</span>
                                </div>
                            </div>
                        </div>)
                    })}
                </div>);
            case "MUSIC":
                const mvs = currentContent.filter((content)=>content.type==="MUSIC");
                return (<div className="project-list">
                    {mvs.map((obj, idx) => {
                        return (idx % 2 == 0 ? <div className="project-item" style={{paddingLeft: isMobile ? '30vw' : '12vw'}}>
                            <div className="project-item-text-left">
                                <p className="project-item-title">{obj.title}</p>
                                <p className="project-item-desc">{obj.desc}</p>
                            </div>
                            <div className="project-item-image">
                                <img className="project-item-image-bg w-100" src="/img/projects/coverbg.png"/>
                                <img className="project-item-cover" src={obj.image} onClick={()=>setSelectedItem(obj)} />
                                <div className="project-item-name-container">
                                    <span className="project-item-name" onClick={()=>setSelectedItem(obj)}>{obj.name}</span>
                                </div>
                            </div>
                        </div> : <div className="project-item" style={{paddingRight: isMobile ? '30vw' : '12vw', marginLeft: 'auto'}}>
                            <div className="project-item-text-right">
                                <p className="project-item-title">{obj.title}</p>
                                <p className="project-item-desc">{obj.desc}</p>
                            </div>
                            <div className="project-item-image">
                                <img className="project-item-image-bg-right w-100" src="/img/projects/coverbg.png"/>
                                <img className="project-item-cover-right" src={obj.image} onClick={()=>setSelectedItem(obj)}/>
                                <div className="project-item-name-right-container">
                                    <span className="project-item-name-right" onClick={()=>setSelectedItem(obj)}>{obj.name}</span>
                                </div>
                            </div>
                        </div>)
                    })}
                </div>);
            default:
                return (<div className="project-list">
                    {currentContent.map((obj, idx) => {
                        return (idx % 2 == 0 ? <div className="project-item" style={{paddingLeft: isMobile ? '30vw' : '12vw'}}>
                            <div className="project-item-text-left">
                                <p className="project-item-title">{obj.title}</p>
                                <p className="project-item-desc">{obj.desc}</p>
                            </div>
                            <div className="project-item-image">
                                <img className="project-item-image-bg w-100" src="/img/projects/coverbg.png"/>
                                <img className="project-item-cover" src={obj.image} onClick={()=>setSelectedItem(obj)}/>
                                <div className="project-item-name-container">
                                    <span className="project-item-name" onClick={()=>setSelectedItem(obj)}>{obj.name}</span>
                                </div>
                            </div>
                        </div> : <div className="project-item" style={{paddingRight: isMobile ? '30vw' : '12vw', marginLeft: 'auto'}}>
                            <div className="project-item-text-right">
                                <p className="project-item-title">{obj.title}</p>
                                <p className="project-item-desc">{obj.desc}</p>
                            </div>
                            <div className="project-item-image">
                                <img className="project-item-image-bg-right w-100" src="/img/projects/coverbg.png"/>
                                <img className="project-item-cover-right" src={obj.image} onClick={()=>setSelectedItem(obj)} />
                                <div className="project-item-name-right-container">
                                    <span className="project-item-name-right" onClick={()=>setSelectedItem(obj)}>{obj.name}</span>
                                </div>
                            </div>
                        </div>)
                    })}
                </div>);
        };     
    }

    return (
        <div className="web-project-body">
            <div className="web-project-body-menu">
                <span className={`project-menu-item ${projectState === 'ALL' && 'project-menu-selected'}`} onClick={()=>setProjectState("ALL")}>ALL</span>
                <span className="project-menu-slash">/</span>
                <span className={`project-menu-item ${projectState === 'INTERVIEW' && 'project-menu-selected'}`} onClick={()=>setProjectState("INTERVIEW")}>Interview</span>
                <span className="project-menu-slash">/</span>
                <span className={`project-menu-item ${projectState === 'RECORDING' && 'project-menu-selected'}`} onClick={()=>setProjectState("RECORDING")}>Recording</span>
                <span className="project-menu-slash">/</span>
                <span className={`project-menu-item ${projectState === 'MUSIC' && 'project-menu-selected'}`} onClick={()=>setProjectState("MUSIC")}>Music Video</span>
            </div>
            {
                selectedItem !== "" && <div className="video-player">
                    <div className="video-player-close">
                        <img className="video-player-close-logo" src="/img/hmlogovideo.png" />
                        <div className="video-player-close-icon" onClick={()=>setSelectedItem("")}>X</div>
                    </div>
                    <iframe className="video-player-iframe" src={selectedItem.videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            }
            {
                    renderContent()
            }
            <Footer />
        </div>
    )
}

export default Body;