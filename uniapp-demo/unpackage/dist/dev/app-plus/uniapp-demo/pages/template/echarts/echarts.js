
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,1],"body, wx-view { display: -webkit-box; display: -webkit-flex; display: flex; }\nbody { min-height: 100%; }\n.",[1],"title { margin-left: ",[0,30],"; color: #8f8f94; }\n.",[1],"container { padding-bottom: ",[0,30],"; box-sizing: border-box; }\n.",[1],"container, .",[1],"canvasView { -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; }\n.",[1],"navigate { color: #007AFF; }\n.",[1],"ec-canvas.",[1],"data-v-794bef30 { width: 100%; height: 100%; -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; }\n",],undefined,{path:"./pages/template/echarts/echarts.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/template/echarts/echarts.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      