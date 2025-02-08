/* eslint-disable react/prop-types */
function Result({ age }) {
  return (
    <div className="result">
      <p>
        <span className="dash">{age.years}</span> years
      </p>
      <p>
        <span className="dash">{age.months}</span> months
      </p>
      <p>
        <span className="dash">{age.days}</span> days
      </p>
    </div>
  );
}

export default Result;
