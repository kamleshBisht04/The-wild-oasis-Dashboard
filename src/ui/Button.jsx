function Button({ children, variation = "default" }) {
  const base = "rounded-sm px-1 py-1 text-xs font-medium transition";

  const styles = {
    default: "text-gray-600 hover:bg-emerald-600 hover:text-white",
    active: "bg-emerald-600 text-white hover:bg-emerald-600",
  };

  return <button className={`${base} ${styles[variation]}`}>{children}</button>;
}

export default Button;
