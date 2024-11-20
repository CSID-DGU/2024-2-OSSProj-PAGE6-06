import React, { useState, useEffect } from 'react';
import * as S from './Styled';

function RandomBookList() {
    const topbooks = [
        {
            "book": {
                "title": "오만과 편견",
                "author": "제인 오스틴 (지은이), 윤지관, 전승희 (옮긴이)",
                "coverImage": "https://image.aladin.co.kr/product/43/68/coversum/s937460882_1.jpg",
                "summary": "제인 오스틴의 대표작 <오만과 편견>이 보다 정확하고 말끔한 번역으로 재출간됐다. 역자인 윤지관과 전승희는 10여 년에 걸친 기간 동안 철저한 원문대조를 통해, 본래의 의미와 문체를 생생하게 되살려내기 위해 노력했다고."
            }
        },
        {
            "book": {
                "title": "채식주의자 (리마스터판) - 2024 노벨문학상 수상작가",
                "author": "한강 (지은이)",
                "coverImage": "https://image.aladin.co.kr/product/29137/2/coversum/8936434594_2.jpg",
                "summary": "2016년 인터내셔널 부커상을 수상하며 한국문학의 입지를 한단계 확장시킨 한강의 장편소설. 상처받은 영혼의 고통과 식물적 상상력의 강렬한 결합을 정교한 구성과 흡인력 있는 문체로 보여주며 섬뜩한 아름다움의 미학을 한강만의 방식으로 완성한 역작이다."
            }
        },
        {
            "book": {
                "title": "천 개의 파랑 - 2019년 제4회 한국과학문학상 장편 대상",
                "author": "천선란 (지은이)",
                "coverImage": "https://image.aladin.co.kr/product/24895/69/coversum/s142939648_2.jpg",
                "summary": "한국과학문학상 장편 대상 수상작. 2019년 첫 장편소설 &lt;무너진 다리&gt;로 SF 팬들에게 눈도장을 찍었고, 2020년 7월, 소설집 &lt;어떤 물질의 사랑&gt;을 통해 우리 SF의 대세로 굳건히 자리 잡은 천선란의 작품이다."
            }
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % topbooks.length);
        }, 5000); // 5초 간격

        return () => clearInterval(interval); 
    }, [topbooks.length]);

    return (
        <S.RandomBookListContainer>
            <S.Title>루티너들이 읽고 있는 책</S.Title>
            <S.SliderWrapper>
                        <S.BookCard>
                        <S.Slider currentIndex={currentIndex}>
                        {topbooks.map((item, index) => (
                            <S.BookContent>
                                <S.BookInfoWrapper key={index}>
                                    <S.BookInfo>
                                        <S.BookImage 
                                            src={item.book.coverImage} 
                                            width={114}
                                            height={163}
                                            alt={`${item.book.title} 커버 이미지`} 
                                        />
                                        <S.BookTitle>{item.book.title}</S.BookTitle>
                                        <S.Author>{item.book.author}</S.Author>
                                    </S.BookInfo>
                                </S.BookInfoWrapper>
                                <S.Story>{item.book.summary}</S.Story>
                            </S.BookContent>
                        ))}
                        </S.Slider>
                        </S.BookCard>
            </S.SliderWrapper>
            <S.IndicatorContainer>
                {topbooks.map((_, index) => (
                    <S.Indicator 
                        key={index} 
                        isActive={index === currentIndex}
                    />
                ))}
            </S.IndicatorContainer>
        </S.RandomBookListContainer>
    );
}

export default RandomBookList;