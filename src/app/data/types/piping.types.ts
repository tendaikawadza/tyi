export type PipingType =
  | "text"
  | "longtext"
  | "sensitive"
  | "longsensitive"
  | "number"
  | "currency"
  | "date"
  | "datetime"
  | "datetimezw"
  | "snake";

export type DataListPipe<T> = {
  [key in keyof T]?: PipingType;
};

export type DataListPiping<T> = DataListPipe<T>[];
