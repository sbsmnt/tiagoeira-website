import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

const ExperienceImg = ({ filename, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              publicURL
              extension
              childImageSharp {
                fluid(maxWidth: 10) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

      if (!image) return null;
      return <img alt={alt} src={image.node.publicURL} />;
    }}
  />
);

ExperienceImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default ExperienceImg;
