import axios from 'axios'





const Home = (props) => {

  
  return (
    <div>
      <h1>hello {props.name}</h1>
      <span>Nothing to see here just a span, {props.value}</span>
      <ul>
      {
        props.theRequest.map(item =>(
          
          
          <li key={item.id}>{item.name}</li>
        ))
      }
      </ul>


      
    
     
    </div>
  )
}



export async function getStaticProps(){
  const request  = await axios.get('https://jsonplaceholder.typicode.com/users')

  //console.log(request);
  return {
    props:{
      name: 'Hasan',
      value: 'just a boy here',
      theRequest: request.data


    },
    revalidate: 60            // incremental static regeneration
  }
}





export default Home