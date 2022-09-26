import axios from "axios";
import React, { useState } from "react";
import { ISkill, IWilder } from "../interfaces";

interface IProps {
    onWilderCreated: () => void;
    skills: ISkill[];
}

function AddWilderForm(props: IProps) {
    const [name, setName] = useState<IWilder["name"]>("");
    const [city, setCity] = useState<IWilder["city"]>("");
    // const [skill, setSkill] = useState<ISkill["name"]>();

    const [addedSkills, setAddedSkills] = useState<String[]>([]);

    function addSkillToWilder() {
        addedSkills.push(props.skills[0].name);
        console.log(addedSkills[0]);
        const newArray = addedSkills.slice();
        setAddedSkills(newArray);
    }

    async function onSubmitWilder(event: { preventDefault: () => void }) {
        event.preventDefault();
        await axios.post("http://localhost:5000/api/wilders", {name, city});
        setName("");
        setCity("");
        // await axios.post("http://localhost:5000/api/upvotes", {skill: skill, name: name});
        // setSkill("");
        await axios.post("http://localhost:5000/api/upvotes", {skills: addedSkills, name: name});
        props.onWilderCreated();
    };

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
        {addedSkills.map((addedSkill, index) => (
            <select name="skill" onChange={(e) => {
                addedSkills[index] = e.target.value;
                setAddedSkills(addedSkills.slice());
                }}>
                {props.skills.map((skillItem) => {
                    return (
                    <option value={skillItem.name}>{skillItem.name}</option>
                    );
                })}
        </select>
        ))}
        <br/><br/>
        <button type="submit" onClick={onSubmitWilder}>
            Ajouter
        </button>
        <br/><br/>
        <button onClick={() => { addSkillToWilder(); }}>
            Ajouter un skill
        </button>
    </form>
    </>
    )
  }


  export default AddWilderForm;


