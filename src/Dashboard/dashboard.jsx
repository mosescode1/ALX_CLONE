import React from "react";
import './Menu/Styles/dashboard.scss';
import { useState } from "react";
import { HomePage } from "./Menu/Homepage";
import { MyPlanning } from "./Menu/My_planning";
import { Projects } from "./Menu/Projects";
import { QaReviews } from "./Menu/Qa_Reviews";
import { EvaluationQuiz } from "./Menu/Evaluation_quiz";
import { Curriculums } from "./Menu/Curriculums";
import { Concepts } from "./Menu/Concepts";
import { ConferenceRooms } from "./Menu/Conference_rooms";
import { Servers } from "./Menu/Servers";
import { Sandboxes } from "./Menu/Sandboxes";
import { Tools } from "./Menu/Tools";
import { VideoOnDemand } from "./Menu/Video_on_demand";
import { Peers } from "./Menu/Peers";
import { CaptainLog } from "./Menu/Captain_log";
import { Profile } from "./Menu/Profile";
import { AiFillCalendar } from 'react-icons/ai';
import { PiGitBranchBold } from 'react-icons/pi';
import { GrCheckmark } from 'react-icons/gr';
import { BsQuestionLg } from 'react-icons/bs';
import { FaGraduationCap } from 'react-icons/fa';
import { BsFillFileEarmarkTextFill } from 'react-icons/bs';
import { SiWechat } from 'react-icons/si';
import { BiSolidServer, BiSolidBook } from 'react-icons/bi';
import { LiaGreaterThanEqualSolid } from 'react-icons/lia';
import { GiSpanner } from 'react-icons/gi';
import { BsFilm } from 'react-icons/bs';
import { MdGroups } from 'react-icons/md';


export const DashBoard = () =>{
    const [selectedCompo, setSelectedCompo] = useState(<HomePage/>);
    const [currMenu, setCurrMenu] = useState('');

    //Render page dynamically based on the menu icon the user click on
    const handleMenu = (currCompo) => {
        switch (currCompo) {
            case 'Home_page':
                setSelectedCompo(<HomePage/>);
                break;
            case 'My_planning':
                setSelectedCompo(<MyPlanning/>);
                break;
            case 'Projects':
                setSelectedCompo(<Projects/>);
                break;
            case 'QA':
                setSelectedCompo(<QaReviews/>);
                break;
            case 'Quiz':
                setSelectedCompo(<EvaluationQuiz/>);
                break;
            case 'Curriculum':
                setSelectedCompo(<Curriculums/>);
                break;
            case 'Concepts':
                setSelectedCompo(<Concepts/>);
                break;
            case 'Conference':
                setSelectedCompo(<ConferenceRooms/>);
                break;
            case 'Servers':
                setSelectedCompo(<Servers/>);
                break;
            case 'Sandboxes':
                setSelectedCompo(<Sandboxes/>);
                break;
            case 'Tools':
                setSelectedCompo(<Tools/>);
                break;
            case 'Video':
                setSelectedCompo(<VideoOnDemand/>);
                break;
            case 'Peers':
                setSelectedCompo(<Peers/>);
                break;
            case 'Captain':
                setSelectedCompo(<CaptainLog/>);
                break;
            case 'Profile':
                setSelectedCompo(<Profile/>);
                break;
            default:
                setSelectedCompo(null)
        }
        //Capture the current menu icon clicked on to add styles to it
        setCurrMenu(currCompo);
    }
    return(
        <div className="dashFrame">
            <div className="leftMenu">
                <div className="logo" onClick={() => handleMenu('Home_page')}></div>
                <div className="menuIcons">
                    <div className={currMenu == "My_planning" ? "active" : "icon-container"} onClick={() => handleMenu('My_planning')}>
                        <AiFillCalendar className="icon" />
                    </div>
                    <div className={currMenu == "Projects" ? "active" : "icon-container"} onClick={() => handleMenu('Projects')}>
                        <PiGitBranchBold className="icon" />
                    </div>
                    <div className={currMenu == "QA" ? "active" : "icon-container"} onClick={() => handleMenu('QA')}>
                        <GrCheckmark className="icon" />
                    </div>
                    <div className={currMenu == "Quiz" ? "active" : "icon-container"} onClick={() => handleMenu('Quiz')}>
                        <BsQuestionLg className="icon" />
                    </div>
                    <hr className="line"/>
                    <div className={currMenu == "Curriculum" ? "active" : "icon-container"} onClick={() => handleMenu('Curriculum')}>
                        <FaGraduationCap className="icon" />
                    </div>
                    <div className={currMenu == "Concepts" ? "active" : "icon-container"} onClick={() => handleMenu('Concepts')}>
                        <BsFillFileEarmarkTextFill className="icon" />
                    </div>
                    <div className={currMenu == "Conference" ? "active" : "icon-container"} onClick={() => handleMenu('Conference')}>
                        <SiWechat className="icon" />
                    </div>
                    <div className={currMenu == "Servers" ? "active" : "icon-container"} onClick={() => handleMenu('Servers')}>
                        <BiSolidServer className="icon" />
                    </div>
                    <div className={currMenu == "Sandboxes" ? "active" : "icon-container"} onClick={() => handleMenu('Sandboxes')}>
                        <LiaGreaterThanEqualSolid className="icon" />
                    </div>
                    <div className={currMenu == "Tools" ? "active" : "icon-container"} onClick={() => handleMenu('Tools')}>
                        <GiSpanner className="icon" />
                    </div>
                    <div className={currMenu == "Video" ? "active" : "icon-container"} onClick={() => handleMenu('Video')}>
                        <BsFilm className="icon" />
                    </div>
                    <hr className="line"/>
                    <div className={currMenu == "Peers" ? "active" : "icon-container"} onClick={() => handleMenu('Peers')}>
                        <MdGroups className="icon" />
                    </div>
                    <div className={currMenu == "Captain" ? "active" : "icon-container"} onClick={() => handleMenu('Captain')}>
                        <BiSolidBook className="icon" />
                    </div><br/><br/>
                </div>
                <div className="menuFooter">
                    <div id="icon-container">
                    <a href="https://slack.com" target="_blank">
                        <div className="slack"></div>
                    </a>
                    </div>
                    <div id="icon-container" onClick={() => handleMenu('Profile')}>
                        <div className="profilepic"></div>
                    </div>
                </div>
            </div>
            <div className="rightContent">
                <div className="notification">
                    New Captain's log to be filled before september 25, 2023 06:00 am
                </div>
                {/* dynamically render page due to user interaction */}
                {selectedCompo}
            </div>
            
        </div>
    )
}