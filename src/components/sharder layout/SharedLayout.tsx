import React, { useState, Suspense, lazy } from "react";
import Header from "./Header";
import { Outlet } from "react-router";
import Footer from "./Footer";
import ShoppingCart from "../shopping cart/ShoppingCart";
import Login from "../Login";
import MobileMenu from "../MobileMenu";
import LoadingPage from "../../pages/LoadingPage";

const SharedLayout = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isLoginOpen, setLoginOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const Login = lazy(() => import("../Login"));
  const ShoppingCart = lazy(() => import("../shopping cart/ShoppingCart"));
  const MobileMenu = lazy(() => import("../MobileMenu"));

  return (
    <>
      <Header
        setOpen={setOpen}
        setLoginOpen={setLoginOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <Suspense>
        <ShoppingCart setOpen={setOpen} isOpen={isOpen} />
        <Login isLoginOpen={isLoginOpen} setLoginOpen={setLoginOpen} />
        <MobileMenu
          isMobileMenuOpen={isMobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      </Suspense>
      <Suspense fallback={<LoadingPage />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default SharedLayout;
