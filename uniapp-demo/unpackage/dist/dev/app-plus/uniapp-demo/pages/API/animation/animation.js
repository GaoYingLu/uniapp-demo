
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,1],".",[1],"animation-element-wrapper { display: -webkit-box; display: -webkit-flex; display: flex; width: 100%; padding-top: ",[0,150],"; padding-bottom: ",[0,150],"; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; overflow: hidden; background-color: #ffffff; }\n.",[1],"animation-element { width: ",[0,200],"; height: ",[0,200],"; background-color: #1AAD19; }\n.",[1],"animation-buttons { padding: ",[0,30]," ",[0,50]," ",[0,10],"; width: 100%; height: ",[0,360],"; box-sizing: border-box; }\n.",[1],"animation-button { float: left; line-height: 2; width: ",[0,300],"; margin: ",[0,15]," ",[0,12],"; }\n.",[1],"animation-button-reset { width: ",[0,620],"; }\n",])();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/API/animation/animation.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      