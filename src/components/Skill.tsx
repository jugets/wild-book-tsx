import React from "react";
import { ISkill } from "../interfaces";
import CardStyle from "./../Card.module.css";



const Skill = ({name, upvotes}: ISkill) => (
  <li>
    {name}
    <span className={CardStyle.votes}>{upvotes}</span>
  </li>
);

export default Skill;
