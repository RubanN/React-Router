import { makeStyles, lighten, darken } from '@material-ui/core'

const useStyles = makeStyles(theme => {
    let lightColor = theme.palette.primary.main
    let darkContrastTextColor = theme.palette.background.paper

    return {
        darkContrastText: {
            color: darkContrastTextColor
        },
        darkTheme: {
            color: darkContrastTextColor,
            background: `${theme.palette.background.default}22`,
            '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: `${theme.palette.background.default}55`
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: `${theme.palette.background.default}99`
            },
            '& .MuiSelect-icon': {
                color: darkContrastTextColor
            }
        },
        squared: {
            borderRadius: 0,
            '& .MuiSelect-outlined': {
                borderRadius: 0
            }
        },
        darkField: {
            '& .MuiSelect-outlined': {
                color: theme.palette.common.white,
                backgroundColor: '#2E3A51'
                // width: '300px'
            },
            '&.MuiSelect-selectMenu': {
                color: theme.palette.common.white,
                backgroundColor: '#2E3A51'
            }
        },
        darkField1: {
            '& .MuiMenu-list': {
                color: theme.palette.common.white,
                backgroundColor: theme.palette.secondary.main
                // width: '300px'
            }
        },
        outlineBlue: {
            border: '2px solid #2972FF !important',
            backgroundColor: theme.palette.common.white,
            '& .MuiSelect-selectMenu': {
                fontSize: '16px',
                fontWeight: 500
            },
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'transparent'
            },
            '.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'transparent'
            },
            '& .MuiSelect-select:focus': {
                backgroundColor: 'transparent',
                border: 'unset'
            }
        },
        white: {
            color: theme.palette.common.white
        },
        label: {
            // height: '20px',
            fontSize: '14px',
            lineHeight: 1.75, //theme.typography.pxToRem(2), //'28px',
            fontWeight: 400
        }
    }
})
export default useStyles
