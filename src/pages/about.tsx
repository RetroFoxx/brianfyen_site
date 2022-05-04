import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'

const AboutPage = ({ data }:any) => {
    return (
        <main style={{ height: '100%' }}>
            <Layout>
                <MDXRenderer>
                    {data.mdx.body}
                </MDXRenderer>
            </Layout>
        </main>
    )
}

export const query = graphql`
  query {
    mdx(slug: {eq: "about"}) {
      body
    }
}`

export default AboutPage