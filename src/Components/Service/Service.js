import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Service = (props) => {
  
    const { name, img, description, id } = props.services;
    
    return (
        <div>
            <Container>
            {/* <img src={img} alt="" />
    <h5> {name} </h5>
    <p> {description}  </p> */}
            {/* <div className="card " style={{width: "18rem"}}>
                <img src={img} style={{height:'15rem', width:'100%'}} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                        <button className='btn btn-primary'>
                            Purchase
                        </button>
                    </div>
            </div> */}

<Card sx={{ maxWidth: 345, my:'20px'}}>
      <CardMedia
        component="img"
        height="140"
        image={img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link sx={{mx:'auto'}} to={`/purchase/${id}`}>
        <Button variant='contained'>Purchase</Button></Link>
      </CardActions>
    </Card>
    </Container>
        </div>
    );
};

export default Service;