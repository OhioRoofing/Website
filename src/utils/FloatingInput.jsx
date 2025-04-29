import PropTypes from "prop-types";

function FloatingInput({
  name = "",
  type = "",
  label = "",
  value = "",
  onChange,
  required = true,
  className = "",
}) {
  return (
    <div className="relative">
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`${
          className ? className : "mb-4"
        } block rounded  shadow-md px-2.5 pb-2.5 pt-5 w-full text-sm text-black border border-slate-300 appearance-none   focus:outline-none focus:ring-0 focus:border-primary peer `}
        placeholder=""
        required={required}
      />
      <label
        htmlFor={name}
        className="absolute text-xs md:text-sm  text-slate-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
      >
        {label}
      </label>
    </div>
  );
}

FloatingInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

export default FloatingInput;
