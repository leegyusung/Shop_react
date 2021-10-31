import styled from "styled-components";
import Button from "../common/Button";
import Responsive from "../common/Responsive";
import palette from "../../lib/style/palette";
import { Link } from "react-router-dom";
import { useState } from "react";
//import WriteForm from "./WriteForm";

const CommentFormBlock = styled(Responsive)`
    margin-top: 3rem;

    button{
        margin-bottom: 1rem;
        margin-left: 59rem;
    }

`
const CommentLabel = styled.div`
    h3{
        text-decoration: solid;
        font-size: 40px;
        color: ${palette.gray[7]}
    }
`

const CommentFormDiv = styled.div`
    background: ${palette.gray[1]};
    padding: 1rem 1rem 1rem 1rem ;
    border-radius: 0.5rem;
    border: 2px solid ${palette.gray[1]};
    /* display: flex;
    justify-content: space-around;
    align-items: center; */
    margin-bottom:0.5rem;
    width: 100%;
    height: 100%;

    .day{
        float: right;
        color: ${palette.cyan[5]};
    }
   /* .main{
    width: 80%;
    height: 80%;
    text-align: left;
    box-sizing: border-box;
    .content{
        color: orange;
    }
   }
    .side{
    width: 20%;
    color: blue;
    float: right;
    box-sizing: border-box;
    } */
`

const CommentForm = ({ comments, loading }) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (loading || !comments) return null;


    return (
        <CommentFormBlock>
            <CommentLabel><h3>게시판</h3></CommentLabel>
            <Link to={`/comment/write/@${user.username}`}>
                <Button cyan>글쓰기</Button>
            </Link>
            {!loading && comments && (
                <>
                    {
                        comments.map(data =>
                            <Link to={`/comment/${data._id}`}>
                                <CommentFormDiv key={data._id}>
                                    <strong className="title">제목 : {data.commentTitle}</strong>
                                    <span className="day">{new Date(data.publishedDate).toLocaleDateString()}</span>
                                </CommentFormDiv>
                            </Link>
                        )
                    }
                </>
            )
            }
        </CommentFormBlock >
    );
};

export default CommentForm;