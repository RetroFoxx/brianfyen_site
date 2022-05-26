import * as React from 'react'
import { graphql } from 'gatsby'
import '../styles/index.css'
import Layout from '../components/layout'


const IndexPage = () => {
    return (
        <main style={{ height: '100%' }}>
            <Layout>
              <h1 className="text-intro">Hi I'm Brian!</h1>
              <span className="text-sub">Welcome to my site</span>
            </Layout>
        </main>
    )
}

export default IndexPage