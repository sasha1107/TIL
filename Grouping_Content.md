# Grouping Content

## `<ol>, <ul>, <li>`

- `<ol>`은 ordered list의 약자로 순서가 있는 목록
- `<ul>`이란 unordered list의 약자로 순서가 없는 목록
- `<li>`는 각 항목들을 나열하는 태그로 list item을 뜻함.

> ⚠️ 주의할 점은 \<li> 요소는 \<ol> 혹은 \<ul> 요소 안에서만 사용되어야 하며, \<ol>, \<ul> 의 직계 자식 요소로는 \<li> 요소만 사용되어야 함

```html
<h1>분야별 공부 분야 추천</h1>
<h2>Front-End</h2>
<ol type="A">
  <li>HTML</li>
  <li>CSS</li>
  <li>Javacript</li>
  <li>Jquery</li>
  <li>Bootsrap</li>
</ol>
<h2>Back-End</h2>
<ul>
  <li>Python</li>
  <li>Django</li>
</ul>
```

## `<dl>, <dt>, <dd>`

\<ol\>, \<ul\>, \<li\>가 목록을 정의할 때 쓰였듯이 \<dl\>, \<dt\>, \<dd\> 도 목록을 정의할 때 쓰입니다.

차이점이 있다면 \<dl\>, \<dt\>, \<dd\>는 사전처럼 어떠한 것을 정의할 때 쓰이는 목록입니다.

- `<dl>`은 **정의 목록**(definition list)
- `<dt>`는 **정의할 용어**(definition term)
- `<dd>`는 **용어를 설명**(definition description)할 때 쓰입니다.
- DB 입력에서 key와 value로 사용될 수 있다.

```html
<dl>
  <dt>HTML</dt>
  <dd>마크업 언어입니다.</dd>
  <dt>CSS</dt>
  <dd>스타일 언어입니다.</dd>
</dl>
```

## `<div>`

\<div>는 레이아웃을 나눌 때 사용하는 태그입니다.

- 디자인적인 니즈가 있을 때 여러 요소를 묶어 스타일을 변경시킬 수 있습니다.
- 아무 의미는 없음
- 그냥 감싸기 위해 존재

> ⚠️ 섹셔닝 요소들(\<article>, \<section>, \<header>, \<nav>)는 기본적으로 \<div>와 같은 역할을 합니다. 차이점이 있다면 태그에 의미를 부여한 것입니다. div는 의미가 없다.
> 예를 들어 내용이 하나의 독립된 컨텐츠라면 \<div>대신 \<article>을 사용합니다.
>
> > \<article>, \<section>, \<header>, \<nav> 모두 \<div>로 대신 사용할 수 있다면 사용하고, 보다 적합한 요소를 찾은 후 대용할 태그가 없을 경우 사용하기\*\*

```html
<div>hello</div>
```

## `<figure>, <figcaption>`

![스크린샷 2021-10-30 오후 7.15.01.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/28afb5bd-2e99-4dc1-a8f6-c047f5c112a3/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2021-10-30_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_7.15.01.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220901%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220901T051747Z&X-Amz-Expires=86400&X-Amz-Signature=3b05645e7ed5e8efe8f556db823e0d03f118667f888a31d8f1d23fadfe31affa&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA%25202021-10-30%2520%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE%25207.15.01.png%22&x-id=GetObject)

- `<figure>` 요소
  - 이미지와 캡션을 연결하기 위해 사용
    - `<figurecaption>`은 `<figure>`없이는 사용 불가

```html
<figure>
  <img src="images/baby.jpg" alt="엄마 코끼리와 아기 코끼리" />
  <figcaption>관심 받고싶어하는 아기</figcaption>
</figure>
```

## `<p>`

- 단락을 표시하는 태그
- 박스(box) 성질
- 문자이 완결될 때 사용

⚠️ 하나의 완결된 문단을 의미하기 때문에 \<p> 태그 안에 자식으로 \<p>를 또 사용하지 않으며(문단 안에 문단이 있는 것이 됨), 줄바꿈의 용도로 사용해서도 **안됩니다**.

```html
<h1>hello world</h1>
<p>hello world</p>
```

