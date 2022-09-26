import axios from "axios";
import { useState } from "react";
import { ISkill } from "../interfaces";



interface IProps {
    onSkillCreated: () => void;
}

function AddSkillForm(props: IProps) {
    const [name, setName] = useState<ISkill["name"]>("");
    //const [upvotes, setUpvotes] = useState<ISkill["upvotes"]>();
    async function onSubmit(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        await axios.post("http://localhost:5000/api/skills", {name});
        setName("");
        //setUpvotes(0);
        props.onSkillCreated();
    };

    return (
    <form>
        <h2>Ajouter une compétence</h2>

        <label htmlFor="name">Name : </label>
        <input name="name" type="text" value={name} onChange={(e) => {setName(e.target.value)}}></input>

        {/* <label htmlFor="upvotes">Upvotes : </label>
        <input name="upvotes" type="number" value={upvotes} onChange={(e) => {setUpvotes(Number(e.target.value))}}></input> */}

        <button type="submit" onClick={onSubmit}>Ajouter</button>
    </form>
    )
  }

  export default AddSkillForm;
