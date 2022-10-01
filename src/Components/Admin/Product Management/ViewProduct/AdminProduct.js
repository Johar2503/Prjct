import { Grid, useMediaQuery, useTheme, Card, Box ,CardActions,Button, CardActionArea,CardMedia,CardContent,Typography,Rating} from '@mui/material'
import { Container } from '@mui/system';
import React from 'react'
import AdminHeader from '../../Header/AdminHeader'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

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
       <AdminHeader/>
       <Grid container spacing={1} sx={{marginTop:10}}>{products.map((product,index)=>{
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
      <div>
        <Button aria-label="edit"  id="editProduct" variant='contained' href='/admin/editproduct' >
            <EditIcon sx={{fontSize: '20px'}} /> 
            <span className="material-icons">Edit</span>
        </Button>
    </div>
    <div>
        <Button aria-label="edit"  id="deleteProduct" variant='contained' color='error' >
         <DeleteIcon sx={{fontSize: '20px'}}/> 
            <span className="material-icons" >Delete</span>
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
       <Button variant="contained" size={"large"} id="addVenue" style={{ position: "fixed", right: "3%", bottom: "5%", width: "75px", height: "75px", borderRadius: "50%" }} href='/admin/addproduct'>
        <span className="material-icons">add</span>
        </Button>
    </React.Fragment>
  )
}

export default Product