
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,1],".",[1],"page-body-info { padding-bottom: 0; height: ",[0,460],"; }\n.",[1],"userinfo-avatar { border-radius: ",[0,128],"; width: ",[0,128],"; height: ",[0,128],"; }\n.",[1],"userinfo-nickname { margin-top: ",[0,20],"; font-size: ",[0,38],"; }\n",])();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/API/get-user-info/get-user-info.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      