import React, { useState } from "react";
import logo from "../images/logo.png";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import userProfile from "../images/avatar.png";
import { motion } from "framer-motion";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../Firebase.Config";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../store/userSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  // console.log(user)
  const [isMenu, setIsMenu] = useState();

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  

  const login = async () => {
    if (!user) {
      const {
        user: { providerData },
      } = await signInWithPopup(auth, provider);
      // console.log(providerData);
      dispatch(userAction.setUser(providerData[0]));

      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };



  const logout = () => {
    setIsMenu(false);
    localStorage.clear();
    dispatch(userAction.setUser(null));
  };

  return (
    <header className="fixed z-50 w-screen p-4 px-6 md:p-6 md:px-16">
      {/* tablet and desktop */}
      <div className="hidden md:flex w-full h-full justify-between items-center">
        <Link to="/">
          <div className="flex items-center gap-2">
            <img src={logo} className="w-10 object-cover" alt="logo" />
            <p className="text-headingColor text-2xl font-bold">FoodieFeast</p>
          </div>
        </Link>

        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8 ml-auto"
          >
            <li className="text-xl text-textColor cursor-pointer hover:text-headingColor duration-75 ease-in-out">
              Home
            </li>
            <li className="text-xl text-textColor cursor-pointer hover:text-headingColor duration-75 ease-in-out">
              Menu
            </li>
            <li className="text-xl text-textColor cursor-pointer hover:text-headingColor duration-75 ease-in-out">
              About us
            </li>
            <li className="text-xl text-textColor cursor-pointer hover:text-headingColor duration-75 ease-in-out">
              Service
            </li>
          </motion.ul>
          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-2xl cursor-pointer text-textColor" />
            <div className="absolute -top-1 -right-2  w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs font-semibold text-white">2</p>
            </div>
          </div>

          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : userProfile}
              className="w-10 min-w-[40px] h-10 min-h-[40px] cursor-pointer rounded-full"
              alt="userprofile"
              onClick={login}
            />
            {isMenu && (
              <div className="w-40 shadow-xl rounded bg-gray-50 flex flex-col top-12 right-0 absolute">
                {user && user.email === "nirony894@gmail.com" && (
                  <Link to="/create-item">
                    <p
                      className="flex items-center px-3 py-2 gap-3 hover:bg-slate-100 text-textColor duration-100 ease-in-out cursor-pointer text-xl"
                      onClick={() => setIsMenu(false)}
                    >
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}

                <p
                  className="flex items-center m-2 py-1 gap-3 justify-center bg-gray-300 rounded-md shadow-md text-xl hover:bg-gray-200  text-textColor duration-100 ease-in-out cursor-pointer"
                  onClick={logout}
                >
                  Logout <MdLogout />
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="flex items-center justify-between md:hidden w-full h-full">
        <Link to="/">
          <div className="flex items-center gap-2">
            <img src={logo} className="w-10 object-cover" alt="logo" />
            <p className="text-headingColor text-2xl font-bold">FoodieFeast</p>
          </div>
        </Link>

        <div className="relative flex items-center justify-center">
          <MdShoppingBasket className="text-2xl cursor-pointer text-textColor" />
          <div className="absolute -top-1 -right-2  w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
            <p className="text-xs font-semibold text-white">2</p>
          </div>
        </div>

        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : userProfile}
            className="w-10 min-w-[40px] h-10 min-h-[40px] cursor-pointer rounded-full"
            alt="userprofile"
            onClick={login}
          />
          {isMenu && (
            <div className="w-44 shadow-xl rounded bg-gray-50 flex flex-col top-12 right-0  absolute">
              {user && user.email === "nirony894@gmail.com" && (
                <Link to="/create-item">
                  <p className="flex items-center px-4 py-2 text-xl hover:bg-slate-100 text-textColor duration-100 ease-in-out cursor-pointer">
                    New Item <MdAdd />
                  </p>
                </Link>
              )}

              <ul className="flex flex-col">
                <li className="text-xl text-textColor cursor-pointer hover:text-headingColor duration-75 ease-in-out px-4 py-2 hover:bg-slate-100">
                  Home
                </li>
                <li className="text-xl text-textColor cursor-pointer hover:text-headingColor duration-75 ease-in-out px-4 py-2 hover:bg-slate-100">
                  Menu
                </li>
                <li className="text-xl text-textColor cursor-pointer hover:text-headingColor duration-75 ease-in-out px-4 py-2 hover:bg-slate-100">
                  About us
                </li>
                <li className="text-xl text-textColor cursor-pointer hover:text-headingColor duration-75 ease-in-out px-4 py-2 hover:bg-slate-100">
                  Service
                </li>
              </ul>
              <p
                className="flex items-center m-2 py-2 justify-center bg-gray-300 rounded-md shadow-md text-xl hover:bg-gray-200 text-textColor duration-100 ease-in-out cursor-pointer"
                onClick={logout}
              >
                Logout <MdLogout />
              </p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
