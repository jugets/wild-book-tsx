import { useMutation } from "@apollo/client";
import { upvotes } from "../graphql/wildersQueries";

function AddSkills(skills: String[], name: string) {
    const [wilderSkills] = useMutation(upvotes);
    wilderSkills({variables: {skillIds: skills, wilderName: name}})
}

export default AddSkills;