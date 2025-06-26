import Image from "next/image";
import styles from "./page.css";
import TopQuestion from "./components/topQuestion";
import Contador from "./components/contador";
import Dinheiro from "./components/dinheiro";
import Dinheiro2 from "./components/dinheiro2";

export default function Home() {
  return (
    <main>
      <div className="boxLeft">
          <TopQuestion />
      </div>
      <div className="boxRight">
          <Contador />
      </div>
      <div className="boxRight">
          <Dinheiro />
      </div>
      <div className="boxRight">
          <Dinheiro2 />
      </div>

    </main>
  );
}
