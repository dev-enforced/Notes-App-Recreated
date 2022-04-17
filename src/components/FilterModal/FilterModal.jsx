import React from "react";
import { useFilters, useNotes } from "context";
import "./FilterModal.css";
const FilterModal = ({ checkDisplayModal }) => {
  const { noteLabels } = useNotes();
  const { currentFilterState, filterStateUpdate } = useFilters();
  return (
    <>
      <div className="g-flex-row filter-modal-overlay">
        <div className="filter-modal-wrapper">
          <div className="fw-700 g-flex-row g-flex-space-between-align-center p-5 filter-modal-header">
            <p>FILTERS</p>
            <p className="text-cursor-pointer">CLEAR ALL</p>
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
                      checked={currentFilterState.sortBy.recentToOld}
                      onChange={() => {
                        filterStateUpdate({ type: "RECENT_TO_OLD" });
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
                      checked={currentFilterState.sortBy.oldToRecent}
                      onChange={() => {
                        filterStateUpdate({ type: "OLD_TO_RECENT" });
                      }}
                    />
                    <span className="fs-1-5">Date: Old To Recent</span>
                  </label>
                </li>
              </ul>
            </div>
            <div className="filter-container">
              <h5>LABELS</h5>
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
                        />

                        {everyLabel}
                      </label>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export { FilterModal };
