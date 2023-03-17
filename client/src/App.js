
import "./App.css";
import Home from "./components/Home";
import ToastContextProvider from "./contexts/ToastContext";
import Toast from "./components/Toast";

function App() {
  return (
    <ToastContextProvider>
      
      <Home></Home>
      <Toast />
    </ToastContextProvider>
  );
}

export default App;
