import {useState} from 'react';
import StyledForm from './StyledForm';

function Form({confirmedSubscription, getCustomerEmail}) {
  const [isEmailError, setIsEmailError] = useState(false);
  const [inputEmailValue, setIsInputEmailValue] = useState("");
  const submitForm = e => {
    e.preventDefault();
    if(!inputEmailValue.match("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}")) {
      setIsEmailError(true);
    } else {
      isEmailError && setIsEmailError(false);
      getCustomerEmail(inputEmailValue);
      confirmedSubscription();
    }
  };
  return (
      <StyledForm onSubmit={submitForm} className={isEmailError ? "error" : ""}>
        { isEmailError && <p className="error-message">Valid email required</p>}
        <label>Email adress</label>
        <input type="email" placeholder="email@company.com" value={inputEmailValue} onChange={e => setIsInputEmailValue(e.target.value)}/>
        <input className="gradient-button" type="submit" value="Subscribe to monthly newsletter"/>
      </StyledForm>
  );
}

export default Form;
