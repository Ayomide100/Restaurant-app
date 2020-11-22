import React from 'react';

const RenderComment = ({comment}) => {
    const list = comment.map(com =>{
        return(
            <ul className="list-group list-unstyled">
               <li> <h6> {com.comment} </h6></li> 
                <li><h6>-- {com.author} {com.date} </h6></li>
            </ul>
        )
    })
    return (
            <div className="col-12 col-md-5">
                <h4>Comments</h4>
                {list}
            </div>
    );
};

export default RenderComment;