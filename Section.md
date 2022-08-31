# HTML 구획

### 시멘틱 태그와 논시멘틱 태그

> 시멘틱 태그란?
>
> > 의미에 맞게 태그를 작성하는 것
> > ex)<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/339adf9f-14eb-4052-bc4f-aede10e29d86/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220831T081506Z&X-Amz-Expires=86400&X-Amz-Signature=5472a0a178b9ae0d197e14b401ba37691df3685bd017aeee57da7b538d843c85&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject" width=80% title="HTML 구획" alt="HTML 구획"></img>

> 논시멘틱 태그란?
>
> > 어떻게 사용하든 상관이 없는 태그
> > ex) &lt;div&gt;, &lt;span&gt;

---

## `<body>`

- 실제 사용자에게 보여지는 문서의 컨텐츠를 나타내는 요소

## `<article>`

- 독립적으로 구분하거나 재사용할 수 있는 구획

- 아래 이미지처럼 어떤 페이지에 붙여도 독립적으로 사용 가능하다면 article 요소를 고려해볼 것
  ![스크린샷 2022-01-07 오후 1.06.42.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/053a5450-560b-475a-aca1-dcafd7ed1864/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-01-07_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_1.06.42.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220831T081924Z&X-Amz-Expires=86400&X-Amz-Signature=bbc49ba8a3274366676c2353f69af6fda650c9fb6b9dfea735107647c44660d5&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA%25202022-01-07%2520%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE%25201.06.42.png%22&x-id=GetObject)

- 위젯도 article 요소를 사용함

## `<section>`

- 일반적으로 연관성 있는 문서의 구획을 나누고자 할 때 사용하는 요소

<aside>
💡 section vs article

- article 요소는 독립적 콘텐츠(다른 서비스에 가져다 놔도 이상하지 않음)
- section 요소는 사이트 내 연관 콘텐츠(다른 서비스에 가져다 놓으면 이상함)
- article과 section 요소는 heading 요소(h1~h6)와 함께 사용하는 것을 권장(높이 없이 비워두기도 함)

</aside>

## `<header>`

- 특정한 컨텐츠의 시작 부분을 나타내는 요소
- 일반적으로 구역의 제목을 포함

## **`<h1> … <h6>`**

- heading
- 제목을 지정하기 위해 사용
- `<h1>내용</h1> ~ <h6>내용</h6>`까지 중요도에 따라 사용
- 단순히 글자를 크게하거나 굵게 하기 위해 사용하지는 X
- `<h1>` 요소는 페이지당 한 번만 사용할 것을 권장
- ⭐ 카테고리의 크기 별로 h1 → h2 → h3 → …..(갑자기 건너뛰지 X)
- heading 요소를 사용하면 익명 영역(anonymous section)을 생성 - living standard에 sections에 해당 태그가 들어가 있으나, 이해를 돕기 위해 글자 태그로 그룹핑 했습니다.
  - 익명 영역: 마치 section 태그를 써서 감싸준 것 처럼 다음 heading 태그가 나오기 전까지 하나의 주제를 가진 임의의 영역으로 본다.
    <br><br>
- 다음과 같이 `hgroup`으로 대제목과 소제목을 나눌 수 있습니다.

