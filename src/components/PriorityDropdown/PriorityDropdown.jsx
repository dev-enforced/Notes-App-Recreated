import { useNotes } from 'context';
import React, { useState } from 'react';
import "./PriorityDropdown.css";
const PriorityDropdown = () => {
    const { dispatchNoteData } = useNotes();
    const [priorityDropdownStyle, setPriorityDropdownStyle] = useState("priority-dropdown-hidden")
    const togglePriorityDropdownStyle = () => {
        setPriorityDropdownStyle(currentValue => currentValue === "priority-dropdown-hidden" ? "priority-dropdown-section" : "priority-dropdown-hidden")
    }
    return (
        <div className='priority-list-dropdown-container' onClick={(e) => { e.preventDefault() }}>
            <button className='priority-dropdown-button' onClick={togglePriorityDropdownStyle}>
                <span className="material-icons-outlined">signal_cellular_alt</span>
            </button>
            {/* IN THIS PLACE TRY TO USE MAP TO REDUCE CODE REPETITION */}
            <ul className={priorityDropdownStyle}>
                <li onClick={() => {
                    dispatchNoteData({ type: "UPDATE_PRIORITY", payload: "High" });
                    togglePriorityDropdownStyle();
                }} className='py-2 px-4'>High</li>
                <li onClick={() => {
                    dispatchNoteData({ type: "UPDATE_PRIORITY", payload: "Medium" });
                    togglePriorityDropdownStyle();
                }} className='py-2 px-4'>Medium</li>
                <li onClick={() => {
                    dispatchNoteData({ type: "UPDATE_PRIORITY", payload: "Low" });
                    togglePriorityDropdownStyle();
                }} className='py-2 px-4'>Low</li>
            </ul>
        </div>
    )
}

export { PriorityDropdown };