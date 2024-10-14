import React from 'react';
import { Model } from '../Constants/Constants';

export default function Trainer() {
    return (
        <>
            <div className="flex flex-col items-center bg-stone-400">
                <h1 className='font-mono font-bold text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
                    Meet your Centr team
                </h1>
                <p className='font-mono text-lg text-center mt-10'>A world-class team and wellness app to help you reach your fitness goals.</p>
                <div className="carousel carousel-end rounded-box mx-4 mt-10 mb-20">
                {Model.map((model,) =>
                                    <div className="carousel-item flex flex-col">
                                    <img src={model.img} />
                                    <p>lorem</p>
                                </div>
                )}
                </div>
            </div>
        </>
    )
}
