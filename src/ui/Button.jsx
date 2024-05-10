function Button({ children, onChangeTimeType }) {
  return (
    <button
      onClick={() => onChangeTimeType(children)}
      className="w-full rounded-full bg-blue-800 py-1 uppercase tracking-wide text-slate-100 transition-all duration-300 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-offset-2 sm:p-2 lg:p-3"
    >
      {children}
    </button>
  );
}

export default Button;
