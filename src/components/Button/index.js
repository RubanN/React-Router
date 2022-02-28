import React from 'react';
import { Button as MuiButton } from '@material-ui/core'
import PropTypes from 'prop-types';

const Button = props => {
    const { label, style, ...rest } = props

    return (
        <MuiButton disableElevation {...rest}>
            {label}
        </MuiButton>
    )
};
Button.propTypes = {
    /**
     * The label to be rendered in the button
     */
    addContact: PropTypes.func.isRequired,
    label: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    handleChange: PropTypes.func,
}
Button.defaultProps = {
    label: 'Button',
    style: {},
    variant: 'contained',
    size: 'medium',
    className: '',
    color: 'primary',
    onClick: () => null,
}

export default Button;
