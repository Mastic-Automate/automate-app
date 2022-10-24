import {
    QueryClientProvider,
    QueryClient
} from 'react-query';

const queryClient = new QueryClient()

export function ReactQueryProvider({children}){
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}