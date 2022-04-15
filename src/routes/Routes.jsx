import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  MockAPI,
  Mockbee,
  Homepage,
  Login,
  Signup,
  NotesHome,
  NotesArchives,
  NotesTrash,
} from "pages";
import { PrivateRoute } from "./PrivateRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/mockbee" element={<Mockbee />} />
      <Route path="/mockman" element={<MockAPI />} />
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/noteshome"
        element={<PrivateRoute partGiven={<NotesHome />}></PrivateRoute>}
      />
      <Route
        path="/notesarchives"
        element={<PrivateRoute partGiven={<NotesArchives />}></PrivateRoute>}
      />
      <Route
        path="/notestrash"
        element={<PrivateRoute partGiven={<NotesTrash />}></PrivateRoute>}
      />
    </Routes>
  );
};
export { AppRoutes };
