import { gql, useQuery } from "@apollo/client" //[gql]- permite sintaxe highlight , [useQuery]- Function rocks React
import { useEffect } from "react"
//import { client } from "./lib/apollo"-- importa o cliente no main AppoloProvider

const GET_LESSONS_QUERY = gql` 
   query {
    lessons {
      id
      title   
    }
   }
`  
interface Lesson {
  id: string;
  title: string;
}

function App() {
  // faço a requisição de uma query da API-CMS-Graphcms - modo usando userQuery React.
  const {data}= useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY) // para usar [useQuery]- deve add AppoloProvider no main
 // console.log(data);

  // faço a requisição de uma query da API-CMS-Graphcms - modo padrão usando cliente apoolo
 /* useEffect(()=>{
     client.query({
        query:GET_LESSONS_QUERY,
      }).then(response =>{
        console.log(response.data)
      })
  },[]) */
 

  return (
   
   <ul>
     {data?.lessons.map(lesson => {
      return <li key={lesson.id}>{lesson.title}</li>
     })}
   </ul>

  )
}

export default App
