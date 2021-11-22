# Mapping_Earthquakes

## Project Overview
We are helping Basil and Sadhana to build a tool that will allow many people to access information on earthquakes across the globe.  The tool will show people the difference of magnitudes of eathquakes across the globe over the prior seven days.

## Resources
- Sofware: Visual Studio Code
- Language: JavaSript
- Language: HTML
- Datasource: GeoJSON
- Library: D3.js
- Library: Bootstrap CSS style
- Library: Leaflet (to plot data on Mapbox map)

# Deliverable 1: Add Tectonic Plate Data
I created a layer of the tectonic plates around the world that can be selected as an overlay to the map.  This can help users as they look at earthquake data relative to where the tectonic plates are around the world.
First I created a new layer to contain all the tectonic information and then added that layer to the overlay object so users could toggle between diplaying and not displaying the information on the map. Then I retrieved the tectonic plate data, added it to the new layer and to the map.  
![Tectonic plate code](https://github.com/tessiertodd/Mapping_Earthquakes/blob/main/Earthquake_Challenge/images/tectonic%20plates%20code.png)

The result is that we can now see the tectonic plate lines across the globe as orange line.
![Tectonic plate sample](https://github.com/tessiertodd/Mapping_Earthquakes/blob/main/Earthquake_Challenge/images/tectonic%20plates%20sample.png)

# Deliverable 2: Add Major Earthquake Data
I added a new layer for the major earthquakes as well as added it to the overlay object (again allowing users the option to turn visibility on or off). Once defined I had to filter on all earthquake data we had to determine the list of all major earthquakes with a magnitude of over 4.5... the piece of code I showed was just the filtering of that data.  I was able to use most of the code we had already built for all the allEarthquakes layer with a few changes.
![Major earthquakes code](https://github.com/tessiertodd/Mapping_Earthquakes/blob/main/Earthquake_Challenge/images/major%20code.png)

We are now able to see the major earthquakes with or without all the other earthquakes and/or tectonic plates.

![Major earthquake sample](https://github.com/tessiertodd/Mapping_Earthquakes/blob/main/Earthquake_Challenge/images/major%20sample.png)

# Deliverable 3: Add Additional Map
I was able to leverage the code we used to build the 2 map layers we already had, then changed the style that was referenced and add the new map to the baseMaps layer, giving users another map style to choose from.
![Dark map code](https://github.com/tessiertodd/Mapping_Earthquakes/blob/main/Earthquake_Challenge/images/dark%20code.png)
![Dark map sample](https://github.com/tessiertodd/Mapping_Earthquakes/blob/main/Earthquake_Challenge/images/dark%20sample.png)

# Summary
We have now helped Basil and Sadhana to put together a great tool for many stakeholders to access earthquake data from around the world along with some additional information  along with tectonic plate information... with ability to view all information together or separate also making it interesting by having 3 different map styles that users can choose from.  

Here is a view of the map, which you can see includes selection box (top right) to choose map type (3 options) and which layers to include (3 that can be used individully or in combination with each other), as well as a legend (lower right) showing users how the colours for each earthquake represent the magnitude.

![total map](https://github.com/tessiertodd/Mapping_Earthquakes/blob/main/Earthquake_Challenge/images/total%20map.png)
