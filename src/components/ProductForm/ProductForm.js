import styles from './ProductForm.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';


const ProductForm = ({sizes, currentSize, currentColor, handlerSize, handlerColor, summary, colors}) => {

  const prepareColorClassName = color => {
   return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()]
  }

  return (
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
          <li><button key={color} type="button" className={clsx(prepareColorClassName(color), currentColor === color ? styles.active : '')} onClick={()=>handlerColor(color)}></button></li>)}
        </ul>
      </div>
      <Button className={styles.button} >
        <span className="fa fa-shopping-cart" onClick={(e)=>summary(e)}/>
      </Button>
    </form>
  );
};

ProductForm.propTypes = {
  currentColor: PropTypes.string.isRequired,
  currentSize: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
  handlerSize: PropTypes.string.isRequired,
  handlerColor: PropTypes.string.isRequired,
  summary: PropTypes.object.isRequired
 
}

export default ProductForm;