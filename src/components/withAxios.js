import React, { useState, useEffect } from "react";
import Modal from "./UI/Modal/Modal";

const withAxios = (WrappedComponent, axios) => {
  return (props) => {
    const [error, setError] = useState(null);

    function hideModal() {
      setError(false);
    }

    const requestInterceptor = axios.interceptors.request.use((request) => {
      setError(false);
      return request;
    });
    const responseInterceptor = axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        setError(error);
        return Promise.reject(error);
      }
    );

    useEffect(() => {
      return () => {
        axios.interceptors.request.eject(requestInterceptor);
        axios.interceptors.response.eject(responseInterceptor);
      };
    }, [requestInterceptor, responseInterceptor]);

    return (
      <>
        <Modal show={error} hideCallback={hideModal}>
          {error ? error.message : "Unknown error"}
        </Modal>
        <WrappedComponent {...props} />
      </>
    );
  };
};

export default withAxios;
