import styled from "styled-components";
import palette from "../../lib/style/palette";
import Responsive from "../common/Responsive";
import Button from '../common/Button'
import reply from "../../modules/reply";

const ReplyFormBlock = styled(Responsive)`
    margin-top: 3rem;
    margin-bottom: 3rem;
    background: ${palette.gray[2]};
    border: none;
    border-radius: 1rem;
    h4{
        padding-top: 1rem;
        margin-left: 1.5px;
    }
    .input-reply{
        width: 90%;
        border: none;
        border-radius: 0.5rem;
        margin-bottom: 1rem;
        margin-top: 1rem;
        line-height:2rem;
        display:inline;
        outline:none;
        box-sizing: border-box;
    }
    button{
        width: 10%;
        margin-left: -10px;
        line-height: 1.66rem;
        outline:none;
        display:inline;
        box-sizing: border-box;
    }
    .reply-wrap{
        margin-top: 1rem;
    }
    .reply-user{
        margin-right: 1rem;
    }
    .reply-date{
        color: ${palette.gray[5]};
        font-size: 3px;
    }
    .reply-content{
        margin-top: 0.5rem;
        color: ${palette.gray[6]};
        font-size: 15px;
    }
    .reply-update,.reply-delete{
        float: right;
        border: none;
        width: 50px;
    }
`


const ReplyForm = ({ onSubmit, onChange, reply, comment, loading }) => {

    if (loading || !comment.commentReply) return null;

    return (
        <ReplyFormBlock>
            <form onSubmit={onSubmit}>
                <h4>댓글</h4>
                {comment.commentReply && (<>
                    {comment.commentReply.map((data) =>
                        <div className="reply-wrap">
                            <strong className="reply-user">{data.user}</strong>
                            <span className="reply-date">{new Date(data.publishedDate).toLocaleDateString()}</span>
                            {/* <button className="reply-update">수정</button>
                            <button className="reply-delete">삭제</button> */}
                            <div className="reply-content">{data.replyContent}</div>
                        </div>
                    )}
                </>)}
                <input className="input-reply" name="replyContent" value={reply.replyContent} type="text" placeholder="댓글을 입력하세요" onChange={onChange}></input>
                <Button>등록</Button>
            </form>
        </ReplyFormBlock>
    );
};

export default ReplyForm;