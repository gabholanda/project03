import React from 'react';
import { Route, Redirect } from 'react-router-dom';

//<ProtectedRoute user={this.state.loggedInUser} path='/projects/:id' component={ProjectDetails} />

const protectedRoute = ({ render: Render, user, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (user) {
          return <Render {...props} loggedInUser={user} />
        } else {
          return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }
      }
      }
    />
  )
}
export default protectedRoute;