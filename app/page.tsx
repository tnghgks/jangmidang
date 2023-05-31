import Header from "@/components/Header";
import ImageSlider from "@/components/common/ImageSlider";
import IntroCard from "@/components/IntroCard";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section>
          <ImageSlider
            images={[
              "https://jangmidang.s3.ap-northeast-2.amazonaws.com/a430ef4f75ff49f7b9d74d71fadb0801.jpg",
              "https://jangmidang.s3.ap-northeast-2.amazonaws.com/d39ce942635a43f8b471e6ddebb1dae2.jpg",
              "https://jangmidang.s3.ap-northeast-2.amazonaws.com/bd1c1f13194d4127b1a808851d5dc1cc_1440.jpg",
            ]}
          />
          <div className="w-full h-[301px] gap-5 flex justify-start px-11 mt-9 mb-6 flex-wrap md:flex-nowrap">
            <IntroCard bgSrc="https://jangmidang.s3.ap-northeast-2.amazonaws.com/a430ef4f75ff49f7b9d74d71fadb0801.jpg">
              아이디어스
            </IntroCard>
            <IntroCard bgSrc="https://jangmidang.s3.ap-northeast-2.amazonaws.com/d39ce942635a43f8b471e6ddebb1dae2.jpg">
              상품 소개
            </IntroCard>
            <IntroCard bgSrc="https://jangmidang.s3.ap-northeast-2.amazonaws.com/bd1c1f13194d4127b1a808851d5dc1cc_1440.jpg">
              매장 안내
            </IntroCard>
          </div>
        </section>
      </main>
    </>
  );
}
