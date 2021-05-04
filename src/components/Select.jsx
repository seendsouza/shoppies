import React, { useState } from "react";
import RCSelect from "rc-select";

const styles = {
  select: {
    boxSizing: "border-box",
    padding: 0,
    color: "rgba(0, 0, 0, 0.85)",
    fontVariant: "tabular-nums",
    listStyle: "none",
    fontFeatureSettings: "tnum",
    position: "relative",
    display: "inline-block",
    margin: "2px 0px -2px 0px",
    width: "auto",
  },
};

const Select = (props) => {
  const {
    children,
    getInputElement,
    onChange,
    onInputKeyDown,
    onSearch,
    onSelect,
    value,
  } = props;

  return (
    <RCSelect
      style={styles.select}
      mode="combobox"
      value={value}
      defaultActiveFirstOption={false}
      getInputElement={getInputElement}
      notFoundContent={null}
      onChange={onChange}
      onInputKeyDown={onInputKeyDown}
      onSearch={onSearch}
      onSelect={onSelect}
      filterOption={true}
      showArrow={false}
      listItemHeight={24}
      dropdownMatchSelectWidth={252}
      listHeight={256}
      virtual={false}
      menuItemSelectedIcon={null}
      dropdownClassName
    >
      {children}
    </RCSelect>
  );
};
export default Select;
