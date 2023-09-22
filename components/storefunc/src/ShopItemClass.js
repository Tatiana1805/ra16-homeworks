function ShopItemClass(){
    const item = {
        brand: 'Tiger of Sweden',
        title: 'Leonard coat',
        description: 'Minimalistic coat in cotton-blend',
        descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
        price: 399,
        currency: '£'
      }
      return (
        <div>
          <h2>{item.brand}</h2>
          <h1>{item.title}</h1>
          <h3>{item.description}</h3>
          <div>{item.descriptionFull}</div>
          <div>{item.price}</div>
          <div>{item.currency}</div>
        </div>
      )
    }
    
      export default ShopItemClass