import React from 'react';
import globalstyle from '../../style.module.css';
import HeaderStatus from '../../containers/settings/headerStatus';
import Citizen from '../users/citizen';

function Home() {

HeaderStatus(true) ;
     
return (
<>
<div className={globalstyle.container}>

</div>
<Citizen />


</>
);
}

export default Home;
