class App extends React.Component{

state = {
 "btn1" : 15, "btn2":44 , "btn3":-21, "btn4":-8
,"bar1" : 40 , "bar2":13 , "bar3":63,"limit" : 190
}

handleClick = (e)=> {
   let progressVal = document.getElementById('mySelect').value;
 let current =  document.getElementById(progressVal).innerText;
 let updated = Number(current) + Number(e.target.innerText);
// console.log(updated);


if (updated > 190 ){
    e.preventDefault;
    this.setState({
        [progressVal] : 190
     }) 
}
else if (updated < 0 ){
    e.preventDefault;
    this.setState({
        [progressVal] : 0
     })  
}

else{
    
    e.preventDefault;
    this.setState({
       [progressVal] : updated
    })
      
}

if( updated > 80  ){
    document.getElementById(progressVal).classList.add("bg-danger");
  }
  else{
    document.getElementById(progressVal).classList.remove("bg-danger");
  }
}


    render(){
        let styles = {
            style1:{width : this.state.bar1 + '%'},
            style2:{width : this.state.bar2 + '%'},
            style3:{width : this.state.bar3 + '%'},
          
        }
        
        return (  <div>
            <h1>Progree Bar</h1>
     <div className="container">
    
    <div className="progress">
            <div  id="bar1" style={styles.style1} className="progress-bar bg-info"  role="progressbar"   aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">{this.state.bar1} </div>
          </div>

          <div className="progress">
            <div  id="bar2" style={styles.style2} className="progress-bar bg-info"  role="progressbar"   aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">{this.state.bar2} </div>
          </div>

          <div className="progress" >
                <div id="bar3" style={styles.style3} className="progress-bar bg-info" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"> {this.state.bar3} </div>
              </div>
            

   <section className="buttons">
       <ul>
           <li >
               <select id="mySelect">
                   <option value="bar1">Progress1</option>
                   <option value="bar2">Progress2</option>
                   <option value="bar3">Progress3</option>
               </select>
           </li>
           <li >
               <button id="btn1" className="btn btn-info" onClick={this.handleClick}>{this.state.btn1}</button></li>
           <li ><button id="btn2" className="btn btn-info" onClick={this.handleClick}>{this.state.btn2} </button></li>
           <li ><button id="btn3" className="btn btn-info" onClick={this.handleClick}>{this.state.btn3} </button></li>
           <li ><button id="btn4" className="btn btn-info" onClick={this.handleClick}>{this.state.btn4} </button></li>
       </ul>
   </section>

    </div> </div>
            
            )
    }
}
ReactDOM.render( <App   /> , document.getElementById("root"));















