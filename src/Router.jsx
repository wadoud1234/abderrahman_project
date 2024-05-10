import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Reports from "./Pages/Reports";
import Certificates from "./Pages/Certificates";
import PageNotFound from "./Pages/PageNotFound";
import Applications from "./features/Applications/Applications";
import CertificatesCharts from "./features/Certificates/CertificatesCharts";
import Deals from "./features/Deals/Deals";
import Posts from "./features/Posts/Posts";
import ReportsCharts from "./features/Reports/ReportsCharts";
import Reviews from "./features/Reviews/Reviews";
import Users from "./features/Users/Users";
import Workers from "./features/Workers/Workers";
import AppLayout from "./ui/AppLayout";
import Register from "./Pages/Auth/Register/Register.page";
import Login from "./Pages/Auth/Login/Login.page";
import AuthLayout from "./Pages/Auth/AuthLayout";
import RootLayout from "./Pages/RootLayout";
import Home from "./Pages/Home/Home.page";


export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout/>}>
            <Route index element={<Home/>}/>
          </Route>
          <Route path="auth" element={<AuthLayout />}>
              <Route index element={<Navigate replace to="login" />}/>
              <Route path="login" element={<Login />}/>
              <Route path="register" element={<Register />}/>
            </Route>
          <Route element={<AppLayout />}>
            {/* <Route index element={<Navigate replace to="dashboard" />} /> */}
            <Route path="dashboard" element={<Dashboard />}>
              <Route index element={<Navigate replace to="applications" />} />
              <Route path="applications" element={<Applications />} />
              <Route path="deals" element={<Deals />} />
              <Route path="posts" element={<Posts />} />
              <Route path="reports" element={<ReportsCharts />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="certificates" element={<CertificatesCharts />} />
              <Route path="users" element={<Users />} />
              <Route path="workers" element={<Workers />} />
            </Route>
            <Route path="reports" element={<Reports />} />
            <Route path="certificates" element={<Certificates />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
  )
}