import * as React from "react"
import PropTypes from "prop-types"

import SocialMedia from "./social-media"
import { Link } from "gatsby"

const Header = () => (
  <header className="grid grid-cols-5 gap-x-12 mx-8 py-4 mb-12 items-center">
    <nav className="col-start-2">
      <ul className="flex text-lg font-semibold">
        <li className="mr-8">
          <Link to="/#services">Services</Link> 
         </li>
         <li className="mr-8">
          <Link to="/#kontakt">Kontakt</Link> 
         </li>
      </ul>
    </nav>
    <SocialMedia/>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
