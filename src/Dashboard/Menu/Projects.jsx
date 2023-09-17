import React from 'react'
import './Styles/projects.scss'

export const Projects = () => {
    return (
        <div className='containerProj'>
            <div className='myProject'>
                <h2>My projects</h2>
                <div className='currProj'></div>
            </div>
            <div className='allProject'>
                <h2>All projects</h2>
                <div className='collapse'>
                    <div className='onboarding'>
                        <div>Onboarding</div>
                        <div>Onboarding - Getting started</div>
                        <div>Tools</div>
                    </div>
                    <div className='zeroday'>
                        <div>0-Day</div>
                        <div>0-Day 0-Day</div>
                    </div>
                    <div className='lowlevel'>
                        <div>Low-level programming & Algorithm</div>
                        <div>Low-level programming & Algorithm - Hatching out</div>
                        <div>Low-level programming & Algorithm - Data structures and Algorithms</div>
                        <div>Low-level programming & Algorithm - Linux and Unix system programming</div>
                    </div>
                    <div className='highlevel'>
                        <div>Higher-level programming</div>
                        <div>Higher-level programming - Python</div>
                        <div>Higher-level programming - Javascript</div>
                        <div>Higher-level programming - Databases</div>
                        <div>Higher-level programming - AirBnB clone</div>
                    </div>
                    <div className='sysdevops'>
                        <div>System engineering & DevOps</div>
                        <div>System engineering & DevOps - Bash</div>
                        <div>System engineering & DevOps - Scripting</div>
                        <div>System engineering & DevOps - Networking</div>
                        <div>System engineering & DevOps -  Web stack</div>
                        <div>System engineering & DevOps - Security</div>
                        <div>System engineering & DevOps - On call</div>
                        <div>System engineering & DevOps - CI/CD</div>
                        <div>System engineering & DevOps - Web stack debugging</div>
                    </div>
                    <div className='techwriting'>
                        <div>Technical Writing and Networking</div>
                        <div>Technical Writing and Networking - Social media</div>
                    </div>
                    <div className='more'>
                        <div>More!</div>
                    </div>
                    <div className='portproj'>
                        <div>Portfolio Project</div>
                    </div>
                </div>           
            </div>
            
        </div>
    )
}
