import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ ...rest }) => {
  const { auth } = useSelector((state) => ({ ...state }));
  return auth && auth._id && auth.email ? (
    <Route {...rest} />
  ) : (
    <Redirect to='/' />
  );
};
