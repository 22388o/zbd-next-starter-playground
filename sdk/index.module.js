var e={__proto__:null};function r(){return r=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},r.apply(this,arguments)}var t="https://api.zebedee.io",n="/v0/charges",o="/v0/static-charges",a="/v0/payments",s="/v0/withdrawal-requests",i=function(e){var t=e.url,n=e.headers;try{return Promise.resolve(fetch(t,{method:"GET",headers:r({"Content-Type":"application/json"},n)})).then(function(e){function r(r){return Promise.resolve(e.json())}var t=function(){if(!e.ok)return Promise.resolve(e.json()).then(function(r){throw{status:e.status,message:r.message||"API request failed"}})}();return t&&t.then?t.then(r):r()})}catch(e){return Promise.reject(e)}},c=function(e){var t=e.url,n=e.body,o=e.headers;try{return Promise.resolve(fetch(t,{method:"POST",headers:r({"Content-Type":"application/json"},o),body:JSON.stringify(u(n))})).then(function(e){function r(r){return Promise.resolve(e.json())}var t=function(){if(!e.ok)return Promise.resolve(e.json()).then(function(r){throw{status:e.status,message:r.message||"API request failed"}})}();return t&&t.then?t.then(r):r()})}catch(e){return Promise.reject(e)}},u=function(e){for(var r={},t=0,n=Object.entries(e);t<n.length;t++){var o=n[t],a=o[1];null!=a&&(r[o[0]]=a)}return r};function l(e,r){try{var t=e()}catch(e){return r(e)}return t&&t.then?t.then(void 0,r):t}var h=/*#__PURE__*/function(){function e(e){this.apiKey=void 0,this.apiBaseUrl=void 0,this.apiCoreHeaders=void 0,this.apiKey=e,this.apiBaseUrl=t,this.apiCoreHeaders={apikey:e}}var h=e.prototype;return h.createCharge=function(e){try{var o=this;return Promise.resolve(l(function(){var a=e.amount,s=e.expiresIn,i=e.internalId,u=e.description,l=e.callbackUrl;return Promise.resolve(c({url:""+t+n,headers:r({},o.apiCoreHeaders),body:{amount:a,expiresIn:s,internalId:i,description:u,callbackUrl:l}}))},function(e){throw e}))}catch(e){return Promise.reject(e)}},h.getCharge=function(e){try{var o=this;return Promise.resolve(l(function(){return Promise.resolve(i({url:""+t+n+"/"+e,headers:r({},o.apiCoreHeaders)}))},function(e){throw e}))}catch(e){return Promise.reject(e)}},h.createWithdrawalRequest=function(e){try{var n=this;return Promise.resolve(l(function(){var o=e.amount,a=e.expiresIn,i=e.internalId,u=e.callbackUrl,l=e.description;return Promise.resolve(c({url:""+t+s,headers:r({},n.apiCoreHeaders),body:{amount:o,expiresIn:a,internalId:i,callbackUrl:u,description:l}}))},function(e){throw e}))}catch(e){return Promise.reject(e)}},h.getWithdrawalRequest=function(e){try{var n=this;return Promise.resolve(l(function(){return Promise.resolve(i({url:""+t+s+"/"+e,headers:r({},n.apiCoreHeaders)}))},function(e){throw e}))}catch(e){return Promise.reject(e)}},h.validateLightningAddress=function(e){try{var n=this;return Promise.resolve(l(function(){return Promise.resolve(i({url:t+"/v0/ln-address/validate/"+e,headers:r({},n.apiCoreHeaders)}))},function(e){throw e}))}catch(e){return Promise.reject(e)}},h.sendLightningAddressPayment=function(e){try{var n=e.amount,o=e.comment,a=e.lnAddress,s=e.internalId,i=e.callbackUrl;return Promise.resolve(c({url:t+"/v0/ln-address/send-payment",headers:r({},this.apiCoreHeaders),body:{amount:n,comment:o,lnAddress:a,internalId:s,callbackUrl:i}}))}catch(e){return Promise.reject(e)}},h.getWallet=function(){try{return Promise.resolve(i({url:t+"/v0/wallet",headers:r({},this.apiCoreHeaders)}))}catch(e){return Promise.reject(e)}},h.isSupportedRegion=function(e){try{var n=this;return Promise.resolve(l(function(){return Promise.resolve(i({url:t+"/v0/is-supported-region/"+e,headers:r({},n.apiCoreHeaders)}))},function(e){throw e}))}catch(e){return Promise.reject(e)}},h.fetchZBDProdIps=function(){try{var e=this;return Promise.resolve(l(function(){return Promise.resolve(i({url:t+"/v0/prod-ips",headers:r({},e.apiCoreHeaders)}))},function(e){throw e}))}catch(e){return Promise.reject(e)}},h.btcUsdExchangeRate=function(){try{var e=this;return Promise.resolve(l(function(){return Promise.resolve(i({url:t+"/v0/btcusd",headers:r({},e.apiCoreHeaders)}))},function(e){throw e}))}catch(e){return Promise.reject(e)}},h.internalTransfer=function(e){try{var n=this;return Promise.resolve(l(function(){var o=e.amount,a=e.receiverWalletId;return Promise.resolve(c({url:t+"/v0/internal-transfer",headers:r({},n.apiCoreHeaders),body:{amount:o,receiverWalletId:a}}))},function(e){throw e}))}catch(e){return Promise.reject(e)}},h.sendKeysendPayment=function(e){try{var n=this;return Promise.resolve(l(function(){var o=e.amount,a=e.pubkey,s=e.metadata,i=e.tlvRecords,u=e.callbackUrl;return Promise.resolve(c({url:t+"/v0/keysend-payment",headers:r({},n.apiCoreHeaders),body:{amount:o,pubkey:a,metadata:s,tlvRecords:i,callbackUrl:u}}))},function(e){throw e}))}catch(e){return Promise.reject(e)}},h.payCharge=function(e){try{var n=this;return Promise.resolve(l(function(){var o=e.amount,s=e.invoice,i=e.internalId,u=e.description,l=e.callbackUrl;return Promise.resolve(c({url:""+t+a,headers:r({},n.apiCoreHeaders),body:{amount:o,invoice:s,internalId:i,description:u,callbackUrl:l}}))},function(e){throw e}))}catch(e){return Promise.reject(e)}},h.getPayment=function(e){try{var n=this;return Promise.resolve(l(function(){return Promise.resolve(i({url:""+t+a+"/"+e,headers:r({},n.apiCoreHeaders)}))},function(e){throw e}))}catch(e){return Promise.reject(e)}},h.sendGamertagPayment=function(e){try{var n=this;return Promise.resolve(l(function(){var o=e.amount,a=e.gamertag,s=e.description;return Promise.resolve(c({url:t+"/v0/gamertag/send-payment",headers:r({},n.apiCoreHeaders),body:{amount:o,gamertag:a,description:s}}))},function(e){throw e}))}catch(e){return Promise.reject(e)}},h.fetchGamertagTransaction=function(e){try{var n=this;return Promise.resolve(l(function(){return Promise.resolve(i({url:t+"/v0/gamertag/transaction/"+e,headers:r({},n.apiCoreHeaders)}))},function(e){throw e}))}catch(e){return Promise.reject(e)}},h.fetchUserIdByGamertag=function(e){try{var n=this;return Promise.resolve(l(function(){return Promise.resolve(i({url:t+"/v0/user-id/gamertag/"+e,headers:r({},n.apiCoreHeaders)}))},function(e){throw e}))}catch(e){return Promise.reject(e)}},h.fetchGamertagByUserId=function(e){try{var n=this;return Promise.resolve(l(function(){return Promise.resolve(i({url:t+"/v0/gamertag/user-id/"+e,headers:r({},n.apiCoreHeaders)}))},function(e){throw e}))}catch(e){return Promise.reject(e)}},h.createGamertagCharge=function(e){try{var n=this;return Promise.resolve(l(function(){var o=e.amount,a=e.gamertag,s=e.internalId,i=e.description,u=e.callbackUrl;return Promise.resolve(c({url:t+"/v0/gamertag/charges",headers:r({},n.apiCoreHeaders),body:{amount:o,gamertag:a,internalId:s,description:i,callbackUrl:u}}))},function(e){throw e}))}catch(e){return Promise.reject(e)}},h.createStaticCharge=function(e){try{var n=this;return Promise.resolve(l(function(){var a=e.allowedSlots,s=e.minAmount,i=e.maxAmount,u=e.description,l=e.internalId,h=e.callbackUrl,d=e.successMessage;return Promise.resolve(c({url:""+t+o,headers:r({},n.apiCoreHeaders),body:{minAmount:s,maxAmount:i,internalId:l,callbackUrl:h,description:u,allowedSlots:a,successMessage:d}}))},function(e){throw e}))}catch(e){return Promise.reject(e)}},h.updateStaticCharge=function(e,n){try{var a=this;return Promise.resolve(l(function(){return Promise.resolve(function(e){var t=e.url,n=e.body,o=e.headers;try{return Promise.resolve(fetch(t,{method:"PATCH",headers:r({"Content-Type":"application/json"},o),body:JSON.stringify(u(n))})).then(function(e){function r(r){return Promise.resolve(e.json())}var t=function(){if(!e.ok)return Promise.resolve(e.json()).then(function(r){throw{status:e.status,message:r.message||"API request failed"}})}();return t&&t.then?t.then(r):r()})}catch(e){return Promise.reject(e)}}({url:""+t+o+"/"+e,headers:r({},a.apiCoreHeaders),body:n}))},function(e){throw e}))}catch(e){return Promise.reject(e)}},h.getStaticCharge=function(e){try{var n=this;return Promise.resolve(l(function(){return Promise.resolve(i({url:""+t+o+"/"+e,headers:r({},n.apiCoreHeaders)}))},function(e){throw e}))}catch(e){return Promise.reject(e)}},e}();export{e as types,h as zbd};
//# sourceMappingURL=index.module.js.map
