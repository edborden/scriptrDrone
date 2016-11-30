# "DroneMasters" at AT&T Hack NYC 11/18/2016-11/19/2016)

## Overview
This project was an illustration of a drone control system that could be administered easily by the user via text to fly missions that collect sensor data. The data is then displayed via a heatmap. Practical use cases that we discussed were the measurement of cellular coverage or micro-climate data.

## Participants
[Ed Borden](http://twitter.com/edborden)

[Ethel Dubrovsky](https://www.linkedin.com/in/etheld)

[Greg Friesmuth](http://twitter.com/gfriesmuth)

## Part 1 - Sensor System via Intel Edison
An Intel Edison board provides the sensor platform. This reads the sensor(s) and pushes data to the DroneSmith API. Edison code is  [here](https://github.com/dronesmith/Edison_Drone-Analog_Sensor).

## Part 2 - DroneSmith API
[DroneSmith](http://www.dronesmith.io/) provided a virtual drone, which gave us a proof of concept for the flight of the drone while using real hardware for sensor readings. [Documentation](https://dronesmith.readme.io/reference).

## Part 3 - Twilio
The primary UI for the system is via texting to [Twilio](http://www.twilio.com). This was set up to trigger a webhook to...

## Backend orchestration services via Scriptr.io
The Twilio webhook is located in [/twilio](https://github.com/edborden/scriptrDrone/blob/master/twilio), which is where all of the command logic is.

## Heatmap via Scriptr.io
Finally, data and current location of the drone can be viewed in the map.html. This is a static file served up via Scriptr.io and uses a timer to continuously poll the DroneSmith API. This collects the current sensor data readings and adds them to the dataset behind the heatmap.

## Notes
[/notificationController](https://github.com/edborden/scriptrDrone/blob/master/notificationController) -- with a notifications method which takes as arguments location start & end address. This method triggers a call to mapquest api to get array of coordinates tracing the route. It then calls airspace api on a sampling of these coordinates, and if relevant, based on air data and/or weather, sends notifications to airspaces and/or to drone owner. 

## Potential Enhancements
- The `address` file (which receives text messages to launch drone & then launches them) should call `notificationController`'s notifications method with the start & end address. This will trigger the entire integrated notification flow.
- Drone owner phone is currently hard-coded
- Address file is aware of drone starting point as coordinates -- you'd need call a method in mapquest file to convert coordinates to physical address in order to user the notifications method in notificationController as it currently stands 
- You might choose to call airspace api on different subset of coordinates from the ones being used, and to (in general) change the logic in how notifications are sent.
- The current call to mapquest returns a route with coordinates. You can then trigger drone to fly through each of these coordinates 
