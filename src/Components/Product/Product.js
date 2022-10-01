import { Grid, useMediaQuery, useTheme, Card, Box ,CardActions,Button, CardActionArea,CardMedia,CardContent,Typography,Rating} from '@mui/material'
import { Container } from '@mui/system';
import React from 'react'
import Header from '../Header/Header'
export const products = [
  {
      id: 1,
      name: "Men's Shirt",
      price: 129.99,
      description: "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
      image: "/images/products/bag_01.png",
      rating:3,
      category:"Men"
  },
  {
      id: 2,
      name: "Womens's Tshirt",
      price: 199.99,
      description: "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
      image: "/images/products/bag_02.png",
      rating:4,
      category:"Women"
  },
  {
      id: 3,
      name: "Men's Shoes",
      price: 189.99,
      description: "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
      image: "/images/products/bag_03.png",
      rating:2,
      category:"Men"
  },
  {
      id: 4,
      name: "Women's Casual Dress",
      price: 129.99,
      description: "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
      image: "/images/products/bag_04.png",
      rating:5,
      category:"Women"
  },
  {
      id: 5,
      name: "Men's Sunglasses",
      price: 399.99,
      description: "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
      image: "/images/products/bag_05.png",
      rating:3,
      category:"Men"
  },
  {
      id: 6,
      name: "Women's Jerkin",
      price: 689.99,
      description: "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
      image: "/images/products/bag_06.png",
      rating:5,
      category:"Women"
  }
];

function Product() {
   //const theme=useTheme;
   // const isMatch=useMediaQuery(theme.breakpoints.down("md"));
   
  return (
    <React.Fragment>
       <Header/>
       <Grid container spacing={1} sx={{marginTop:10}}>
        {products.map((product,index)=>{
        return(
       
        <Grid item key={index} id={"productGrid"+(index+1)}  xs={3}>
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
      
      <Rating name="read-only" value={product.rating} sx={{marginLeft:'auto'}} readOnly />

  </CardActions>
    </Card>
        </Grid>
        );
        }
       )}
       </Grid>
     
    </React.Fragment>
  )
}

export default Product