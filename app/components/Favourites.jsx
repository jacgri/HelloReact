var React = require('react')
var Favourite = require('./Favourite')

var Favourites = React.createClass({
  getDefaultProps: function () {
    return {
      favouriteStores: []
    }
  },
  
  render: function () {
    const self = this

    var favouriteStores = this.props.favouriteStores.map(function (storeId) {
      return (
        <Favourite 
          key={storeId}
          storeId={storeId} 
          onToggleFavourite={self.props.onToggleFavourite} 
          isFavourited={self.props.isFavourited} />
      )
    })

    return (
      <div className="favourites">
        {favouriteStores}
      </div>
    )
  }
})

module.exports = Favourites