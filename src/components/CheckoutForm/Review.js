import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useStateValue } from '../../StateProvider';
import accounting from 'accounting';
import { getBasketTotal } from '../../reducer';

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const classes = useStyles();
  const [{basket}, _] = useStateValue();

  let products = basket;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Resumen
      </Typography>
      <List disablePadding>
        {products.map((product, i) => (
          <ListItem className={classes.listItem} key={i}>
            <ListItemText primary={product.name} secondary={product.productType} />
            <Typography variant="body2">{accounting.formatMoney(product.price, "$", 0, ".", ",")}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
          <h5>{accounting.formatMoney(getBasketTotal(products), "$", 0, ".", ",")}</h5>
          </Typography>
        </ListItem>
      </List>

    </React.Fragment>
  );
}