import styles from "./OptionSize.module.scss";
import clsx from "clsx";

const OptionSize = ({sizes, currentSize, handlerSize}) => {
  return (
    <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <ul className={styles.choices}>
          {sizes.map(size=>
          <li><button key={size.name} type="button" className={clsx(currentSize === size.name && styles.active)} onClick={()=>handlerSize(size.name)}>{size.name}</button></li>)}
        </ul>
      </div>
  );
};

export default OptionSize;