import React, { useState, useEffect } from "react";
import styles from "./App.module.scss";
import { BrowserRouter } from "react-router-dom";
import Routess from "./Routes";
import Amplify, { API, graphqlOperation } from "aws-amplify";
// import { withAuthenticator } from "aws-amplify-react";
import { AmplifyAuthenticator, AmplifySignUp } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import awsconfig from "./aws-exports";
import { useAppDispatch } from "./app/hooks";
import { registerUser } from "./app/userSlice";
import { listUsers } from "./graphql/queries";
import { createUser } from "./graphql/mutations";

Amplify.configure(awsconfig);

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const [authState, setAuthState] = useState<any>();
  const [user, setUser] = useState<any>();
  const [checkUser, setCheckUser] = useState<any>(false);
  const searchUser = (username: any) => {
    const filter = {
      golferName: {
        eq: username,
      },
    };
    const userListGQL: any = API.graphql(
      graphqlOperation(listUsers, { filter: filter })
    );
    const userList = userListGQL.data.listUsers.items;
    if (userList.length === 0) {
      setCheckUser(true);
    } else {
      setCheckUser(false);
    }
  };

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState: any, authData: any) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  const registerUserName = (userName: any) => {
    window.setTimeout(() => {
      dispatch(registerUser({ user: { userName: userName } }));
      searchUser(user.username);
      if (checkUser) {
        API.graphql(
          graphqlOperation(createUser, { input: { golferName: user.username } })
        );
      }
    });
  };

  return authState === AuthState.SignedIn && user ? (
    <div className="App">
      {registerUserName(user.username)}
      <div className={styles.root}>
        <div className={styles.component}>
          <BrowserRouter>
            <Routess />
          </BrowserRouter>
        </div>
      </div>
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
