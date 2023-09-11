// import * as React from 'react';
import './App.css';
import {
  QueryClient,
  QueryClientProvider,
  // useQuery,
} from 'react-query'
import Index from './component/index';

// const {useEffect, useState} = React;

const queryClient = new QueryClient();

const App = () => {
  return (
    // <QueryClientProvider client={queryClient}>
    // <AppComponent />
    // </QueryClientProvider>
    <QueryClientProvider client={queryClient}>
      <Index/>
    </QueryClientProvider>

    // <div className="App">
    // </div>
  );
}

// // const AppComponent = ():string|any => {
// const AppComponent = () => {
//   const { isLoading, isError, data} = useQuery({
//     queryKey: ['repoData'],
//     queryFn: () => 
//     fetch('https://api.github.com/repos/tannerlinsley/react-query').then(
//       (res) => res.json(),
//     ),
//   });

//   // if (isLoading) return 'Loading...';

//   // if (isError) return 'An error has occurred : ';

//   return (
//     <div>
//       <h1>{data.name}</h1>
//       <p>{data.description}</p>
//       <strong>👀 {data.subscribers_count}</strong>{' '}
//       <strong>✨ {data.stargazers_count}</strong>{' '}
//       <strong>🍴 {data.forks_count}</strong>
//     </div>
//   )
// }


export default App;
