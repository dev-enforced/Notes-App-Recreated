import React, { useState } from 'react';
import "./ColorPalette.css";
const ColorPalette = () => {
    const [colorListStyle, setColorListStyle] = useState("color-list-none")
    const toggleColorListStyle = () => {
        setColorListStyle(classDetails => classDetails === "color-list flex-row" ? setColorListStyle("color-list-none") : ("color-list flex-row"))
    }
    const colorList = ["#f28b82", "#fbbc04", "#fff475", "#ccff90", "#a7ffeb", "#cbf0f8", "#aecbfa", "#d7aefb", "#fdcfe8"]
    return (
        <div className='color-palette-action'>
            <button className='color-selector-btn' onClick={toggleColorListStyle}>
                <span className="material-icons-outlined app-icon">
                    palette
                </span>
            </button>
            <div className={colorListStyle}>
                {
                    colorList.map((everyColor, index) => {
                        return (
                            <span className='color-element' key={index} style={{ backgroundColor: everyColor }} value={everyColor}></span>
                        )
                    })
                }
            </div>
        </div>
    )
}

export { ColorPalette };