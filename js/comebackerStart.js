window.addEventListener('DOMContentLoaded', function () {
  //  linkBack - указать  ссылка для перехода на лендинг
  // srcPath - указать путь для изображения в модальном окне
  // heightImg - если картинка крива показывается поменять значения
  // параметры на самом дне прописывать

  (function (linkBack, srcPath, heightImg = 300) {
    comeBacker();
    function comeBacker() {
      if (localStorage.getItem('activeUserPage')) {
        return;
      }
      localStorage.setItem('url-start-page', location.href);

      history.pushState({}, '', location.href);

      window.addEventListener('popstate', function () {
        if (localStorage.getItem('showProkla')) {
          location.href = linkBack;
          localStorage.removeItem('showProkla');
          return;
        }

        createModulWindow(srcPath, linkBack, heightImg);
        localStorage.setItem('showProkla', 'true');
      });

      const createModulWindow = (srcPath, linkPath, heightImg) => {
        const styleModal = `
      .modul-bg {
        padding: 20px;
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        visibility: hidden;
      }
      
      .modul-bg.active { 
        z-index: 1000000;
        overflow: auto;
        display: flex;
        justify-content: center;
      visibility: visible;

    }
.modul-wrapper{
  padding: 15px;
  width: 100%;
  max-width: 600px;
}

.modul {
      border-radius: 20px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      background: #fff;
      padding: 55px 25px 25px 25px ;
      flex-direction: column;
  
      transform: scale(0);
      transition: transform 0.3s ease 0s;
    }
    .modul.active { 
      transform: scale(1);
  }
.module-btn-close {
      font-size: 20px;
      position: absolute;
      right: 20px;
      top: 20px;
      text-transform: uppercase;
      font-weight: 700;
    color: #000;
    }
.modul-title{
line-height: 1.3;
  font-size: 22px;
  text-transform: uppercase;
font-weight: 700;
margin-bottom: 20px;
color: #f91155;


}
.modul-img{
  width: ${heightImg}px;
  max-width: 100%;
 margin-bottom: 20px;
}
.modul-link-btn {
font-size: 20px;
width: 100%;
color: #fff;
padding: 20px 10px;
background-color: #c00;
box-shadow: 0 3px 5px #232323;
border: 2px solid #c00;
transform: translate(0px, 0px);
text-transform: uppercase;
background-image: -webkit-linear-gradient(45deg, #fff 50%, transparent 50%), 100%;
background-image: linear-gradient(45deg, #fff 50%, transparent 50%);
background-position: 100%;
background-size: 400%;
transition: all 0.3s ease-in-out 0s;
}

@media (any-hover: hover) {
.modul-link-btn:hover {
  transform: translate(0px, 5px);
  background-position: 0;
  color: #c00;

}
}
body {
  overflow: hidden;
  touch-action: none;
}

body::before{
      content: "";
      transition: all 0.2s ease 0s;
      opacity:0;
      visibility: hidden;
    }
   
    body.bg-show-modal::before {
      content: "";
      visibility: visible;
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      z-index: 100000;
      left: 0;
      opacity:0.5;
      background-color: rgba(0, 0, 0, 1);
    }
    `;

        let style = document.createElement('style');
        const modulBg = document.createElement('div');
        const modulWrapper = document.createElement('div');
        const modul = document.createElement('div');
        const btnClose = document.createElement('button');
        const titleModul = document.createElement('h1');
        const imgModul = document.createElement('img');
        const linkBtn = document.createElement('a');

        modulBg.classList.add('modul-bg');
        modulWrapper.classList.add('modul-wrapper');
        modul.classList.add('modul');
        btnClose.classList.add('module-btn-close');
        imgModul.classList.add('modul-img');
        titleModul.classList.add('modul-title');
        linkBtn.classList.add('modul-link-btn');

        imgModul.setAttribute('src', srcPath);
        linkBtn.setAttribute('href', linkPath);

        btnClose.innerHTML = 'close';
        style.innerHTML = styleModal;
        titleModul.innerHTML =
          'Wait! We have a unique offer for you - 50% discount!';
        linkBtn.innerHTML = 'Go to view!';

        document.body.appendChild(modulBg);

        modulBg.appendChild(modulWrapper);
        modulWrapper.appendChild(modul);
        modul.appendChild(titleModul);
        modul.appendChild(imgModul);
        modul.appendChild(btnClose);
        modul.appendChild(linkBtn);
        modulBg.appendChild(style);

        setTimeout(() => {
          showModal(modulBg, btnClose, modul);
        }, 1);
      };

      function showModal(modulBg, btnClose, modul) {
        let scroll = calcScroll();
        modulBg.classList.add('active');
        modul.classList.add('active');
        closeModal(modulBg, btnClose, modul);
        document.body.classList.add('bg-show-modal');
        document.body.style.paddingRight = `${scroll}px`;
      }

      function closeModal(modulBg, btnClose, modul) {
        document.addEventListener('click', (e) => {
          if (
            e.target === modulBg ||
            e.target === btnClose ||
            e.target === document.querySelector('.modul-link-btn')
          ) {
            modul.classList.remove('active');
            localStorage.removeItem('showProkla');

            setTimeout(() => {
              document.body.classList.remove('bg-show-modal');
              modulBg.classList.remove('active');
              modulBg.remove();
              document.body.style.paddingRight = `0px`;
            }, 200);
          }
        });
      }

      function calcScroll() {
        let div = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflow = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);

        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        return scrollWidth;
      }
    }
  })(
    'https://denisgrishin.github.io/halo/home.html',
    'https://funart.pro/uploads/posts/2022-06/1654756218_58-funart-pro-p-samii-malenkii-yezhik-v-mire-zhivotnie-kra-63.jpg',
    '300'
  );
});
// 'http://127.0.0.1:5500/home.html',
// 'https://denisgrishin.github.io/halo/home.html',
