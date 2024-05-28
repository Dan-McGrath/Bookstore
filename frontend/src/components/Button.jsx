const Button = ({ text, className, onclick = null }) => {
  return (
    <div className="px-3 py-1 rounded-full bg-darkBrown">
      <button className={className} onClick={onclick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
