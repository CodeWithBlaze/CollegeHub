import React from 'react';
import Thumbnail from '../Thumbnails/Thumbnail';
import paths from '../../database/sample_paths';
function Paths(props) {
    return (
        <div className='path-container'>
                {
                    paths.map(path=><Thumbnail 
                        key={path.id}
                        customStyle={{width:300,height:250,marginRight:30,borderRadius:10}} 
                        label={path.label}
                        image={path.image}
                        categories={path.categories}
                    />)
                }
        </div>
    );
}

export default Paths;