import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const PicsContainer = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "testimonial" } }) {
        edges {
          node {
            name
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div className="parent">
      {data.allFile.edges.map((item, index) => {
        return (
          <div key={index} className={`box box-${index}`}>
            <Img fluid={item.node.childImageSharp.fluid} alt={item.node.name} />
          </div>
        )
      })}
    </div>
  )
}

export default PicsContainer
