
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,1],".",[1],"product-list { display: -webkit-box; display: -webkit-flex; display: flex; width: 100%; -webkit-flex-wrap: wrap; flex-wrap: wrap; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; }\n.",[1],"product { padding: ",[0,10]," ",[0,20],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; }\n.",[1],"image-view { height: ",[0,330],"; width: ",[0,330],"; }\n.",[1],"product-image { height: ",[0,330],"; width: ",[0,330],"; }\n.",[1],"product-title { width: ",[0,300],"; font-size: ",[0,32],"; word-break: break-all; display: -webkit-box; overflow: hidden; text-overflow: ellipsis; -webkit-box-orient: vertical; -webkit-line-clamp: 2; }\n.",[1],"product-price { font-size: ",[0,28],"; position: relative; }\n.",[1],"product-price-original { color: #e80080; }\n.",[1],"product-price-favour { color: #888888; text-decoration: line-through; margin-left: ",[0,10],"; }\n.",[1],"product-tip { position: absolute; right: ",[0,10],"; background-color: #ff3333; color: #ffffff; padding: 0 ",[0,10],"; border-radius: ",[0,5],"; }\n",],undefined,{path:"./pages/template/product-list/product-list.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/template/product-list/product-list.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      