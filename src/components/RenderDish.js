import React from 'react';

const RenderDish = ({dish}) => {
    return (
        <div className="col-12 col-md-5 m-1">
            <div className="card">
                <img className='card-img-top' src={dish.image}/>
                <div className="card-body">
                    <div className='card-text'>
                        {dish.description}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RenderDish;