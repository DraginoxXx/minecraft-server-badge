const BASE_URL = "https://minecraft-serverhub.com/api/badge";

/**
 * Generate a Minecraft server status badge URL
 * @param {string} address - Server IP or hostname
 * @param {object} [options] - Badge options
 * @returns {string} Badge image URL
 */
function badge(address, options) {
  if (!address || typeof address !== "string") {
    throw new Error("Server address is required");
  }

  options = options || {};
  var params = new URLSearchParams();

  if (options.style) params.set("style", options.style);
  if (options.label) params.set("label", options.label);
  if (options.players === false) params.set("players", "false");
  if (options.version) params.set("version", "true");
  if (options.dark) params.set("dark", "true");

  var query = params.toString();
  return BASE_URL + "/" + encodeURIComponent(address) + (query ? "?" + query : "");
}

function html(address, options) {
  options = options || {};
  var url = badge(address, options);
  var serverUrl = "https://minecraft-serverhub.com/servers?q=" + encodeURIComponent(address);
  var alt = (options.label || address) + " server status";
  return '<a href="' + serverUrl + '" title="Minecraft Server Status"><img src="' + url + '" alt="' + alt + '" /></a>';
}

function markdown(address, options) {
  options = options || {};
  var url = badge(address, options);
  var serverUrl = "https://minecraft-serverhub.com/servers?q=" + encodeURIComponent(address);
  var alt = (options.label || address) + " server status";
  return "[![" + alt + "](" + url + ")](" + serverUrl + ")";
}

function bbcode(address, options) {
  var url = badge(address, options);
  return "[url=https://minecraft-serverhub.com][img]" + url + "[/img][/url]";
}

module.exports = { badge, html, markdown, bbcode };
module.exports.default = { badge, html, markdown, bbcode };
