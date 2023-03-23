import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';


const Product = ({title, basePrice, colors, sizes, name}) => {

  const [currentColor, setCurrentColor] = useState(colors[0]);

  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const handlerColor = color => {
    setCurrentColor(color)
  }

  const handlerSize = size => {
    setCurrentSize(size)
  }

  const getPrice = basePrice + sizes.find(size => size.name === currentSize).additionalPrice;

  const summary = e => {
    e.preventDefault();
    const summary = {}
    summary.name = title;
    summary.price = getPrice;
    summary.size = currentSize;
    summary.color = currentColor;
    console.log(summary)
  }

  return (
    <article className={styles.product}>
      <ProductImage name={name} currentColor={currentColor} title={title}/>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>
        <ProductForm 
        sizes={sizes} 
        currentSize={currentSize} 
        currentColor={currentColor} 
        handlerSize={handlerSize} 
        handlerColor={handlerColor} 
        summary={summary} 
        colors={colors}/>
      </div>
    </article>
  )
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
}

export default Product;