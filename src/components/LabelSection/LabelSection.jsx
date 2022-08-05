import React, { useState } from "react";
import { useNotes } from "context";
import { actionConstants } from "constants";
import "./LabelSection.css";

const LabelSection = ({ activeDropdown, setActiveDropdown }) => {
  const { noteLabels, setNoteLabels, noteData, dispatchNoteData } = useNotes();
  const {
    INPUT_ACTIONS: {
      LABELS: { ADD_LABEL, REMOVE_LABEL },
    },
  } = actionConstants;
  const toggleLabelDropdown = () => {
    setActiveDropdown((currentValue) => ({
      priorityDropdown: false,
      colorDropdown: false,
      labelDropdown: !currentValue.labelDropdown,
    }));
  };

  const setNoteLabelsOnButtonClick = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      if (labelInput.trim() !== "") {
        setNoteLabels((prevList) =>
          prevList.includes(labelInput)
            ? [...prevList]
            : [...prevList, labelInput]
        );
        dispatchNoteData({ type: ADD_LABEL, payload: labelInput });
        setLabelInput("");
      }
    }
  };

  const [labelInput, setLabelInput] = useState("");

  const removeLabelFromCancelClick = (givenLabel) => {
    if (noteData.labels.includes(givenLabel)) {
      dispatchNoteData({
        type: REMOVE_LABEL,
        payload: givenLabel,
      });
      setNoteLabels((prevList) =>
        prevList.filter((eachLabel) => eachLabel !== givenLabel)
      );
    } else {
      setNoteLabels((prevList) =>
        prevList.filter((eachLabel) => eachLabel !== givenLabel)
      );
    }
  };
  return (
    <div className="priority-list-dropdown-container">
      <button
        className="label-dropdown-button"
        onClick={(e) => {
          e.preventDefault();
          toggleLabelDropdown();
        }}
      >
        <span className="material-icons-outlined">label</span>
      </button>
      {/* IN THIS PLACE TRY TO USE MAP TO REDUCE CODE REPETITION */}
      <div
        className={
          activeDropdown.labelDropdown
            ? "label-dropdown-section p-4"
            : "label-dropdown-hidden"
        }
      >
        <div className="pos-relative" tabIndex="0">
          <input
            type="text"
            placeholder="ENTER FOR A NEW TAG"
            className="label-input-container"
            value={labelInput}
            onKeyDown={(e) => {
              setNoteLabelsOnButtonClick(e);
            }}
            onChange={(e) => setLabelInput(e.target.value)}
          />
        </div>
        <ul>
          {noteLabels.map((everyLabel, index) => {
            return (
              <li
                key={index}
                className="py-1 g-flex-row gentle-flex-gap g-flex-space-between-align-center "
              >
                <span className="g-flex-row g-flex-align-center input-with-label text-cursor-pointer">
                  <input
                    type="checkbox"
                    value={everyLabel}
                    id={everyLabel}
                    checked={noteData.labels.includes(everyLabel)}
                    onChange={(e) => {
                      e.target.checked
                        ? dispatchNoteData({
                            type: ADD_LABEL,
                            payload: everyLabel,
                          })
                        : dispatchNoteData({
                            type: REMOVE_LABEL,
                            payload: everyLabel,
                          });
                    }}
                  />
                  <label className="fw-700" htmlFor={everyLabel}>
                    {everyLabel}
                  </label>
                </span>

                <span
                  className="text-cursor-pointer material-icons-outlined"
                  onClick={() => {
                    removeLabelFromCancelClick(everyLabel);
                  }}
                >
                  clear
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export { LabelSection };
