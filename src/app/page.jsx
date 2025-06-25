import Image from "next/image";
import styles from "./page.css";
import TopQuestion from "./components/topQuestion";
import Contador from "./components/contador";

export default function Home() {
  return (
    <main>
      <div className="boxLeft">
          <TopQuestion />
      </div>
      <div className="boxRight">
          <Contador />
      </div>
    </main>
  );
}
