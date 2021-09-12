import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  sidebarContent: {
    background: "rgb(255, 255, 255)",
    width: "248px",
    borderRadius: "4px 0px 0px 4px",
    overflow: "hidden"
  }
}));

export default function SidebarContent() {
  const classes = useStyles();

  return (
    <Box className={classes.sidebarContent}>
      sidebar content
    </Box>
  );
}
