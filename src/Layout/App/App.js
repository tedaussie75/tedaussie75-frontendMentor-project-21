import {useState} from 'react';
import './App.css';
import MainContainer from '../MainContainer/MainContainer';
import SubscriptionMessage from '../SubscriptionMessage/SubscriptionMessage';

function App() {
  const [isFormValidated, setIsFormValidated] = useState(false);
  const [customerEmail, setCustomerEmail] = useState('');
  return (
    <div className="App">
      {isFormValidated ? <SubscriptionMessage resetSubscription={() => setIsFormValidated(false)} customerEmail={customerEmail}/> : <MainContainer confirmedSubscription={() => setIsFormValidated(true)} getCustomerEmail={ email =>  setCustomerEmail(email)}/>}
    </div>
  );
}

export default App;
