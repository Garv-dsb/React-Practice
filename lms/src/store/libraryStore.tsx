import { create } from "zustand";
import type { libraryStore } from "../types/LibraryStoreTypes";

export const useLibraryStore = create<libraryStore>((set, get) => ({
  userData: [
    {
      id: 892345,
      username: "silver_falcon_77",
    },
    {
      id: 120987,
      username: "shadow_walker_01",
    },
    {
      id: 564321,
      username: "crimson_ghost_42",
    },
    {
      id: 781122,
      username: "midnight_rider_X",
    },
    {
      id: 349010,
      username: "blaze_fireheart",
    },
    {
      id: 657890,
      username: "ocean_dreamer_99",
    },
    {
      id: 234567,
      username: "mountain_king_88",
    },
    {
      id: 901234,
      username: "starlight_ninja",
    },
    {
      id: 456789,
      username: "iron_will_alpha",
    },
    {
      id: 109876,
      username: "golden_lion_prince",
    },
  ],

  booksData: [
    {
      id: 101,
      bookName: "The Silent Echo",
      assignedTo: "",
      available: "Yes",
      status: false,
    },
    {
      id: 102,
      bookName: "Code of Silence",
      assignedTo: "",
      available: "Yes",
      status: false,
    },
    {
      id: 103,
      bookName: "Digital Nomad",
      assignedTo: "",
      available: "Yes",
      status: false,
    },
    {
      id: 104,
      bookName: "The Quantum Leap",
      assignedTo: "",
      available: "Yes",
      status: false,
    },
    {
      id: 105,
      bookName: "Whispering Pines",
      assignedTo: "",
      available: "Yes",
      status: false,
    },
  ],

  loading: false,

  assignedBookToUser: (id?: number, assignedTo?: string) => {
    set({ loading: true });

    try {
      const tempBooksData = get().booksData;
      const updatedBooksData = tempBooksData.map((book) => {
        if (book.id === id) {
          return [
            ...tempBooksData,
            (book.assignedTo = assignedTo),
            (book.status = true),
            (book.available = "NO"),
          ];
        }
      });
      set({ loading: false });
      return updatedBooksData;
    } catch (error) {
      console.log("Error during assigning Book to the user", error);
    }
  },
}));
