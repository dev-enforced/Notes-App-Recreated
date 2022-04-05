const logoutService = (navigatorFunction, authStateUpdateFunction) => {
    authStateUpdateFunction(prev => ({ ...prev, isLoggedIn: false, authToken: "" }))
    localStorage.removeItem("AUTH-DETAILS");
    navigatorFunction("/");
}
export { logoutService };