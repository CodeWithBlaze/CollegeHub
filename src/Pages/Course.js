import './course.css';
import Navbar from '../components/navbar/Navbar';
import Paths from '../components/path/Paths';
import Courses from '../components/course/Courses';
import Tags from '../components/tags/Tags';
import ItemContainer from '../components/containers/ItemContainer';


const Course = () => {
    return ( 
        <>
        <Navbar bg_color='transparent'/>
        <section style={{marginTop:70}}>
            <ItemContainer LinkTo="/seeall" DataToPass="paths" title="Popular Paths">
                <Paths/>
            </ItemContainer>
        </section>
        <section>
            <ItemContainer LinkTo="/seeall" DataToPass="courses" title="Popular Courses">
                <Courses/>
            </ItemContainer>
        </section>
        <section>
            <ItemContainer LinkTo="/seeall" DataToPass="tags" title="Popular Tags">
                <Tags/>
            </ItemContainer>
        </section>
        </>
     );
}
 
export default Course;