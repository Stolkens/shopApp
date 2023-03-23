import styles from "./OptionColor.module.scss";
import clsx from "clsx";

const OptionColor = ({colors, currentColor, handlerColor}) => {

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()]
   }

  return (
    <div className={styles.colors}>
        <h3 className={styles.optionLabel}>Colors</h3>
        <ul className={styles.choices}>
          {colors.map(color=>
          <li><button key={color} type="button" className={clsx(prepareColorClassName(color), currentColor === color ? styles.active : '')} onClick={()=>handlerColor(color)}></button></li>)}
        </ul>
      </div>
  );
};

export default OptionColor;