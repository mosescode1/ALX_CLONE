import React from 'react'
import './Styles/homeMenu.scss'

export const HomePage = () => {
    return (  
        <div className="rightContent">
            <div className="signin">
                New Captain's log to be filled before september 25, 2023 06:00 am
            </div>
            <div className="classScore">
                <div className="upcoming">
                    <div className="eventHead">
                        <div className="eventTitle">Define Your future</div>
                        <div className="content">Here is the conent</div>
                    </div>
                    <div className="eventHead">
                        <div className="eventTitle">Project </div>
                        <div className="content">Enjoy the silence...</div>
                    </div>
                </div>
                <div className="scores">
                    <div className="child scoreHead">
                        <div>Scores - SE Foundations</div>
                        <div>154.54%</div>
                    </div>
                    <div className="child scoreHead scoreSpace">
                        <div>Month</div>
                        <div>Average</div>
                    </div>
                    <div className="child"></div>
                    <div className="child"></div>
                    <div className="child"></div>
                </div>
            </div>
        </div> 
    )
}
