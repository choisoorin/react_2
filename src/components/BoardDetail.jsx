import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Header from "./Header";

export default function BoardDetail() {
  const { boardID } = useParams();
  const { search, pathname, hash } = useLocation();

  return (
    <>
      <Header />
      <h2>{boardID}번 게시글 입니다.</h2>
      <p>쿼리 : {search}</p>
      <p>주소 : {pathname}</p>
      <p>해쉬 : {hash}</p>
    </>
    // http://localhost:3000/board/1?test:test#hash
    // 쿼리 : ?test:test
    // 주소 : /board/1
    // 해쉬 : #hash
  );
}

// 구조분해할당
// const { boardID } = useParams();

// return (
//   <>
//     <Header />
//     <h2>{boardID}번 게시글 입니다.</h2>
//   </>
// );

// const params = useParams();
// console.log(params);

// const location = useLocation();
// console.log(location);
// return (
//   <>
//     <Header />
//     <h2>{params.boardID}번 게시글 입니다.</h2>
//   </>
// );
