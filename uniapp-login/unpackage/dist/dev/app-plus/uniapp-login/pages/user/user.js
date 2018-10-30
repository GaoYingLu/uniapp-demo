
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"page-body-info { padding-bottom: 0; height: ",[0,460],"; }\n.",[1],"userinfo-avatar { border-radius: ",[0,128],"; width: ",[0,128],"; height: ",[0,128],"; }\n.",[1],"userinfo-nickname { margin-top: ",[0,20],"; font-size: ",[0,38],"; }\n",],undefined,{path:"./pages/user/user.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/user/user.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      