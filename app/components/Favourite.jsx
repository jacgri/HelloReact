var React = require('react')
var stores = require('../data/stores')
var findElement = require('../helpers/findElement')

var Favourite = React.createClass({
  toggleFavourite: function () {
    var storeId = this.props.storeId

    this.props.onToggleFavourite(storeId)
  },
  render: function () {
    var storeId = this.props.storeId
    var store = findElement(stores, storeId)
    
    var starClass = this.props.isFavourited(storeId) ? 'fa fa-star' : 'fa fa-star-o'

    return (
      <div className="favourite">
        {store.title}
        <i className={starClass} onClick={this.toggleFavourite}></i>
      </div>
    )
  }
})

module.exports = Favourite
