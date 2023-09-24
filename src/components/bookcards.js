import React, { useRef, useEffect, useState } from "react";
import { bookData } from "./Books";
import { Toaster, toast } from "react-hot-toast";
import {
  PreviousButton,
  NextButton,
  BorrowListButton,
  BooksList,
  Card,
  CardBody,
  CardContainer,
  CardImage,
  CardName,
  CardDescription,
  Title,
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

const BookCards = () => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  const handleBorrowClick = (book) => {
    const selectedBook = bookData.find((item) => item.image === book);
    if (selectedBook) {
      setBorrowedBooks((prevBorrowedBooks) => [
        ...prevBorrowedBooks,
        selectedBook,
      ]);
      console.log(borrowedBooks);
      toast.success(`Book added to cart!!`);
    }
  };

  useEffect(() => {
    // Retrieve borrowed books from local storage
    const storedBorrowedBooks = localStorage.getItem("borrowedBooks");
    if (storedBorrowedBooks) {
      const parsedBorrowedBooks = JSON.parse(storedBorrowedBooks);
      setBorrowedBooks((prevBorrowedBooks) => [
        ...prevBorrowedBooks,
        ...parsedBorrowedBooks,
      ]);
    }
  }, []);

  useEffect(() => {
    // Save borrowed books to local storage whenever the list changes
    localStorage.setItem("borrowedBooks", JSON.stringify(borrowedBooks));
  }, [borrowedBooks]);

  useEffect(() => {
    const handleResize = () => {
      cardContainerRef1.scrollLeft = 0; // Reset scroll position on resize
      cardContainerRef2.scrollLeft = 0; // Reset scroll position on resize
      cardContainerRef3.scrollLeft = 0; // Reset scroll position on resize
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const cardContainerRef1 = useRef(null);
  const cardContainerRef2 = useRef(null);
  const cardContainerRef3 = useRef(null);

  const handleNextClick = (ref) => {
    const containerWidth = ref.current.offsetWidth;
    ref.current.scrollLeft += containerWidth + 20;
  };

  const handlePreviousClick = (ref) => {
    const containerWidth = ref.current.offsetWidth;
    ref.current.scrollLeft -= containerWidth + 20;
  };

  return (
    <div>
      <Toaster />
      <Title style={{ marginLeft: "80px", marginTop: "40px" }}>
        Top Trending Books of 2023
      </Title>
      <BooksList>
        <PreviousButton onClick={() => handlePreviousClick(cardContainerRef1)}>
          <img src={leftArrowImage} alt="Left arrow" />
        </PreviousButton>
        <NextButton onClick={() => handleNextClick(cardContainerRef1)}>
          <img src={rightArrowImage} alt="Right arrow" />
        </NextButton>

        <CardContainer ref={cardContainerRef1}>
          <Card>
            <CardImage src={book1} alt="Age of Vice by Deepti Kapoor" />
            <CardBody>
              <CardName>Age of Vice</CardName>
              <CardDescription>Age of Vice by Deepti Kapoor.</CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book1)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book2}
              alt="City Under One Roof by Iris Yamashita"
            />
            <CardBody>
              <CardName>City Under One Roof</CardName>
              <CardDescription>
                City Under One Roof by Iris Yamashita.
              </CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book2)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book3}
              alt="The World and All That It Holds by Aleksandar Hemon"
            />
            <CardBody>
              <CardName>The World and All That It Holds</CardName>
              <CardDescription>
                The World and All That It Holds by Aleksandar Hemon.
              </CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book3)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book4} alt="Maame by Jessica George" />
            <CardBody>
              <CardName>Maame</CardName>
              <CardDescription>Maame by Jessica George.</CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book4)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book5} alt="Essex Dogs by Dan Jones" />
            <CardBody>
              <CardName>Essex Dogs</CardName>
              <CardDescription>Essex Dogs by Dan Jones.</CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book5)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book6}
              alt="What Happened to Ruthy Ramirez by Claire Jiménez"
            />
            <CardBody>
              <CardName>What Happened to Ruthy Ramirez</CardName>
              <CardDescription>
                What Happened to Ruthy Ramirez by Claire Jiménez.
              </CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book6)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book7} alt="A Death at the Party by Amy Stuart" />
            <CardBody>
              <CardName>A Death at the Party</CardName>
              <CardDescription>
                A Death at the Party by Amy Stuart.
              </CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book7)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book8}
              alt="The God of Endings by Jacqueline Holland"
            />
            <CardBody>
              <CardName>The God of Endings</CardName>
              <CardDescription>
                The God of Endings by Jacqueline Holland.
              </CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book8)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book9} alt="Now You See Us by Balli Kaur Jaswal" />
            <CardBody>
              <CardName>Now You See Us</CardName>
              <CardDescription>
                Now You See Us by Balli Kaur Jaswal.
              </CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book9)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book10} alt="Dust Child by Nguyễn Phan Quế Mai" />
            <CardBody>
              <CardName>Dust Child</CardName>
              <CardDescription>
                Dust Child by Nguyễn Phan Quế Mai.
              </CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book10)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book11}
              alt="The Mostly True Story of Tanner & Louise by Colleen Oakley"
            />
            <CardBody>
              <CardName>The Mostly True Story of Tanner & Louise</CardName>
              <CardDescription>
                The Mostly True Story of Tanner & Louise by Colleen Oakley.
              </CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book11)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book12} alt="Homecoming by Kate Morton" />
            <CardBody>
              <CardName>Homecoming</CardName>
              <CardDescription>Homecoming by Kate Morton.</CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book12)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book13}
              alt="Symphony of Secrets by Brendan Slocumb"
            />
            <CardBody>
              <CardName>Symphony of Secrets</CardName>
              <CardDescription>
                Symphony of Secrets by Brendan Slocumb.
              </CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book13)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book14} alt="Silver Alert by Lee Smith" />
            <CardBody>
              <CardName>Silver Alert</CardName>
              <CardDescription>Silver Alert by Lee Smith.</CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book14)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book15}
              alt="Only Love Can Hurt Like This by Paige Toon"
            />
            <CardBody>
              <CardName>Only Love Can Hurt Like This</CardName>
              <CardDescription>
                Only Love Can Hurt Like This by Paige Toon.
              </CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book15)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book16} alt="Paper Names by Susie Luo" />
            <CardBody>
              <CardName>Paper Names</CardName>
              <CardDescription>Paper Names by Susie Luo.</CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book16)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book17}
              alt="The Collected Regrets of Clover by Mikki Brammer"
            />
            <CardBody>
              <CardName>The Collected Regrets of Clover</CardName>
              <CardDescription>
                The Collected Regrets of Clover by Mikki Brammer.
              </CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book17)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book18} alt="Yellowface by R.F. Kuang" />
            <CardBody>
              <CardName>Yellowface</CardName>
              <CardDescription>Yellowface by R.F. Kuang.</CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book18)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book19}
              alt="The Second Ending by Michelle Hoffman"
            />
            <CardBody>
              <CardName>The Second Ending</CardName>
              <CardDescription>
                The Second Ending by Michelle Hoffman.
              </CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book19)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book20} alt="The Wishing Game by Meg Shaffer" />
            <CardBody>
              <CardName>The Wishing Game</CardName>
              <CardDescription>
                The Wishing Game by Meg Shaffer.
              </CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book20)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book21}
              alt="Same Time Next Summer by Annabel Monaghan"
            />
            <CardBody>
              <CardName>Same Time Next Summer</CardName>
              <CardDescription>
                Same Time Next Summer by Annabel Monaghan.
              </CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book21)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book22} alt="Banyan Moon by Thao Thai" />
            <CardBody>
              <CardName>Banyan Moon</CardName>
              <CardDescription>Banyan Moon by Thao Thai.</CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book22)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
        </CardContainer>
      </BooksList>

      <Title style={{ marginLeft: "80px", marginTop: "40px" }}>
        Best Selling Books of 2023
      </Title>

      <BooksList>
        <PreviousButton onClick={() => handlePreviousClick(cardContainerRef2)}>
          <img src={leftArrowImage} alt="Left arrow" />
        </PreviousButton>
        <NextButton onClick={() => handleNextClick(cardContainerRef2)}>
          <img src={rightArrowImage} alt="Right arrow" />
        </NextButton>

        <CardContainer ref={cardContainerRef2}>
          <Card>
            <CardImage src={book16} alt="Paper Names by Susie Luo" />
            <CardBody>
              <CardName>Paper Names</CardName>
              <CardDescription>Paper Names by Susie Luo.</CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book16)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book17}
              alt="The Collected Regrets of Clover by Mikki Brammer"
            />
            <CardBody>
              <CardName>The Collected Regrets of Clover</CardName>
              <CardDescription>
                The Collected Regrets of Clover by Mikki Brammer.
              </CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book17)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book18} alt="Yellowface by R.F. Kuang" />
            <CardBody>
              <CardName>Yellowface</CardName>
              <CardDescription>Yellowface by R.F. Kuang.</CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book18)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book19}
              alt="The Second Ending by Michelle Hoffman"
            />
            <CardBody>
              <CardName>The Second Ending</CardName>
              <CardDescription>
                The Second Ending by Michelle Hoffman.
              </CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book19)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book20} alt="The Wishing Game by Meg Shaffer" />
            <CardBody>
              <CardName>The Wishing Game</CardName>
              <CardDescription>
                The Wishing Game by Meg Shaffer.
              </CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book20)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book21}
              alt="Same Time Next Summer by Annabel Monaghan"
            />
            <CardBody>
              <CardName>Same Time Next Summer</CardName>
              <CardDescription>
                Same Time Next Summer by Annabel Monaghan.
              </CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book21)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book22} alt="Banyan Moon by Thao Thai" />
            <CardBody>
              <CardName>Banyan Moon</CardName>
              <CardDescription>Banyan Moon by Thao Thai.</CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book22)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>{" "}
          <Card>
            <CardImage
              src={book2}
              alt="City Under One Roof by Iris Yamashita"
            />
            <CardBody>
              <CardName>City Under One Roof</CardName>
              <CardDescription>
                City Under One Roof by Iris Yamashita.
              </CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book2)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book3}
              alt="The World and All That It Holds by Aleksandar Hemon"
            />
            <CardBody>
              <CardName>The World and All That It Holds</CardName>
              <CardDescription>
                The World and All That It Holds by Aleksandar Hemon.
              </CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book3)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book4} alt="Maame by Jessica George" />
            <CardBody>
              <CardName>Maame</CardName>
              <CardDescription>Maame by Jessica George.</CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book4)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book5} alt="Essex Dogs by Dan Jones" />
            <CardBody>
              <CardName>Essex Dogs</CardName>
              <CardDescription>Essex Dogs by Dan Jones.</CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book5)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book6}
              alt="What Happened to Ruthy Ramirez by Claire Jiménez"
            />
            <CardBody>
              <CardName>What Happened to Ruthy Ramirez</CardName>
              <CardDescription>
                What Happened to Ruthy Ramirez by Claire Jiménez.
              </CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book6)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book7} alt="A Death at the Party by Amy Stuart" />
            <CardBody>
              <CardName>A Death at the Party</CardName>
              <CardDescription>
                A Death at the Party by Amy Stuart.
              </CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book7)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book8}
              alt="The God of Endings by Jacqueline Holland"
            />
            <CardBody>
              <CardName>The God of Endings</CardName>
              <CardDescription>
                The God of Endings by Jacqueline Holland.
              </CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book8)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book1} alt="Age of Vice by Deepti Kapoor" />
            <CardBody>
              <CardName>Age of Vice</CardName>
              <CardDescription>Age of Vice by Deepti Kapoor.</CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book1)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book9} alt="Now You See Us by Balli Kaur Jaswal" />
            <CardBody>
              <CardName>Now You See Us</CardName>
              <CardDescription>
                Now You See Us by Balli Kaur Jaswal.
              </CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book9)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book10} alt="Dust Child by Nguyễn Phan Quế Mai" />
            <CardBody>
              <CardName>Dust Child</CardName>
              <CardDescription>
                Dust Child by Nguyễn Phan Quế Mai.
              </CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book10)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book11}
              alt="The Mostly True Story of Tanner & Louise by Colleen Oakley"
            />
            <CardBody>
              <CardName>The Mostly True Story of Tanner & Louise</CardName>
              <CardDescription>
                The Mostly True Story of Tanner & Louise by Colleen Oakley.
              </CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book11)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book12} alt="Homecoming by Kate Morton" />
            <CardBody>
              <CardName>Homecoming</CardName>
              <CardDescription>Homecoming by Kate Morton.</CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book12)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book13}
              alt="Symphony of Secrets by Brendan Slocumb"
            />
            <CardBody>
              <CardName>Symphony of Secrets</CardName>
              <CardDescription>
                Symphony of Secrets by Brendan Slocumb.
              </CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book13)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book14} alt="Silver Alert by Lee Smith" />
            <CardBody>
              <CardName>Silver Alert</CardName>
              <CardDescription>Silver Alert by Lee Smith.</CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book14)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book15}
              alt="Only Love Can Hurt Like This by Paige Toon"
            />
            <CardBody>
              <CardName>Only Love Can Hurt Like This</CardName>
              <CardDescription>
                Only Love Can Hurt Like This by Paige Toon.
              </CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book15)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
        </CardContainer>
      </BooksList>

      <Title style={{ marginLeft: "80px", marginTop: "40px" }}>
        All Time Favourites
      </Title>
      <BooksList>
        <PreviousButton onClick={() => handlePreviousClick(cardContainerRef3)}>
          <img src={leftArrowImage} alt="Left arrow" />
        </PreviousButton>
        <NextButton onClick={() => handleNextClick(cardContainerRef3)}>
          <img src={rightArrowImage} alt="Right arrow" />
        </NextButton>

        <CardContainer ref={cardContainerRef3}>
          <Card>
            <CardImage src={book12} alt="Homecoming by Kate Morton" />
            <CardBody>
              <CardName>Homecoming</CardName>
              <CardDescription>Homecoming by Kate Morton.</CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book12)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book13}
              alt="Symphony of Secrets by Brendan Slocumb"
            />
            <CardBody>
              <CardName>Symphony of Secrets</CardName>
              <CardDescription>
                Symphony of Secrets by Brendan Slocumb.
              </CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book13)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book14} alt="Silver Alert by Lee Smith" />
            <CardBody>
              <CardName>Silver Alert</CardName>
              <CardDescription>Silver Alert by Lee Smith.</CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book14)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book15}
              alt="Only Love Can Hurt Like This by Paige Toon"
            />
            <CardBody>
              <CardName>Only Love Can Hurt Like This</CardName>
              <CardDescription>
                Only Love Can Hurt Like This by Paige Toon.
              </CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book15)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book1} alt="Age of Vice by Deepti Kapoor" />
            <CardBody>
              <CardName>Age of Vice</CardName>
              <CardDescription>Age of Vice by Deepti Kapoor.</CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book1)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book2}
              alt="City Under One Roof by Iris Yamashita"
            />
            <CardBody>
              <CardName>City Under One Roof</CardName>
              <CardDescription>
                City Under One Roof by Iris Yamashita.
              </CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book2)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book3}
              alt="The World and All That It Holds by Aleksandar Hemon"
            />
            <CardBody>
              <CardName>The World and All That It Holds</CardName>
              <CardDescription>
                The World and All That It Holds by Aleksandar Hemon.
              </CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book3)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book4} alt="Maame by Jessica George" />
            <CardBody>
              <CardName>Maame</CardName>
              <CardDescription>Maame by Jessica George.</CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book4)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book5} alt="Essex Dogs by Dan Jones" />
            <CardBody>
              <CardName>Essex Dogs</CardName>
              <CardDescription>Essex Dogs by Dan Jones.</CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book5)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book6}
              alt="What Happened to Ruthy Ramirez by Claire Jiménez"
            />
            <CardBody>
              <CardName>What Happened to Ruthy Ramirez</CardName>
              <CardDescription>
                What Happened to Ruthy Ramirez by Claire Jiménez.
              </CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book6)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book7} alt="A Death at the Party by Amy Stuart" />
            <CardBody>
              <CardName>A Death at the Party</CardName>
              <CardDescription>
                A Death at the Party by Amy Stuart.
              </CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book7)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book8}
              alt="The God of Endings by Jacqueline Holland"
            />
            <CardBody>
              <CardName>The God of Endings</CardName>
              <CardDescription>
                The God of Endings by Jacqueline Holland.
              </CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book8)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book9} alt="Now You See Us by Balli Kaur Jaswal" />
            <CardBody>
              <CardName>Now You See Us</CardName>
              <CardDescription>
                Now You See Us by Balli Kaur Jaswal.
              </CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book9)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book10} alt="Dust Child by Nguyễn Phan Quế Mai" />
            <CardBody>
              <CardName>Dust Child</CardName>
              <CardDescription>
                Dust Child by Nguyễn Phan Quế Mai.
              </CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book10)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book11}
              alt="The Mostly True Story of Tanner & Louise by Colleen Oakley"
            />
            <CardBody>
              <CardName>The Mostly True Story of Tanner & Louise</CardName>
              <CardDescription>
                The Mostly True Story of Tanner & Louise by Colleen Oakley.
              </CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book11)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book16} alt="Paper Names by Susie Luo" />
            <CardBody>
              <CardName>Paper Names</CardName>
              <CardDescription>Paper Names by Susie Luo.</CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book16)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book17}
              alt="The Collected Regrets of Clover by Mikki Brammer"
            />
            <CardBody>
              <CardName>The Collected Regrets of Clover</CardName>
              <CardDescription>
                The Collected Regrets of Clover by Mikki Brammer.
              </CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book17)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book18} alt="Yellowface by R.F. Kuang" />
            <CardBody>
              <CardName>Yellowface</CardName>
              <CardDescription>Yellowface by R.F. Kuang.</CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book18)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book19}
              alt="The Second Ending by Michelle Hoffman"
            />
            <CardBody>
              <CardName>The Second Ending</CardName>
              <CardDescription>
                The Second Ending by Michelle Hoffman.
              </CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book19)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book20} alt="The Wishing Game by Meg Shaffer" />
            <CardBody>
              <CardName>The Wishing Game</CardName>
              <CardDescription>
                The Wishing Game by Meg Shaffer.
              </CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book20)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book21}
              alt="Same Time Next Summer by Annabel Monaghan"
            />
            <CardBody>
              <CardName>Same Time Next Summer</CardName>
              <CardDescription>
                Same Time Next Summer by Annabel Monaghan.
              </CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book21)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book22} alt="Banyan Moon by Thao Thai" />
            <CardBody>
              <CardName>Banyan Moon</CardName>
              <CardDescription>Banyan Moon by Thao Thai.</CardDescription>
              <BorrowListButton onClick={() => handleBorrowClick(book22)}>
                Borrow Book
              </BorrowListButton>
            </CardBody>
          </Card>
        </CardContainer>
      </BooksList>
    </div>
  );
};

export default BookCards;
