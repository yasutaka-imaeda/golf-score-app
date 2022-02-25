import React from "react";
import styles from "./App.module.scss";
import { BrowserRouter } from "react-router-dom";
import Routess from "./Routes";
import Amplify from "aws-amplify";
// import { withAuthenticator } from "aws-amplify-react";
import {
  AmplifyAuthenticator,
  AmplifySignUp,
  AmplifySignOut,
} from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

const App: React.FC = () => {
  const [authState, setAuthState] = React.useState<any>();
  const [user, setUser] = React.useState<any>();

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState: any, authData: any) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);
  return authState === AuthState.SignedIn && user ? (
    <div className="App">
      <div>Hello, {user.username}</div>
      <div className={styles.root}>
        <div className={styles.component}>
          <BrowserRouter>
            <Routess />
          </BrowserRouter>
        </div>
      </div>
      <AmplifySignOut />
    </div>
  ) : (
    <AmplifyAuthenticator>
      <AmplifySignUp
        slot="sign-up"
        formFields={[
          { type: "username" },
          { type: "password" },
          { type: "email" },
        ]}
      />
    </AmplifyAuthenticator>
  );
};

export default App;
