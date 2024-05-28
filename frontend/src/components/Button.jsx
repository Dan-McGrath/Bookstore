const Button = ({ text, className }) => {
  return (
    <div className="px-3 py-1 rounded-full bg-darkBrown">
      <button className={className}>{text}</button>
    </div>
  );
};

export default Button;
