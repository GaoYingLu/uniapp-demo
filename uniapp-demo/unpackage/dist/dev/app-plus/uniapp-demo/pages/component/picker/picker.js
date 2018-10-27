
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,1],".",[1],"uni-list-cell { -webkit-box-pack: start; -webkit-justify-content: flex-start; justify-content: flex-start; }\n.",[1],"uni-list-cell-db, .",[1],"list-left { padding: 0 ",[0,24],"; }\n",])();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/component/picker/picker.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      