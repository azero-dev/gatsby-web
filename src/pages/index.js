import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { GatsbyImage } from "gatsby-plugin-image"


export default function Home( datas ) {

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX Designer & web developer based in London</p>
          <Link className={styles.btn} to="/projects">
            My portfolio Projects
          </Link>
        </div>
        <GatsbyImage image={datas.data.file.childImageSharp.gatsbyImageData} alt="Banner" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      id
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
