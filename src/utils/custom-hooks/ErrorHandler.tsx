import * as React from "react";

const userErrorHandler = (initialState: string | null) => {
  const [error, setError] = React.useState(initialState);
  const showError = (errorMessage: string | null) => {
    setError(errorMessage);
    window.setTimeout(() => {
      setError(null);
    }, 5000);
  };
  return { error, showError };
};

const { error, showError } = useErrorHandler(null);

export default userErrorHandler;