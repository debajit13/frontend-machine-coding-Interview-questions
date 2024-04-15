import styles from './Card.module.css';

const Card = ({ title }) => {
  return <div className={styles.card}>{title}</div>;
};

export default Card;
