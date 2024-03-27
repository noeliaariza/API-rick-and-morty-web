import PropTypes from "prop-types";

function FilterByName({ onChangeName }) {
  const handleChange = (ev) => {
    ev.preventDefault();
    onChangeName(ev.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Busca un personaje..."
        onChange={handleChange}
      />
    </div>
  );
}

FilterByName.propTypes = {
  onChangeName: PropTypes.func.isRequired,
};

export default FilterByName;
