import React from "react";
import { useFilters, useNotes } from "context";
import { actionConstants } from "constants";
import "./FilterModal.css";
const FilterModal = ({ checkDisplayModal }) => {
  const { noteLabels } = useNotes();
  const { currentFilterState, filterStateUpdate } = useFilters();
  const {
    sortBy: { oldToRecent, recentToOld },
    selectedLabels,
    prioritySelected,
  } = currentFilterState;
  const {
    FILTERS: {
      SORT_BY: { OLD_TO_RECENT, RECENT_TO_OLD },
      LABELS: { ADD_LABEL, REMOVE_LABEL },
      PRIORITY_ALLOTMENTS: { HIGH_PRIORITY, MEDIUM_PRIORITY, LOW_PRIORITY },
      REMOVE_FILTERS,
    },
  } = actionConstants;
  return (
    <>
      <div className="g-flex-row filter-modal-overlay">
        <div className="filter-modal-wrapper">
          <div className="fw-700 g-flex-row g-flex-space-between-align-center p-5 filter-modal-header">
            <p>FILTERS</p>
            <p
              className="hero-btn hero-btn-primary py-2 px-3 text-cursor-pointer"
              onClick={() => {
                filterStateUpdate({ type: REMOVE_FILTERS });
              }}
            >
              CLEAR ALL
            </p>
            <button
              className="close-filter-wrapper"
              onClick={() => {
                checkDisplayModal(false);
              }}
            >
              <span className="material-icons-outlined">clear</span>
            </button>
          </div>
          <div className="g-flex-column g-flex-start px-8 mb-10">
            <div className="filter-container">
              <h5>SORT BY</h5>
              <ul>
                <li className="pl-6 my-2">
                  <label
                    className="fw-400 note-label-input"
                    htmlFor="recent-to-old"
                  >
                    <input
                      type="radio"
                      id="recent-to-old"
                      name="date"
                      className="mr-4 pos-relative"
                      checked={recentToOld}
                      onChange={() => {
                        filterStateUpdate({ type: RECENT_TO_OLD });
                      }}
                    />
                    <span className="fs-1-5">Date: Recent To Old</span>
                  </label>
                </li>
                <li className="pl-6 my-2">
                  <label
                    className="fw-400 note-label-input"
                    htmlFor="old-to-recent"
                  >
                    <input
                      type="radio"
                      id="old-to-recent"
                      name="date"
                      className="mr-4 pos-relative"
                      checked={oldToRecent}
                      onChange={() => {
                        filterStateUpdate({ type: OLD_TO_RECENT });
                      }}
                    />
                    <span className="fs-1-5">Date: Old To Recent</span>
                  </label>
                </li>
              </ul>
            </div>
            <div className="filter-container">
              <h5>FILTER BY LABELS</h5>
              <ul className="gentle-flex-gap g-flex-wrap">
                {noteLabels &&
                  noteLabels?.map((everyLabel) => {
                    return (
                      <label
                        key={everyLabel}
                        className="gentle-flex-gap g-flex-align-center fs-1-5 fw-400"
                        htmlFor={everyLabel}
                      >
                        <input
                          className="note-label-input"
                          type="checkbox"
                          id={everyLabel}
                          checked={selectedLabels.includes(everyLabel)}
                          onChange={(e) => {
                            e.target.checked
                              ? filterStateUpdate({
                                  type: ADD_LABEL,
                                  payload: everyLabel,
                                })
                              : filterStateUpdate({
                                  type: REMOVE_LABEL,
                                  payload: everyLabel,
                                });
                          }}
                        />
                        {everyLabel}
                      </label>
                    );
                  })}
              </ul>
            </div>
            <div className="filter-container">
              <h5>FILTER BY PRIORITY</h5>
              <ul className="gentle-flex-gap g-flex-wrap">
                <li className="pl-6 my-2">
                  <label
                    className="fw-400 note-label-input"
                    htmlFor="priority-high"
                  >
                    <input
                      type="radio"
                      id="priority-high"
                      name="priority-choice"
                      className="mr-4 pos-relative"
                      checked={prioritySelected === "High"}
                      onChange={() => {
                        filterStateUpdate({ type: HIGH_PRIORITY });
                      }}
                    />
                    <span className="fs-1-5">High</span>
                  </label>
                </li>
                <li className="pl-6 my-2">
                  <label
                    className="fw-400 note-label-input"
                    htmlFor="priority-medium"
                  >
                    <input
                      type="radio"
                      id="priority-medium"
                      name="priority-choice"
                      className="mr-4 pos-relative"
                      checked={prioritySelected === "Medium"}
                      onChange={() => {
                        filterStateUpdate({ type: MEDIUM_PRIORITY });
                      }}
                    />
                    <span className="fs-1-5">Medium</span>
                  </label>
                </li>
                <li className="pl-6 my-2">
                  <label
                    className="fw-400 note-label-input"
                    htmlFor="priority-low"
                  >
                    <input
                      type="radio"
                      id="priority-low"
                      name="priority-choice"
                      className="mr-4 pos-relative"
                      checked={prioritySelected === "Low"}
                      onChange={() => {
                        filterStateUpdate({ type: LOW_PRIORITY });
                      }}
                    />
                    <span className="fs-1-5">Low</span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export { FilterModal };
