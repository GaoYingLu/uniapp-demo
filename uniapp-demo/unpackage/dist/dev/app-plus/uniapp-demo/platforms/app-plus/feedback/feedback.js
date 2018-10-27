
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,1],"body { background-color: #EFEFF4; }\n.",[1],"input-view { font-size: ",[0,28],"; }\n",])();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./platforms/app-plus/feedback/feedback.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      