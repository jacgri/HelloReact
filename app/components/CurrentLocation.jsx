var React = require('react')
var stores = require('../data/stores')
var findElement = require('../helpers/findElement')

var CurrentLocation = React.createClass({
  render: function () {
    var storeId = this.props.storeId
    var store = findElement(stores, storeId)
    
    if (store) {
      var starClass = this.props.isFavourited(storeId) ? 'fa fa-star' : 'fa fa-star-o'
      
      return (
        <div className="currentlocation">
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          {store.title}
          <i className={starClass} onClick={this.toggleFavourite}></i>
        </div>
      )
    }

    return (
      <div className="currentlocation">
        <i className="fa fa-map-marker" aria-hidden="true"></i>
        No store selected
      </div>
    )    
  },

  toggleFavourite: function () {
    var storeId = this.props.storeId

    this.props.onToggleFavourite(storeId)
  }
})

module.exports = CurrentLocation
