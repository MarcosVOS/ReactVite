import { User } from "lucide-react";
import GameCard from "../../components/gameCard";
import style from "./style.module.css";
import { useEffect, useState } from "react";
import { getCookie } from "../../utils/cookieUtils";
import { useNavigate } from "react-router-dom";


const myGames = [
  {
    name: "League of Legends",
    price: "Grátis",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/League_of_Legends_2019_vector.svg/260px-League_of_Legends_2019_vector.svg.png",
  },
  {
    name: "Valorant",
    price: "Grátis",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Valorant_logo_-_pink_color_version.svg/250px-Valorant_logo_-_pink_color_version.svg.png",
  },
  {
    name: "CS:GO",
    price: "Grátis",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/CSGOcoverMarch2020.jpg/220px-CSGOcoverMarch2020.jpg",
  },
  {
    name: "Dota 2",
    price: "Grátis",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Dota_2_-_cropped_logo.jpg/200px-Dota_2_-_cropped_logo.jpg",
  },
  {
    name: "Apex Legends",
    price: "Grátis",
    image: "https://upload.wikimedia.org/wikipedia/pt/thumb/a/ad/Apex_legends_capa.jpg/280px-Apex_legends_capa.jpg",
  },
];

const Home = () => {

  const [user, setUser] = useState<{ username: string, useremail: string } | null>(null);
  const navigate = useNavigate();


  useEffect(() => {
    const userCookie = getCookie("fable-auth-v.1.0.0");
    if (userCookie) {
      const parsedUser = JSON.parse(userCookie);

      console.log(">>> parsedUser: ", parsedUser)
      setUser({
        username: parsedUser.name,
        useremail: parsedUser.email
      });
    }else{
      navigate('/')
    }
  }, []);
  
  return (
    <div className={style.labelStyle}>
      <div className={style.ContainerContent}>
        <div className={style.ContainerContentTwo}>
          <header className={style.ContainerHeader}>
            <span>Ola seja bem vindo "(A)" - {user?.username}</span>
            <div>
              <span><User/></span>
              <span>{user?.useremail}</span>
            </div>
          </header>
          <main className={style.MainContainer}>
            <h1>Meus jogos</h1>

            <div className={style.CatalogContainer}>
            {myGames.map((game, index) => (
                <GameCard 
                  key={index} 
                  name={game.name} 
                  price={game.price} 
                  image={game.image} 
                />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Home;
