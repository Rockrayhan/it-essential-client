import React from 'react';

const Service = (props) => {
    const { name, img, description, id } = props.services;
    console.log(props.services);
    return (
        <div className='container'>
            {/* <img src={img} alt="" />
    <h5> {name} </h5>
    <p> {description}  </p> */}
            <div className="card " style={{width: "18rem"}}>
                <img src={img} style={{height:'15rem', width:'100%'}} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                        <button className='btn btn-primary'>
                            Purchase
                        </button>
                    </div>
            </div>
        </div>
    );
};

export default Service;