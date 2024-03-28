import PropTypes from "prop-types";
import "../../scss/components/FilterBySpecie.scss";

function FilterBySpecie({ onChangeSpecie, valueSpecie }) {
  const handleChange = (ev) => {
    onChangeSpecie(ev.target.value);
  };
  return (
    <div className="filterBySpecieContainer">
      <p className="filterBySpecieContainer__title">Filtrar por especie</p>
      <span className="humanContainer">
        <label htmlFor="human">Human</label>
        <input
          className="filterBySpecieContainer__specieInput"
          type="radio"
          id="human"
          value="human"
          name="specie"
          onChange={handleChange}
          checked={valueSpecie === "human"}
        />
      </span>
      <span className="alienContainer">
        <label htmlFor="alien">Alien</label>
        <input
          className="filterBySpecieContainer__specieInput"
          type="radio"
          id="alien"
          value="alien"
          name="specie"
          onChange={handleChange}
          checked={valueSpecie === "alien"}
        />
      </span>
    </div>
  );
}

FilterBySpecie.propTypes = {
  onChangeSpecie: PropTypes.func.isRequired,
  valueSpecie: PropTypes.string.isRequired,
};
export default FilterBySpecie;
