import { DeleteResult } from "mongodb";

export interface IControllerResponse<T = any> {
  success: boolean;
  data?: T;
  message: string;
}

export interface IControllerDeleteResponse extends DeleteResult {
  success: boolean;
  message: string;
}