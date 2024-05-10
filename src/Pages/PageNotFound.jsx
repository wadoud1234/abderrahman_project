import { Link } from "react-router-dom"
// , NavLink
function PageNotFound() {
  return (
    <div>
      <p className="text-xl">this page is unavailable please move back 😔</p>
      <Link to="dashboard/applications" className="text-blue-600  hover:underline">&larr;move back to the dashboard</Link>
    </div>
  )
}

export default PageNotFound
