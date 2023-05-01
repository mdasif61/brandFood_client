import React from 'react';

const Chef = ({chef}) => {
    const {chef_name,image}=chef;
    return (
        <div>
            <h1>{chef_name}</h1>
        </div>
    );
};

export default Chef;