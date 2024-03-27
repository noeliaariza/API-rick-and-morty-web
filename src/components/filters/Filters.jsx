import FilterByName from "./FilterByName";
import PropTypes from "prop-types";

function Filters({ onChangeName }) {
  return (
    <form>
      <FilterByName onChangeName={onChangeName} />
    </form>
  );
}

export default Filters;

Filters.propTypes = {
  onChangeName: PropTypes.func.isRequired,
};
