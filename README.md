The package provides a simple Leaflet (https://github.com/Leaflet/Leaflet) wrapper for handling geolocation data with AutoForm (https://github.com/aldeed/meteor-autoform). Currently only single value fields are supported.

###Available settings:
* defaultLocation: two-value array of the default map location when no value is defined. Default: [0.0, 0.0]
* doubleClickZoom: true to enable zooming with double clicking. Default: true
* markerIcon: the glyph used as icon in the map marker. Default: 'star'
* markerColor: color of the map marker. Default: 'blue'
* tileLayerProvider: standard Leaflet tile layer provider setting. Default: 'OpenStreetMap.Mapnik'
* zoomLevel: initial zoom on when creating the map view. Default: 12
