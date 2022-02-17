/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import Header from "./header"


const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <div className="grid grid-cols-5 gap-x-12 mx-8">
          {children}
      </div>
      <footer className="mx-8">
        © Krutklip {new Date().getFullYear()}
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
