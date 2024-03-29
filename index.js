(function (window) {
    /**
     * Get the full string of Copyright
     * @param {Object} [options] - Options that can be used
     * @param {boolean} [options.uppercase] - Should the text be capitalized?
     * @param {string} [options.extra] - Extra text inserted inside the result string
     * @returns {string} - Copyright (+ extra) + © + current year
     */
    function getFullCopyright(options) {
        var result = ["Copyright"];

        options = options || {};

        if (options.extra) {
            result.push(options.extra);
        }

        if (options.uppercase) {
            result = result.map(function (str) {
                return str.toLocaleUpperCase();
            });
        }

        return result.join(" ") + " " + getCopyright();
    }

    /**
     * Get the string of Copyright
     * @returns {string} - © + current year
     */
    function getCopyright() {
        return "©" + new Date().getFullYear();
    }

    if (!window) return;

    window.getFullCopyright = getFullCopyright;
    window.getCopyright = getCopyright;
})(window);
