/* eslint-disable react/prop-types */
import styles from "./Input.module.css";

export const Input = ({
  name,
  label,
  disabled,
  type,
  value,
  autoComplete,
  onChange,
  onBlur,
  error,
}) => {
  return (
    <div className={StyleSheet.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        disabled={disabled}
        id={name}
        name={name}
        type={type}
        value={value}
        autoComplete={autoComplete}
        className={styles.input}
        onChange={onChange}
        onBlur={onBlur}
      />

      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};
