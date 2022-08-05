import React from "react";
import { useNotes } from "context";
import { colorList, actionConstants } from "constants";
import "./ColorPalette.css";
const ColorPalette = ({ activeDropdown, setActiveDropdown }) => {
  const { dispatchNoteData } = useNotes();
  const {
    INPUT_ACTIONS: { UPDATE_COLOR },
  } = actionConstants;
  const toggleColorDropdown = () => {
    setActiveDropdown((currentValue) => ({
      priorityDropdown: false,
      labelDropdown: false,
      colorDropdown: !currentValue.colorDropdown,
    }));
  };
  return (
    <div
      className="color-palette-action"
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      <button
        className="color-selector-btn"
        onClick={(e) => {
          e.preventDefault();
          toggleColorDropdown();
        }}
      >
        <span className="material-icons-outlined app-icon">palette</span>
      </button>
      <div
        className={
          activeDropdown.colorDropdown
            ? "color-list flex-row"
            : "color-list-none"
        }
      >
        {colorList.map((everyColor, index) => {
          return (
            <span
              onClick={() => {
                dispatchNoteData({ type: UPDATE_COLOR, payload: everyColor });
                toggleColorDropdown();
              }}
              className={`color-element color-list-${index + 1}`}
              key={index}
              value={everyColor}
            ></span>
          );
        })}
      </div>
    </div>
  );
};

export { ColorPalette };
