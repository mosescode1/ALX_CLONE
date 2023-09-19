import React, { useState } from "react"
import '../Menu/Styles/navigation.scss'
import { AiFillCalendar} from 'react-icons/ai';
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


export const Navigate = ({handleMenu}) => {

    return (
        <div id="leftMenu">
            <div className="logo" onClick={() => handleMenu('Home_page')}></div>
            <div className="menuIcons">
                <div className="icon-container" onClick={() => {handleMenu('My_planning')}}>
                    <div className="iconcont "><AiFillCalendar className="icon" /></div>
                    <p className="mobileIconName">My Planning</p>
                </div>
                <div className="icon-container" onClick={() => handleMenu('Projects')}>
                    <div className="iconcont"><PiGitBranchBold className="icon" /></div>
                    <p className="mobileIconName">Projects</p>
                </div>
                <div className="icon-container" onClick={() => handleMenu('QA')}>
                    <div className="iconcont"><GrCheckmark className="icon" /></div>
                    <p className="mobileIconName">QA Reviews I can make</p>
                </div>
                <div className= "icon-container" onClick={() => handleMenu('Quiz')}>
                    <div className="iconcont"><BsQuestionLg className="icon" /></div>
                    <p className="mobileIconName">Evaluation quizzes</p>
                </div>
                <hr className="line"/>
                <div className="icon-container" onClick={() => handleMenu('Curriculum')}>
                    <div className="iconcont"><FaGraduationCap className="icon" /></div>
                    <p className="mobileIconName">Curriculums</p>
                </div>
                <div className="icon-container" onClick={() => handleMenu('Concepts')}>
                    <div className="iconcont"><BsFillFileEarmarkTextFill className="icon" /></div>
                    <p className="mobileIconName">Concepts</p>
                </div>
                <div className="icon-container" onClick={() => handleMenu('Conference')}>
                    <div className="iconcont"><SiWechat className="icon" /></div>
                    <p className="mobileIconName">Conference rooms</p>
                </div>
                <div className="icon-container" onClick={() => handleMenu('Servers')}>
                    <div className="iconcont"><BiSolidServer className="icon" /></div>
                    <p className="mobileIconName">Servers</p>
                </div>
                <div className="icon-container" onClick={() => handleMenu('Sandboxes')}>
                    <div className="iconcont"><LiaGreaterThanEqualSolid className="icon" /></div>
                    <p className="mobileIconName">Sandboxes</p>
                </div>
                <div className="icon-container" onClick={() => handleMenu('Tools')}>
                    <div className="iconcont"><GiSpanner className="icon" /></div>
                    <p className="mobileIconName">Tools</p>
                </div>
                <div className="icon-container" onClick={() => handleMenu('Video')}>
                    <div className="iconcont"><BsFilm className="icon" /></div>
                    <p className="mobileIconName">Video on demand</p>
                </div>
                <hr className="line"/>
                <div className="icon-container" onClick={() => handleMenu('Peers')}>
                    <div className="iconcont"><MdGroups className="icon" /></div>
                    <p className="mobileIconName">Peers</p>
                </div>
                <div className="icon-container" onClick={() => handleMenu('Captain')}>
                    <div className="iconcont"><BiSolidBook className="icon" /></div>
                    <p className="mobileIconName">Captain's Logs</p>
                </div>
                <div className="icon-container" id="hideInDesk">
                    <a href="https://slack.com" target="_blank"><div className="slackMobile"></div></a>
                    <p className="mobileIconName"><a href="https://slack.com" target="_blank">Slack</a></p>
                </div>
                <div className="icon-container" id="hideInDesk" onClick={() => handleMenu('Profile')}>
                    <div className="profilepic"></div>
                    <p className="mobileIconName">My Profile</p>
                </div>
            </div>
            <div className="menuFooter">
                <a href="https://slack.com" target="_blank"><div id="icon-container">
                    <div id="slack"></div>
                        <p className="mobileIconName">Slack</p>
                    </div>
                </a>
                <div id="icon-container" onClick={() => handleMenu('Profile')}>
                    <div className="profilepic"></div>
                    <p className="mobileIconName">My Profile</p>
                </div>
            </div>
        </div>
    )
}