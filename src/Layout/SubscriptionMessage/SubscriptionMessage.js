import {StyledSubscriptionMessage} from './StyledSubscriptionMessage';

function SubscriptionMessage({resetSubscription, customerEmail}) {
  return (
    <StyledSubscriptionMessage>
        <img src={process.env.PUBLIC_URL + "/images/icon-list.svg"} alt="icon list"/>
        <h2>Thanks for subscribing!</h2>
        <p>A confirmation email has been sent to <strong>{customerEmail}</strong>. Please open it and click the button inside to confirm your subscription.</p>
        <button className="gradient-button" onClick={resetSubscription}>Dismiss message</button>
    </StyledSubscriptionMessage>
  );
}

export default SubscriptionMessage;
