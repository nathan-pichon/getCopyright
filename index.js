(function (window) {
    if (!window) return;

    /**
     * Get the full string of Copyright
     * @param {Object} [options] - Options that can be used
     * @param {boolean} [options.uppercase] - Should the text be capitalized?
     * @param {string} [options.extra] - Extra text inserted inside the result string
     * @returns {string} - Copyright (+ extra) + © + current year
     */
    window.getFullCopyright = function(options) {
        var result = ["Copyright"];

        options = options || {};

        if (options.extra) {
            result.push(options.extra);
        }

        if (options.uppercase) {
            result = result.map(function(str) {
                return str.toLocaleUpperCase();
            });
        }

        return  result.join(" ") + " " + window.getCopyright();
    };

    /**
     * Get the string of Copyright
     * @returns {string} - © + current year
     */
    window.getCopyright = function() {
        return "©" + new Date().getFullYear();
    };
})(window);
