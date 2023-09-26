import PropTypes from 'prop-types'

function Store({products},{cardsLayout}) {
    const [{
        name,
        price,
        color,
        img      
      }] = products;

      return (
        <div>
        <div>{products}</div>
        </div>
      )

    // const IconSwitch = {
    //     icon: this.icon,
    //     onSwitch () {

    //     }
    }
// }


Store.propTypes= {
    products: PropTypes.object
  }
export default Store