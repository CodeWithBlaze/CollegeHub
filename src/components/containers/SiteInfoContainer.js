import React from 'react';
import { site_info_card } from '../../config/HOMEPAGE_HARDCODED';
import GradientBackground from '../backgrounds/GradientBackground';
import ImageInfo from '../card/ImageInfo';

function SiteInfoContainer() {
    return (
        <GradientBackground>
                {
                    site_info_card.map(info=><ImageInfo heading={info.heading} 
                                                        description={info.description}
                                                        image={info.image}
                                                        />)
                }
        </GradientBackground>
    );
}

export default SiteInfoContainer;