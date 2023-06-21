import react,{useState} from 'react';
import './App.css';

function App() {
  const [value,setValue]=useState("")
  const [results,setReults] = useState([])
  // y2Lk23ngLGXlaRzRRtBGoPBC3g3K0Wv8U48UkCbPouE
  const fetchImages = ()=>{
    fetch(`https://api.unsplash.com/search/photos/?client_id=y2Lk23ngLGXlaRzRRtBGoPBC3g3K0Wv8U48UkCbPouE&query=${value}&orientation=squarish&per_page=20`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      setReults(data.results)
    })
  }
  return (
    <div className="App">
      <div className='mydiv'>
        
        <span style={{color:'purple'}}>Search Image:</span>
        <input 
        style={{width:"60%"}}
        type="text" 
        value={value} 
        onChange={(e)=>setValue(e.target.value)} />
        <button onClick={()=>fetchImages()}>Search</button>
        

      </div>
      <div className='gallery'>
          {
            results.map((item)=>{
              return <img className='item' key={item.id} src={item.urls.regular} />
            })
          }
        </div>
      
    </div>
  );
}

export default App;
