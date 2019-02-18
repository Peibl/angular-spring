import {User} from './user';

export class Post {
  id: number;
  text: string;
  image: string;
  creation_date: Date;
  user_creator: User;
}
