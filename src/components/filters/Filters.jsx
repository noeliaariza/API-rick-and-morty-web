import FilterByName from "./FilterByName";
import PropTypes from "prop-types";
import "../../scss/components/Filters.scss";

function Filters({ onChangeName, valueCharacter }) {
  return (
    <form className="form">
      <FilterByName
        onChangeName={onChangeName}
        valueCharacter={valueCharacter}
      />
    </form>
  );
}

export default Filters;

Filters.propTypes = {
  onChangeName: PropTypes.func.isRequired,
  valueCharacter: PropTypes.string.isRequired,
};