```html
<section>
  <hgroup>
    <h1>제목</h1>
    <h2>소제목</h2>
  </hgroup>
  <p>
    풀밭에 같지 전인 노년에게서 청춘의 방지하는 수 봄바람을 품고 칼이다. 전인
    열락의 풀이 것이 기쁘며, 끝에 그들은 설레는 그리하였는가? 앞이 낙원을 수
    얼음이 더운지라 있다. 꽃이 얼마나 붙잡아 열락의 바이며, 청춘이 끝에 말이다.
    위하여서 인도하겠다는 싶이 바이며, 못할 심장은 얼마나 피다. 있는 긴지라
    그들의 거친 피부가 웅대한 것은 가치를 같지 것이다. 거선의 가치를 천지는
    그들은 뜨거운지라, 싸인 끓는 이 것이다. 보배를 만천하의 전인 노래하며 영원히
    하는 현저하게 있는가? 굳세게 피에 노년에게서 과실이 약동하다. 청춘을 대중을
    거친 것이다. 소리다.이것은 이상의 가는 뼈 천자만홍이 찾아 불어 있으랴?
    그들은 싹이 눈이 말이다. 낙원을 가진 만물은 봄바람이다. 발휘하기 되려니와,
    얼마나 청춘 인생에 뼈 뜨거운지라, 곳이 인간은 있으랴? 인생을 인간의 공자는
    같은 붙잡아 아니한 소금이라 부패뿐이다. 아니한 안고, 청춘의 얼음이
    교향악이다. 길을 이것을 없는 공자는 되려니와, 대한 것이다. 일월과 천지는
    싶이 지혜는 따뜻한 석가는 위하여 밥을 듣는다. 관현악이며, 착목한는 고동을
    품었기 소담스러운 무엇을 튼튼하며, 칼이다. 풀이 붙잡아 인도하겠다는 창공에
    위하여 있음으로써 따뜻한 살았으며, 피다. 오직 못하다 대한 끓는 운다.
  </p>
</section>
```

- 또한, heading 요소들은 아래와 같이 사용자로 하여금 페이지의 계층구조를 쉽게 파악할 수 있도록 합니다.
  - ![스크린샷 2022-01-07 오후 12.44.49.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6c5469b1-2893-4dff-868c-477c94b9cb99/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-01-07_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_12.44.49.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220831T082333Z&X-Amz-Expires=86400&X-Amz-Signature=4c5f27004c13bf3ab5449cb426944e6ecb2f3d295e10c594e2551d2ed9e81f45&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA%25202022-01-07%2520%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE%252012.44.49.png%22&x-id=GetObject)
  - 그렇기 때문에 특별한 이유 없이 heading 레벨을 갑자기 몇 단계 뛰어넘도록 작성하는 것은 지양해야 합니다.

-출처 : [https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements) -

## `<nav>`

- nav(네비게이션, 탐색) 요소는 현재 페이지 내, 또는 다른 페이지로의 링크를 보여주는 구획을 나타냄
- 보통 메뉴에 사용됨
- 링크들의 목록(화면이 전환될 때)

```html
<nav>
  <a href="https://paullab.co.kr">바울랩</a>
  <a href="https://naver.com">네이버</a>
  <a href="https://google.com">구글</a>
</nav>
```

## `<aside>`

- 문서의 주요 흐름을 따라가지 않는, 간접적으로 관련있는 별개의 구획을 만들 때 사용합니다.
- 보통 **각주(보충 설명)** 혹은 **광고 영역**으로 활용합니다.
  - ex) 나무위키 각주
- 이 밖에도 양쪽 사이드에 위치해야 하는 요소를 그룹 지을 때 사용합니다.
  ![갈색: <section>, 초록색: <aside>](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a95fa398-2fb0-48ca-8371-9550dbc0535c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220831T082528Z&X-Amz-Expires=86400&X-Amz-Signature=33ff4f2c1850ae10c5f8ab0473b1a221ca88071973cd4452f3c6e75182b5581a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject "갈색: <section>, 초록색: <aside>")
  - 갈색: &lt;section&gt;, 초록색: &lt;aside&gt;

## `<footer>`

- footer 요소가 속한 가장 가까운 구획의 작성자 정보, 저작권, 관련된 링크 등의 내용을 담는 구획 요소

- 회사소개 / 고객센터 / 카피라이트 등

## `<address>`

- 가장 가까운 부모 `article` 이나 `body` 요소의 연락처 정보를 나타냄
  - 연락처 정보에는 전화번호, 메일 주소, 우편 주소 등
- 만약 가장 가까운 부모 요소가 `body` 라면 문서 전체의 연락처 정보를 의미
- 보통 footer 태그 안에 많이 사용

```html
<address>
  <a
    href="[http://www.somedomain.com/contact](http://www.somedomain.com/contact)"
  >
    홈페이지</a
  >.<br />
  <a
    [href="mailto:webmaster@somedomain.com](mailto:href=%22mailto:webmaster@somedomain.com)"
  >
    메일 주소</a
  >.<br />
  오시는 길:<br />
  제주특별자치도 제주시 동광로 137
</address>
```
