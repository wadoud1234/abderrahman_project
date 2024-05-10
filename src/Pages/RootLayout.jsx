import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="min-w-screen min-h-screen h-full w-full">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-4">
            <Outlet/>
            
            <div className="flex flex-col gap-1 mt-4">
                <h3 className="underline underline-offset-2 text-xl">Links</h3>
                <Link to="/">Home</Link>
                <Link to="/auth/login">Login</Link>
                <Link to="/auth/register">Register</Link>
                <Link to="/dashboard">Dashboard</Link>
            </div>
        </div>
    </div>
  )
}