/* Default values */
var markerIcon = L.AwesomeMarkers.icon({
   icon: 'star',
   markerColor: 'blue'
 });

var zoomLevel = 12;
var tileLayerProvider = 'OpenStreetMap.Mapnik';
var defaultLatLng = L.latLng(0.0, 0.0);
var useDoubleClickZoom = true;

/* Leaftlet settings */
Template.afLeaflet.rendered = function() {

    // Separate data for this map instance
    var identifier = this.data.name.replace(".", "-");

    var $jsLat = $('.' + identifier + '-js-lat');
    var $jsLng = $('.' + identifier + '-js-lng');
    var $jsValue = $('.' + identifier + '-js-value');

    // Check for user provided settings
    if (this.data.atts.markerIcon)
      markerIcon.options.icon = this.data.atts.markerIcon;

    if (this.data.atts.markerColor)
      markerIcon.options.markerColor = this.data.atts.markerColor;

    if (this.data.atts.defaultLocation)
      defaultLatLng = L.latLng(this.data.atts.defaultLocation[0], this.data.atts.defaultLocation[1]);

    if(this.data.atts.zoomLevel)
      zoomLevel = this.data.atts.zoomLevel;

    if(this.data.atts.tileLayerProvider)
      tileLayerProvider = this.data.atts.tileLayerProvider;

    if(this.data.atts.doubleClickZoom)
      useDoubleClickZoom = this.data.atts.doubleClickZoom;

    // Create map
    var map = L.map(identifier + '-map', {
        doubleClickZoom: useDoubleClickZoom
    });

    L.tileLayer.provider(tileLayerProvider).addTo(map);

    // Create and place the marker
    if($jsLat.val() && $jsLng.val()) {
      var newLatLng = L.latLng($jsLat.val(), $jsLng.val());
      marker = L.marker(newLatLng, {icon: markerIcon, draggable: true});
      map.setView(newLatLng, zoomLevel);
    }
    else {
      marker = L.marker(defaultLatLng, {icon: markerIcon, draggable: true});
      map.setView(defaultLatLng, zoomLevel);
    }
    marker.addTo(map);

    // Update marker location on value change
    $('.' + identifier + '-js-lat, .' + identifier + '-js-lng').change(function() {
      var lat = $jsLat.val();
      var lng = $jsLng.val();
      $jsValue.val($jsLat.val()+","+$jsLng.val());
      map.setView([lat, lng], zoomLevel, {
        animate: true
      })
      marker.setLatLng(L.latLng(lat, lng));
    });

    //Update values on marker drag
    marker.on('drag', function(event) {
      $jsLat.val(event.latlng.lat);
      $jsLng.val(event.latlng.lng);
      $jsValue.val($jsLat.val()+","+$jsLng.val());
    });
};
