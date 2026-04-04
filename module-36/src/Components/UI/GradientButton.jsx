export default function GradientButton({ text, classNames = "" }) {
  return (
    <button
      className={`btn py-5  text-[16px] rounded-full text-white bg-primary-gradient ${classNames}`}>
      {text}
    </button>
  );
}
