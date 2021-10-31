import WriteForm from "../../components/comment/WriteForm";
import { useDispatch, useSelector } from "react-redux";
import { changeField } from "../../modules/comment";

const WriteContainer = ({ type }) => {
    const dispatch = useDispatch();
    const { comment } = useSelector(({ comment }) => ({
        comment: comment.comment
    }))
    const onChange = e => {
        const { name, value } = e.target;
        dispatch(changeField({
            key: name,
            value
        }))

    }
    return (
        <WriteForm
            type={type}
            comment={comment}
            onChange={onChange}
        ></WriteForm>
    );
}

export default WriteContainer;