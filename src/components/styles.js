import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    text: {
        width: 'calc(250px - 30px)',
        height: "40px",
        '& .MuiInputBase-input': {
            fontWeight: 600,
            fontSize: '18px',
            border: '1px solid #E1E1E3',
            height: '25px',
        }
    },
    btn: {
        backgroundColor: '#2972FF',
        height: '48px',
        width: '192px',
        borderRadius: '4px',
        fontSize: '14px',
        float: 'right',
        '&:hover': {
            backgroundColor: '#2972FF',
        }

    }
}))
export default useStyles
