import "../scss/app.scss";

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".button");
 // const body = document.querySelector('body');

  button.addEventListener("click", () => {
    alert("💣");
  });

  body.addEventListener('click', () => {
    for (let i = 0; i < 5; i++) {
      let x=document.CreateElement("article");
      x.setAttribute("id","myArticle",+i);
      document.body.appendChild(x);
      
      let txt1=document.innerHTML("some text...");
      document.getElementById("myArticle"+i).appendChild(txt1);
      document.getElementById("myArticle"+i).classList.add("message");
  };
    });
  });
 
      
      //const message = document.createElement('message');
      //article.textContent = `This is message ${i + 1}`;
      //body.appendChild(article);    }   //});  });});

