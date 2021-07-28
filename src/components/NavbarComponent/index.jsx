import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import logo from '../../assets/logomini.png';
import Button from '@material-ui/core/Button';
import { Badge } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';

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
  const [{basket},dispatch] = useStateValue();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>

          <Link to="/">
          <IconButton>
            <img src={logo}
            className={classes.image}
             height="50"
              alt="Logo" />
          </IconButton>
          </Link>

          <div className={classes.grow} />
          <Typography variant="h6" color="textPrimary" component="p">
            Bienvenido
          </Typography>
          <div className={classes.button}>
            <Button variant="outlined">
            <strong>Ingresa</strong>
            </Button>

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
