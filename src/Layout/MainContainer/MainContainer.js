import Container from '../../Components/Container/Container';
import Form from '../../Components/Form/Form';

function MainContainer({confirmedSubscription, getCustomerEmail}) {
  return (
      <Container className="Main-container" display="flex">
        <Container display="flex" direction="column" horizontal="center" padding="0 6em 0 4em">
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul>
            <li><img src={process.env.PUBLIC_URL + "/images/icon-list.svg"} alt="icon list"/><span>Product discovery and building what matters</span></li>
            <li><img src={process.env.PUBLIC_URL + "/images/icon-list.svg"} alt="icon list"/><span>Measuring to ensure updates are a success</span></li>
            <li><img src={process.env.PUBLIC_URL + "/images/icon-list.svg"} alt="icon list"/><span>And much more!</span></li>
          </ul>
          <Form confirmedSubscription={confirmedSubscription} getCustomerEmail={getCustomerEmail}/>
        </Container>
        <Container>
          <picture>
            <source media="(max-width: 1000px)" srcset={process.env.PUBLIC_URL + "/images/illustration-sign-up-mobile.svg"}/>
            <img src={process.env.PUBLIC_URL + "/images/illustration-sign-up-desktop.svg"} alt="newletter illustration"/>
          </picture>
        </Container>
      </Container>
  );
}

export default MainContainer;
