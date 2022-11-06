import Wilder from "./Wilder";
import { IWilder } from "../interfaces";
import CardStyle from "../Card.module.css";

export interface IWildersProps {
    wilders: IWilder[] | null;
}

const WilderCard = ({ wilders}: IWildersProps) => (
    <section className={CardStyle.cardrow}>
          {wilders?.map((wilder) => {
            return (
              <Wilder wilder={wilder}
                // key={wilder.id}
                // id={wilder.id}
                // name={wilder.name}
                // city={wilder.city}
                // upvotes={wilder.upvotes}
              />
            );
          })}
        </section>
  );
  
export default WilderCard;