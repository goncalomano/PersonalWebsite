
import './main.css';
import Introdiv from './components/Introdiv';
import AboutMe from './components/AboutMe';
import MySkills from './components/MySkills';
import ReviewArea from './components/ReviewArea';
import Tilt from 'react-tilt';
import ContactForm from './components/ContactForm';


function App() {
  return (
    <>
      <Tilt></Tilt>
      <a href="https://www.buymeacoffee.com/goncalomano" ><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" class="BuyMeCoffee"/></a>
      <Introdiv/>
      <AboutMe/>
      <MySkills/>
      <ReviewArea/>
      <ContactForm/>
    </>
  );
}

export default App;
