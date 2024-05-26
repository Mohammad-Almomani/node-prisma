import { JsonArray, JsonObject, JsonValue } from "@prisma/client/runtime/library";
import { Prisma } from "@prisma/client"


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

