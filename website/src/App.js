
import './main.css';
import Introdiv from './components/Introdiv';
import AboutMe from './components/AboutMe';
import MySkills from './components/MySkills';
import ReviewArea from './components/ReviewArea';
import Tilt from 'react-tilt';


function App() {
  return (
    <>
      <Tilt></Tilt>
      <Introdiv/>
      <AboutMe/>
      <MySkills/>
      <ReviewArea/>
    </>
  );
}

export default App;
