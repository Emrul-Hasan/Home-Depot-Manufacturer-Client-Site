import React from 'react';
import notfound from '../../../images/dribbble_1.gif';


const NotFound = () => {
    return (
        <div class="card lg:card-side bg-base-100 px-16">
            <figure><img width={1000} src={notfound} alt="Album" /></figure>
            <div class="flex align-middle px-30">
                <h2 class="card-title font-bold text-primary">Oops! May be you <span className='text-danger'>lost</span> your path!!!</h2>
            </div>
        </div>
    );
};

export default NotFound;