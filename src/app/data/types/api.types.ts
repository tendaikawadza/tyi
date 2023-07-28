export type ApiResponseNarrative = "FAILED";

export interface BaseApiResponse {
  narrative: string;
  responseCode: "00" | "05";
}

export interface PagePayload {
  id: number | string;
  pageNumber: number;
  pageSize: number;
}

export interface Page<T> {
  content: T[];
  pageable: {
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
  };
  totalPages: number;
  totalElements: number;
  last: boolean;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  size: number;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}
