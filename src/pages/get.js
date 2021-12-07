import React, { Component } from 'react';
import axios from 'axios';
import { Card } from 'primereact/card';


 //hg''      HG""
class Get extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [],
        }
    }

    componentDidMount() {
         this.getData();
    }

    getData=()=>  { 
        axios.get('https://gorest.co.in/public/v1/todos')
         .then((res) => {
             console.log(res.data.data);
             this.setState({data:res.data.data})
         } );
    }
    
    render() {
        
        return (
            
            <div style={{marginTop:12,padding:12}}>
            <div style={{justifyContent:'center',alignItems:'center'}} className="p-grid p-justify-between"> 
                 {this.state.data.map((dat,index) =>{ 
                     return(
                     
                     <div key={index} className="p-col-4">
                     <Card style={{height:'300px'}}>
                     <div className="box">
                     ID: {dat.id}
                     <br/>
                     UserID: {dat.user_id}
                     <br/>
                     Title: {dat.title}
                     <br/>
                     Due_on: {dat.due_on}
                     <br/>
                     Status: {dat.status}
                     </div></Card>
                     </div>
                    
                  ) } )}</div>
                 
             
               
            </div>
        )
    }
}



export default Get;