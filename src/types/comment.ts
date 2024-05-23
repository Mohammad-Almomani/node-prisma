export interface CommentDTO {
    content: string;
    postId: number;
    userId: number;
    meta_tags?: object;
  }
  
  export interface Comment extends CommentDTO {
    id: number;
    createdAt: Date;
    updatedAt: Date;
  }
  