import { useQuery } from "@apollo/client";
import { useState } from "react";
import { getSkills } from "../graphql/skillsQueries";
import { ISkill } from "../interfaces";
import SubmitWilderForm from "./3.SubmitWilderForm";


interface IShortWilder {
    onWilderCreated: () => void;
    name: string;
    city: string;
  }

function AddSkillToWilder({name, city, onWilderCreated}: IShortWilder) {
    const { data } = useQuery<{ skills: ISkill[] }>(getSkills);    
    const skills = data ? data.skills : null;

    const [addedSkills, setAddedSkills] = useState<String[]>([]);

    function addSkill() {
        if (skills) {
            addedSkills.push(skills[0].name);
            console.log(addedSkills[0]);
            const newArray = addedSkills.slice();
            setAddedSkills(newArray);
        }
    }

    return (
        <>
            {addedSkills.map((addedSkill, index) => (
                <select name="skill" onChange={(e) => {
                    addedSkills[index] = e.target.value;
                    setAddedSkills(addedSkills.slice());
                    }}>
                    {skills?.map((skill) => {
                        return (
                        <option value={skill.id}>{skill.name}</option>
                        );
                    })}
                </select>
            ))}
            <button onClick={() => {addSkill(); }}>Ajouter un skill</button>
            <SubmitWilderForm onWilderCreated={onWilderCreated} name={name} city={city} skillsToAdd={addedSkills}/>
        </>
    )
}

export default AddSkillToWilder;