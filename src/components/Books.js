import React, { useState, useEffect } from "react";

import {
  BooksViewList,
  BookCard,
  BookBody,
  BookImage,
  BookName,
  BookDescription,
  Button,
  FilterContainer,
  Input,
} from "./Styles";

import leftArrowImage from "../images/left-arrow.png";
import rightArrowImage from "../images/right-arrow.png";
import book1 from "../images/GobletOfFire.jpeg";
import book2 from "../images/ShatterMe.jpeg";
import book3 from "../images/SorcererStone.jpeg";
import book4 from "../images/MovingCastle.jpeg";
import book5 from "../images/Mocking.jpeg";
import book6 from "../images/Martian.jpeg";
import book7 from "../images/Rise.jpeg";
import book8 from "../images/GreatGetsBy.jpeg";
import book9 from "../images/Risen.jpeg";
import book10 from "../images/AutumnPower.jpeg";
import book11 from "../images/Philosopher'sStone.jpeg";
import book12 from "../images/Nightingale.jpeg";
import book13 from "../images/BookThief.jpg";
import book14 from "../images/SinEater.jpeg";
import book15 from "../images/BigAndBetter.jpeg";
import book16 from "../images/MyBookYear.jpg";
import book17 from "../images/DesignFormula.jpeg";
import book18 from "../images/GreatGetsBy.jpeg";
import book19 from "../images/OnlyWords.jpeg";
import book20 from "../images/StandOut.jpeg";
import book21 from "../images/TheKing.jpg";
import book22 from "../images/LunarStorm.jpeg";
import book23 from "../images/crook-manifesto-book.png";
import book24 from "../images/everyone-here-is-lying-book.png";
import book25 from "../images/gone-tonight-book.png";

const booksPerPage = 8;

export const bookData = [
  {
    id: 1,
    title: "The Night Circus",
    author: "Erin Morgenstern",
    image: book1,
    subject: "Fantasy",
    releasedate: "September 13, 2011",
  },
  {
    id: 2,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    image: book2,
    subject: "Psychological Thriller",
    releasedate: "February 5, 2019",
  },
  {
    id: 3,
    title: "Educated",
    author: "Tara Westover",
    image: book3,
    subject: "Memoir",
    releasedate: "February 20, 2018",
  },
  {
    id: 4,
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    image: book4,
    subject: "Mystery",
    releasedate: "August 14, 2018",
  },
  {
    id: 5,
    title: "The Hunger Games",
    author: "Suzanne Collins",
    image: book5,
    subject: "Science Fiction",
    releasedate: "September 14, 2008",
  },
  {
    id: 6,
    title: "The Girl on the Train",
    author: "Paula Hawkins",
    image: book6,
    subject: "Mystery",
    releasedate: "January 13, 2015",
  },
  {
    id: 7,
    title: "The Goldfinch",
    author: "Donna Tartt",
    image: book7,
    subject: "Literary Fiction",
    releasedate: "October 22, 2013",
  },
  {
    id: 8,
    title: "The Alchemist",
    author: "Paulo Coelho",
    image: book8,
    subject: "Adventure",
    releasedate: "1988",
  },
  {
    id: 9,
    title: "The Great Alone",
    author: "Kristin Hannah",
    image: book9,
    subject: "Historical Fiction",
    releasedate: "February 6, 2018",
  },
  {
    id: 10,
    title: "Little Fires Everywhere",
    author: "Celeste Ng",
    image: book10,
    subject: "Drama",
    releasedate: "September 12, 2017",
  },
  {
    id: 11,
    title: "Circe",
    author: "Madeline Miller",
    image: book11,
    subject: "Mythology",
    releasedate: "April 10, 2018",
  },
  {
    id: 12,
    title: "The Nightingale",
    author: "Kristin Hannah",
    image: book12,
    subject: "Historical Fiction",
    releasedate: "February 3, 2015",
  },
  {
    id: 13,
    title: "The Book Thief",
    author: "Markus Zusak",
    image: book13,
    subject: "Historical Fiction",
    releasedate: "March 14, 2005",
  },
  {
    id: 14,
    title: "The Testaments",
    author: "Margaret Atwood",
    image: book14,
    subject: "Dystopian",
    releasedate: "September 10, 2019",
  },
  {
    id: 15,
    title: "The Martian",
    author: "Andy Weir",
    image: book15,
    subject: "Science Fiction",
    releasedate: "February 11, 2014",
  },
  {
    id: 16,
    title: "Eleanor",
    author: "Gail Honeyman",
    image: book16,
    subject: "Contemporary Fiction",
    releasedate: "May 9, 2017",
  },
  {
    id: 17,
    title: "The Road",
    author: "Cormac McCarthy",
    image: book17,
    subject: "Post-apocalyptic",
    releasedate: "September 26, 2006",
  },
  {
    id: 18,
    title: "The Shining",
    author: "Stephen King",
    image: book18,
    subject: "Horror",
    releasedate: "January 28, 1977",
  },
  {
    id: 19,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    image: book19,
    subject: "Fantasy",
    releasedate: "September 21, 1937",
  },
  {
    id: 20,
    title: "Gone Girl",
    author: "Gillian Flynn",
    image: book20,
    subject: "Mystery",
    releasedate: "June 5, 2012",
  },
  {
    id: 21,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    image: book21,
    subject: "Coming-of-age",
    releasedate: "July 16, 1951",
  },
  {
    id: 22,
    title: "The Nightingale 2",
    author: "Kristin Hannah",
    image: book22,
    subject: "Historical Fiction",
    releasedate: "February 3, 2015",
  },
  {
    id: 23,
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    image: book23,
    subject: "Drama",
    releasedate: "May 29, 2003",
  },
  {
    id: 24,
    title: "The Help",
    author: "Kathryn Stockett",
    image: book24,
    subject: "Historical Fiction",
    releasedate: "February 10, 2009",
  },
  {
    id: 25,
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    image: book25,
    subject: "Mystery",
    releasedate: "August 16, 2005",
  },
];

