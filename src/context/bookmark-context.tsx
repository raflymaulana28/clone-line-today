import React, { useState, useEffect, useContext, createContext } from "react";
import { NewsItem } from "../types/articles";

interface BookmarkContextType {
  bookmark: NewsItem[];
  AddBookmark: (data: NewsItem) => void;
  RemoveBookmark: (data: NewsItem) => void;
}
interface ContextProps {
  children: React.ReactNode;
}

export const BookmarkContext = createContext<BookmarkContextType>({} as any);

const BookmarkContextProvider = (props: ContextProps) => {
  const { children } = props;
  const [bookmark, setBookmark] = useState<any>([]);

  useEffect(() => {
    const books = JSON.parse(localStorage.getItem("bookmark") as any);
    if (books) {
      setBookmark(books);
    }
  }, []);
  const AddBookmark = (data: NewsItem) => {
    const booked = [...bookmark, data];
    setBookmark(booked);
    localStorage.setItem("bookmark", JSON.stringify(booked));
  };

  const RemoveBookmark = (data: NewsItem) => {
    const newBooks = bookmark.filter((obj: NewsItem) => {
      return obj.id !== data.id;
    });
    setBookmark(newBooks);
    localStorage.setItem("bookmark", JSON.stringify(newBooks));
  };
  return (
    <BookmarkContext.Provider value={{ bookmark, AddBookmark, RemoveBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export default BookmarkContextProvider;

export const useBookmark = () => useContext(BookmarkContext);
