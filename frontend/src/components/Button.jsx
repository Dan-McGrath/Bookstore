const Button = ({ text, className, onclick = null, type = 'text' }) => {
  return (
    <div role="button" tabIndex={0} onClick={onclick} className="px-3 py-1 rounded-full bg-darkBrown">
      <button className={className} type={type}>
        {text}
      </button>
    </div>
  );
};

export default Button;
