import React, { useState } from 'react';
import { colorList } from 'constants';
import "./ColorPalette.css";
import { useNotes } from 'context';
const ColorPalette = () => {
    const [colorListStyle, setColorListStyle] = useState("color-list-none")
    const toggleColorListStyle = () => {
        setColorListStyle(classDetails => classDetails === "color-list flex-row" ? "color-list-none" : "color-list flex-row")
    }
    const { dispatchNoteData } = useNotes();
    return (
        <div className='color-palette-action' onClick={(e) => {
            e.preventDefault();
        }}>
            <button className='color-selector-btn' onClick={(e) => {
                e.preventDefault();
                toggleColorListStyle();
            }}>
                <span className="material-icons-outlined app-icon">
                    palette
                </span>
            </button>
            <div className={colorListStyle}>
                {
                    colorList.map((everyColor, index) => {
                        return (
                            <span onClick={() => {
                                dispatchNoteData({ type: "UPDATE_COLOR", payload: everyColor });
                                toggleColorListStyle();
                            }} className={`color-element color-list-${index + 1}`} key={index} value={everyColor}></span>
                        )
                    })
                }
            </div>
        </div>
    )
}

export { ColorPalette };