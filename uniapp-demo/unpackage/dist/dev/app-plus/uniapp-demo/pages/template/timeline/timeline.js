
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,1],".",[1],"page { background: #efeff4; }\n.",[1],"title { padding: ",[0,20],"; }\n.",[1],"timeline { margin: ",[0,35]," 0; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; position: relative; }\n.",[1],"timeline-item { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; position: relative; padding-bottom: ",[0,20],"; box-sizing: border-box; overflow: hidden; }\n.",[1],"timeline-item .",[1],"timeline-item-keynode { width: ",[0,180],"; -webkit-flex-shrink: 0; flex-shrink: 0; box-sizing: border-box; padding-right: ",[0,20],"; text-align: right; }\n.",[1],"timeline-item .",[1],"timeline-item-divider { -webkit-flex-shrink: 0; flex-shrink: 0; position: relative; width: ",[0,20],"; height: ",[0,20],"; top: ",[0,15],"; border-radius: 50%; background-color: #bbb; }\n.",[1],"timeline-item-divider::before, .",[1],"timeline-item-divider::after { position: absolute; left: ",[0,10],"; width: ",[0,1],"; height: 100vh; content: \x27\x27; background: inherit; }\n.",[1],"timeline-item-divider::before { bottom: 100%; }\n.",[1],"timeline-item-divider::after { top: 100%; }\n.",[1],"timeline-last-item .",[1],"timeline-item-divider:after { display: none; }\n.",[1],"timeline-first-item .",[1],"timeline-item-divider:before { display: none; }\n.",[1],"timeline-item .",[1],"timeline-item-content { padding-left: ",[0,20],"; }\n.",[1],"bottom-border::after { position: absolute; left: ",[0,40],"; right: 0; height: 1px; content: \x27\x27; background-color: #bbb; }\n.",[1],"timeline-last-item .",[1],"bottom-border::after { display: none; }\n.",[1],"timeline-item-content .",[1],"datetime { color: #CCCCCC; }\n.",[1],"timeline-last-item .",[1],"timeline-item-divider { background-color: #1AAD19; }\n",])();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/template/timeline/timeline.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      