import React, { useState } from 'react';
import { colorList } from 'constants';
import "./ColorPalette.css";
const ColorPalette = () => {
    const [colorListStyle, setColorListStyle] = useState("color-list-none")
    const toggleColorListStyle = () => {
        setColorListStyle(classDetails => classDetails === "color-list flex-row" ? setColorListStyle("color-list-none") : ("color-list flex-row"))
    }

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