const Books = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredBooks, setFilteredBooks] = useState(bookData);
  const [filterCriteria, setFilterCriteria] = useState({
    title: "",
    author: "",
    subject: "",
    releasedate: "",
  });

  useEffect(() => {
    filterBooks();
  }, [filterCriteria]);

  // Calculate indexes for pagination
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Filter books
  const filterBooks = () => {
    const { title, author, subject, releasedate } = filterCriteria;
    const filtered = bookData.filter((book) => {
      const matchesTitle = book.title
        .toLowerCase()
        .includes(title.toLowerCase());
      const matchesAuthor = book.author
        .toLowerCase()
        .includes(author.toLowerCase());
      const matchesSubject = book.subject
        .toLowerCase()
        .includes(subject.toLowerCase());
      const matchesReleaseDate = book.releasedate
        .toLowerCase()
        .includes(releasedate.toLowerCase());
      return (
        matchesTitle && matchesAuthor && matchesSubject && matchesReleaseDate
      );
    });
    setFilteredBooks(filtered);
    setCurrentPage(1);
  };

  // Reset filters
  const resetFilters = () => {
    setFilterCriteria({
      title: "",
      author: "",
      subject: "",
      releasedate: "",
    });
    setCurrentPage(1);
  };

  return (
    <div>
      <div
        style={{ marginLeft: "50px", marginTop: "20px", marginBottom: "10px" }}
      >
        <BookName>Filter by:</BookName>
      </div>

      <div
        style={{
          marginLeft: "50px",
          border: "1px solid #ccc",
        }}
      >
        <FilterContainer>
          <Input
            type="text"
            placeholder="Title"
            value={filterCriteria.title}
            onChange={(e) =>
              setFilterCriteria((prevState) => ({
                ...prevState,
                title: e.target.value,
              }))
            }
          />
          <Input
            type="text"
            placeholder="Author"
            value={filterCriteria.author}
            onChange={(e) =>
              setFilterCriteria((prevState) => ({
                ...prevState,
                author: e.target.value,
              }))
            }
          />
          <Input
            type="text"
            placeholder="Genre"
            value={filterCriteria.subject}
            onChange={(e) =>
              setFilterCriteria((prevState) => ({
                ...prevState,
                subject: e.target.value,
              }))
            }
          />
          <Input
            type="text"
            placeholder="Release Date"
            value={filterCriteria.releasedate}
            onChange={(e) =>
              setFilterCriteria((prevState) => ({
                ...prevState,
                releasedate: e.target.value,
              }))
            }
          />

          <Button style={{ marginBottom: "10px" }} onClick={resetFilters}>
            Reset Filters
          </Button>
        </FilterContainer>
      </div>

      {/* Filter Counts */}
      <div
        style={{ marginLeft: "50px", marginTop: "20px", marginBottom: "10px" }}
      >
        <BookName>
          Total Books in Library: {bookData.length} | Total Filtered Books:{" "}
          {filteredBooks.length}
        </BookName>
      </div>

      <BooksViewList>
        {currentBooks.map((book) => (
          <BookCard key={book.id}>
            <BookImage
              src={book.image}
              alt={book.title}
              style={{ width: "150px", height: "200px" }} // Set your desired width and height
            />
            <BookBody>
              <BookName>{book.title}</BookName>
              <BookDescription>By {book.author}</BookDescription>
              <BookDescription>Genre: {book.subject}</BookDescription>
              <BookDescription>
                Release Date: {book.releasedate}
              </BookDescription>
            </BookBody>
          </BookCard>
        ))}
      </BooksViewList>

      {/* Pagination */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "50px",
          marginTop: "20px",
        }}
      >
        {Array.from({ length: Math.ceil(bookData.length / booksPerPage) }).map(
          (_, index) => (
            <Button
              style={{ margin: "0 4px", marginBottom: "10px" }}
              key={index}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </Button>
          )
        )}
      </div>
    </div>
  );
};

export default Books;
