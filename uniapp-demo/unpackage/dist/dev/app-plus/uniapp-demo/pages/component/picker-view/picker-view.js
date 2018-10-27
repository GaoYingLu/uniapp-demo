
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,1],".",[1],"title { padding: 0 ",[0,50],"; }\nwx-picker-view { width: 100%; height: ",[0,600],"; margin-top: ",[0,50],"; }\n.",[1],"item { line-height: ",[0,100],"; text-align: center; }\n",])();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/component/picker-view/picker-view.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      