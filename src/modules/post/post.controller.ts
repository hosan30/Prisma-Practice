import { Request, Response } from "express";
import { RequestHandler } from "express-serve-static-core";
import httpStatus from "http-status";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { Post } from "@prisma/client";
import { PostService } from "./post.service";

const addPost: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await PostService.addPost(req.body);

    sendResponse<Post>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Post created  successfully!",
      data: result,
    });
  }
);
// const addOrUpdateUser: RequestHandler = catchAsync(
//   async (req: Request, res: Response) => {
//     const result = await UserService.addOrUpdateUser(req.body);

//     sendResponse(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: "Profile updated/created successfully!",
//       data: result,
//     });
//   }
// );
const getPosts: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await PostService.getPosts();

    sendResponse<Partial<Post>[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Posts fetched successfully!",
      data: result,
    });
  }
);
// const getSingleUser: RequestHandler = catchAsync(
//   async (req: Request, res: Response) => {
//     const result = await UserService.getSingleUser(Number(req.params.id));

//     sendResponse<User>(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: "User fetched successfully!",
//       data: result,
//     });
//   }
// );
export const PostController = {
  getPosts,
  addPost,
  // addOrUpdateUser,
  // getSingleUser,
};
