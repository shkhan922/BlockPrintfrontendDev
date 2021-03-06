import React, { Component } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputField from "../common/inputField";
import { loginUser } from "../../services/userService";
import { getCurrentUser } from "../../services/authService";

import Breadcrumb from "../common/breadcrumb";

export default () => {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required("*required"),
    password: Yup.string().required("*required")
  });

  const initialValues = {
    email: "",
    password: ""
  };

  const handleSubmit = async values => {
    try {
      localStorage.setItem("email", values.email);

      const { data } = await loginUser(values.email, values.password);

      localStorage.setItem("token", data);
      const user = getCurrentUser(data);
      localStorage.setItem("firstName", user.firstName);
      localStorage.setItem("lastName", user.lastName);
      localStorage.setItem("_id", user._id);
      window.location.href = "/";
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div>
      <Breadcrumb title={"Login"} />

      {/*Login section*/}
      <section className="login-page section-b-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h3>Login</h3>
              <div className="theme-card">
                <div className="theme-form">
                  <Formik
                    initialValues={initialValues}
                    validationSchema={schema}
                    onSubmit={handleSubmit}
                  >
                    {formikBag => (
                      <Form>
                        <div className="form-row">
                          <InputField
                            id="email"
                            label="Email"
                            name="email"
                            type="email"
                          />
                          <InputField
                            id="password"
                            label="Password"
                            name="password"
                            type="password"
                          />
                        </div>
                        <button
                          type="submit"
                          className="btn btn-solid"
                          disabled={!formikBag.dirty || formikBag.isSubmitting}
                        >
                          Login
                        </button>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
            <div className="col-lg-6 right-login">
              <h3>New Customer</h3>
              <div className="theme-card authentication-right">
                <h6 className="title-font">Create A Account</h6>
                <p>
                  Sign up for a free account at our store. Registration is quick
                  and easy. It allows you to be able to order from our shop. To
                  start shopping click register.
                </p>
                <a href="#" className="btn btn-solid">
                  Create an Account
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
