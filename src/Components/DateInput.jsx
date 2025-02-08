// eslint-disable-next-line react/prop-types
function DateInput({ id, label, placeholder, value, error, onChange }) {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        className="input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(id, e.target.value)}
      />
      <span className="error">{error}</span>
    </div>
  );
}

export default DateInput;
