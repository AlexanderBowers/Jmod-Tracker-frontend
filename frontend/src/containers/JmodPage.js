import React, {Component} from 'react'
import Jmod from '../components/Jmod'

class JmodPage extends Component {

   state = {
       jmod: this.props.jmod,
       updates: ""
   }

    componentDidMount() {
        let token = localStorage.getItem("token")
        let feed = localStorage.getItem("feed")
        if (feed === null) {
            localStorage.setItem("feed", JSON.stringify({jagexFiller: {twitter: [], reddit: []}})) 
        }
         token ? 
       
        fetch(`http://localhost:3000/jmods`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(jmods => {this.setState({jmods})})
        .then(fetch(`http://localhost:3000/feed`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            },
            body: JSON.stringify({
                feed: feed
              })
        })
        .then(res => res.json()))
     : this.props.history.push("/") 
    }

    render() {
        return(
            <div>
                {this.props.jmod !== "" ?
                <Jmod jmod={this.props.jmod} /> : this.state.jmods ? this.state.jmods.map(jmod => {
                    return <React.Fragment> <button className="jmod" onClick={() => {this.props.activeMod(jmod)}}>{jmod.name}</button></React.Fragment>
                }) : null }
            </div>  
        )
    }
}

export default JmodPage