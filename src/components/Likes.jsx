function Likes({ likes }) {
  console.log(likes);
  return (
    <div className="button-controls">
      <button>❤ {likes}</button>
      <button>Dislike</button>
    </div>
  );
}

export default Likes;
