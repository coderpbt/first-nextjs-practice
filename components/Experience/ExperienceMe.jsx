import { getExprience } from '@/data/dadaService';
import React from 'react';
import ExperienceTem from './ExperienceTem';

const ExperienceMe = () => {
    const datas = getExprience();
    console.log("exp", datas)
    return (
            <div className="container">
                    <div className="blog-parent">
                        {
                            datas?.map((data, idx) => <ExperienceTem data={data} key={idx} />)
                        }
                </div>
            </div>
    );
};

export default ExperienceMe;