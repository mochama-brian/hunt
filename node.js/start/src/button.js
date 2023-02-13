import button from './button';
function button () { 
  
  return (
  
    <div className="App">
      
          <button onClick={Increase}> Increase</button>
          <button onClick={Decrease}> Decrease</button>   
          <button onClick={Restart}> Restart</button>  
    </div>
  );
}

export default button;
