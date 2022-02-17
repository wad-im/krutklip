import React from 'react';

import { Logo } from "./logo"
import Button from './button';

const Sidebar = () => {
    return ( 
        <aside className="flex flex-col justify-between col-start-1 col-span-1 max-w-xs">
            <Logo/>
            <Button text="Book nu" link="https://krut-klip.planway.com/"/>
        </aside>
     );
}
 
export default Sidebar;