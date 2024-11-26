import { DollarSign, Gamepad2 } from "lucide-react";
import style from "./styles.module.css";

interface GameCardProps {
  name: string;
  price: string;
  image: string;
}

const GameCard: React.FC<GameCardProps> = ({ name, price, image }) => {
  return (
    <div className={style.GameItem}>
      <img src={image} alt={`Imagem de ${name}`} />
      <div className={style.GameLabel}>
        <h4><Gamepad2 size={16}/> Nome: {name}</h4>
        <h4><DollarSign size={16}/> Preço: {price}</h4>
      </div>
    </div>
  );
};

export default GameCard;
