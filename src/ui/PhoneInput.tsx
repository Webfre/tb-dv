import React from "react";
import styles from "./PhoneInput.module.scss";

interface PhoneInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  error?: boolean;
  helperText?: string;
  name?: string;
}

const formatPhoneNumber = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.startsWith("7") || digits.startsWith("8")) {
    const formatted = digits.startsWith("7")
      ? `+7 ${digits.slice(1, 4)} ${digits.slice(4, 7)} ${digits.slice(
          7,
          9
        )} ${digits.slice(9, 11)}`
      : `8 ${digits.slice(1, 4)} ${digits.slice(4, 7)} ${digits.slice(
          7,
          9
        )} ${digits.slice(9, 11)}`;
    return formatted.trim();
  }

  return digits;
};

const PhoneInput: React.FC<PhoneInputProps> = ({
  value,
  onChange,
  label = "Телефон",
  error,
  helperText,
  name,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    const formatted = formatPhoneNumber(raw);
    const fakeEvent = {
      ...e,
      target: {
        ...e.target,
        value: formatted,
      },
    };
    onChange(fakeEvent as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <div className={styles.phoneInputWrapper}>
      {label && <label className={styles.phoneInputLabel}>{label}</label>}

      <input
        name={name}
        value={value}
        onChange={handleChange}
        className={`${styles.phoneInputField} ${error ? styles.error : ""}`}
        placeholder="+7 999 999 99 99"
      />

      {error && helperText && (
        <div className={styles.phoneInputHelper}>{helperText}</div>
      )}
    </div>
  );
};

export default PhoneInput;
