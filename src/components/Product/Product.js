import styles from './Product.module.scss';
import Button from '../Button/Button';
import { useState } from 'react';
import ProducImage from './ProductImage/ProductImage';
import OptionSize from './ProductForm/OptionSize/OptionSize';
import OptionColor from './ProductForm/OptionColor/OptionColor';

const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  const getPrice = () => {
    const found = props.sizes.find(size => size.name === currentSize); 
    return(props.basePrice + found.additionalPrice)
  }

  const addToCart = event => {
    event.preventDefault()

    console.log('SUMMARY')
    console.log('============')
    console.log('name:', props.title)
    console.log('price:', getPrice())
    console.log('color:', currentColor)
    console.log('size:', currentSize)
  }

  return (
    <article className={styles.product}>
      <ProducImage name={props.name} currentColor={currentColor}/>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form>
          <OptionSize sizes={props.sizes} currentSize={currentSize} setCurrentSize={setCurrentSize}/>
          <OptionColor colors={props.colors} setCurrentColor={setCurrentColor} prepareColorClassName={prepareColorClassName} currentColor={currentColor}/>
          
          <Button className={styles.button} addToCart={addToCart}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

export default Product;