import PropTypes from "prop-types";

function FloatingTextArea({
  name = "",
  label = "",
  value = "",
  onChange,
  required = true,
}) {
  return (
    <div className="shadow-md">
      <textarea
        className="block p-2.5 w-full text-sm text-gray-900  rounded border border-slate-300 focus:outline-none focus:border-primary  placeholder:text-slate-500"
        id={name}
        name={name}
        value={value}
        rows={5}
        placeholder={label}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}

FloatingTextArea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

export default FloatingTextArea;
