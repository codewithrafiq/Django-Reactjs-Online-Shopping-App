import { Button, Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'

const SliderItem = ({item}) => {
    return (
        <Paper
            style={{
                height:'500px',
                width:'100%',
                backgroundImage: `url(${item.image})` ,
                backgroundSize:'100% 500px'
            
            }}
        >
            <Grid
            style={{
                position:'absolute',
                left:'50%',
                top:'50%',
                transform:'translate(-50% ,-50%)',
                color:'white'
            }}>
                <Typography variant="h3" >{item?.name}</Typography>
                <Typography variant="h6" >{item?.details}</Typography>
                <Button color='primary' variant='contained'>
                    Learn More
                </Button>
            </Grid>
        </Paper>
    )
}

export default SliderItem
