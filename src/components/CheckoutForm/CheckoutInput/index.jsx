import { getValue } from "@testing-library/user-event/dist/utils";

const CheckoutInput = ({ inputName, inputId, inputType, setValue }) => {
  const getValue = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="mb-3 input-container">
      <label htmlFor={inputName} className="form-label">
        {inputName}
      </label>
      <input
        type={inputType}
        className="form-control"
        id={inputId}
        placeholder={inputName}
        onChange={(e) => getValue(e)}
      />
    </div>
  );
};

export { CheckoutInput };
