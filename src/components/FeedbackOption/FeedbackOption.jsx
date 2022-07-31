import PropTypes from 'prop-types';
import styles from './FeedBackOption.module.css';

export function FeedbackOption({ options, onLeaveFeedback }) {
  return options.map(item => (
    <button
      className={styles.item}
      type="button"
      name={item.name}
      key={item.id}
      onClick={onLeaveFeedback}
    >
      {item.title}
    </button>
  ));
}

FeedbackOption.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
  onLeaveFeedback: PropTypes.func.isRequired,
};
