const {remote} = require('electron');
const {BrowserWindow} = remote;
const win = BrowserWindow.getFocusedWindow();

      document.querySelector('#menu').onclick = function(){
         this.classList.toggle('active');
         if(this.classList.contains('active')){
			document.getElementById("menuSidenav").style.width = "180px";
            document.getElementById("main").style.marginLeft = "180px";
         }
         else{
			document.getElementById("menuSidenav").style.width = "0";
            document.getElementById("main").style.marginLeft = "0";
         }
      }

      document.querySelector('#onTop').onclick = function(){
         this.classList.toggle('active');
         if(this.classList.contains('active')){
            remote.getCurrentWindow().setAlwaysOnTop(true);
         }
         else{
            remote.getCurrentWindow().setAlwaysOnTop(false);
         }
      }
      document.querySelector('#minimize').onclick = function(){
         remote.getCurrentWindow().minimize();
      }
      document.querySelector('#square').onclick = function(){
         var window = remote.getCurrentWindow();
         if(this.maximize){
            window.unmaximize();
            this.maximize = false;
         }
         else{
            window.maximize();
            this.maximize = true;
         }
      }
      document.querySelector('#close').onclick = function(){
         remote.getCurrentWindow().close();
      }
