import React, { useState } from 'react';
import "./PriorityDropdown.css";
const PriorityDropdown = () => {
    const [priorityDropdownStyle, setPriorityDropdownStyle] = useState("priority-dropdown-hidden")
    const togglePriorityDropdownStyle = () => {
        setPriorityDropdownStyle(currentValue => currentValue === "priority-dropdown-hidden" ? "priority-dropdown-section" : "priority-dropdown-hidden")
    }
    return (
        <div className='priority-list-dropdown-container'>
            <button className='priority-dropdown-button' onClick={togglePriorityDropdownStyle}>
                <span className="material-icons-outlined">signal_cellular_alt</span>
            </button>
            <ul className={priorityDropdownStyle}>
                <li className='py-2 px-4'>High</li>
                <li className='py-2 px-4'>Medium</li>
                <li className='py-2 px-4'>Low</li>
            </ul>
        </div>
    )
}

export { PriorityDropdown };