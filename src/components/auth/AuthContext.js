import React, { createContext, useState } from 'react';

import { auth, database, authUninvoked } from '../../helpers/Firebase';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [authError, setAuthError] = useState('');

  const signIn = (email, password) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        localStorage.setItem('user', JSON.stringify(user.user));
      })
      .then(() => {
        window.location.href = '/app';
      })
      .catch((e) => {
        console.log(e.message);
        setAuthError(e.message);
      });
  };

  const updateUser = (userObject, uid) => {
    const usersRef = database.ref('users');
    delete userObject.password;
    usersRef.child(uid).set({
      ...userObject,
      selfUID: uid,
      //hasCompletedProfile: false,
      //userType: 'customer',
      role: 'patient',
    });
  };

  const signUp = (email, password, userObject) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((data) => {
        const {
          user: { uid },
        } = data;
        updateUser(userObject, uid);

        signIn(email, password);
      })
      .catch((e) => {
        console.log(e.message);
        setAuthError(e.message);
      });
  };

  const logout = () => {
    auth
      .signOut()
      .then(() => {
        localStorage.removeItem('user');
      })
      .then(() => {
        window.location.href = '/';
      });
  };

  const recoverPassword = (email) => {
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setAuthError(
          'We sent you a password reset link. Please check your email.'
        );
      })
      .then(() => {
        setTimeout(() => {
          window.location.href = '/signin';
        }, 5000);
      })
      .catch(function (e) {
        console.log(e.message);
        setAuthError(e.message);
      });
  };

  const changePassword = (currentPassword, newPassword) => {
    auth.onAuthStateChanged(() => {
      const user = auth.currentUser;
      const credential = authUninvoked.EmailAuthProvider.credential(
        user.email,
        currentPassword
      );
      user
        .reauthenticateWithCredential(credential)
        .then(function () {
          user
            .updatePassword(newPassword)
            .then(function () {
              setAuthError(null);
            })
            .catch(function (error) {
              setAuthError(error.message);
            });
        })
        .catch(function (error) {
          setAuthError(error.message);
        });
    });
  };

  return (
    <AuthContext.Provider
      value={{
        authError,
        signIn,
        logout,
        recoverPassword,
        signUp,
        database,
        changePassword,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
