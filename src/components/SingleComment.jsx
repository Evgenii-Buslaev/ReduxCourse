function SingleComment(props) {
  console.log("singleComment props >", props);

  return (
    <form className="comments-item">
      <div className="comments-item-delete">&times;</div>
      <input type="text"></input>
      <input type="submit" hidden />
    </form>
  );
}

export default SingleComment;
