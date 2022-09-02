# CSS

<aside>
<strong>👌 CSS Cheat Sheet</strong>

[CSS_selectors_cheatsheet.pdf](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0fcd36b9-273e-47f2-bbce-27982c1b6c48/CSS_selectors_cheatsheet.pdf)

</aside>

---

# 웹사이트 만드는 순서

<aside>
<h2><img src="https://cdn-icons-png.flaticon.com/512/7224/7224307.png" alt="https://cdn-icons-png.flaticon.com/512/7224/7224307.png" width="20px" /> 웹페이지 만드는 순서</h2>

1. **레이아웃 크게 짜고 (몇 개의 덩어리로 나눠져 있는지)**
   1. 마크업
   2. **사용자 에이전트 스타일 리셋**(내가 추가함으로써 갱신)
2. **그 다음 큰 덩어리들 짜고**
   1. 마크업
3. **그 다음으로 큰 덩어리들 짜고**

   1. 마크업

      …..

<br>
<br>
</aside>

<aside>
<img src="https://cdn-icons-png.flaticon.com/512/564/564619.png" alt="https://cdn-icons-png.flaticon.com/512/564/564619.png" width="20px" /> 자세한 디자인보다 무조건 레이아웃부터

- 보통 header, footer 먼저 작업 (재사용하기 때문에)
- 그 후에 내부 컨텐츠
</aside>

<figure>
<img src = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8423dbbc-ec50-47c6-9510-2b4dcf51e042/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220902T110608Z&X-Amz-Expires=86400&X-Amz-Signature=f93754848e863e3d7ac96ca645cd92c95de2b481a5f0665ac891a527f04b078a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject" width="350px">
<figcaption>보편적인 구역 이름</figcaption>
</figure>

---

# CSS의 initial value

> 내가 지정하지 않아도 기본적으로 지정되는 value

<aside>
⚠️ 모든 프로퍼티에는 initial value가 존재한다.
프로퍼티마다 initial value는 각각 다르다.
</aside>
<br>

### 예시

- `width` 프로퍼티의 inital value
  - `auto;`
  - 부모 기준
  - 부모 요소로부터 주어진 가용 너비만큼 가득찬다.
- `height` 프로퍼티의 inital value
  - `auto;`
  - 자식 기준
  - 굳이 지정해주지 않아도 있음
- `background-color`의 initial value;
  - `transparent;`
- `display` 프로퍼티의 initial value

<aside>
<img src="https://cdn-icons-png.flaticon.com/512/1687/1687702.png" alt="https://cdn-icons-png.flaticon.com/512/1687/1687753.png" width="20px"/> 그렇다면 `auto`의 의미는?

- 부모 요소로부터 주어진 가용 너비만큼 가득찬다.
</aside>

---

# 사용자 에이전트 스타일 시트

- 브라우저의 기본 스타일
- 브라우저가 지정하는 기본 스타일
- 브라우저별로 다르다.

### 사용자 에이전트 스타일 시트 리셋

- 내가 해당 프로퍼티를 추가함으로써 덮어쓸 수 있다.
- 보통 CSS 파일 맨 위에 적어주고 주석 달아주는 것이 국룰
  ```css
  /* Reset */
  h1,
  p {
    margin: initial;
  }
  ```
- 너무 길어지면 따로 파일을 파기도 함
- `initial` 사용 추천
  - 단, IE에서는 지원 x

---

# width: `100%;`? VS `auto;`?

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/804f6390-9cc5-4a83-a8c9-dd60bd52af88/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220902T111243Z&X-Amz-Expires=86400&X-Amz-Signature=7ee16211441699d5919fa4321c01f6a35cd8057ca257d02a285b11efe0de3f6e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### `width: 100%;`

- 부모가 제공해주는 콘텐츠 영역 만큼 100% 꽉차는 것은 맞지만

  - 단순히 그 가용 너비를 픽셀 값으로 가져옴
  - `margin`/`padding`/`border` 값 주면 삐져나감(부모 요소를 벗어날 수 있다.)

    → 레이아웃이 유연하지 못할 수 있음 (레이아웃이 깨질 수 있음)

### `width: auto;`

- 부모가 제공해주는 콘텐츠 영역 만큼 꽉차되
  - `margin`/`padding`/`border` 값까지 브라우저가 계산하여 가득차겠다.

---

# box-sizing

- box-sizing 프로퍼티의 initial value: **content-box**;
  ```css
  box-sizing: content-box;
  ```
  - width, height에 padding이나 border **플러스 알파 됨**
