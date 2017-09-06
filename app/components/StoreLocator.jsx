var React = require('react')
var Map = require('./Map')
var stores = require('../data/stores.js')
var findElement = require('../helpers/findElement.js')
var CurrentLocation = require('./CurrentLocation')

var StoreLocator = React.createClass({
  getInitialState () {
    return{
      lat:53.4719986,
      lng:-2.2414979,
      favourites: []
    }
  },
  
  handleMarkerClick: function(details) {
    var storeId = details.id
    var store = findElement(stores, storeId)

    this.setState({
      currentLocation: storeId,
      lat: store.lat,
      lng: store.lng
    })
  },

  render: function () {
    return (
      <div className="store-locator">
      <div className="location-column">
      <div className="title">
        Store Locator
      </div>
        <CurrentLocation 
          storeId={this.state.currentLocation} 
          onToggleFavourite={this.handleToggleFavourite}
          isFavourited={this.isFavourited}/>
      </div>
      <div className="map">
        <Map lat={this.state.lat} lng={this.state.lng} onMarkerClick={this.handleMarkerClick} />      
      </div>
      </div>
    )
  },

  addToFavourites: function (storeId) {
    var favourites = this.state.favourites

    favourites.push(storeId)

    this.setState({
      favourites:favourites
    })
  },

  removeFromFavourites: function (storeId) {
    var favourites= this.state.favourites
    var storeIdIndex = favourites.indexOf(storeId)

    if(storeIdIndex !== -1) {
      favourites.splice(storeIdIndex, 1)
    }

    this.setState({
      favourites: favourites
    })
  },

  isFavourited: function (storeId) {
    var favourites = this.state.favourites

    return favourites.includes(storeId)
  },

  handleToggleFavourite: function (storeId){
    if (this.isFavourited(storeId)) {
      this.removeFromFavourites(storeId)

      return
    }
    this.addToFavourites(storeId)
  },

})

module.exports = StoreLocator
