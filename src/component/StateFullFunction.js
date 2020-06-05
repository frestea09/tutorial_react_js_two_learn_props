import React from 'react'


class StateFullFunction extends React.Component{
    render(){
        return(
            <div>
                <h3>Olahraga : {this.props.olahraga}</h3>
                <h3>Pekejraan : {this.props.pekerjaan}</h3>
            </div>
        )
    }
}
export default StateFullFunction