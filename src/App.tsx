import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useCheckUserAuthQuery } from "./features/api/apiUploadSlice/athorizationApiSlice";
import { lazy, useEffect } from "react";
import { useAppDispatch } from "./hooks/reduxHooks";
import { getAuth } from "./features/authSlice/authSlice";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import SharedLayout from "./components/sharder layout/SharedLayout";
import Error from "./utilities/Error";
import LoadingPage from "./pages/LoadingPage";

function App() {
  const RequireAuth = lazy(() => import("./components/RequireAuth"));
  const Shop = lazy(() => import("./pages/Shop"));
  const About = lazy(() => import("./pages/About"));
  const Cancel = lazy(() => import("./pages/Cancel"));
  const Success = lazy(() => import("./pages/Success"));
  const Home = lazy(() => import("./pages/Home"));
  const DeliveryFAQ = lazy(() => import("./pages/DeliveryFAQ"));
  const ReturnsFAQ = lazy(() => import("./pages/ReturnsFAQ"));
  const SizeGuide = lazy(() => import("./pages/SizeGuide"));
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
  const Contact = lazy(() => import("./components/contact/Contact"));
  const ResetPassword = lazy(() => import("./pages/ResetPassword"));

  //Auth check

  const { data, isSuccess, isLoading } = useCheckUserAuthQuery("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isSuccess) {
      dispatch(getAuth(data));
    }
  }, [data]);

  if (isLoading) {
    return <LoadingPage />;
  }

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
            <Route path="about" element={<About />} />
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
            <Route path="faq">
              <Route path="delivery" element={<DeliveryFAQ />} />
              <Route path="returns" element={<ReturnsFAQ />} />
              <Route path="size-guide" element={<SizeGuide />} />
              <Route path="contact" element={<Contact />} />
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
