var Module={'locateFile':function(_0x5cf7dd){return'./'+_0x5cf7dd;}};Module['onRuntimeInitialized']=function(){postMessage({'process':'preload'});};Module['setStatus']=function(_0x37ee34){};Module['onAbort']=function(_0x1518d4){console['error']('ZoOm\x20Error:\x20832765\x20'+_0x1518d4);};try{var workerUrl='./011c90516755d702cfb4205ca9d93e21fe6683b8.js';importScripts(workerUrl);}catch(_0x549c31){postMessage({'process':'failedToLoadWasmFile','error':_0x549c31});}var showDebugData=![];var imageWidth,imageHeight;var averageProcessTime=0x0;var totalProcesstime=0x0;var processCount=0x0;function createBase64ImageFromIntArray(_0xe1eddd){const _0x3d8a97=_0xe1eddd['reduce'](function(_0x4a6e72,_0x6c1c2b){return _0x4a6e72+String['fromCharCode'](_0x6c1c2b);},'');return'data:image/jpeg;base64,'+btoa(_0x3d8a97);}onmessage=function(_0x18776f){switch(_0x18776f['data']['process']){case'preload':Module['preload']();showDebugData=_0x18776f['data']['showDebugData'];break;case'init':imageWidth=_0x18776f['data']['imageWidth'];imageHeight=_0x18776f['data']['imageHeight'];postMessage({'process':_0x18776f['data']['process']});break;case'startSession':totalProcesstime=0x0;averageProcessTime=0x0;processCount=0x0;Module['startSession']({'auditTrailEnabled':_0x18776f['data']['auditTrailEnabled'],'timeBasedImagesEnabled':_0x18776f['data']['timeBasedImagesEnabled'],'collectDiagnosticData':_0x18776f['data']['collectDiagnosticData'],'sessionId':_0x18776f['data']['sessionId']},{'zoomHistory':_0x18776f['data']['zoomHistory'],'installationId':_0x18776f['data']['installationId'],'applicationId':_0x18776f['data']['applicationId'],'zoomVersion':_0x18776f['data']['zoomVersion'],'deviceType':_0x18776f['data']['deviceType']});break;case'validateLicense':if(Module['validateLicense']){try{var _0x7d3649=Module['validateLicense'](_0x18776f['data']['apptoken'],_0x18776f['data']['license']);postMessage({'process':_0x18776f['data']['process'],'validateLicenseResult':_0x7d3649});}catch(_0x49a988){postMessage({'process':'validateLicense','validateLicenseResult':![]});}}else{postMessage({'process':'validateLicense','validateLicenseResult':![]});console['warn']('Warning:\x20No\x20license\x20validation\x20module\x20was\x20found.');}break;case'endSession':{try{var _0xa84fff=Module['endSession']();var _0x10262f=_0xa84fff['facemap'];var _0x32c4cd=new Blob([_0x10262f],{'type':'application/octet-stream'});var _0x2662b7=_0xa84fff['diagnosticModel'];var _0x2ce9a8=_0xa84fff['sessionId'];var _0x2e0d27=_0xa84fff['deviceTier'];var _0x312cf8=_0xa84fff['diagnosticModelEncrypted'];var _0x37f70e=0x0;if(_0xa84fff&&_0xa84fff['status']){_0x37f70e=_0xa84fff['status']['value'];}var _0x34e2f2={'auditTrail':[],'wasTimeout':_0xa84fff['wasTimeout'],'timeBasedSessionImages':[],'faceMap':_0x32c4cd,'diagnosticModel':_0x2662b7,'sessionId':_0x2ce9a8,'deviceTier':_0x2e0d27,'diagnosticModelEncrypted':_0x312cf8,'status':_0x37f70e};_0xa84fff['auditTrailImages']['forEach'](function(_0x51ce95){_0x34e2f2['auditTrail']['push'](createBase64ImageFromIntArray(_0x51ce95));});_0xa84fff['timeBasedImages']['forEach'](function(_0x4631a0){_0x34e2f2['timeBasedSessionImages']['push'](createBase64ImageFromIntArray(_0x4631a0));});postMessage({'process':_0x18776f['data']['process'],'sessionData':_0x34e2f2});_0xa84fff['delete']();}catch(_0x56983f){var _0x34e2f2=null;postMessage({'process':_0x49a988['data']['process'],'sessionData':_0x34e2f2});}break;}case'initializeWasm':const _0x16cdb7=Module['initialize']({'appToken':_0x18776f['data']['licenseKeyIdentifier'],'publicKey':_0x18776f['data']['publicKey']});postMessage({'process':'initializeWasm','initializeWasmResult':_0x16cdb7});break;case'processAdditionalFrames':try{Module['addUnprocessedFrame'](_0x18776f['data']['image'],imageWidth,imageHeight,showDebugData);}catch(_0x297be9){}postMessage({'process':_0x18776f['data']['process']});break;case'processFrame':var _0x4b30eb=this['performance']['now']();var _0x2d2611=Module['processFrame'](_0x18776f['data']['image'],imageWidth,imageHeight,showDebugData);var _0x5eaf38=Math['round']((this['performance']['now']()-_0x4b30eb)*0x3e8)/0x3e8;processCount+=0x1;totalProcesstime+=_0x5eaf38;averageProcessTime=Math['round'](totalProcesstime/processCount*0x3e8)/0x3e8;var _0x1d443e={'blink':0x0,'blurry':0x0,'cascade':0x0,'saveMatAndScale':0x0,'landmarks':0x0,'throughAffine':0x0,'tooDark':0x0,'rotate':0x0,'crops':0x0,'affin':0x0,'deviceTier':-0x1,'frameTime':0x0};var _0x3aea7b=null;if(_0x2d2611!==null){_0x3aea7b={'feedback':_0x2d2611['feedback']['value'],'fte':_0x2d2611['fte'],'fteReason':_0x2d2611['fteReason'],'nextPhase':_0x2d2611['nextPhase']['value'],'nextPhaseName':_0x2d2611['nextPhase']['constructor']['name'],'deviceTier':_0x2d2611['deviceTier']+0x1,'sizeCategory':_0x2d2611['sizeCategory']};_0x2d2611['delete']();}postMessage({'process':_0x18776f['data']['process'],'faceResult':_0x3aea7b,'responseTime':_0x5eaf38,'averageProcessTime':averageProcessTime,'perf':_0x1d443e});break;case'createIDScanMap':var _0x3168f8;var _0x19a41c;try{for(var _0x52298f=0x0;_0x52298f<_0x18776f['data']['idScan']['frontImages']['length'];_0x52298f++){Module['processFrontDocumentImage'](_0x18776f['data']['idScan']['frontImages'][_0x52298f]['image'],_0x18776f['data']['idScan']['frontImages'][_0x52298f]['width'],_0x18776f['data']['idScan']['frontImages'][_0x52298f]['height']);}for(var _0x52298f=0x0;_0x52298f<_0x18776f['data']['idScan']['backImages']['length'];_0x52298f++){Module['processFrontDocumentImage'](_0x18776f['data']['idScan']['backImages'][_0x52298f]['image'],_0x18776f['data']['idScan']['backImages'][_0x52298f]['width'],_0x18776f['data']['idScan']['backImages'][_0x52298f]['height']);}var _0x3168f8=Module['createIdentityDocument'](_0x18776f['data']['idScan']['zoomHistory']);var _0x10262f=_0x3168f8['idScan'];var _0x19a41c=new Blob([_0x10262f],{'type':'application/octet-stream'});var _0x4b890d=_0x3168f8['uuid'];}catch(_0x17512e){console['error']('ZoOm\x20Error:\x20832766\x20'+_0x17512e);}postMessage({'process':_0x18776f['data']['process'],'idScanMap':_0x19a41c,'uuid':_0x4b890d});if(_0x3168f8){_0x3168f8['delete']();}break;default:console['warn']('Invalid\x20process\x20sent\x20to\x20worker:'+_0x18776f['data']['process']);break;}};