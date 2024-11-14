export const Comments = ({ comment }) => {
  return (
    <li className="list-none flex items-center gap-3 justify-between px-3 py-2 bg-zinc-900 mt-3 rounded-sm text-[.9rem] md:text-[1rem]">
      <span>{comment.author.username.toLowerCase()}</span>
      <span>{comment.content}</span>
    </li>
  );
};
