import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { actionTypes } from '../../reducer';
import { useStateValue } from '../../StateProvider';
import { db } from '../../firebase';
import Review from './Review';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Shipping address'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [{basket, orderID}, dispatch] = useStateValue();

  const clearBasket = () => dispatch({
    type: actionTypes.EMPTY_BASKET,
  })

  const handleNext = () => {
    let next = activeStep + 1;

    if (next >= steps.length) {
      console.log('Generando orden de compra y limpiando el carro');

      db.collection('orders').add({
        basket: basket
      }).then((docRef) => {
        clearBasket();
        dispatch({
          type: actionTypes.SET_ORDER_ID,
          orderID: docRef.id
        })
        window.setTimeout(function() {
          setActiveStep(next);
        }, 500)
        
      }).catch((error) => {
        console.log("error:", error)
      })

    } else {
      setActiveStep(next);
    }
    
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
            <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Su orden
          </Typography>
          
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Gracias por comprar
                </Typography>
                <Typography variant="subtitle1">
                  Su orden ha sido generada con el identificador #{orderID}. Si quiere conocer el estado de su orden, por favor contactenos e indiquenos el identificador.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Ingresar orden' : 'Siguiente'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
     
      </main>
    </React.Fragment>
  );
}