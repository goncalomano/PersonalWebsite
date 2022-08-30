
import './main.css';
import Introdiv from './components/Introdiv';
import AboutMe from './components/AboutMe';
import MySkills from './components/MySkills';
import Tilt from 'react-vanilla-tilt'
import ReviewArea from './components/ReviewArea';
function App() {
  return (
    <>
      <Tilt/>
      <Introdiv/>
      <AboutMe/>
      <MySkills/>
      <ReviewArea/>
    </>
  );
}

export default App;
