import React from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks } from 'constants';
import "./SideNavigation.css";


const SideNavigation = () => {
    return (
        <aside className="side-navigation-container">
            <div className="sidebar-wrapper flex-column">
                {
                    navLinks.map(({ linkTitle, pathGiven, iconWithTitle }, index) => {
                        return (
                            <NavLink key={index} to={`${pathGiven}`} className={`link-none aside-link ${({ isActive }) => isActive ? "active" : ""}`}>
                                <span className='material-icons-outlined mx-4'>{iconWithTitle}</span> 
                                <span className='title-link'>{linkTitle}</span>
                            </NavLink>
                        )
                    })
                }
            </div>
        </aside>
    )
}

export { SideNavigation }