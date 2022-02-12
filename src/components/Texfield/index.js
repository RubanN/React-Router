import React, { useState } from 'react';
import { TextField as MuiTextField, Typography, Box } from '@material-ui/core'
// import classnames from 'classnames'
import PropTypes from 'prop-types'
import useStyles from './styles'



const TextField = props => {
    const {
        label,
        name,
        type,
        placeholder,
        theme,
        helperText,
        endAdornment,
        error,
        ...rest
    } = props;
    return (
        <Box>
            <MuiTextField
                name={name}
                type={type}
                placeholder={placeholder}
                helperText={helperText}
                variant="outlined"
                endAdornment={endAdornment}
                error={error}
                {...rest}
            />
        </Box>
    )

};
TextField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    handleChange: PropTypes.func,
    endAdornment: PropTypes.node,
    theme: PropTypes.string,

}
TextField.defaultProps = {
    label: "Label",
    name: '',
    placeholder: '',
    theme: 'light',
    size: 'small',

}
export default TextField;
