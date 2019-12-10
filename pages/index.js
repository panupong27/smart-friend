import React, { Component } from 'react'
import Router from 'next/router'

class App extends Component{
    constructor(props){
        super(props)

        this.state = {
            redirect: false
        }
    }

    componentDidMount(){
        this.setState({redirect: true})
    }

    redirect(){
        clearInterval()

        if(this.state.redirect){
            Router.push('/home')
        }
    }

    render(){
        return(
            <div>
                {this.redirect()}
                
                <div className="box-image">
                    <img src="/logoApp.jpg" alt="logo-app"/>
                </div>

                <style jsx global>{`
                    html{
                        height: 100%;
                        position: relative;
                    }
                    body{
                        height: 100%;
                        overflow: hidden;
                    } 
                `}</style>
                <style jsx>{`
                    .box-image{
                        width: 100%;
                        margin: 0;
                        padding: 0;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 100vh;
                    }
                    img{
                        width: 350px;
                        height: 530px;
                        position: relative;
                        top: -20px;
                        animation: logoAnimation 1s;
                    }

                    @keyframes logoAnimation{
                        from{
                            opacity: 0;
                        } to{
                            opacity: 1;
                        }
                    }
                `}</style>
            </div>
        );
    }
}

export default App