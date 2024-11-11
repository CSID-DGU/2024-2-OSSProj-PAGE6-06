import React, { useState } from 'react';
import * as S from './Styled';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function Book() {
    const [isOpen, setIsOpen] = useState(false); 
    const [selectedBook, setSelectedBook] = useState(""); 
    const books = ["만조를 기다리며", "바다와 나비", "밤의 여행자들", "별과 같은 시간", "별과 같은 시간"]; 

    const toggleDropdown = () => setIsOpen(!isOpen);

    const selectBook = (book) => {
        setSelectedBook(book);
        setIsOpen(false); 
        localStorage.setItem('book', book);
    };

    return (
        <S.InputContainer>
            <S.Label>What</S.Label>
            <S.DropdownContainer onClick={toggleDropdown}>
                <S.BookText>{selectedBook || "책을 선택하세요"}</S.BookText>
                <S.DownIcon icon={faChevronDown} onClick={toggleDropdown} />
            </S.DropdownContainer>
            
            {isOpen && (
                <S.DropdownListContainer>
                    {books.map((book, index) => (
                        <S.DropdownListItem key={index} onClick={() => selectBook(book)}>
                            {book}
                        </S.DropdownListItem>
                    ))}
                </S.DropdownListContainer>
            )}
        </S.InputContainer>
    );
}