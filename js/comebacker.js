window.addEventListener('DOMContentLoaded', function () {
  (function (selectorForm, srcPath) {
    comebacker(selectorForm, srcPath);

    function comebacker(formSelector) {
      if (localStorage.getItem('active')) {
        localStorage.removeItem('isShown');
        return;
      }

      localStorage.removeItem('show');
      localStorage.removeItem('isShown');

      history.pushState({}, '', location.href);
      history.pushState({}, '', location.href);
      let linkBack = localStorage.getItem('url-start-page');
      window.addEventListener('popstate', function () {
        if (localStorage.getItem('isShown')) {
          location.href = linkBack;
        }

        createModulWindow(srcPath);
        localStorage.setItem('isShown', true);
      });

      function createModulWindow(srcPath) {
        const styleModal = `
        .modul-bg {
          padding: 20px;
          display: none;
          width: 100%;
          height: 100%;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 100000;
        }
        
        .modul-bg.active { 
          overflow: auto;
          display: flex;
          justify-content: center;
      }
     
      .modul-wrapper{
        padding: 15px;
        width: 100%;
        max-width: 600px;
      }
     
      .modul {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background: #fff;
        padding: 55px 25px 25px 25px ;
        flex-direction: column;
    
      }
      
      .module-btn-close {
        font-size: 20px;
        position: absolute;
        right: 20px;
        top: 20px;
        text-transform: uppercase;
        font-weight: 700;
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
        width: 350px;
        
        max-width: 100%;
        margin-bottom: 20px;
      }
      body {
        overflow: hidden;
        touch-action: none;
      }
      body.bg-show-popap {
    
      }
 
.bg-show-popap::before {
	content: "";
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	z-index: 1;
	left: 0;
	background-color: rgba(0, 0, 0, 0.5);
}
      form{
        width:100% !important;
      }
      `;

        let style = document.createElement('style');
        const modulBg = document.createElement('div');
        const modulWrapper = document.createElement('div');
        const modul = document.createElement('div');
        const btnClose = document.createElement('button');
        const titleModul = document.createElement('h1');
        const imgBlockModul = document.createElement('div');
        const imgModul = document.createElement('img');
        const form = document.querySelector(formSelector).cloneNode(true);

        imgBlockModul.classList.add('modul-block-img');
        modulBg.classList.add('modul-bg');
        modulWrapper.classList.add('modul-wrapper');
        modul.classList.add('modul');
        btnClose.classList.add('module-btn-close');
        imgModul.classList.add('modul-img');
        titleModul.classList.add('modul-title');

        imgModul.setAttribute('src', srcPath);
        style.innerHTML = styleModal;
        titleModul.innerHTML =
          'Wait! We have a unique offer for you - 50% discount!';
        btnClose.innerHTML = 'close';

        modul.appendChild(imgBlockModul);
        document.body.appendChild(modulBg);
        modulBg.appendChild(modulWrapper);
        modulWrapper.appendChild(modul);
        modul.appendChild(btnClose);
        modul.appendChild(titleModul);
        modul.appendChild(imgModul);
        modul.appendChild(form);
        modulBg.appendChild(style);

        showModal(modulBg, btnClose);
      }

      function showModal(modulBg, btnClose) {
        if (modulBg) {
          modulBg.classList.add('active');

          document.body.classList.add('bg-show-popap');
          document.addEventListener('click', (e) => {
            if (e.target === modulBg) {
              modulBg.classList.remove('active');
              document.body.classList.remove('bg-show-popap');

              localStorage.removeItem('isShown');
              modulBg.remove();
            }
            if (e.target === btnClose) {
              modulBg.classList.remove('active');
              document.body.classList.remove('bg-show-popap');
              localStorage.removeItem('show');
              modulBg.remove();
            }
          });
        }
      }
    }
  })('.form-order', 'http://127.0.0.1:5500/img/main/help-weight/01.jpg');
});
