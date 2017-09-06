var React = require('react')
var stores = require('../data/stores')

var Map = React.createClass({
  componentDidMount: function () {
    this.componentDidUpdate()
  },
  componentDidUpdate: function () {
    var map = new GMaps({
      el: '#map',
      lat: this.props.lat,
      lng: this.props.lng
    })

    map.addMarker({
      lat: this.props.lat,
      lng: this.props.lng,
      label: 'M'
    })
    var onMarkerClick = this.props.onMarkerClick
    
      var markers = stores.map(function (store) {
        return Object.assign({}, store, {
          details: {
          id: store.id
          },
          click: onMarkerClick
        })
      })
    
        map.addMarkers(markers)
  },
  render: function () {
    return (
        <div id="map"></div>
    )
  }
})

module.exports = Map
