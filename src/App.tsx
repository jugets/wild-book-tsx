import axios from "axios";
import { useEffect, useState } from "react";

import styles from "./App.module.css";

import { ISkill, IWilder } from "./interfaces";
import WilderCard from "./components/WilderCard";
import AddWilderForm from "./components/AddWilderForm";
import AddSkillForm from "./components/AddSkillForm";

function App() {

  const [wilders, setWilders] = useState<IWilder[]>([]);
  const [skills, setSkills] = useState<ISkill[]>([]);
  
  const fetch = async () => {
    const wilders = await axios.get("http://localhost:5000/api/wilders");
    setWilders(wilders.data);
    const skills = await axios.get("http://localhost:5000/api/skills");
    setSkills(skills.data);
  };
  
  useEffect(() =>{
    fetch();
  }, []);

  return (
    <div className={styles.App}>
      <header>
        <div className={styles.container}>
          <h1>Wilders Book</h1>
        </div>
      </header>
      <main className={styles.container}>
        <h2>Wilders</h2>
        <WilderCard wilders={wilders} />
        <AddWilderForm onWilderCreated={() => fetch()} skills={skills}/>
        <AddSkillForm onSkillCreated={() => fetch()} />
      </main>
      <footer>
        <div className={styles.container}>
          <p>&copy; 2022 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
