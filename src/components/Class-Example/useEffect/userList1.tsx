import {useEffect,useState} from "react"

function UserList(){
    const [product, setProducts]=useState([])
    const [loader, setLoader]=useState("")
    const [error, setError]= useState(true)
    
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products").then((res)=> res.json()).then((data)=>setProducts(data)
               setLoader(false)
        ).catch(()=>{
            setError("Failed to load data")
            setLoader(false)
            
        })
        
        console.log(data)
    },[])
    
    return(
        <div>
        <h2>Loader and Error Handling</h2>
        
        {products.map(item)=>(
        <h3 key={item.id}>{item.title} </h3>
        
        )}
        
        </div>
        
        )
}

export default UserList