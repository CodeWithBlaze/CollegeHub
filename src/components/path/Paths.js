import React from 'react';
import Thumbnail from '../Thumbnails/Thumbnail';

function Paths({paths=[]}) {
    return (
        <div className='path-container'>
                {
                    paths.map(path=><Thumbnail 
                        key={path._id}
                        customStyle={{width:300,height:250,borderRadius:10}} 
                        label={path.label}
                        image={path.image}
                        categories={path.categories}
                    />)
                }
        </div>
    );
}

export default Paths;