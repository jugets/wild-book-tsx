import { useState } from "react";
import { IWilder } from "../interfaces";
import AddSkillToWilder from "./2.AddSkillToWilder";

interface IProps {
    onWilderCreated: () => void;
}

function AddWilderForm(props: IProps) {
    
    const [name, setName] = useState<IWilder["name"]>("");
    const [city, setCity] = useState<IWilder["city"]>("");

    async function onSubmitSkills(event: { preventDefault: () => void }) {
        event.preventDefault();
    };

    return (
<>
    <h2>Ajouter un wilder</h2>
    <form onSubmit={onSubmitSkills}>
        <label htmlFor="name">Name : </label>
        <input name="name" type="text" value={name} onChange={(e) => {setName(e.target.value)}}></input>
        <br/><br/>
        <label htmlFor="city">City : </label>
        <input name="city" type="text" value={city} onChange={(e) => {setCity(e.target.value)}}></input>
        <br/><br/>
        <label htmlFor="skill">Compétence : </label>
        <br/><br/>
        <AddSkillToWilder onWilderCreated={props.onWilderCreated} name={name} city={city} />
        <br/><br/>
    </form>
    </>
    )
  }

  export default AddWilderForm;


