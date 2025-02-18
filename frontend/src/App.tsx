import { AuthProvider } from "./context/AuthContext";
import RoutesComponent from "./routes";

function App() {
  return (
    <AuthProvider>
      <RoutesComponent />
    </AuthProvider>
  );
}

export default App;
