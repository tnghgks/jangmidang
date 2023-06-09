import Tag from "../atoms/Tag";

interface IProps {
  tagList: string[];
}

export default function TagList({ tagList }: IProps) {
  return (
    <div className="flex flex-wrap gap-2 py-5">
      {tagList.map((tag, i) => (
        <Tag key={i}>{tag}</Tag>
      ))}
    </div>
  );
}
