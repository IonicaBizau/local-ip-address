"use strict";

const os = require("os")

/**
 * localIpAddress
 * Get the machine IP on the local network.
 *
 * @name localIpAddress
 * @function
 * @return {String} The local ip address as a string.
 */
module.exports = function localIpAddress () {
    const interfaces = Object.values(os.networkInterfaces())
    for (let iface of interfaces) {
        for (let alias of iface) {
            if (alias.family === "IPv4"
             && alias.address !== "127.0.0.1"
             && !alias.internal) {
                return alias.address
            }
        }
    }

    return "0.0.0.0"
}
