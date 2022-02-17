import React from 'react';

import { IconBrandInstagram, IconBrandFacebook, IconBrandTwitter} from '@tabler/icons';

const SocialMedia = () => {
    return ( 
        <div className='flex col-start-5 justify-self-end'>
            <a href="https://www.instagram.com/krutklip/"><IconBrandInstagram className='ml-4 '/></a>
            <a href="https://www.facebook.com/krutklipdk/"><IconBrandFacebook className='ml-4 '/></a>
            <a href="https://twitter.com/krutklip"><IconBrandTwitter className='ml-4'/></a>
        </div>
     );
}
 
export default SocialMedia;

