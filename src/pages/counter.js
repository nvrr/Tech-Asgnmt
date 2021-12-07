import React, { Component } from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

 //hg''      HG""   
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }

    }
onIncrement = () => {
    this.setState({count:this.state.count + 3});
}
onDecrement = () => {
    this.setState({count: this.state.count-1});
}
    render() {
        return (
            <div >
             <h1 style={{justifyContent: 'center',alignItems:'center',display:'flex',width:'100%'}}>Counter</h1>
             <Card style={{width:'95%',margin:'auto'}}  title="" subTitle="">
            <div style={{ justifyContent: 'space-around',display:"flex",flexDirection:"row",alignItems:'center'}}>
            <Button style={{marginRight:8}} icon="pi pi-minus" className='p-button-rounded p-button-secondary' onClick={()=>this.onDecrement()} />
            <h1>{this.state.count}</h1>
             <Button style={{marginRight:68}} icon='pi pi-plus' className='p-button-rounded p-button-secondary'  onClick={()=>this.onIncrement()} iconPos="right" />
            </div>
            </Card>
            </div>
        );
    }
}


export default Counter;