import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Reports from "./Pages/Reports";
import Certificates from "./Pages/Certificates";
import Application from "./features/Applications/Application";
import Certificate from "./features/Certificates/Certificate";
import Deal from "./features/Deals/Deal";
import Post from "./features/Posts/Post";
import Report from "./features/Reports/Report";
import Review from "./features/Reviews/Review";
import User from "./features/Users/User";
import Worker from "./features/Workers/Worker";
import AppLayout from "./ui/AppLayout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
function App() {
  return <div>app</div>;
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />}>
              <Route index element={<Navigate replace to="applications" />} />
              <Route path="applications" element={<Application />} />
              <Route path="deals" element={<Deal />} />
              <Route path="posts" element={<Post />} />
              <Route path="reports" element={<Report />} />
              <Route path="reviews" element={<Review />} />
              <Route path="certificates" element={<Certificate />} />
              <Route path="users" element={<User />} />
              <Route path="workers" element={<Worker />} />
            </Route>
            <Route path="reports" element={<Reports />} />
            <Route path="certificates" element={<Certificates />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
