import Nav from './nav'
import Head from 'next/head'

const Layout = props=>{
    return(
        <div>
            <Head>
                <title>Smart Friend</title>
                <link rel="icon" href="/icon.ico" />
                <meta charSet="utf-8" />
            </Head>

            <Nav />
            {props.children}
        </div>
    );
}

export default Layout