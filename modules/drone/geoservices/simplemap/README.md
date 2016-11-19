# About simplemap

This is a very simple implementation of a reusable component that displays assets as markers on a Google map.
The location of the assets is published by backend logic running on scriptr.io

# Pre-requisites

You need to create a channel in your scriptr.io account. By default the component expects it to be named "map".
You can change the name in the configuration file (see below)

# Configuration

Update /geoservices/simplemap/config.js with your own settings (read comments in script for more)

# Adding your own datahandler

The datahandler.js script contains callback functions that are invoked whenever a message is published on the channel.
You can use the default handler function (only displays markers on the map) or implement your own handler to add more logic.

# Notes
URLs in /geoservices/simplemap//html/simplemap.html are relative. This works if you specify a subdomain (scriptr.io workspace > Account > Sub-domain). If you doc not specify a sub-domain, you should modify the URLs to be absolute and make sur to add your anonymous auth token as a part of the query string (https://api.scriptrapps.io/...?auth_token=YOUR_TOKEN)
