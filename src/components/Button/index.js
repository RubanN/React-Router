import React from 'react';
import { Button as MuiButton } from '@material-ui/core'
import PropTypes from 'prop-types'

const Button = props => {
    const { label, style, ...rest } = props

    return (
        <MuiButton disableElevation {...rest}>
            {label}
        </MuiButton>
    )
};
Button.PropTypes = {
    /**
     * The label to be rendered in the button
     */
    label: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    handleChange: PropTypes.func,
}
Button.defaultProps = {
    label: 'btn',
    style: {},
    variant: 'contained',
    size: 'medium',
    className: '',
    color: 'primary',
    onClick: () => null,
}

export default Button;
