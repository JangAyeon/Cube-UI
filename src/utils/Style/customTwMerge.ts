import { extendTailwindMerge } from "tailwind-merge";

export const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      // 이렇게 해야 저희가 설정한 색상과 텍스트 클래스가 병합되지 않습니다.
      "font-size": [
        "text-Heading_100",
        "text-Title_200",
        "text-Title_100",
        "text-Detail_300",
        "text-Detail_200",
        "text-Detail_100",
        "text-Body_300",
        "text-Body_200",
        "text-Body_100",
      ],
      // tailwind-animate라는 라이브러리를 사용할 때도 문제가 있어 등록했습니다.
      //   animate: ["animate-in", "animate-out", "animate-none"],
    },
  },
});
