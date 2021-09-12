import React from 'react'
import Login from './Login';
import NavBar from '../commons/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import SingleBreadcrumbs from '../commons/SingleBreadcrumbs';
import SidebarContent from '../commons/SidebarContent';
import SortResults from '../commons/SortResults';
import CardProduct from '../commons/CardProduct';

const useStyles = makeStyles((theme) => ({
  header: {
    background: "rgb(26, 148, 255)"
  },
  header1: {
    width: "1270px",
    paddingLeft: "15px",
    paddingRight: "15px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  breadcrumbs: {
    background: "rgb(239, 239, 239)"
  },
  content: {
    background: "rgb(239, 239, 239)"
  },
  content1: {
    background: "rgb(255, 255, 255)",
    width: "1270px",
    paddingLeft: "15px",
    paddingRight: "15px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  footer: {
    background: "rgb(255, 255, 255)",
    marginTop: "16px"
  },
  footer1: {
    width: "1270px",
    paddingLeft: "15px",
    paddingRight: "15px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  contentSearch: {
    padding: "16px 0px 0px 16px"
  },
  sidebarContent: {
    background: "rgb(255, 255, 255)",
    width: "248px",
    borderRadius: "4px 0px 0px 4px",
    overflow: "hidden"
  }
}));

export default function HomePage(props) {
  const classes = useStyles();

  return (
    <Router>
      <Box className={classes.header}>
        <Box className={classes.header1}>
          <NavBar />
        </Box>
      </Box>
      <Box className={classes.breadcrumbs}>
        <SingleBreadcrumbs />
      </Box>
      <Box className={classes.content}>
        <Box
          display="flex"
          flexDirection="row"
          className={classes.content1}
        >
          <Box 
            display="flex"
            flexDirection="column"
            // className={classes.sidebarContent}
            flexGrow={20}
          >
            sidebar content
          </Box>
          <Box 
            display="flex"
            flexDirection="column"
            flexGrow={80}
          >
            <Box 
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              sort results
            </Box>
            <Box 
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              filter items
            </Box>
            <Box 
              display="flex"
              flexDirection="row"
              justifyContent="center"
            >
              <CardProduct />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={classes.footer}>
        <Box className={classes.footer1}>
          footer
        </Box>
      </Box>
    </Router>
  )
}
