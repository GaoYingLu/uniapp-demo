
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,1],"body, wx-view { display: -webkit-box; display: -webkit-flex; display: flex; }\nbody { min-height: 100%; background-color: #FFFFFF; }\nwx-image { width: ",[0,400],"; height: ",[0,400],"; }\n.",[1],"about { -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; }\n.",[1],"content { -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; padding: ",[0,30],"; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; }\n.",[1],"desc { margin-top: ",[0,30],"; display: block; }\n.",[1],"code { color: #e96900; background-color: #f8f8f8; }\n.",[1],"_button { width: 100%; margin-top: ",[0,40],"; }\n.",[1],"version { height: ",[0,80],"; line-height: ",[0,80],"; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; color: #ccc; }\n",],undefined,{path:"./platforms/app-plus/about/about.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./platforms/app-plus/about/about.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      