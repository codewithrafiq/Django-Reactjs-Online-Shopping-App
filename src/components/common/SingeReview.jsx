import { Avatar, Card, CardHeader } from '@material-ui/core'
import React from 'react'

const SingeReview = ({item}) => {
    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar style={{ backgroundColor: 'blue' }}>
                        {item?.customer?.username?.[0]}
                    </Avatar>
                }
                title={item?.title}
                subheader={item?.customer?.username}
            />
        </Card>
    )
}

export default SingeReview
