function ButtonLeft({ onClick }) {
  return (
    <button
      className="arrowLeft"
      onClick={onClick}  
    >
      <img
        src="Imgs/angulo-esquerdo.png"
      />
    </button>
  );
}
export default ButtonLeft;
