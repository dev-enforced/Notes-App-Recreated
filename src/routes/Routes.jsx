import React from "react";
import { Routes, Route } from "react-router-dom";
import { MockAPI, Mockbee, Homepage } from "pages";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/mockbee" element={<Mockbee />} />
            <Route path="/mockman" element={<MockAPI />} />
            <Route path="/" element={<Homepage />} />
        </Routes>
    )
}
export { AppRoutes };