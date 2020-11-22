import React from 'react';

const RenderLeader = ({leader}) => {
    const lead = leader.map(lead =>{
        return(
            <div className="media ml-3">
                <img className="media-object" src={lead.image} alt={lead.name} height='90' />
                <div className="media-body">
                    <div className="media-heading ml-4">
                        <h5> {lead.name}</h5>
                        <h6>{lead.designation}</h6>
                    </div>
                        <p className="ml-4">{lead.description} </p>
                </div>
            </div>
        );
    })
    return (
        <div className="medial-list pt-2">
            {lead}
        </div>   
    );
};

export default RenderLeader;