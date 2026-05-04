import { useState } from 'react'

export default function App(){
    const [search, setSearch]=useState("")

    const items=["Apple", "Banana", "Cherry", "Date", "Elderberry"]
    const filteredItems=items.filter(
      items=>items.toLowerCase().includes(search.toLowerCase())
    )
  
    return(
      <div>
         <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Search...' />
         <ul>
          {filteredItems.map((items, index)=>(
            <li key={index}>{items}</li>
          ))}
         </ul>

      </div>
    )
}