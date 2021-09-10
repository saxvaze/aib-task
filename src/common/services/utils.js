const Utils = {
    /**
     * @description returns month name by provided 0 based index
     * @param {number} index 0 based index of month
     * @returns {string} month name
     */
    getMonthNameByIndex: (index) => {
        return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][index];
    }
}

export default Utils;