- border-box로 바꾸면
  ```css
  box-sizing: border-box;
  ```
  - width, height에 padding과 border가 **포함됨**

---

# margin

- margin의 initial value는 0

```css
/* 블록 레벨 엘리먼트에 해당 */
margin-left: auto; /*오른쪽 정렬 - 사용가능한 공간을 왼쪽으로 배치*/

margin-right: auto; /*왼쪽 정렬 - 사용가능한 공간을 오른쪽으로 배치*/

/* 가운데 정렬 */
margin-left: auto;
margin-right: auto;

margin: 0 auto; /*상하단 0,좌우 auto -> 가운데 정렬*/

/* 이건 안됨*/
margin: auto auto; /*밑에 땅은 다음 컨텐츠가 써야하는 땅*/
```

- `margin: auto;`는 좌우만 적용됨
  - 상하단도 사용할 수 있지만 무조건 0으로 해석됨

---

# 클래스(class)

- 클래스명 규칙
  - 숫자로 시작 X
- 점(.) 선택자
- 타입 셀렉터의 사용은 위험!
    <aside>
    다음과 같이 작성할 시 페이지의 모든 이미지 요소에 적용됨
    
    ```css
    img {
    	border: 5px solid white;
    }
    ```
    
    </aside>

- 다음 두 코드는 같은 의미

  ```CSS
  .수현 {

  }
  ```

  ```CSS
  *.수현 {
    /* 별표(*) -> universal selector */
  }
  ```

- 가장 큰 영역의 클래스명은 `container` / `wrapper` (원하는 대로 선택)
- 한 요소가 여러 개의 클래스를 가져도 됨

<figure>
<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/31df9977-b3e2-4820-856a-f38f9f3845ec/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220902T111616Z&X-Amz-Expires=86400&X-Amz-Signature=e679d7ffa248022b6acb00cd10d35ff0fb97eae711243d7085c21d5f255807f1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject" width="200px;">
<figurecaption>▶ HTML 코드</figurecaption>
</figure>

<figure>
<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d0fc4688-4637-410b-93b0-b52e5810535d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220902T111831Z&X-Amz-Expires=86400&X-Amz-Signature=9ac6b08bcf54f7d95ecf33295ff850a4d7c1658290996a98586e8290163e5912&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject" width="200px;">
<figurecaption>▶ CSS 코드</figurecaption>
</figure>

---

# 블럭 레벨 요소 VS 인라인 요소

## **block level element**

- 부모가 제공해주는 콘텐츠 영역 만큼 꽉차게 사용
- 한 줄을 다 차지
- 종류
  - `<div>`
  - `<ul>`
  - `<li>`
  - `<h1>`~`<h6>`
  - `<p>`
- 가운데 정렬

```css
margin: 0 auto;
```

## **inline-element**

