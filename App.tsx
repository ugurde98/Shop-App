import AppNavigator from "./src/Navigation/AppNavigator/AppNavigator";
import { useAuth0, Auth0Provider } from "react-native-auth0";

export default function App() {
  return (
    <Auth0Provider
      domain={"dev-r71rmuv7r1vo37d6.us.auth0.com"}
      clientId={"w0cZwupJdoCieph4jZlm5WSDxDNII9Gr"}
    >
      <AppNavigator />
    </Auth0Provider>
  );
}
