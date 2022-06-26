import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    footerGrid: {
        backgroundColor: "#290248",
        paddingTop: "100px"
    },
    footerLink: {
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        padding: "20px",
        marginLeft: "130px"
    },
    socailMediaLinks: {
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        padding: "20px",
    }
}))
export default useStyles