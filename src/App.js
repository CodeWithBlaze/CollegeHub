import {Route,Routes} from 'react-router-dom';
import Home from "./Pages/Home";
import Topic from "./Pages/Topic";
import Course from "./Pages/Course";
import Contact from "./Pages/Contact";
import TutorialPage from './Pages/Tutorial';
import Signup from './Pages/Signup';
import CourseDetails from './Pages/CourseDetails';
import PathDetails from './Pages/pathDetails';
import Profile from './Pages/Profile';

import {CONTACT_ROUTE,
        COURSE_DETAILS_ROUTE,
        COURSE_ROUTE, HOME_ROUTE, 
        PATH_DETAILS_ROUTE, 
        SIGNIN_ROUTE, 
        SIGNUP_ROUTE, 
        TOPIC_ROUTE,
        PROFILE_ROUTE, 
        TUTORIAL_ROUTE} from './config/CONFIG';
import UserAuthContext from './context/UserAuthContext';
import {useState } from 'react';



function App() {
  const [auth,setAuth] = useState(null);
  
  return (
    <UserAuthContext.Provider value={{auth,setAuth}}>
    <Routes>
      <Route exact path={COURSE_ROUTE} element={<Course/>}/>
      <Route exact path={TOPIC_ROUTE} element={<Topic/>}/>
      <Route exact path={CONTACT_ROUTE} element={<Contact/>}/>
      <Route exact path={TUTORIAL_ROUTE} element={<TutorialPage/>}/>
      <Route exact path={SIGNUP_ROUTE}  element={<Signup showSignUp={true} key="signup"/>}/>
      <Route exact path={SIGNIN_ROUTE}  element={<Signup showSignUp={false}key="signin"/>}/>
      <Route exact path={PROFILE_ROUTE}  element={<Profile/>}/>
      <Route exact path={COURSE_DETAILS_ROUTE}  element={<CourseDetails/>}/>
      <Route exact path={PATH_DETAILS_ROUTE}  element={<PathDetails/>}/>
      <Route exact path={HOME_ROUTE}     element={<Home/>} />
    </Routes>
    </UserAuthContext.Provider>
  );
}

export default App;
