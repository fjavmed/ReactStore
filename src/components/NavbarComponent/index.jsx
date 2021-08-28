import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import logo from '../../assets/logomini.png';
import { Badge, Button } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { auth } from '../../firebase';
import { actionTypes } from '../../reducer';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "7rem",
  },
  appBar: {
    backgroundColor: "whitesmoke",
    boxShadow: "none",
  },
  grow: {
    flexGrow: 1,
  },
  button: {
    marginLeft: theme.spacing(2),
  },
  image: {
    marginRight: "10px",
    height: "1rem",
  },
}));

export default function NavbarComponent() {
  const classes = useStyles();
  const [{basket, user}, dispatch] = useStateValue ();
  const history = useHistory();

  const handleAuth = ()=>{
    if (user){
      auth.signOut();
      dispatch({
        type: actionTypes.EMPTY_BASKET,
        basket: [],
      });
      dispatch({
        type: actionTypes.SET_USER,
        user: null,
      });
      history.push("/");
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>

          <Link to="/">
          <IconButton>
            <img src={logo}
            className={classes.image}
             height="120"
              alt="Logo" />
              Tienda Lente Nativo
          </IconButton> 
          </Link>

          <div className={classes.grow} />
          <Typography variant="h6" color="textPrimary" component="p">
            Bienvenido, {user ? user.email : "Invitado"}
          </Typography>
          <div className={classes.button}>
            <Link to="/signin">
            <Button variant="outlined" onClick={handleAuth}>
            <strong>{user ? "Salir" : "Ingresa"}</strong>
            </Button>
            </Link>
            
            <Link to="checkout-page">
            <IconButton aria-label="show cart ites" color="inherit">
              <Badge badgeContent={basket?.length} color="secondary" showZero>
                <ShoppingCart fontSize='large' color='primary' max={20}/> 
              </Badge>
                      
            </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
