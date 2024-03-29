import "./RadioButton.css";
import sortIcon from "../../assets/icon.svg";

function RadioButton({ position, handleSwitch }) {
  return (
    <button className={`filter filter__${position}`} type="button" onClick={handleSwitch}>
      <img src={sortIcon} alt="Sort customers." />
    </button>
  );
}

export default RadioButton;
