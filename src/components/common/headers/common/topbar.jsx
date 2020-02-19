import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withTranslate } from "react-redux-multilingual";
import { getCurrentUser } from "../../../../services/authService";

export default withTranslate(({ translate }) => {
  const [isRender, setIsRender] = useState(false);
  const myAccount = () => {
    const user = getCurrentUser();
    return (
      <>
        {user ? `Hello! ${user.firstName}` : translate("my_account")}
        {renderList(user)}
      </>
    );
  };

  const renderList = user => {
    return (
      <ul className="onhover-show-div">
        {user ? (
          <li
            onClick={() => {
              if (user) {
                localStorage.clear();
                setIsRender(!isRender);
              }
            }}
          >
            {translate("logout")}
          </li>
        ) : (
          <>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/pages/login`} data-lng="en">
                Login
              </Link>
            </li>
            <li>
              <Link
                to={`${process.env.PUBLIC_URL}/pages/register`}
                data-lng="en"
              >
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    );
  };

  return (
    <div className="top-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="header-contact">
              <ul>
                <li>{translate("topbar_title", { theme_name: " " })}</li>
                <li>
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  {translate("call_us")}: 9166019668{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 text-right">
            <ul className="header-dropdown">
              <li className="mobile-wishlist compare-mobile">
                <Link to={`${process.env.PUBLIC_URL}/compare`}>
                  <i className="fa fa-random" aria-hidden="true"></i>
                  {translate("compare")}
                </Link>
              </li>
              <li className="mobile-wishlist">
                <Link to={`${process.env.PUBLIC_URL}/wishlist`}>
                  <i className="fa fa-heart" aria-hidden="true"></i>
                  {translate("wishlist")}
                </Link>
              </li>
              <li className="onhover-dropdown mobile-account">
                <i className="fa fa-user" aria-hidden="true"></i>
                {myAccount()}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
});
