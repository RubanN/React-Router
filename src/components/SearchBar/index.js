import { useState } from 'react'
import { TextField } from '@material-ui/core'
// import classnames from 'classnames'
import { CalendarTodayOutlined, SearchOutlined } from '@material-ui/icons'
import PropTypes from 'prop-types'
import useStyles from './styles'


const SearchBar = props => {
    const { variant, size, placeholder, className = '', style = {}, fullWidth = false, isEndAdornment, value = '', ...otherProps } = props
    const classes = useStyles()
    const [val, setValue] = useStyles(value)


    const handleChange = e => {
        setValue(e)
    }
    const endAdornment = isEndAdornment ? <CalendarTodayOutlined style={{ color: '#787885' }} /> : null
    return (
        <TextField
            style={style}
            variant={variant}
            size={size}
            fullWidth={fullWidth}
            placeholder={placeholder}
            InputProps={{
                startAdornment: <SearchOutlined style={{ color: '#787885' }} />,
                endAdornment: endAdornment
            }}
            value={val}
            onChange={e => {
                handleChange(e.target.value)
            }}
            {...otherProps}

        />
    )
}
SearchBar.propTypes = {
    /**
     * The variant to be rendered in the SearchBar
     */
    variant: PropTypes.string,
    /**
     * The size to be rendered in the SearchBar
     */
    size: PropTypes.string,
    /**
     * The placeholder to be rendered in the SearchBar
     */
    placeholder: PropTypes.string,
    /**
     * The handleChange to be rendered in the SearchBar
     */
    handleChange: PropTypes.func,
    /**
     * The handleChange to be rendered in the SearchBar
     */
    value: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    isEndAdornment: PropTypes.bool,
    fullWidth: PropTypes.bool
}
SearchBar.defaultProps = {
    value: '',
    variant: 'outlined',
    size: 'medium',
    placeholder: 'Search',
    handleChange: () => null,
    style: {},
    isEndAdornment: ''
}
export default SearchBar
