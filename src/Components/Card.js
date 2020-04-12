import React from 'react';


const card =({name, email, id})=> {
    
    return (
        <div className="bg-light-blue dib br3 pa3 ma2 grow">
            <img alt="robots" src={`https://robohash.org/${id}?500x200`}/>
            <div>
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default card;