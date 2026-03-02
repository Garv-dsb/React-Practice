// Book types
export interface booksData {
  id: number;
  bookName: string;
  assignedTo: string | undefined;
  available: string;
  status: boolean;
}

export interface userData {
  id: number;
  username: string;
}

export interface libraryStore {
  booksData: booksData[];
  userData: userData[];
  loading: boolean;
  assignedBookToUser: (id?: number, assignedTo?: string) => void;
}
