import React from 'react';

const RenderCard = ({item}) => {
    return(
        <div className='card'>
            <img className="card-img-top" src={item.image} alt= {item.name} />
            <div className='card-body'>
                <div className="card-title"><h5>{item.name}</h5></div>
                {item.designation ? <div className='card-subtitle'><h6>{item.designation}</h6></div> : null}
                <div className="card-text">{item.description}</div>
            </div>
        </div>
    )
}

const HomeComponent = ({dish, leader, promotion}) => {
    return (
        <div className="container">
            <div className="row align-items-start">
                <div className='col-12 col-md m-1'>
                    <RenderCard item ={dish} />
                </div>
                <div className='col-12 col-md m-1'>
                    <RenderCard item ={promotion} />
                </div>
                <div className='col-12 col-md m-1'>
                    <RenderCard item ={leader} />
                </div>
            </div>
        </div>
    );
};

export default HomeComponent;