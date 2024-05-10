import { Link } from "react-router-dom";

export default function LoginForm({formState,setFormState,onSubmit}) {
    function setPassword(e){
        const target = e.target;
        const value = target.value

        if(value && value.length > 0){
            setFormState((prev)=>({...prev,password:value}))
        }
        return ;
    }
    function setEmail(e){
        const target = e?.target;
        const value = target?.value;

        if(value && value.length > 0){
            setFormState((prev)=>({...prev,email:value}))
        }
        return ;
    }
  return (
    <>
    <h1 className="text-3xl font-medium">Login</h1>
    <form onSubmit={onSubmit} className="mt-8 grid grid-cols-6 gap-6">
    <div className="col-span-6">
      <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>
  
      <input
        type="email"
        id="Email"
        name="email"
        value={formState.email}
        onInput={setEmail}
        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
      />
    </div>
  
    <div className="col-span-6 ">
      <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>
  
      <input
        type="password"
        id="Password"
        name="password"
        value={formState.password}
        onInput={setPassword}
        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
      />
    </div>
  
    <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
      <button
        className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
      >
        Login
      </button>
  
      <p className="mt-4 text-sm text-gray-500 sm:mt-0">
        Don't have account yet ?
        <Link to="/auth/register" className="text-gray-700 underline"> Register</Link>.
      </p>
    </div>
  </form>
  </>
  )
}
