import { useMutation } from "@apollo/client";
import { createWilder, upvotes } from "../graphql/wildersQueries";
//import AddSkills from "./AddSkills";

interface IWilderToAdd {
    name: string;
    city: string;
    skillsToAdd: String[];
    onWilderCreated: () => void;
}

function SubmitWilderForm({name, city, skillsToAdd, onWilderCreated}: IWilderToAdd ) {
    const [createdWilder] = useMutation(createWilder);

    function AddSkills(skills: String[], name: string) {
        const [wilderSkills] = useMutation(upvotes);
        wilderSkills({variables: {skillIds: skills, wilderName: name}})
    }    

    async function OnSubmitWilder(event: { preventDefault: () => void }) {
        event.preventDefault();
        createdWilder({variables: {name: name, city: city}});
        AddSkills(skillsToAdd, name);
        onWilderCreated();
    };

    return (
        <button type="submit" onClick={OnSubmitWilder}>
        Ajouter le wilder
        </button>
    )
}

export default SubmitWilderForm;