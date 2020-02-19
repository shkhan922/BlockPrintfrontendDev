import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Breadcrumb from "../common/breadcrumb";
import InputField from "../common/inputField";
import { registerUser } from "../../services/userService";

export default () => {
  const schema = Yup.object().shape({
    firstName: Yup.string().required("*required"),
    lastName: Yup.string().required("*required"),
    email: Yup.string()
      .email()
      .required("*required"),
    password: Yup.string()
      .min(5)
      .max(100)
      .required("*required")
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };

  const handleSubmit = async values => {
    try {
      localStorage.setItem("firstName", values.firstName);
      localStorage.setItem("lastName", values.lastName);
      localStorage.setItem("email", values.email);

      const { data, headers } = await registerUser(
        values.firstName,
        values.lastName,
        values.email,
        values.password
      );

      localStorage.setItem("_id", data._id);
      localStorage.setItem("token", headers["x-auth-token"]);
      window.location.href = "/";
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div>
      <Breadcrumb title={"create account"} />

      {/*Regsiter section*/}
      <section className="register-page section-b-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>create account</h3>
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
                            id="fname"
                            label="First Name"
                            name="firstName"
                            type="text"
                          />
                          <InputField
                            id="lname"
                            label="Last Name"
                            name="lastName"
                            type="text"
                          />
                        </div>
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
                          create Account
                        </button>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
