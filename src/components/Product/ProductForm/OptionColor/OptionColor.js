import styles from '../../Product.module.scss';
import clsx from 'clsx';

const OptionColor = props => {
  return (
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
        {props.colors.map(color => 
          <li key={color}>
            <button type="button" onClick={() => props.setCurrentColor(color)}
              className={clsx(props.prepareColorClassName(color), props.currentColor === color && styles.active)}/> 
          </li>
        )}
      </ul>
    </div>
  )
}

export default OptionColor;