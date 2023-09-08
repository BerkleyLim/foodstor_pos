import React from 'react'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from 'react-query'

// const queryClient = new QueryClient();

const Index = ():string|any  => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['board'],
    queryFn: () =>
      // fetch('https://api.github.com/repos/tannerlinsley/react-query').then(
      fetch('http://localhost:8080/api/board/').then(
        (res) => res.json(),
      ),
  })

  if (isLoading) return 'Loading...';

  if (isError) return 'An error has occurred : ';

  console.log(data)
  return (
    // <QueryClientProvider client={queryClient}>
    //   <div>shoifeijkl</div>
    // </QueryClientProvider>
      <div>
        {data.map((board:any, index:number) =>
          <div key={index}>
            {board?.bno}
          </div>
        )}
        dsjfoiwefjsdfjsdjfdsjkfweoifjdisjfkljkl
      </div>
  )
}

export default Index