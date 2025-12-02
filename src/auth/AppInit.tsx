import axios from "axios";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { logout, setUserData } from "../redux/slices/authSlice";
import { UserApi } from "../api/AuthApi";

const AppInit = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = Cookies.get("user_token");

    if (!token) return;

    if (token) {
      axios
        .get(UserApi, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => dispatch(setUserData(res.data.user)))
        .catch(() => dispatch(logout()));
    }
  }, []);

  return null;
};

export default AppInit;
