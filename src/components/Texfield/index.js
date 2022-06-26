import React, { useState } from 'react';
import { TextField as MuiTextField, Typography, Box } from '@material-ui/core'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import useStyles from './styles'



const TextField = props => {
    const classes = useStyles()
    const {
        label,
        name,
        type,
        placeholder,
        theme,
        helperText,
        endAdornment,
        textstyle,
        additionalClassNames,
        error,
        multiline,
        ...rest
    } = props;
    return (
        <Box>
            <MuiTextField
                name={name}
                label={label}
                type={type}
                placeholder={placeholder}
                helperText={helperText}
                variant="outlined"
                multiline={multiline}
                textstyle={textstyle}
                endAdornment={endAdornment}
                className={classes.textStyles}
                error={error}
                {...rest}
            />
        </Box>
    )

};
TextField.propTypes = {
    label: PropTypes.string,
    multiline: PropTypes.bool,
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    handleChange: PropTypes.func,
    endAdornment: PropTypes.node,
    theme: PropTypes.string,
    additionalClassNames: PropTypes.string,
    textstyle: PropTypes.string,


}
TextField.defaultProps = {
    label: "Label",
    name: '',
    placeholder: '',
    theme: 'light',
    size: 'small',
    additionalClassNames: '',
    textstyle: "",


}
export default TextField;
