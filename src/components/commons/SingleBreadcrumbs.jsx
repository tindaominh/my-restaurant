import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  breadcrumbs: {
    width: "1270px",
    height: "40px",
    paddingLeft: "15px",
    paddingRight: "15px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    // webkitBoxAlign: "center",
    alignItems: "center",
    overflow: "hidden"
  }
}));

function handleClick(event) {
  event.preventDefault();
}

export default function SingleBreadcrumbs() {
  const classes = useStyles();

  return (
    <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>
      <Link color="inherit" href="/" onClick={handleClick}>
        Material-UI
      </Link>
      <Link color="inherit" href="/getting-started/installation/" onClick={handleClick} className={classes.breadcrumbsItem}>
        Core
      </Link>
      <Typography color="textPrimary">Breadcrumb</Typography>
    </Breadcrumbs>
  );
}
