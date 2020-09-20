let n =1;
console.log("我是main.js");
getPage.onclick=()=>{
    const request = new XMLHttpRequest;
    request.open("GET", `/page${n+1}`);
    request.onreadystatechange=()=>{
        if(request.readyState === 4 && request.status === 200){
            const array =JSON.parse(request.response)
            array.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item.id;
                xxx.appendChild(li);
            });
            n+=1;
        }
    }
    request.send();
}
getJSON.onclick=()=>{
    const request = new XMLHttpRequest();
    request.open("get", "/5.json");
    request.onreadystatechange=()=>{
        if(request.readyState === 4 && request.status === 200){
            const object =JSON.parse(request.response)
        }
    }
    request.send();
}
getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("get", "/4.xml");
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        const dom = request.responseXML;
        const text = dom.getElementsByTagName("warning")[0].textContent;
        console.log(text.trim());
      }
    };
    request.send();
  };
getHTML.onclick=()=>{
    const request = new XMLHttpRequest();
    request.open('get','/3.html');
    console.log(request);
    request.onload=()=>{
        const div = document.createElement('div');
        div.innerHTML = request.response;
        document.body.appendChild(div);
    };
    request.onerror=()=>{};
    request.send();
}
getCSS.onclick=()=>{
    const request = new XMLHttpRequest();
    request.open('get','/style.css');
    request.onreadystatechange=()=>{
        console.log(request.readyState);
        if(request.readyState === 4){
            console.log(下载完成);
            if(request.status >= 200 && request.status <300){
                  //创建style标签
                const style = document.createElement('style');
                //填写style内容
                style.innerHTML =request.response;
                //插入head
                document.head.appendChild(style);
            }else{
                alert('加载 CSS 失败');
            }

        }
    }
    /* request.onload=()=>{
        //创建style标签
        const style = document.createElement('style');
        //填写style内容
        style.innerHTML =request.response;
        //插入head
        document.head.appendChild(style);
    }
    request.onerror=()=>{
        console.log('失败了');
    } */
    request.send();
}
getJS.onclick=()=>{
    const request = new XMLHttpRequest();
    request.open('get','/2.js');
    request.onload=()=>{
        const script = document.createElement('script');
        script.innerHTML=request.response;
        document.body.appendChild(script);
    }
    request.onerror=()=>{

    }
    request.send();
}
