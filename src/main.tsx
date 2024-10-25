import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AuthProvider from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./chakraTheme";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <ChakraProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
                <AuthProvider>
                    <App />
                </AuthProvider>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </ChakraProvider>
    </BrowserRouter>
);