![텍스트를 기준으로 전기줄이 있다 생각
텍스트가 없으면 요소 아래쪽을 기준으로 전기줄이 있다 생각](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7ec7cdc9-ae88-4574-9963-a30887fc7a85/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220902T112230Z&X-Amz-Expires=86400&X-Amz-Signature=830b0466d036825436e183913591244b6b9cae923735e08e639964b0541395e7&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

텍스트를 기준으로 전기줄이 있다 생각
텍스트가 없으면 요소 아래쪽을 기준으로 전기줄이 있다 생각

- 종류
  - **text**
  - **image**
  - **contents**
- `width`, `height`가 아예 존재하지 않는다.
- padding/border/margin 을 적용했을 때
  - 적용은 되지만
  - 상하단은 공간을 차지하지는 못한다.
    → `display` 프로퍼티
    - inline element를 블럭화
    - block element를 인라인화
      할 수 있다.
- 가운데 정렬

```css
/*상위 블록 레벨 요소에 지정해야 함*/
text-align: center;
```

---

# 상속 (inheritance)

<aside>
👨‍👩‍👦 부모에게 지정된 값이 자식에게 그대로 전해지는 것.

</aside>

- 모든 것들이 상속되는 것이 아님
- 상속되는 프로퍼티들이 정해져 있음.
- 상속되는 요소를 변경하고 싶다면 자식 요소에게 스타일 지정해서 덮어쓰면 됨
- **상속되는 것**
  - 텍스트 관련 프로퍼티가 대부분
    - 글자 색상, font-size 등
- **상속되지 않는 것**
  - width
  - background color

### `inherit;` value

- 유저 에이전트 스타일 무시하고
- 부모의 속성을 억지로 상속받게 하겠다.
- 모든 프로퍼티에 적용할 수 있는 글로벌한 밸류
- 원래부터 상속이 지원되는 프로퍼티들은 초기화 진행을 inherit으로 해주면 된다.

---

# em, rem

모두 길이가 유연한 가변 단위

- em
  - 변환되는 픽셀값은 스타일을 지정한 요소의 폰트 크기를 곱한 값이 됩니다.
- rem
  - 변환된 픽셀 크기는 페이지 최상위(root) 요소, 그러니까 html 요소의 폰트 크기가 기준이 됩니다. 이 최상위 요소의 폰트 크기에다 rem 단위로 지정한 숫자를 곱한 값이 바로 마지막 변환된 값

---

# 하위 셀렉터

```css
/* 자식만 선택이 아니라 하위 모든 자손 */
/* 헤더 안에 있는 모든 이미지 */
.header img {
}
```

```css
/* 직계 자식 선택자*/
.header > img {
}
```

<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8c317cf1-8f0b-464c-9b03-c6f7d7b86bfd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220902T112738Z&X-Amz-Expires=86400&X-Amz-Signature=9731ec89738f30306f6af703a381aae39416245437c7f34e00374354d7bed380&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject" width=50%>

- 결합자 (combinator)
  - 여기 들어갈 수 있는 모든 것들(>, 공백 등)

---

보더에 칼라를 지정해주지 않으면 currentColor가 적용

border : 1px solid currentColor 라고 명시적으로 적어줘도 됨

---

# CSS 적용 우선순위(Selector Specificity)

- 구체적일수록 우선적으로 적용
  - 같은 우선 순위에 있는 경우, 부모-자식 관계가 많은 경우가 우선되며,
  - 모든 설정이 같은 경우 **나중**에 선언한 것이 우선되어 적용됩니다. (덮어쓰기됨)

<aside>
<h3>👌 CSS 적용 우선순위</h3>

1. 속성 값 뒤에 `!important` 를 붙인 속성
2. 인라인 스타일(html 파일에서 스타일 직접 지정)로 적용되어 있는 속성
3. `#id` 로 지정한 속성
4. `.클래스`, `:추상클래스(ex.hover)`로 지정한 속성
5. `태그이름` 으로 지정한 속성
6. 상위 객체에 의해 **상속**된 속성
</aside>

<br>
<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/49019a2a-e39d-454b-9f6d-6c04ab24c3b9/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220902T112418Z&X-Amz-Expires=86400&X-Amz-Signature=cbfa36ed724c15ae915d553618888b305acb28e1f2df81ebad2a76b527d4e5aa&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject" width="40%">

- selector specificity → VSCode에서 마우스 올리면 수치로 확인할 수 있다.
- (0,1,1)
- (🥇금, 🥈은, 🥉동) 메달로 생각하기

---

# 마진 겹침 현상 (Margin Collapsing)

<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/18e104f2-a92c-434c-918e-1c3f1ce316a5/Untitled_%E1%84%87%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A1.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220902T115402Z&X-Amz-Expires=86400&X-Amz-Signature=2e66334878e16e5ad00936d498781f5d8005d94c0a051207bfd25c109a96784f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled%2520%25E1%2584%2587%25E1%2585%25A9%25E1%2586%25A8%25E1%2584%2589%25E1%2585%25A1.jpg%22&x-id=GetObject">
- 마진 상쇄라고도 말함
  > In CSS, the adjoining margins of two or more boxes (which might or might not be siblings) can combine to form a single margin. Margins that combine this way are said to collapse, and the resulting combined margin is called a collapsed margin.<br>-W3C

> 블록의 top 및 bottom 마진은 때로는 (결합되는 마진 중 크기가) 가장 큰 한 마진으로 결합(combine, 상쇄(collapsed))됩니다, 마진 상쇄(margin collapsing)로 알려진 행동<br>
> -MDN

<aside>
두 개 이상의 블록 요소의 상하 마진이 겹칠 때 어느 한 쪽의 값만 적용하는 것
</aside>

### 마진 겹침 규칙

- 마진 상쇄는 인접한 두 박스가 block-level 요소일 경우에만 적용 - `inline`, `inline-block`, `table-cell`, `table-caption` 등의 요소는 block-level이 X
- 마진 값이 0이더라도 상쇄 적용
- 좌우 마진은 겹치더라도 상쇄되지 X (상하 마진만 해당)

### 마진 겹침 규칙 예외

- 박스가 `position: absolute` 된 상태
- 박스가 `float: left/right` 된 상태 (단, clear 되지 않은 상태)
- 박스가 `display: flex` 일 때 내부 flexbox item
- 박스가 `display: grid` 일 때 내부 grid item
