import { Grid ,Card,CardActions,Button, CardActionArea,CardMedia,CardContent,Typography,Rating} from '@mui/material';
import React from 'react'
import Header from '../../Header/Header'

export const products = [
  {
      id: 1,
      name: "Super Backpack",
      price: 129.99,
      description: "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
      image: "/images/products/bag_01.png",
      rating:3
  }];
function BuyProduct() {

  return (
    <React.Fragment>
      <Header/>
      <Grid container sx={{marginTop:10, marginLeft:80}} >{products.map((product,index)=>{
        return(
          <Grid item key={index} id={"productGrid"+(index+1)} >
            <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={product.image}
                      alt="Loading"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      {product.description}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      {"RS : "+product.price}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                  <div>
                      <Button aria-label="edit"  id="buyProduct" variant='contained'>
                          <span className="material-icons">Buy</span>
                      </Button>
                  </div>
                  <div>
                      <Button aria-label="edit"  id="cartProduct" variant='contained'>
                          <span className="material-icons">Add to Cart</span>
                      </Button>
                  </div>
                  <Rating name="read-only" value={product.rating} sx={{marginLeft:'auto'}} readOnly />

              </CardActions>
          </Card>
        </Grid>
        
        );
      }
      )}
      </Grid>
    </React.Fragment>
  );
}

export default BuyProduct