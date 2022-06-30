import React from 'react';
import Thumbnail from '../Thumbnails/Thumbnail';
function Paths({paths=[],searchResult=[]}) {
    return (
        <div className='path-container'>
                {
                    searchResult.length !== 0 &&  searchResult.map(path=><Thumbnail 
                        key={path._id}
                        customStyle={{width:300,height:250,borderRadius:10}} 
                        label={path.label}
                        image={path.image}
                        categories={path.categories}
                    />)
                }
                {
                    searchResult.length === 0 &&  paths.map(path=><Thumbnail 
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