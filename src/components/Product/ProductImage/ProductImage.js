import styles from './ProducImage.module.scss';

const ProducImage = props =>{
  return (
    <div className={styles.imageContainer}>
      <img
        className={styles.image}
        alt="Kodilla shirt"
        src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${props.currentColor}.jpg`} />
    </div>
  )
}

export default ProducImage;