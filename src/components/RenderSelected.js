import React from 'react';
import RenderDish from './RenderDish'
import {Link} from 'react-router-dom'
import RenderComment from './RenderComment';


const RenderSelected = ({dish, comment}) => {
    console.log(comment.comment)
    return (
        <div className="container">   
            <div className="row">
                <div className='breadcrumb'>
                    <div className="breadcrumb-item active">
                        <Link to= '/Menu'>Menu</Link>
                    </div>
                    <div className="breadcrumb-item active">
                        {dish.name}
                    </div>
                </div>
                <div className="col-12">
                   <h3>{dish.name}</h3>
                    <hr/>
                </div>
            </div>        
            <div className="row pt-3 pb-4">
                <RenderDish dish={dish} />   
                <RenderComment comment ={comment}/>            
            </div>
        </div>
    );
};

export default RenderSelected;