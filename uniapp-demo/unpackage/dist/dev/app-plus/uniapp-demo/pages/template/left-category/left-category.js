
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,1],".",[1],"page-body { display: -webkit-box; display: -webkit-flex; display: flex; }\n.",[1],"nav { display: -webkit-box; display: -webkit-flex; display: flex; width: 100%; }\n.",[1],"nav-left { width: 30%; }\n.",[1],"nav-left-item { height: ",[0,100],"; border-right: solid 1px #E0E0E0; border-bottom: solid 1px #E0E0E0; font-size: ",[0,30],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; }\n.",[1],"nav-right { width: 70%; }\n.",[1],"nav-right-item { width: 28%; height: ",[0,220],"; float: left; text-align: center; padding: ",[0,11],"; font-size: ",[0,28],"; }\n.",[1],"nav-right-item wx-image { width: ",[0,100],"; height: ",[0,100],"; }\n.",[1],"active { color: #007AFF; }\n",])();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/template/left-category/left-category.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      