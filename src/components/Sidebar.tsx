import { gql, useQuery } from "@apollo/client"; //[gql]- permite sintaxe highlight , [useQuery]- Function rocks React

import { Lesson } from "./Lesson";

// MyQuery gerada no GraphCSM https://app.graphcms.com/ caminho projeto IgnetLab > API Playground
const GET_LESSONS_QUERY = gql` 
   query  {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
        id
        lessonType
        availableAt
        title
        slug
  }
}
`
// Typagem de retorno da Query GET_LESSONS_QUERY
interface GetLessonQueryResponse {
   lessons: {
       id: string
       title: string
       slug: string
       availableAt: string
       lessonType:'live' |'class'
   }[]  
}

export function Sidebar(){
    // faço a requisição de uma query da API-CMS-Graphcms - modo usando userQuery React.
    const { data } = useQuery<GetLessonQueryResponse>(GET_LESSONS_QUERY) //para usar [useQuery]- deve add <ApolloProvider client={client}> 
                                                                         // nota foi ajustado ApolloProvider posteriormente no App.tsx
    //testar retorno Query                                               // [data] - recebe typagem (GetLessonQueryResponse)
    //console.log(data);
    
    return (
        <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
                Cronograma de aulas
            </span>

            <div className="flex flex-col gap-8">
               {data?.lessons.map(lesson =>{
                return(
                    <Lesson
                        key={lesson.id}
                        title={lesson.title}
                        slug={lesson.slug}
                        availableAt={new Date(lesson.availableAt)} 
                        type={lesson.lessonType}
                    /> 
                   )
               })}         
            </div>

        </aside>
    )
}