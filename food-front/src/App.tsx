import './App.css';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import Index from './component/index';
import { RecoilRoot } from 'recoil';


const queryClient = new QueryClient();

const App = () => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Index />
      </QueryClientProvider>
    </RecoilRoot>
  );
}


export default App;
