
import './App.css';
import react, { Component } from 'react';
import axios from 'axios';
import Input from './input';
import Button from './button';
import Image from './image';
import Output from './output';
class App extends Component {
state = {
  num: "test",
  url: 'https://pokeres.bastionbot.org/images/pokemon/1.png',
  posts: [],
  name: []
}

handleChange = (event) => {
  console.log(event.target.value);
  this.setState({num: event.target.value});
}


 button_click = (value) => {
   console.log("The value is " + value);
  let url = 'https://pokeres.bastionbot.org/images/pokemon/' + value+'.png';
  this.setState({url: url});
 // alert(value);
 let url1 = 'https://pokeapi.co/api/v2/pokemon/' + value + '/';

 axios.get( url1)

 .then( response => {
     
   
      const updatedPosts = response.data.forms.map(post => {
        console.log("Posts34" + post.name);
       return {
           ...post,
           key: post.name
       }
   });
      this.setState({name: updatedPosts});
      this.setState({posts : []});
 } )
 .catch(error => {
      console.log(error);
   
 });
 
}

get_info = (value) => {
  console.log("The get_inf0 is getting called" + value);
  let url = 'https://pokeapi.co/api/v2/pokemon/' + value + '/';

  axios.get( url)
 
  .then( response => {
      
      // console.log("The response is " +response);
     //  console.log("Response 2 is " + response.data.base_experience);
       const updatedPosts = response.data.abilities.map(post => {
        // console.log("Posts" + post);
        return {
            ...post,
            key: post.name
        }
    });
       this.setState({posts: updatedPosts});
  } )
  .catch(error => {
       console.log(error);
    
  });

 
}

  render() {
    let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
 
        posts = this.state.posts.map(post => {
          return (
            <div style={{backgroundColor: '#1cbab0'}}>
           <Output ability={post.ability.name}></Output>
           
           </div>
          );
      });
    
      let name = this.state.name.map(name => {
        return(
        <div>
          <h1>{name.name.charAt(0).toUpperCase() + name.name.slice(1)}</h1>
         
        </div>
        )
      })


    return(
      <div className="App" style={{backgroundColor: '#1cbab0', position:"fixed", height:"100%" , width:"100%", overflow: "scroll"}}>
         <h4>Enter number</h4>
        <Input change={this.handleChange}></Input>
   
        <Button label="Get Pokemon" click={() => this.button_click(this.state.num)}></Button>
        {name}
        <Image source={this.state.url}></Image>
        <Button label="Get Info" click={() => this.get_info(this.state.num)}></Button>
        <br></br>
      <h3>Abilitys :  </h3>
      {posts}
     
    
       
    </div>
    )
  }
 
}

export default App;
