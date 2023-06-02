import Header from "@/components/Header";
import ImageSlider from "@/components/common/ImageSlider";
import IntroCard from "@/components/IntroCard";
import Footer from "@/components/Footer";
import IframePlayer from "@/components/common/IframePlayer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <h1 className="sr-only">장미당 메인</h1>
        <section>
          <h2 className="sr-only">장미당 소개 배너</h2>
          <ImageSlider
            images={[
              "https://jangmidang.s3.ap-northeast-2.amazonaws.com/a430ef4f75ff49f7b9d74d71fadb0801.jpg",
              "https://jangmidang.s3.ap-northeast-2.amazonaws.com/d39ce942635a43f8b471e6ddebb1dae2.jpg",
              "https://jangmidang.s3.ap-northeast-2.amazonaws.com/bd1c1f13194d4127b1a808851d5dc1cc_1440.jpg",
            ]}
          />
          <div className="w-full h-[301px] gap-5 flex justify-start px-11 mt-9 mb-6 flex-wrap md:flex-nowrap">
            <IntroCard
              link="https://www.idus.com/w/artist/fc8b4286-e4a1-426d-bc3b-f5778dc6711b/product"
              bgSrc="https://jangmidang.s3.ap-northeast-2.amazonaws.com/a430ef4f75ff49f7b9d74d71fadb0801.jpg"
            >
              아이디어스
            </IntroCard>
            <IntroCard bgSrc="https://jangmidang.s3.ap-northeast-2.amazonaws.com/d39ce942635a43f8b471e6ddebb1dae2.jpg">
              상품 소개
            </IntroCard>
            <IntroCard
              link="https://naver.me/535I3dbO"
              bgSrc="https://jangmidang.s3.ap-northeast-2.amazonaws.com/bd1c1f13194d4127b1a808851d5dc1cc_1440.jpg"
            >
              매장 안내
            </IntroCard>
          </div>
        </section>
        <section className="flex flex-col">
          <h2 className="sr-only">장미당 소개 영상</h2>
          <strong className="text-6xl mt-14 mb-16 text-center font-bold text-teal-700">
            About
          </strong>
          <div className="w-full flex justify-center items-center px-6 mb-[180px]">
            <IframePlayer src="https://www.youtube.com/embed/QM6t4KvHAsA" />
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
