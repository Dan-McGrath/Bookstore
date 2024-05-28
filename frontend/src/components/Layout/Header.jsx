import Button from '../Button';

const Header = () => {
  return (
    <div className="flex items-center justify-between w-full p-4 bg-lightBrown">
      <div>
        <img className="rounded-full max-w-16 min-w-12 max-h-16 min-h-16" src="./images/CozyCorner.png" alt="Logo" />
      </div>
      <Button text={'Login'} />
    </div>
  );
};

export default Header;
