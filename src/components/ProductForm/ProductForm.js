import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';


const ProductForm = ({sizes, currentSize, currentColor, handlerSize, handlerColor, summary, colors}) => {

 

  return (
    <form>
      <OptionSize currentSize={currentSize} handlerSize={handlerSize} sizes={sizes}/>
      <OptionColor currentColor={currentColor} handlerColor={handlerColor} colors={colors}/>
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
}

export default ProductForm;