// import { JsonValue } from "@prisma/client/runtime/library";


export interface CommentDTO {
    content: string;
    postId: number;
    userId: number;
    meta_tags?: any;
  }
  export interface Comment extends CommentDTO {
    id: number;
    createdAt: Date;
    updatedAt: Date;
  }
  