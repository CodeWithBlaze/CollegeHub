import {Route,Routes} from 'react-router-dom';
import Home from "./Pages/Home";
import Topic from "./Pages/Topic";
import Course from "./Pages/Course";
import Contact from "./Pages/Contact";
import TutorialPage from './Pages/Tutorial';
import Signup from './Pages/Signup';

function App() {
  return (
    <Routes>
      <Route exact path='/course' element={<Course/>}/>
      <Route exact path='/topic' element={<Topic/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
      <Route exact path='/tutorial' element={<TutorialPage/>}/>
      <Route exact path='/signup' element={<Signup/>}/>
      <Route exact path='/'     element={<Home/>} />
    </Routes>
  );
}

export default App;
