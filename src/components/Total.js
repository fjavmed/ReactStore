import React from 'react';
import accounting from 'accounting';
import { Button, makeStyles } from '@material-ui/core';
import {getBasketTotal} from '../reducer';
import { useStateValue } from '../StateProvider';


const useStyles = makeStyles ((theme)=>({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyCOntent: "center",
        alignItems: "center",
        height: "20vh"

    },
    button: {
        marginTop: "2rem",
    }


}))
const Total = () => {
    const classes = useStyles()
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className={classes.root}>
            <h5>Total items: {basket?.length}</h5>
            <h5>{accounting.formatMoney(getBasketTotal(basket), "$", 0, ".", ",")}</h5>
            <Button className={classes.button} variant="contained" color="secondary" >
            Pagar
            </Button>
        </div>
    )
}

export default Total
