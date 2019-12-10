import React, { Component } from 'react'
import Layout from '../components/layout'
import Head from 'next/head'

export default class Account extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Layout>
                <style jsx global>{`body{margin: 0; padding: 0;}`}</style>

                <h2>Account page work.</h2>
            </Layout>
        )
    }
}