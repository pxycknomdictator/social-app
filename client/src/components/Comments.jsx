export const Comments = ({ comment }) => {
  return (
    <li className="list-none space-x-6">
      <span>{comment.author.username}</span>
      <span>{comment.content}</span>
    </li>
  );
};
