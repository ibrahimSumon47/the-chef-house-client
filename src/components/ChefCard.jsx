import React, { useEffect, useState } from 'react';

const ChefCard = () => {
    const [chefDetailsCard, setChefDetailsCard] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/chef_details")
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default ChefCard;