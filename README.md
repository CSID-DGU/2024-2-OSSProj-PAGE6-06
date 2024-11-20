# 2024-2-OSSProj-Page6-06
![KakaoTalk_20241120_153832948](https://github.com/user-attachments/assets/57b38560-5fe2-4762-ae21-00f94528da80)<br>  
### 0. 팀구성
| 구분 |  성명  |    역할    |     소속학과     |        이메일        |
|:----:|:------:|:----------:|:----------------:|:--------------------:|
| 팀장 | 김수영 | 프론트엔드 | 산업시스템공학과 | ksoo5386@dgu.ac.kr |
| 팀원 | 류슬기 | 프론트엔드 | 산업시스템공학과 | 2021112414@dgu.ac.kr |
| 팀원 | 박서현 | 백엔드 | 경영정보학과 | 2022111511@dgu.ac.kr |
| 팀원 | 서가은 | 백엔드 | 통계학과 | gani_0@dgu.ac.kr |


### 1. 개발 목표
- 사용자의 지속적인 독서 활동 독려 및 자기주도적인 독서 습관 강화
- 독서 장소를 기반으로 한 기능을 추가하여 자신이 선호하는 장소에서의 독서 기록 공유 및 교류 강화
- 도서에 대한 감상평 및 루틴 기록을 쉽게 조회하여 자신의 독서 과정을 아카이빙 가능
- 사용자가 쉽게 서비스에 적응할 수 있도록 직관적인 디자인 구현
- 같은 루틴을 함께 수행하며 기록 공유를 통해 독서에 대한 지속적인 동기부여


### 2. 설계 및 구현
- 서비스 구조도
  <br>
  <img width="764" alt="image (3)" src="https://github.com/user-attachments/assets/f436ebe2-2c1e-4658-892a-43e413b343dd">
1. 사용자는 브라우저나 앱을 통해 서버의 서비스를 요청
2. 클라이언트 측에서 Request를 보내면 Nginx는 정적인 파일의 경우 직접 응답, 동적인 Request에 대해서는 Gunicorn으로 전달
3. Gunicorn은 Application Server인 Django로 요청
4. 이후 다시 Gunicorn, Nginx를 거친 후 최종적으로 Client에게 Response 전달
5. FastAPI를 client(next.js)에서 요청
6. Vercel로 사용자에게 제공될 페이지 배포
<br>
<br>

- 유저 플로우
  <br>
  ![image (4)](https://github.com/user-attachments/assets/5916df90-5203-462e-ac82-8853bd9c1d8e)
<br>
<br>

- ERD
![OSSProj (3)](https://github.com/user-attachments/assets/b7ff3221-fe2b-4519-b652-f468bab836ef)
<br>
<br>

- API명세서<br>
![KakaoTalk_20241120_152420880](https://github.com/user-attachments/assets/9d1580cf-376b-4330-8f00-39cb4150797e)
<br>


### 3. 서비스 구현 결과



### 4. 기대효과


### 5. 자료 관리
- 제안발표<br>
<a href='https://github.com/CSID-DGU/2024-2-OSSProj-PAGE6-06/blob/main/Doc/%EC%88%98%ED%96%89%EA%B3%84%ED%9A%8D%EC%84%9C.md'>수행계획서</a><br>
<a href='https://github.com/CSID-DGU/2024-2-OSSProj-PAGE6-06/blob/main/Doc/%EC%A0%9C%EC%95%88%EC%84%9C%EB%B0%9C%ED%91%9C%EC%9E%90%EB%A3%8C_PAGE6.pdf'>발표자료</a><br>

- 중간발표<br>
<a href='https://github.com/CSID-DGU/2024-2-OSSProj-PAGE6-06/blob/main/Doc/%5BOSSP-2%5D%20%EC%98%A4%ED%94%88%EC%86%8C%EC%8A%A4SW%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%EC%A4%91%EA%B0%84%EB%B3%B4%EA%B3%A0%EC%84%9C.pdf'>중간보고서</a><br>
<a href='https://github.com/CSID-DGU/2024-2-OSSProj-PAGE6-06/blob/main/Doc/%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%A1%E1%86%AB%E1%84%87%E1%85%A1%E1%86%AF%E1%84%91%E1%85%AD_PAGE6.pdf'>중간발표자료</a><br>
- 최종발표<br>
