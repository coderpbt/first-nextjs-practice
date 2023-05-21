import React from 'react';

const ExperienceTem = ({data}) => {
    return (

            <div className="blg-details">
                <h3 className="card-title">{data.deg}</h3>
                <h3 className="card-title">{data.year}</h3>
                <p>{data.company}</p>
                <p>{data.desc}</p>
            </div>
   
    );
};

export default ExperienceTem;