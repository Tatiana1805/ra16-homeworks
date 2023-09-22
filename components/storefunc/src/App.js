import ShopItemClass from './ShopItemClass.js';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItemClass item={item} />
      </div>
    </div>
  )
}
// export default ShopItemClass;
export default App;
