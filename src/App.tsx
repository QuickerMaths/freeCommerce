import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useCheckUserAuthQuery } from "./features/api/apiUploadSlice/athorizationApiSlice";
import { lazy, useEffect, useState } from "react";
import { useAppDispatch } from "./hooks/reduxHooks";
import { getAuth } from "./features/authSlice/authSlice";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import SharedLayout from "./components/sharder layout/SharedLayout";
import Error from "./utilities/Error";
import Home from "./pages/Home";
import usePrerenderImg from "./hooks/usePrerenderImg";

function App() {
  const [prerender, setPrerender] = useState<boolean>(false);

  useEffect(() => {
    setPrerender(!prerender);
  }, []);

  usePrerenderImg(prerender);

  const RequireAuth = lazy(() => import("./components/RequireAuth"));
  const Shop = lazy(() => import("./pages/Shop"));
  const Cancel = lazy(() => import("./pages/Cancel"));
  const Success = lazy(() => import("./pages/Success"));
  const ProductDetail = lazy(() => import("./components/ProductDetail"));
  const RegisterForm = lazy(() => import("./pages/RegisterForm"));
  const ClientPanel = lazy(() => import("./pages/ClientPanel"));
  const ClientOrderDetails = lazy(
    () => import("./components/client-panel/ClientOrderDetails")
  );
  const SendResetPassword = lazy(() => import("./pages/SendResetPassword"));
  const RegistrationSuccess = lazy(() => import("./pages/RegistrationSuccess"));
  const RegisterEmialConfirmation = lazy(
    () => import("./pages/RegisterEmialConfirmation")
  );
  const ResetPassword = lazy(() => import("./pages/ResetPassword"));

  //Auth check

  const { data, isSuccess } = useCheckUserAuthQuery("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isSuccess) {
      dispatch(getAuth(data));
    }
  }, [data]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path=":productId" element={<ProductDetail />} />
            <Route path="shop">
              <Route index element={<Shop />} />
              <Route path=":productId" element={<ProductDetail />} />
            </Route>
            <Route path="register">
              <Route index element={<RegisterForm />} />
              <Route path="success" element={<RegistrationSuccess />} />
              <Route
                path="email-confirmation"
                element={<RegisterEmialConfirmation />}
              />
            </Route>

            <Route path="send-password-reset" element={<SendResetPassword />} />
            <Route path="password-reset" element={<ResetPassword />} />

            <Route element={<RequireAuth />}>
              <Route path="panel">
                <Route index element={<ClientPanel />} />
                <Route path="products/:productId" element={<ProductDetail />} />
                <Route
                  path="orders/:orderId"
                  element={<ClientOrderDetails />}
                />
              </Route>
            </Route>
            <Route path="cancel" element={<Cancel />} />
            <Route path="success" element={<Success />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
