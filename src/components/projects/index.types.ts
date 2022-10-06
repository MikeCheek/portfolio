import {IGatsbyImageData} from 'gatsby-plugin-image'

export interface Edge {
  node: {name: string; id: string; childImageSharp: {gatsbyImageData: IGatsbyImageData}}
}

export interface Data {
  allFile?: {edges: Edge[]}
}
