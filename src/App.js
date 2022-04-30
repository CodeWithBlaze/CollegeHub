import {Route,Routes} from 'react-router-dom';
import Home from "./Pages/Home";
import Topic from "./Pages/Topic";
import Course from "./Pages/Course";
import Contact from "./Pages/Contact";
import TutorialPage from './Pages/Tutorial';
import Signup from './Pages/Signup';
import SeeAllPage from './Pages/SeeAllPage';
import CourseDetails from './Pages/CourseDetails';

function App() {
  return (
    <Routes>
      <Route exact path='/course' element={<Course/>}/>
      <Route exact path='/topic' element={<Topic/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
      <Route exact path='/tutorial' element={<TutorialPage/>}/>
      <Route exact path='/signup'  element={<Signup showSignUp={true} key="signup"/>}/>
      <Route exact path='/signin'  element={<Signup showSignUp={false}key="signin"/>}/>
      <Route exact path='/seeall'  element={<SeeAllPage/>}/>
      <Route exact path='/coursedetails'  element={<CourseDetails/>}/>
      <Route exact path='/'     element={<Home/>} />
    </Routes>
  );
}

export default App;
