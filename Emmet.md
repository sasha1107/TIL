# Emmet(에밋) 문법

> 에밋은 HTML, XML, XSL 문서 등을 편집할 때 빠른 코딩을 위해 사용하는 플러그인이다.<br>
> 원래 젠코딩으로 부르다가 에밋으로 이름을 변경했다. 매우 간단한 몇 가지 코드만 입력하면, 자동으로 완전한 HTML 코드를 생성해 준다.<br>
> 에밋을 사용하면 HTML & CSS의 작업 속도를 엄청나게 향상시킬 수 있다.<br><br>
> VS Code는 emmet을 기본적으로 지원하고 Tab키를 통해 사용한다.

### emmet 문법 미리보기

```
cmd + i
```

---

### h1

```html
<h1>|</h1>
```

### h1{hello}

```html
<h1>hello</h1>
```

### p{hello}\*10

```html
<p>hello</p>
<p>hello</p>
<p>hello</p>
<p>hello</p>
<p>hello</p>
<p>hello</p>
<p>hello</p>
<p>hello</p>
<p>hello</p>
<p>hello</p>
```

### p>strong

```html
<p><strong>|</strong></p>
```

### h1+h2+p

```html
<h1>|</h1>
<h2>|</h2>
<p>|</p>
```

### h1#one

```html
<h1 id="one">|</h1>
```

### h1.one

```html
<h1 class="one">|</h1>
```

### #one

```html
<div id="one">|</div>
```

### .one

```html
<div class="one">|</div>
```

### h1#one.two.three.four

```html
<h1 id="one" class="two three four">|</h1>
```

### h$\*6

```html
<h1>|</h1>
<h2>|</h2>
<h3>|</h3>
<h4>|</h4>
<h5>|</h5>
<h6>|</h6>
```

### h${hello}\*6

```html
<h1>hello</h1>
<h2>hello</h2>
<h3>hello</h3>
<h4>hello</h4>
<h5>hello</h5>
<h6>hello</h6>
```

### div.container-$.row-$\*6

```html
<div class="container-1 row-1">|</div>
<div class="container-2 row-2">|</div>
<div class="container-3 row-3">|</div>
<div class="container-4 row-4">|</div>
<div class="container-5 row-5">|</div>
<div class="container-6 row-6">|</div>
```

### lorem

```
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, aut eligendi, quisquam rem, velit tempore odio voluptas perspiciatis vel aliquam suscipit ad adipisci iusto doloremque nemo recusandae error non molestiae.
```

### lorem5

```
Lorem ipsum dolor sit amet.
```

### lorem\*5

```
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos laudantium impedit eius nostrum ullam consequatur atque voluptas dignissimos aperiam? Quisquam vitae quia veritatis laborum officia optio nostrum expedita pariatur itaque.
Facere hic dignissimos quis beatae tempora. Assumenda eligendi voluptas nobis rerum eos ut velit explicabo non quisquam ea, eum odio deleniti voluptatem et quod ullam molestiae. Soluta nulla minima iste.
Ex culpa, tempora rem voluptate praesentium officiis doloremque ratione natus nemo, quia hic enim repudiandae veritatis accusantium iusto! Doloribus itaque ad qui laborum unde, veritatis similique facilis perferendis hic rem!
Vel, quae nemo eum omnis deserunt dolorum aut ea. Suscipit, consectetur? Quam eveniet mollitia aperiam enim, rem sunt distinctio incidunt asperiores voluptatibus, adipisci, maiores ducimus excepturi consequuntur cum nemo dolorum.
Facilis nemo architecto expedita exercitationem, a natus aliquam cumque corporis temporibus asperiores quo eum sequi quasi, quas non ut voluptatibus cum dicta incidunt voluptatum ex qui. Enim, delectus corrupti! Debitis.
```

### img

```html
<img src="|" alt="|" />
```

### img:z

```html
<img src="|" alt="|" sizes="|" srcset="|" />
```

### p[a="value1" b="value2" c=1 d=value3]

```html
<p a="value1" b="value2" c="1" d="value3">|</p>
```

### a[href="https://www.naver.com"]

```html
<a href="https://www.naver.com">|</a>
```

### table>(tr>td{hello}*10)*3

```html
<table>
  <tr>
    <td>hello</td>
    <td>hello</td>
    <td>hello</td>
    <td>hello</td>
    <td>hello</td>
    <td>hello</td>
    <td>hello</td>
    <td>hello</td>
    <td>hello</td>
    <td>hello</td>
  </tr>
  <tr>
    <td>hello</td>
    <td>hello</td>
    <td>hello</td>
    <td>hello</td>
    <td>hello</td>
    <td>hello</td>
    <td>hello</td>
    <td>hello</td>
    <td>hello</td>
    <td>hello</td>
  </tr>
  <tr>
    <td>hello</td>
    <td>hello</td>
    <td>hello</td>
    <td>hello</td>
    <td>hello</td>
    <td>hello</td>
    <td>hello</td>
    <td>hello</td>
    <td>hello</td>
    <td>hello</td>
  </tr>
</table>
```

### table>tr*5>td*3

```html
<table>
  <tr>
    <td>|</td>
    <td>|</td>
    <td>|</td>
  </tr>
  <tr>
    <td>|</td>
    <td>|</td>
    <td>|</td>
  </tr>
  <tr>
    <td>|</td>
    <td>|</td>
    <td>|</td>
  </tr>
  <tr>
    <td>|</td>
    <td>|</td>
    <td>|</td>
  </tr>
  <tr>
    <td>|</td>
    <td>|</td>
    <td>|</td>
  </tr>
</table>
```

### table>(thead>tr>th{제목}*5+(tbody>tr*10>td{내용}*5)+tfoot>tr>td*5

```html
<table>
  <thead>
    <tr>
      <th>제목</th>
      <th>제목</th>
      <th>제목</th>
      <th>제목</th>
      <th>제목</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>내용</td>
      <td>내용</td>
      <td>내용</td>
      <td>내용</td>
      <td>내용</td>
    </tr>
    <tr>
      <td>내용</td>
      <td>내용</td>
      <td>내용</td>
      <td>내용</td>
      <td>내용</td>
    </tr>
    <tr>
      <td>내용</td>
      <td>내용</td>
      <td>내용</td>
      <td>내용</td>
      <td>내용</td>
    </tr>
    <tr>
      <td>내용</td>
      <td>내용</td>
      <td>내용</td>
      <td>내용</td>
      <td>내용</td>
    </tr>
    <tr>
      <td>내용</td>
      <td>내용</td>
      <td>내용</td>
      <td>내용</td>
      <td>내용</td>
    </tr>
    <tr>
      <td>내용</td>
      <td>내용</td>
      <td>내용</td>
      <td>내용</td>
      <td>내용</td>
    </tr>
    <tr>
      <td>내용</td>
      <td>내용</td>
      <td>내용</td>
      <td>내용</td>
      <td>내용</td>
    </tr>
    <tr>
      <td>내용</td>
      <td>내용</td>
      <td>내용</td>
      <td>내용</td>
      <td>내용</td>
    </tr>
    <tr>
      <td>내용</td>
      <td>내용</td>
      <td>내용</td>
      <td>내용</td>
      <td>내용</td>
    </tr>
    <tr>
      <td>내용</td>
      <td>내용</td>
      <td>내용</td>
      <td>내용</td>
      <td>내용</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>|</td>
      <td>|</td>
      <td>|</td>
      <td>|</td>
      <td>|</td>
    </tr>
  </tfoot>
</table>
```
