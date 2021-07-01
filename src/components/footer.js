import React from "react"
import * as footerStyles from "../styles/footer.module.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className={footerStyles.container}>
          <small>
            Copyright {` `} © 2020 - {new Date().getFullYear()},{` `}
            Engagement Wish LLC. All Rights Reserved.
          </small>
          <small>
            © 2020 - {new Date().getFullYear()}, Built it by
            {` `}
            <a href="https://xpaso.com">Xpaso LLC</a>
          </small>
        </div>
      </footer>
    </>
  )
}

export default Footer
