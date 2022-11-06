import { gql } from "@apollo/client";


export const getWilders = gql`
    query Wilders {
        wilders {
            name
            city
            upvotes {
                upvote
                skill {
                    name
                }
            }
        }
    }
`

export const getWilder = gql`
    query Wilder($wilderId: ID!) {
        wilder(id: $wilderId) {
            name
            city
            upvotes {
                upvote
                skill {
                    name
                }
            }
        }   
    }
`

export const createWilder = gql`
    mutation createWilder($name: String!, $city: String!) {
        createWilder(name: $name, city: $city) {
            name
            city
        }
    }
`

export const updateWilder = gql`
    mutation updateWilder($updateWilderId: ID!, $name: String!, $city: String!) {
        updateWilder(id: $updateWilderId, name: $name, city: $city) {
            name
            city
        }
    }
`

export const deleteWilder = gql`
    mutation deleteWilder($deleteWilderId: ID!) {
        deleteWilder(id: $deleteWilderId) {
            name
            city
        }
    }
`

export const upvotes = gql`
    mutation createUpvotes($skillIds: [ID!]!, $wilderName: String!) {
        createUpvotes(skillIds: $skillIds, wilderName: $wilderName) {
            upvote
            skill {
                name
            }
            wilder {
                name
            }
        }
    }
`