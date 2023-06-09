import TagList from "@/components/moecules/TagList";
import FilterHeader from "@/components/organisms/FilterHeader";
import ProductCardList from "@/components/organisms/ProductCardList";

export default function page() {
  return (
    <div className="bg-slate-100 p-5 min-h-screen">
      <FilterHeader />
      <TagList tagList={["test", "Test"]} />
      <ProductCardList
        cards={[
          {
            id: 1,
            img: "https://jangmidang.s3.ap-northeast-2.amazonaws.com/a430ef4f75ff49f7b9d74d71fadb0801.jpg",
            title: "제목",
            description: "설명",
          },
          {
            id: 2,
            img: "https://jangmidang.s3.ap-northeast-2.amazonaws.com/a430ef4f75ff49f7b9d74d71fadb0801.jpg",
            title: "제목",
            description: "설명",
          },
          {
            id: 3,
            img: "https://jangmidang.s3.ap-northeast-2.amazonaws.com/a430ef4f75ff49f7b9d74d71fadb0801.jpg",
            title: "제목",
            description: "설명",
          },
          {
            id: 4,
            img: "https://jangmidang.s3.ap-northeast-2.amazonaws.com/a430ef4f75ff49f7b9d74d71fadb0801.jpg",
            title: "제목",
            description: "설명",
          },
          {
            id: 5,
            img: "https://jangmidang.s3.ap-northeast-2.amazonaws.com/a430ef4f75ff49f7b9d74d71fadb0801.jpg",
            title: "제목",
            description: "설명",
          },
        ]}
      />
    </div>
  );
}
