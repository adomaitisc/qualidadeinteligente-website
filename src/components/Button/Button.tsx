type ButtonProps = {
  action?: any;
  text: string;
};

const Button = ({ action, text }: ButtonProps) => {
  return (
    <button
      onClick={action || null}
      className="text-black py-6 px-10 rounded-xl bg-zinc-100 text-xl font-medium duration-200 hover:bg-zinc-400 "
      type="button"
    >
      {text}
    </button>
  );
};

export default Button;
