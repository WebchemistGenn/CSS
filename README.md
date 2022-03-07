# [GOD] CSS 발표

### CSS-in-CSS

> CSS 전처리기(Preprocessor)가 필요합니다.
> 

sass/scss([link](https://sass-lang.com/documentation/at-rules/control)), less, stylus

**css module**

### CSS-in-JS

emotion, jsx

**styled-components**

### CSS-in-JS의 장점

```bash
Vjeux는 CSS를 작성하는 어려움을 다음과 같이 설명하였으며 CSS-in-JS로 이들 이슈를 모두 해결할 수 있다고 강조했습니다.
- Global namespace: 글로벌 공간에 선언된 이름의 명명 규칙 필요
- Dependencies: CSS간의 의존 관계를 관리
- Dead Code Elimination: 미사용 코드 검출
- Minification: 클래스 이름의 최소화
- Sharing Constants: JS와 CSS의 상태 공유
- Non-deterministic Resolution: CSS 로드 우선 순위 이슈
- Isolation: CSS와 JS의 상속에 따른 격리 필요 이슈
```

### Perfomance 비교 ( 첫페이지 전환 )

styled-components ( CSS-in-JS ) 358ms 소요

![https://image.samsungsds.com/kr/insights/web_component_img07.jpg?queryString=20220217104250](https://image.samsungsds.com/kr/insights/web_component_img07.jpg?queryString=20220217104250)

CSS module ( CSS-in-CSS ) 90.5ms 소요

![https://image.samsungsds.com/kr/insights/web_component_img08.jpg?queryString=20220217104250](https://image.samsungsds.com/kr/insights/web_component_img08.jpg?queryString=20220217104250)

**Javascript의 해석**이 필요함과 필요하지 않음으로 인해서 페이지 로딩시에 다음과 같은 성능 차이가 존재합니다.

### 결론

개발자의 사용성을 위한다면 CSS-in-JS를 이용한 방법을 사용자의 편의를 위한 인터랙티브 한 웹이라면 CSS-in-CSS를 이용하는 것이 좋다 생각합니다.  하지만 내부에서 쓰는 Admin등이 아닌 이상 대부분 사용자에게 제공되는 것이기때문에 개인적으로는 CSS-in-CSS를 이용하는 것이 좋다고 보고 있습니다.

### 2022년 CSS 소식 ([link](https://www.smashingmagazine.com/2022/03/new-css-features-2022/))

- Container Query
- :has()
- @when/@else
- accent-color
- CSS Color 함수들
- Cascade Layers
- Subgrid
- Scroll Timeline
- **Nesting**

### 많이 쓰는 유용한 CSS

position: fixed, absolute, sticky

display: flex, grid

transform

transition

animation