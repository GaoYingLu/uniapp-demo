
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,1],".",[1],"mask { position: fixed; z-index: 998; top: 0; right: 0; bottom: 0; left: 0; background-color: rgba(0, 0, 0, .3); }\n.",[1],"popup { position: absolute; z-index: 999; background-color: #ffffff; box-shadow: 0 0 ",[0,30]," rgba(0, 0, 0, .1); }\n.",[1],"popup-middle { width: ",[0,400],"; height: ",[0,400],"; border-radius: ",[0,10],"; top: 0; right: 0; bottom: 0; left: 0; margin: auto; }\n.",[1],"popup-top { top: 0; width: 100%; height: ",[0,100],"; text-align: center; }\n.",[1],"popup-top wx-text { line-height: ",[0,100],"; margin-left: ",[0,20],"; font-size: ",[0,32],"; }\n.",[1],"popup-bottom { bottom: 0; width: 100%; height: ",[0,100],"; text-align: center; }\n.",[1],"popup-bottom wx-text { line-height: ",[0,100],"; font-size: ",[0,32],"; }\n.",[1],"popup .",[1],"list-view { height: ",[0,600],"; }\n.",[1],"list-view-item { position: relative; padding: ",[0,22]," ",[0,30],"; overflow: hidden; font-size: ",[0,28],"; }\n.",[1],"list-view-item::after { position: absolute; right: 0; bottom: 0; left: ",[0,30],"; height: ",[0,2],"; content: \x27\x27; -webkit-transform: scaleY(.5); transform: scaleY(.5); background-color: #c8c7cc; }\n.",[1],"btn-row .",[1],"btn { margin: ",[0,20],"; }\n.",[1],"desc { padding: ",[0,10]," ",[0,20],"; font-size: ",[0,30],"; line-height: ",[0,30],"; margin-top: ",[0,150],"; text-align: center; }\n",])();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/template/popup/popup.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      