function Button({ children, variation = "default" }) {
  const base =
    "rounded-md px-3 py-1.5 text-sm font-medium transition";

  const styles = {
    default:
      "text-gray-600 hover:bg-emerald-600 hover:text-white",
    active:
      "bg-emerald-600 text-white hover:bg-emerald-600",
  };

  return (
    <button className={`${base} ${styles[variation]}`}>
      {children}
    </button>
  );
}

export default Button;
