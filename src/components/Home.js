import React, { useState } from 'react'
import useStyles from './styles'
import Textfield from "../components/Texfield/index"
import Button from "../components/Button/index"
const Home = () => {
    const classes = useStyles()
    const [state, setState] = useState("");
    const handleChange = (e) => {
        setState(e.target.value);
    }
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Textfield
                    tyep="text"
                    placeholder="Enter your "
                    onChange={handleChange}
                    value={state}
                    variant="outlined"
                    multiple={0}
                    textstyle={classes.text}
                />
                <Button
                    className={classes.btn}
                    disableElevation size='large'>Click</Button>

            </div>

        </>

    )
}

export default Home