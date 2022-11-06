import { gql } from "@apollo/client";


export const getSkills = gql`
    query Skills {
        skills {
            name
            # upvotes {
            #     wilder {
            #         name
            #     }
            # }
        }
}
`

export const getSkill= gql`
    query Skill($skillId: ID!) {
        skill(id: $skillId) {
            name
            upvotes {
                upvote
                wilder {
                    name
                }
            }
        }
    }
`