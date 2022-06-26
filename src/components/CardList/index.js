import React from 'react'
import { Card, CardContent, CardHeader, CardActions, Checkbox, Typography, Avatar } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import useStyles from './styles'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const CardList = props => {
    const {
        additionalClassNames,
        title,
        Cardstyling,
    }
        = props
    const classes = useStyles()

    return (
        <Card
            className={additionalClassNames}
        >
            <CardHeader
                title={title}
            >

            </CardHeader>
            <CardContent>
                <Typography >

                </Typography>
            </CardContent>
        </Card>

    )
}
CardList.propTypes = {
    type: PropTypes.string,
    status: PropTypes.string,
    data: PropTypes.array.isRequired,
    additionalClassNames: PropTypes.string,

}
CardList.defaultProps = {
    type: '',
    status: 'active',
    additionalClassNames: "",
}

export default CardList