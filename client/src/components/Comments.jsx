export const Comments = ({ comment }) => {
  return (
    <li className="list-none flex items-center gap-3 justify-between px-3 py-2 bg-zinc-900 mt-3 rounded-sm text-[.9rem] md:text-[1rem]">
      <div className="w-[35px] h-[35px] rounded-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={comment.author.profileImage}
          alt={comment.author.username}
        />
      </div>
      <span>{comment.content}</span>
    </li>
  );
};