## `<pre>`

- HTML에 작성한 내용 그대로 화면에 표현합니다.
- 주로 컴퓨터 코드를 표현할 때 사용합니다.

```html
<pre>
  <code>
    let val= 1;
    function myFunc(value){
      return value;
    }
    myFunc(val);
  </code>
</pre>
```

## `<blockquote>`

- `<blockquote>`
  - 인용 블록(여러 줄)입니다.
- `<q>`
  - 인용구(1줄) 입니다. 주로 문장 안에서 사용됩니다.
- `<cite>`
  - 책이나 음악, 영화, 예술작품 등과 같은 창작물의 제목을 정의할 때 사용

```html
<blockquote>
  <p>제발 그만해.. 이러다가 다~~ 죽어!</p>
  <cite>영화 오징어게임중에서. 오일남</cite>
</blockquote>

<p><q>제발 그만해.. 이러다 다~~ 죽어!</q>라고 오일남이 소리쳤습니다.</p>
<p></p>
```

[- HTML: Hypertext Markup Language | MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/cite)

## `<main>`

- 문서의 주요 콘텐츠를 나타냅니다.
  - 주요 콘텐츠 영역이란 문서의 핵심 주제나 웹어플리케이션의 핵심 기능에 직접적으로 연결되어 있는 부분을 뜻합니다.
  - main의 영역은 엄청 큼
- 메인 요소안에 들어가는 내용은 문서의 유일한 내용이어야 합니다.
- 다른 페이지나 섹션에서 반복적으로 표시 될수 있는 정보, 예를 들어 사이트 로고, 검색 폼, 저작권 정보 등은 들어가지 않습니다.

> ⚠️ IE 에서는 지원하지 않는 비교적 최근에 등장한 요소임으로 **사용에 주의가 필요**합니다.
> (생각보다 IE 많이 사용하므로)

**main 요소안에 사이트의 메인 컨텐츠를 모두 담아두고 있는 에어비엔비 사이트 예시**

![스크린샷 2021-10-31 오전 12.34.16.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b0d8d4eb-cc42-4d31-b16c-708714bd2dff/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2021-10-31_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.34.16.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220901%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220901T052114Z&X-Amz-Expires=86400&X-Amz-Signature=b22124c9d8b2d93c7981e116d4dac7e0ad1f9200c3e7c638c3f198533770cb83&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA%25202021-10-31%2520%25E1%2584%258B%25E1%2585%25A9%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25AB%252012.34.16.png%22&x-id=GetObject)

## `<hr>`

- \<hr> 태그는 원래는 가로줄을 표현하기 위해 사용했으나 HTML5에 오면서 의미가 생긴 요소
- 이야기에서의 장면 전환 혹은 문단 안에서 주제가 변경되었을 때 그 구별을 위해 사용
- 단락을 구분할 때 사용
  - → \<p>태그 내 사용은 웹 표준에 어긋납니다.

```html
<p>
  근대란 그렇듯 각자의 능력이 타고난 신분의 제약에서 벗어나 인생역전의 기회를
  갖게 해주는 시대를 가리킨다. 그렇다면 쥘리앵의 인생역전은 어디까지 가능했던가.
</p>

<hr />

<p>
  포괄적으로 ‘근대’라고 적었지만 &#60;적과 흑&#62;의 시대적 배경은 프랑스의
  왕정복고기다. 1789년 대혁명 이후 구체제가 붕괴되었지만 1815년 워털루 전투에서
  패배한 나폴레옹이 완전히 몰락한 이후에 프랑스...
</p>
```

## Entity (이스케이프)

<aside>
💡 엔티티는 `&로 시작해서 ;로 끝나는` 문자열입니다. 보통 HTML 안에서 예약어로 사용되고 있는 문자를 대체하기 위한 용도로 사용합니다.

- 가장 많이 사용되는 예약어 목록 \*

1. `&`

```
&amp;
```

2. `<`

```
&lt;
```

3. `>`

```
&gt;
```

4. `"`

```
&quot;
```

이 외에도 엔티티의 종류는 상당히 많습니다 : [https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references](https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references)

</aside>
