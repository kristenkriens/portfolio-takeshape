import React from "react";
import PropTypes from "prop-types";

import Head from "./components/shared/head";
import Header from "./components/shared/header";
import Footer from "./components/shared/footer";

const Layout = (props) => {
  const { children, seo } = props;

  return (
    <>
      <Head seo={seo} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
