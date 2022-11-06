import React from "react";
import blank_profile from "./../assets/profile.png";
import CardStyle from "./../Card.module.css";
import Skill from "./Skill";
import { IWilder } from "../interfaces";


export interface IWilderProps {
  wilder: IWilder | null;
}

const Wilder = (wilder: IWilderProps) => (
  <article className={CardStyle.card}>
    <img src={blank_profile} alt="Jane Doe Profile" />
    <h3>{wilder.wilder?.name}</h3>
    <h4>{wilder.wilder?.city}</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
    <h4>Wild Skills</h4>
    <ul className={CardStyle.skills}>
        {wilder.wilder?.upvotes.map((upvote) => {
          return ( 
            <Skill
              id={upvote.id}
              name={upvote.skill.name}
              upvotes={upvote.upvote}
            />
          );
        })}
    </ul>
  </article>
);

export default Wilder;