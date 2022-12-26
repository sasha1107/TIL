const searchImg = () => {
    let json;
    const response = fetch("https://api.unsplash.com/search/photos?query=flower&client_id=SNrZVpkzidM3J4lXa200CcodE3uzwcx9N0Fa5FwHc3A", {
        method: "GET"
    });
    if (response.ok){
        // promise 객체를 json 형태로 파싱
        json = response.json();
    }
    else {
        alert("http error", + response.status);
    }
    console.log(json);
}
export default searchImg;