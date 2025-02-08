import { useState } from "react";
import DateInput from "./DateInput";
import SubmitButton from "./SubmitButton";
import { inputs } from "../DATA";

// eslint-disable-next-line react/prop-types
function DateInputForm({ setAge }) {
  const [formData, setFormData] = useState({ day: "", month: "", year: "" });
  const [errors, setErrors] = useState({ day: "", month: "", year: "" });

  const handleChange = (id, value) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    const { day, month, year } = formData;
    let valid = true;
    let newErrors = { day: "", month: "", year: "" };

    if (!day || day < 1 || day > 31) {
      newErrors.day = "Invalid day";
      valid = false;
    }
    if (!month || month < 1 || month > 12) {
      newErrors.month = "Invalid month";
      valid = false;
    }
    if (!year || year < 1900 || year > new Date().getFullYear()) {
      newErrors.year = "Invalid year";
      valid = false;
    }

    if (!valid) {
      setErrors(newErrors);
      return;
    }

    // محاسبه سن
    let dob = new Date(year, month - 1, day);
    let today = new Date();
    let ageYears = today.getFullYear() - dob.getFullYear();
    let ageMonths = today.getMonth() - dob.getMonth();
    let ageDays = today.getDate() - dob.getDate();

    if (ageDays < 0) {
      ageMonths -= 1;
      ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
      ageYears -= 1;
      ageMonths += 12;
    }

    setAge({ years: ageYears, months: ageMonths, days: ageDays });
  };

  return (
    <div id="date">
      <form className="date-input">
        {inputs.map((input) => (
          <DateInput
            key={input.id}
            id={input.id}
            label={input.label}
            placeholder={input.placeholder}
            value={formData[input.id]}
            error={errors[input.id]}
            onChange={handleChange}
          />
        ))}
      </form>
      <SubmitButton onClick={handleSubmit} />
    </div>
  );
}

export default DateInputForm;
