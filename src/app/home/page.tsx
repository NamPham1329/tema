import HomePage from "@/containers/HomePage"
import Layout from "@/containers/Layout"
import React from "react"
import { Fragment } from "react"

const Home = () => {
    return (
        <Fragment>
            <Layout>
                <HomePage />
            </Layout>
        </Fragment>
        
    )
}
export default Home
