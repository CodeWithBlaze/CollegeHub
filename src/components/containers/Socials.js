import { SOCIALS } from "../../config/HOMEPAGE_HARDCODED";
import React from 'react';
import LinkIcon from "../icon/LinkIcon";

function Socials(props) {
    return (
       <>
        {
            SOCIALS.map(social=><LinkIcon key={social.label} name={social.icon} size="fa-4x" color="white" marginLeft={15} marginRight={15} link={social.link}/>)
        }
       </>
    );
}

export default Socials;