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
import { routeConstants } from "constants";

const AppRoutes = () => {
  const {
    HOME_ROUTE,
    MOCKBEE,
    MOCKMAN,
    SIGNUP,
    LOGIN,
    NOTES_HOME,
    NOTES_ARCHIVES,
    NOTES_TRASH,
  } = routeConstants;
  return (
    <Routes>
      <Route path={MOCKBEE} element={<Mockbee />} />
      <Route path={MOCKMAN} element={<MockAPI />} />
      <Route path={HOME_ROUTE} element={<Homepage />} />
      <Route path={LOGIN} element={<Login />} />
      <Route path={SIGNUP} element={<Signup />} />
      <Route
        path={NOTES_HOME}
        element={<PrivateRoute partGiven={<NotesHome />}></PrivateRoute>}
      />
      <Route
        path={NOTES_ARCHIVES}
        element={<PrivateRoute partGiven={<NotesArchives />}></PrivateRoute>}
      />
      <Route
        path={NOTES_TRASH}
        element={<PrivateRoute partGiven={<NotesTrash />}></PrivateRoute>}
      />
    </Routes>
  );
};
export { AppRoutes };
