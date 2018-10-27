
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,1],".",[1],"content { font-size: ",[0,30],"; line-height: ",[0,50],"; color: #666666; padding: ",[0,30],"; }\n.",[1],"content\x3e.",[1],"title { font-size: ",[0,32],"; text-indent: 2em; }\n.",[1],"content\x3e.",[1],"ul { padding-left: ",[0,40],"; color: #999999; }\n.",[1],"uni-media-list-logo { position: relative; }\n.",[1],"uni-media-list-logo wx-image { position: absolute; left: 0; top: 0; }\n.",[1],"defaul { opacity: 1; -webkit-transition: opacity 0.4s linear; transition: opacity 0.4s linear; }\n.",[1],"defaul.",[1],"loaded { opacity: 0; }\n",])();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/template/lazy-load-custom/lazy-load-custom.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      