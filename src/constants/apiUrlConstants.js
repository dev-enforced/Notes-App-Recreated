const apiUrlConstants = {
  AUTHENTICATION: {
    LOGIN_URL: "/api/auth/login",
    SIGNUP_URL: "/api/auth/signup",
  },
  NOTES_API_URL_LIST: {
    NOTES_API: "/api/notes",
    NOTES_ARCHIVES_URL: "/api/notes/archives",
    NOTES_TRASH_URL: "/api/notes/trash",
  },
  NOTES_ARCHIVES_URL_LIST: {
    ARCHIVES_API: "/api/archives",
    ARCHIVES_TRASH_URL: "/api/archives/trash",
  },
  NOTES_TRASH_URL_LIST: {
    TRASH_API: "/api/trash",
    TRASH_DELETE_FOREVER_API: "/api/trash/delete",
    TRASH_RESTORE_API: "/api/trash/restore",
  },
};

export { apiUrlConstants };
