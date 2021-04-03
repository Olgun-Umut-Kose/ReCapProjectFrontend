import { ResponseModel } from "./responseModel";

export interface ListDataResponseModel<T> extends ResponseModel{
    data:T[];
}