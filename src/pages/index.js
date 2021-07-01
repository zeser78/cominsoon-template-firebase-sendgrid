import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import CountDownTimer from "../components/CountDownTimer"
import * as landingStyles from "../styles/landingStyles.module.css"
import PicsContainer from "../components/picsContainer"

const IndexPage = () => {
  const daysHoursMinSecs = { days: 3, hours: 0, minutes: 0, seconds: 10 }

  return (
    <Layout>
      <Seo title="Home" />
      <div className={landingStyles.container}>
        <div className={landingStyles.box}>
          <div className={landingStyles.box1}>
            <h1>Under Construction</h1>
            <h3>
              Our website is currently undergoing scheduled maintance. We should
              be back shortly. Thank you for your pacience.
            </h3>
          </div>
          <div className={landingStyles.formContainer}>
            <form className={landingStyles.formBox}>
              <div
                className={landingStyles.wrapInput100}
                style={{ marginBottom: `10px` }}
              >
                <input
                  className={`${landingStyles.inputStyle} ${landingStyles.placeholder0}`}
                  type="text"
                  data-validate="Name is required"
                  placeholder="Your Name"
                  name="name"
                />
                <span className={landingStyles.focusInput100}></span>
              </div>
              <div
                className={landingStyles.wrapInput100}
                style={{ marginBottom: `20px` }}
              >
                <input
                  className={`${landingStyles.inputStyle} ${landingStyles.placeholder0}`}
                  type="text"
                  data-validate="Email is required ex@abc.xyz"
                  placeholder="Email Address"
                  name="email"
                />
                <span className={landingStyles.focusInput100}></span>
              </div>
              <div>
                <button className={landingStyles.buttonSubscribe}>
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className={landingStyles.boxRight}>
          <PicsContainer />
        </div>
      </div>
    </Layout>
  )
}
export default IndexPage
