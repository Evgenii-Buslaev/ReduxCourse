import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { commentCreate } from "../redux/actions";
import SingleComment from "./SingleComment";

function Comments(props) {
  const [textComment, setTextComment] = useState("");

  const comments = useSelector((state) => {
    const { commentsReducer } = state;
    return commentsReducer.comments;
  });

  const dispatch = useDispatch();

  const handleInput = (e) => {
    setTextComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    dispatch(commentCreate(textComment, id));
  };

  console.log("coments >>>", comments);

  return (
    <div className="card-comments">
      <form className="comments-item-create" onSubmit={handleSubmit}>
        <input type="text" value={textComment} onChange={handleInput}></input>
        <input type="submit" hidden />
      </form>
      {!!comments.length &&
        comments.map((comment) => (
          <SingleComment key={comment.id} data={comment} />
        ))}
    </div>
  );
}

export default Comments;
