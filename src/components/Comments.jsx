import { useState } from "react";
import SingleComment from "./SingleComment";

function Comments(props) {
  const [textComment, setTextComment] = useState("");

  const handleInput = (e) => {
    console.log("input >>>", e.target.value);
    setTextComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", textComment);
  };

  return (
    <div className="card-comments">
      <form className="comments-item-create" onSubmit={handleSubmit}>
        <input type="text" value={textComment} onChange={handleInput}></input>
        <input type="submit" hidden />
      </form>
      <SingleComment />
    </div>
  );
}

export default Comments;
