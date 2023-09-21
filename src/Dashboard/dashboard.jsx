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
import { Navigate } from "./Menu/navigation";
import { MobileMenu } from "./Menu/mobileMenu";


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
                setSelectedCompo(null);
        }
        //Capture the current menu icon clicked on to add styles to it
        setCurrMenu(currCompo);
    }
    return(
        <div className="dashFrame">
            <MobileMenu handleHome={() => handleMenu('Home_page')}/>
            <Navigate currMenu={currMenu} handleMenu={handleMenu} id='showNavi'/>
            <div className="rightContent">
                <div className="notification">
                    New Captain's log to be filled before september 25, 2023 06:00 am
                </div>
                {/* dynamically render page based on user interaction */}
                {selectedCompo}
            </div>
            
        </div>
    )
}