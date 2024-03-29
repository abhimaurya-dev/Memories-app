import React from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import useStyles from "./styles";
import { Grid, CircularProgress } from "@material-ui/core";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  return (
    <Fragment>
      {!posts.length ? (
        <CircularProgress />
      ) : (
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {posts.map((post) => (
            <Grid item xs={12} sm={6}>
              <Post key={post.id} setCurrentId={setCurrentId} post={post} />
            </Grid>
          ))}
        </Grid>
      )}
    </Fragment>
  );
};

export default Posts;
