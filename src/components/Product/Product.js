import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';


const Product = ({title, basePrice, colors, sizes, name}) => {

  const [currentColor, setCurrentColor] = useState(colors[0]);

  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const handlerColor = color => {
    setCurrentColor(color)
  }

  const handlerSize = size => {
    setCurrentSize(size)
  }

  const prepareColorClassName = color => {
   return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()]
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
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {sizes.map(size=>
                <li><button key={size.name} type="button" className={clsx(currentSize === size.name && styles.active)} onClick={()=>handlerSize(size.name)}>{size.name}</button></li>)}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {colors.map(color=>
                <li><button key={color} type="button" className={clsx(prepareColorClassName(color), currentColor === color && styles.active)} onClick={()=>handlerColor(color)}></button></li>)}
            </ul>
          </div>
          <Button className={styles.button} >
            <span className="fa fa-shopping-cart" onClick={(e)=>summary(e)}/>
          </Button>
        </form>
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