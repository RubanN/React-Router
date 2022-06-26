import { useState } from 'react'
import PropTypes from 'prop-types'
import { Box, MenuItem, Select, Typography } from '@material-ui/core'
import classnames from 'classnames'
import useStyles from './styles'

const DropDown = props => {

    const {
        value,
        label,
        onChange,
        placeholder,
        onOpen,
        className = '',
        onClose,
        // handleChange,
        theme,
        squared = false,
        options,
        dark = false,
        ...otherProps
    } = props || {}
    const classes = useStyles()
    const [option, setOption] = useState('')
    const [open, setOpen] = useState(false)

    const handleChange = event => {
        setOption(event.target.value)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }


    return (
        <Box style={{ width: '100%' }}>
            {label ? <Typography className={classnames(classes.label, { [classes.darkContrastText]: dark })}>{label}</Typography> : null}
            <Select
                displayEmpty
                className={classnames(className, { [classes.darkTheme]: dark, [classes.squared]: squared })}
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={option}
                onChange={handleChange}
                margin='dense'
                {...otherProps}>
                <MenuItem>{placeholder}</MenuItem>
                {options.map((item, key) => (
                    <MenuItem aria-label='None' key={key} value={item.value}>
                        {item.label}
                        {console.log(item.value)}
                    </MenuItem>
                ))}
            </Select>
        </Box>
    )
}
DropDown.propTypes = {
    /**
     * The label to be rendered in the TextField
     */
    value: PropTypes.string,
    placeholder: PropTypes.string,
    options: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired,
    theme: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    dark: PropTypes.bool,
    squared: PropTypes.bool
}
DropDown.defaultProps = {
    value: '',
    placeholder: '',
    options: [],
    handleClose: () => null,
    handleOpen: () => null,
    handleChange: () => null,
    theme: 'outlineBlue',
    style: {},
    className: '',
    variant: 'outlined',
    dark: false,
    squared: false
}

export default DropDown
