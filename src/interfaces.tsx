export interface ISkill {
    id: number;
    name: string;
    upvotes: number;
  }

export interface IWilder {
    id: number;
    name: string;
    city: string;
    upvotes: IUpvote[];
  }
  
export interface IUpvote {
    id: number;
    upvote: number;
    skill: ISkill;
  }