import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Routes from "./routes";
import CartProvider from "./contexts/cartContext";
import AuthProvider from "./contexts/authContext";

export default function App() {
  return (
    <>
      <CartProvider>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </CartProvider>
    </>
  );
}
