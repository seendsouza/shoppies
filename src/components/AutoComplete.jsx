import React from "react";
import { Option } from "rc-select";
import Select from "./Select";
import SearchInput from "./SearchInput";
import styles from "../../styles/AutoComplete.module.css";

const AutoComplete = (props) => {
  const { className, options, onClick, placeholder } = props;
  const optionChildren = options
    ? options.map((option) => (
        <Option key={option.key} value={option.Title}>
          <div>
            <span className={styles.option__container}>
              <div>{option.Title}</div>
              <div>{option.Year}</div>
            </span>
          </div>
        </Option>
      ))
    : [];

  return (
    <>
      <Select
        getInputElement={() => (
          <SearchInput
            className={styles.input}
            onClick={onClick}
            placeholder={placeholder}
          />
        )}
        className={className}
        {...props}
      >
        {optionChildren}
      </Select>
    </>
  );
};
export default AutoComplete;
