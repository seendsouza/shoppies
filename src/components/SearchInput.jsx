import React from "react";
import Button from "./Button";
import SearchIcon from "./SearchIcon";
import styles from "../../styles/SearchInput.module.css";

const SearchInput = (props, ref) => {
  const { className, onClick } = props;
  return (
    <span className={styles.container}>
      <input className={className} ref={ref} {...props} />
      <Button
        className={styles.button}
        htmlType="button"
        onClick={onClick}
        icon={SearchIcon()}
      />
    </span>
  );
};
export default React.forwardRef(SearchInput);
