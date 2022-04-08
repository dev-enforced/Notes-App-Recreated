import React from 'react'
import { Unpinned, ArchiveMoved, Trash, Edit } from "constants";
const NoteItem = () => {
  return (
    <div className="card card-vertical">
      <div className="card-header">
        <div className="card-badge card-badge-info">
          <span>TRENDING</span>
        </div>
        <div className="card-dismiss">
          <Unpinned className="card-dismiss-icon"/>
        </div>
      </div>

      <div className="card-content">
        
        <p className="card-pricing">
          <span className="card-price">₹600</span>
          <del className="card-original-price">₹1000</del>
          <span className="card-discount">40% off</span>
        </p>
      </div>

      <div className="card-actions">
        <button className="btn btn-icon btn-warning-hover">
          <Edit/>
        </button>
        <button className="btn btn-icon btn-primary-hover">
          <ArchiveMoved/>
        </button>
        <button className="btn btn-icon btn-primary-hover">
          <Trash />
        </button>
      </div>
    </div>
  )
}

export { NoteItem }