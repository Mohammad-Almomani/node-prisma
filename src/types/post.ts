export interface PostDTO {
    title: string;
    content: string;
    userId: number;
  }
  
  export interface Post extends PostDTO {
    id: number;
    createdAt: Date;
    updatedAt: Date;
  }
  