import { Route, Switch } from "react-router-dom";

import WelcomePage from "./pages/Welcome";
import PrescriptionsPage from "./pages/Prescriptions";
import AdherancePage from "./pages/Adherance";
import MySchedulePage from "./pages/Schedule";
import Layout from "./components/layout/Layout";
import LoginPage from "./pages/authorization/Login";
import SignUp from "./pages/authorization/Signup";
import ForgotPasswordPage from "./pages/authorization/Forgot";
import NewPasswordPage from "./pages/authorization/NewPassword";
import NewDrugForm from "./components/drugs/NewDrugForm";
import ProfilePage from "./pages/profile";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <WelcomePage />
        </Route>
        <Route path="/schedule">
          <MySchedulePage />
        </Route>
        <Route path="/prescriptions">
          <PrescriptionsPage />
        </Route>
        <Route path="/adherance">
          <AdherancePage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/forgot">
          <ForgotPasswordPage />
        </Route>
        <Route path="/newPassword">
          <NewPasswordPage />
        </Route>
        <Route path="/addDrug">
          <NewDrugForm />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
