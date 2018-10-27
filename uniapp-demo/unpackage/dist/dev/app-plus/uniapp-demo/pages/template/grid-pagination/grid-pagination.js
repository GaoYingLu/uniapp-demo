
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,1],".",[1],"page { padding-top: ",[0,60],"; }\nbody { background: #efeff4; }\n.",[1],"uni-list { margin-bottom: ",[0,30],"; }\n.",[1],"uni-list-cell { -webkit-box-pack: start; -webkit-justify-content: flex-start; justify-content: flex-start; }\nwx-swiper { height: ",[0,600],"; }\n",])();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/template/grid-pagination/grid-pagination.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      