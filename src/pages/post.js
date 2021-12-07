import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import axios from 'axios';
import {InputTextarea} from 'primereact/inputtextarea'

 //hg''      HG""
class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '' ,
            name: '' ,
            message: '' ,
            errMsg: '',
        }

    }

    postData = () => {
        let err = '';
        if(!this.state.name){
            err += ' Name,';
        }
        if(!this.state.email){
            err += ' Email,'
        }
        if(!this.state.message){
            err += ' Message,'
        }
        if(err) {
            err = err.substr(0,err.length-1) + ' seems to be missing!';
            this.setState({errMsg:err});
            return ;
        }
        let inpobj = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }
        axios({
            method:'POST',
            url:'https://admin.srkprojects.com/web/api/client/v1/contact-us/',
            data: inpobj,
            config:{ headers: {'Content-Type': "application/json"}}
        }).then ((res)=>{
            console.log(res.data);
        })

        .catch((err)=>{console.log(err)})
        .finally(()=>{})
    }  

    render() {
        return (
            <div style={{backgroundColor:'#202A33',
                display:'flex',flexDirection:'column',
                margin: '0 auto',
                position:'fixed',width:'100%',
                height:'100%',top:0,bottom:0}}>
            <div style={{margin:'auto',
                       top:'10%',width:'80%',
                       display:'flex',flexDirection:'column',
                       justifyContent:'center',alignItems:'center',}}>
            <p style={{color:'red'}}>{this.state.errMsg}</p>
            <InputText placeholder="Enter Name" value={this.state.name} 
                onChange = {(e)=>{this.setState({name:e.target.value})}}/><br/>
            <InputText placeholder="Enter Email" value={this.state.email} 
                onChange = {(e)=>{this.setState({email:e.target.value})}}/>
            <br/>
            <InputTextarea style={{width:'50%'}} placeholder="Enter Message" rows={5} columns={5} value={this.state.message}
                onChange = {(e)=>{this.setState({message:e.target.value})}}/><br/>
   <Button  style={{backgroundColor:'#E25561',color:'#fff',borderColor:'#E25561'}} label="Post" onClick={()=>{this.postData()}} />
   </div>
   </div>
        );
    }
}

export default Post;