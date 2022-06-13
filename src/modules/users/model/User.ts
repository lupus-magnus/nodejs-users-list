import { v4 as uuidV4 } from "uuid";

class User {
  name: string;
  email: string;
  id: string;
  admin: boolean;
  created_at: Date;
  updated_at: Date;

  constructor() {
    this.id = uuidV4();
    this.admin = false;
    this.created_at = new Date(new Date().toISOString());
    this.updated_at = new Date(new Date().toISOString());
  }
}

export { User };
