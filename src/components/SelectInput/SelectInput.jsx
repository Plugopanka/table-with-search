import React, { useState } from "react";
import "./SelectInput.css";

function SelectInput({
  setCounter,
  selectValue,
  setSelectValue,
  handleChangeSelect,
}) {
  function changeSelect(evt) {
    setSelectValue(evt.target.value);
    setCounter(selectValue);
    // handleChangeSelect()
  }

  return (
    <div className="select">
      <span className="select__text">Rows per page:</span>
      <select className="select__input" value={selectValue} onChange={changeSelect}>
        <option value="15">15</option>
        <option value="10">10</option>
        <option value="5">5</option>
      </select>
    </div>
  );
}

export default SelectInput;
