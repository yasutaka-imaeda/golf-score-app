import React, { useState, useEffect } from "react";
import styles from "./App.module.scss";
import { BrowserRouter } from "react-router-dom";
import Routess from "./Routes";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignUp } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import awsconfig from "./aws-exports";
import { useAppDispatch } from "./app/hooks";
import { registerUser } from "./app/userSlice";
import { getCourse, listUsers, scoreByUser } from "./graphql/queries";
import { createUser } from "./graphql/mutations";
import { setRegisterScoreList } from "./app/scoreSlice";
import { setCourseNameList } from "./app/courseSlice";

Amplify.configure(awsconfig);

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const [authState, setAuthState] = useState<any>();
  const [user, setUser] = useState<any>();
  const [userId, setUserId] = useState<any>();
  const [checkUser, setCheckUser] = useState<any>(false);
  const searchUser = async (username: any) => {
    const filter = {
      golferName: {
        eq: username,
      },
    };
    const userListGQL: any = await API.graphql(
      graphqlOperation(listUsers, { filter: filter })
    );
    const userList = userListGQL.data.listUsers.items;
    if (userList.length === 0) {
      setCheckUser(true);
    } else {
      setCheckUser(false);
      setUserId(userList[0].id);
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
      dispatch(registerUser({ user: { id: "", userName: userName } }));
      searchUser(user.username);
      if (checkUser) {
        API.graphql(
          graphqlOperation(createUser, { input: { golferName: user.username } })
        );
      } else {
        dispatch(registerUser({ user: { id: userId, userName: userName } }));
        const scoreList: any = API.graphql(
          graphqlOperation(scoreByUser, {
            userId: userId,
            sortDirection: "DESC",
          })
        );
        scoreList.then((res: any) => {
          dispatch(setRegisterScoreList(res.data.scoreByUser.items));
          res.data.scoreByUser.items.map((item: any) => {
            const course: any = API.graphql(
              graphqlOperation(getCourse, {
                id: item.courseScoreId,
              })
            );
            course.then((response: any) => {
              dispatch(setCourseNameList(response.data.getCourse.courseName));
            });
          });
        });
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
