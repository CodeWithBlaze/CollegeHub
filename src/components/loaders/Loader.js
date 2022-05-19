import React from 'react';
import { Oval } from  'react-loader-spinner';

function Loader({height,width,color,ariaLabel}) {
    return (
        <Oval
            height={height}
            width={width}
            color={color}
            ariaLabel={ariaLabel}
        />
    );
}

export default Loader;