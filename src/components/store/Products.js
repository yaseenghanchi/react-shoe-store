import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <div>
            <ul>
                {Object.entries(shoes).map(([index, {name,img}])=>(
                   <Link to={`${index}`}>
                    <li key={index}>
                        <h2>{name}</h2>
                        <img src={img} alt={name} />
                    </li>
                   </Link>
                ))}
            </ul>    
        </div>
    );
};



const shoes = {
    "air-jordan-3-valor-blue": {
      name: "VALOUR BLUE",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
    "jordan-mars-270-london": {
      name: "JORDAN MARS 270 LONDON",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
    "air-jordan-1-zoom-racer-blue": {
      name: "RACER BLUE",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    }
  };

export default Products;