import React from "react";
import UserItem from "./UserItem";
import Grid from "@material-ui/core/Grid";
import Spiner from "../layout/Spiner";
import PropTypes from "prop-types";

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spiner />;
  } else {
    return (
      <Grid container spacing={1}>
        {users.map((user) => (
          <Grid key={user.id} item xs={4}>
            <UserItem key={user.id} user={user} />
          </Grid>
        ))}
      </Grid>
    );
  }
};

Users.prototype = {
  users: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Users;
