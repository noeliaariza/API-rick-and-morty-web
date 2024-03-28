import FilterByName from "./FilterByName";
import FilterBySpecie from "./FilterBySpecie";
import PropTypes from "prop-types";
import "../../scss/components/Filters.scss";

function Filters({
  onChangeName,
  onChangeSpecie,
  valueCharacter,
  valueSpecie,
}) {
  return (
    <form className="form">
      <FilterByName
        onChangeName={onChangeName}
        valueCharacter={valueCharacter}
      />
      <FilterBySpecie
        onChangeSpecie={onChangeSpecie}
        valueSpecie={valueSpecie}
      />
    </form>
  );
}

export default Filters;

Filters.propTypes = {
  onChangeName: PropTypes.func.isRequired,
  valueCharacter: PropTypes.string.isRequired,

  onChangeSpecie: PropTypes.func.isRequired,
  valueSpecie: PropTypes.string.isRequired,
};
