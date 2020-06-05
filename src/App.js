import React from 'react'
import StatelessFunction from './component/StatelessFunction'
import StateFullFunction from './component/StateFullFunction'
class App extends React.Component{
  render(){
    return(
      <div className="App">
        <StatelessFunction name='ilman' umur='26'>
          <p>Maju Terus pantang mundur</p>
        </StatelessFunction>
        <StateFullFunction pekerjaan='Programmer' olahraga='wingcun'/>
      </div>
    )
  }
}
export default App