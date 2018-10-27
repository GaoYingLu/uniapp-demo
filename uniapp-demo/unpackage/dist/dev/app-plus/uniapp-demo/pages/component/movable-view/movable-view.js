
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,1],"wx-movable-view { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; height: ",[0,100],"; width: ",[0,100],"; background-color: #007AFF; color: #fff; }\nwx-movable-area { height: ",[0,400],"; width: ",[0,400],"; margin: ",[0,50],"; background-color: #ccc; overflow: hidden; }\n.",[1],"max { width: ",[0,600],"; height: ",[0,600],"; }\n.",[1],"page-section { width: 100%; margin-bottom: ",[0,60],"; }\n.",[1],"page-section:last-child { margin-bottom: 0; }\n.",[1],"page-section-title { font-size: ",[0,28],"; color: #999999; margin-bottom: ",[0,10],"; padding-left: ",[0,30],"; padding-right: ",[0,30],"; }\n",])();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/component/movable-view/movable-view.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      