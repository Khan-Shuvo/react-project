import React from 'react'
import { clsaa } from '../Constants/Constants'

export default function Class() {
  return (
    <>
      <div className="flex flex-col bg-base-100 ">
        <h1 className='uppercase m-10 mt-5 text-xl'>movement</h1>
        <h3 className='text-bold m-10 mt-2 text-2xl'>Training that will make you sweat.</h3>
        <p className='m-10 mt-2'>Centr members have over 4,000 workouts at their fingertips. Try one now.</p>
      </div>
      <div className="carousel carousel-end rounded-box my-3 ">
        {clsaa.map((item) =>
          <div className="carousel-item border border-md">
            <div className="card bg-base-100 shadow-2xl">
            <figure>
              <img
                src={item.img}
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {item.taitle}
              </h2>
              <p> {item.discription} </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
          </div>
        )}
      </div>
    </>
  )
}
