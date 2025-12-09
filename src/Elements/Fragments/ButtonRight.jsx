function ButtonRight({ onClick }) {
  return (
    <button
      className="arrowRight"
      onClick={onClick}  
    >
      <img
        src="Imgs/angulo-direito.png"
        alt="Avançar"
      />
    </button>
  );
}
export default ButtonRight;