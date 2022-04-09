const fetchAndSetFormInputValues = (e, updateFunction) => {
    const { name, value } = e.target;
    updateFunction(prev => ({ ...prev, [name]: value }))
}
export {fetchAndSetFormInputValues}