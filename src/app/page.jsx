import Image from "next/image";
import styles from "./page.css";
import TopQuestion from "./components/topQuestion";

export default function Home() {
  return (
    <main>
      <div className="boxLeft">
          <TopQuestion />
      </div>
      <div className="boxRight">

      </div>
    </main>
  );
}
