import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const protectedAuthRoute = ({ render: Render, user, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (!user) {
          return <Render {...props} loggedInUser={user} />
        } else {
          return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        }
      }
      }
    />
  )
}
export default protectedAuthRoute;