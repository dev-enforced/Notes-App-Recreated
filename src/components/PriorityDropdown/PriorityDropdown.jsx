import { useNotes } from "context";
import React from "react";
import "./PriorityDropdown.css";
const PriorityDropdown = ({ activeDropdown, setActiveDropdown }) => {
    const { dispatchNoteData } = useNotes();
    const togglePriorityDropdownStyle = () => {
        setActiveDropdown((currentValue) => ({
            priorityDropdown: !currentValue.priorityDropdown,
            labelDropdown: false,
            colorDropdown: false,
        }));
    };
    return (
        <div
            className="priority-list-dropdown-container"
            onClick={(e) => {
                e.preventDefault();
            }}
        >
            <button
                className="priority-dropdown-button"
                onClick={togglePriorityDropdownStyle}
            >
                <span className="material-icons-outlined">signal_cellular_alt</span>
            </button>
            {/* IN THIS PLACE TRY TO USE MAP TO REDUCE CODE REPETITION */}
            <ul
                className={
                    activeDropdown.priorityDropdown
                        ? "priority-dropdown-section"
                        : "priority-dropdown-hidden"
                }
            >
                <li
                    onClick={() => {
                        dispatchNoteData({ type: "UPDATE_PRIORITY", payload: "High" });
                        togglePriorityDropdownStyle();
                    }}
                    className="py-2 px-4"
                >
                    High
                </li>
                <li
                    onClick={() => {
                        dispatchNoteData({ type: "UPDATE_PRIORITY", payload: "Medium" });
                        togglePriorityDropdownStyle();
                    }}
                    className="py-2 px-4"
                >
                    Medium
                </li>
                <li
                    onClick={() => {
                        dispatchNoteData({ type: "UPDATE_PRIORITY", payload: "Low" });
                        togglePriorityDropdownStyle();
                    }}
                    className="py-2 px-4"
                >
                    Low
                </li>
            </ul>
        </div>
    );
};

export { PriorityDropdown };
