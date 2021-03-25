import { Box, Button, Card, Container, Grid, IconButton, TextField, Typography } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { domain } from '../env'
import VisibilityIcon from '@material-ui/icons/Visibility'
import SendIcon from '@material-ui/icons/Send'
import SingeReview from '../components/common/SingeReview'


const ProductDetails = () => {
    const [product, setProduct] = useState(null);
    const { id}  = useParams()
    useEffect(()=>{
        const getproductdetailse=async()=>{
            await axios({
                url:`${domain}/api/singleproduct/${id}/`,
                method:'GET'
            }).then(response=>{
                // console.log(response.data[0]);
                setProduct(response.data[0])
            })
        }
        getproductdetailse()
    },[])
    useEffect(()=>{
        const addproductview = async()=>{
            await axios({
                url:`${domain}/api/addproductview/`,
                method:'POST',
                data:{
                    'id':id
                }
            }).then(response=>{
                console.log("ProductDetails",response.data);
            })
        }
        addproductview()
    },[])
    return (
        <Container style={{
                paddingTop:'10px'
            }} >
            <Card>
            <Grid container >
                <Grid item xs={12} sm={12} md={5} lg={5} >
                    <img style={{
                        width:'100%',
                        height:'auto'
                    }} src={product?.image} alt={product?.title}/>
                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={7} >
                    <Grid container style={{marginLeft:'10px'}}>
                        <Grid item xs={12} md={6} lg={6} >
                            <Typography variant='h4' >{product?.title}</Typography>
                            <Box>
                                {

                                    product?.category?.map((item,i)=><Button key={i}>{item?.title}</Button>)
                                }
                            </Box>
                        
                                <Box>
                                    {
                                        product?.brand && 
                                <Button variant='outlined' >{product?.brand?.title}</Button>
                                    }
                                </Box>
                         
                            <Box>
                                {
                                    product?.discount > 0 && <Box style={{
                                        fontSize:'40px'
                                    }} >{product?.discount}% OFF</Box>
                                }
                            </Box>
                            <Box>
                                {
                                    product?.oldprice && <Box style={{
                                        fontSize:'40px',
                                        color:'red',
                                        textDecoration: 'line-through',
                                        marginRight:'10px'
                                    }} component='span' >{ product?.oldprice} TK</Box>
                                }
                                 <Box style={{
                                       fontSize:'40px',
                                        color: 'black'
                                 }} component='span' >{ product?.price} TK</Box>
                                 <Box style={{margin:'10px 0px'}}>

                                 <Button size='large' variant='outlined' >Add To Cart</Button>
                                 </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} lg={6} >
                            <Card style={{
                                padding:'10px',
                                margin:'15px 0px',
                                display:'flex',
                                justifyContent:'center'
                            }} >
                                <Button
                                endIcon={
                                    <VisibilityIcon />
                                }
                                color='primary' size="large" >{product?.view}</Button>
                            </Card>
                        </Grid>
                        <Typography>{product?.details}</Typography>
                     
                    </Grid>
                        <Typography variant='h3' align='center' >Review</Typography>
                        <Box p={3}>
                            <TextField
                                label='Add Review..'
                                style={{width:'100%'}}
                                variant='outlined'
                                InputProps={{
                                    endAdornment:(
                                        <IconButton>
                                            <SendIcon />
                                        </IconButton>
                                    )
                                }}
                            />
                            {
                                product?.review?.map((item,i)=><SingeReview key={i} item={item} />)
                            }
                        </Box>
                </Grid>
            </Grid>
            </Card>
        </Container>
    )
}

export default ProductDetails
