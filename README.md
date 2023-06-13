# 🖥프로젝트 소개

![cap](https://github.com/tnghgks/jangmidang/assets/17325845/918645ca-3d82-4eb9-9b93-d3296b8af2ad)

**배포 링크 : https://jangmidang.vercel.app/ **

**장미당**은 실제 서비스되고 있는 오프라인 매장을 홍보하기 위한 페이지 제작 프로젝트입니다.

# ⚙ 기술스택

| **Front-End**                              | **Back-End**                       | **형상 관리**    | **디자인** | **배포** |
| ------------------------------------------ | ---------------------------------- | ---------------- | ---------- | -------- |
| TypeScript </br> Next.js </br> tailwindcss | Next.js </br> MongoDB </br> AWS S3 | git </br> Github | Figma      | vercel   |

# 🔊 스택 사용 근거

## Front-End 기술 스택

> **TypeScript**

정적 타입을 제공하는 `TypeScript`를 사용하여 초기에 버그를 차단하고 타입핑으로 인한 자동완성 기능을 사용하여 개발 효율을 올리기 위해 사용하였습니다.

> **Next.js**

실제 운영되고있는 오프라인 매장을 홍보하기위한 페이지를 제작함에 있어서 검색엔진최적화이 중요하기 때문에 SSG와 SSR을 제공하는 `Next.js`를 선택하였습니다. 또한 Next 13버전에 새로 나온 서버컴포넌트(RSC)를 공부하기위해 도입한 이유도 있습니다.

> **tailwindcss**

현재 `Next.js`에서 서버컴포넌트를 CSS-in-JS를 활용하여 스타일링하기 위해선 클라이언트 컴포넌트에 스타일을 입히고 랩핑하여 사용하는 방법밖엔 없어서 서버컴포넌트를 효율적으로 스타일링하고, 불필요한 depth를 없애기위해 tailwindcss를 사용하였습니다.

## 배포

> **vercel**

`Next.js`를 만든 vercel을 활용하여 쉽고 빠르게 배포할 수 있었습니다.
