import "./style/body.css";
import "./style/navbar.css";
import "./style/table.css";
import "./style/animation.css"
import Table from "./components/table";
import Matrix from "./components/matrix";
import Footer from "./components/footer";
import { useState } from "react";
import ScreenFour from "./components/screen4";
import ScreenThree from "./components/screen3";
import ScreenTwo from "./components/screen2";


document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    const main = document.querySelector("main");

    if (targetElement) {
      main.scrollTo({
        top: targetElement.offsetTop - main.offsetTop,
        behavior: "smooth",
      });
    }
  });
});

const data = [
  { id: 1, name: "Anthony", age: 32, speciality: "Full-Stack Dev" },
  { id: 2, name: "Samih", age: 34, speciality: "Full-Stack dev" },
  { id: 3, name: "Kevin", age: 35, speciality: "Full-Stack dev" },
  { id: 4, name: "Cyrielle", age: 30, speciality: "Full-Stack dev" },
  { id: 5, name: "Damien", age: 32, speciality: "Full-Stack Dev" },
  { id: 6, name: "Alex", age: 34, speciality: "Full-Stack dev" },
  { id: 7, name: "monica", age: 35, speciality: "Full-Stack dev" },
];

export default function App() {
  const paragraphe =
    " Un jour, les élèves et les professeurs reçurent un mystérieux   message venant de l'espace. Des extraterrestres de la planète   Zog demandaient de l'aide pour apprendre à coder. Curieux et   enthousiastes, les membres de la Wild Code School embarquèrent à   bord d'un vaisseau spatial spécialement conçu pour cette   mission. En arrivant sur Zog, ils furent accueillis par des   créatures fascinantes aux couleurs vives et aux formes étranges.   Les Zoggiens étaient impatients de découvrir les secrets du   codage. Les élèves et les professeurs installèrent rapidement une   salle de classe high-tech au cœur de la capitale zoggienne. Chaque   jour, ils enseignaient aux extraterrestres comment créer des sites   web, développer des applications mobiles, et même programmer des   jeux. Les Zoggiens se montrèrent des étudiants assidus et   créatifs, apportant leurs propres idées et perspectives au monde   du codage. Ensemble, ils résolvaient des bugs et inventaient de   nouvelles technologies. Les liens d'amitié se tissèrent entre   les Terriens et les Zoggiens, et bientôt, la planète Zog devint un   centre intergalactique de l'innovation technologique. Après   plusieurs mois, la mission de la Wild Code School fut un succès   retentissant. Les Zoggiens étaient devenus des programmeurs   accomplis, prêts à partager leurs connaissances avec d'autres   mondes. Les Terriens rentrèrent chez eux avec des souvenirs inoubliables et une nouvelle compréhension de l'importance de  l'apprentissage collaboratif. Si tu cherche bien dans le noir tu trouvera la lumiere!!! 😉";

  const [text, setText] = useState(paragraphe);
  const mtext = () => {
    const newp = paragraphe.split("");
    const ptransform = newp.map(() => "🚀 TO THE MOON 🚀");
    const ptransforme = ptransform.join("").toString();
    setText(ptransforme);
    setTimeout(() => {
      setText(paragraphe);
    }, 1000);
  };
  return (
    <div className="retro-container scanline-effect">
      <header>
        <h1>coding expedition</h1>
        <nav role="navigation">
          <ul>
            <li>
              <a href="#screen-1">CREW</a>
            </li>
            <li>
              <a onClick={mtext} href="#screen-2">
                SCHOOL
              </a>
            </li>
            <li>
              <a href="#screen-3">DATA</a>
            </li>
            <li>
              <a className="cacher" href="#screen-4">
                .
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="screen-1">
          <article>
            <header>
              <h2>DREAM CREW</h2>
            </header>
            <div className="content"></div>
            <figure>
              <img className="vaisseau" src="\src\image\Layer 5.png" alt="astronaute" />
              <div>
                <Table data={data} />
              </div>
              <table className="tableau-style"></table>
            </figure>
          </article>
        </section>
        <section id="screen-2">
          <ScreenTwo />
          <Matrix text={text} />
        </section>
        <ScreenThree /> 
        <ScreenFour />
        
        
      </main>
      <Footer />
    </div>
  );
}
