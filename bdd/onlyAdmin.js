function a11_0x1160(_0x4171de,_0x47ad8a){const _0x13e7a5=a11_0x555d();return a11_0x1160=function(_0x5a936a,_0x539c28){_0x5a936a=_0x5a936a-0x178;let _0x555d58=_0x13e7a5[_0x5a936a];return _0x555d58;},a11_0x1160(_0x4171de,_0x47ad8a);}const a11_0x5e6206=a11_0x1160;(function(_0x1c2f89,_0x4c832f){const _0x35943a=a11_0x1160,_0x2812bd=_0x1c2f89();while(!![]){try{const _0x18e32d=-parseInt(_0x35943a(0x196))/0x1*(parseInt(_0x35943a(0x190))/0x2)+parseInt(_0x35943a(0x17d))/0x3*(parseInt(_0x35943a(0x193))/0x4)+-parseInt(_0x35943a(0x183))/0x5+-parseInt(_0x35943a(0x17c))/0x6+-parseInt(_0x35943a(0x189))/0x7*(-parseInt(_0x35943a(0x197))/0x8)+-parseInt(_0x35943a(0x187))/0x9*(-parseInt(_0x35943a(0x178))/0xa)+-parseInt(_0x35943a(0x18e))/0xb;if(_0x18e32d===_0x4c832f)break;else _0x2812bd['push'](_0x2812bd['shift']());}catch(_0x251c36){_0x2812bd['push'](_0x2812bd['shift']());}}}(a11_0x555d,0xb9a48));const a11_0x539c28=(function(){let _0x121ed4=!![];return function(_0x17ed5b,_0x29ef63){const _0x2769fe=_0x121ed4?function(){const _0x1f8e6a=a11_0x1160;if(_0x29ef63){const _0x1af7f5=_0x29ef63[_0x1f8e6a(0x18b)](_0x17ed5b,arguments);return _0x29ef63=null,_0x1af7f5;}}:function(){};return _0x121ed4=![],_0x2769fe;};}()),a11_0x5a936a=a11_0x539c28(this,function(){const _0x2f2a59=a11_0x1160;return a11_0x5a936a[_0x2f2a59(0x198)]()[_0x2f2a59(0x185)](_0x2f2a59(0x19a))['toString']()[_0x2f2a59(0x182)](a11_0x5a936a)[_0x2f2a59(0x185)](_0x2f2a59(0x19a));});a11_0x5a936a(),require(a11_0x5e6206(0x18d))['config']();const {Pool}=require('pg'),s=require(a11_0x5e6206(0x17e));var dbUrl=s['DATABASE_URL']?s['DATABASE_URL']:'postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9';const proConfig={'connectionString':dbUrl,'ssl':{'rejectUnauthorized':![]}},pool=new Pool(proConfig),creerTableOnlyAdmin=async()=>{const _0x2c2dc1=a11_0x5e6206;try{await pool[_0x2c2dc1(0x179)](_0x2c2dc1(0x180)),console[_0x2c2dc1(0x191)](_0x2c2dc1(0x19c));}catch(_0x2892ca){console['error']('Une\x20erreur\x20est\x20survenue\x20lors\x20de\x20la\x20création\x20de\x20la\x20table\x20\x27onlyAdmin\x27:',_0x2892ca);}};function a11_0x555d(){const _0x7439ca=['../set','exports','\x0a\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20onlyAdmin\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20groupeJid\x20text\x20PRIMARY\x20KEY\x0a\x20\x20\x20\x20\x20\x20);\x0a\x20\x20\x20\x20','\x20ajouté\x20à\x20la\x20liste\x20des\x20groupes\x20onlyAdmin.','constructor','687720HohkKF','push','search','\x20supprimé\x20de\x20la\x20liste\x20des\x20groupes\x20onlyAdmin.','4086VhyVEk','SELECT\x20*\x20FROM\x20onlyAdmin','7BjiMEd','DELETE\x20FROM\x20onlyAdmin\x20WHERE\x20groupeJid\x20=\x20$1','apply','error','dotenv','1786950ochpvx','forEach','2322986JzvATr','log','connect','20nWWcXl','Groupe\x20JID\x20','Erreur\x20lors\x20de\x20la\x20vérification\x20du\x20groupe\x20onlyAdmin\x20:','1dITvfz','12099368SxIGTo','toString','groupejid','(((.+)+)+)+$','INSERT\x20INTO\x20onlyAdmin\x20(groupeJid)\x20VALUES\x20($1)','La\x20table\x20\x27onlyAdmin\x27\x20a\x20été\x20créée\x20avec\x20succès.','12530GTGNSv','query','Erreur\x20lors\x20de\x20l\x27ajout\x20du\x20groupe\x20onlyAdmin\x20:','release','498834gJFSGK','134241ThJoHH'];a11_0x555d=function(){return _0x7439ca;};return a11_0x555d();}creerTableOnlyAdmin();async function addGroupToOnlyAdminList(_0x4cbbd7){const _0x145cb0=a11_0x5e6206,_0xb5a6d5=await pool['connect']();try{const _0x943f88=_0x145cb0(0x19b),_0x232e67=[_0x4cbbd7];await _0xb5a6d5['query'](_0x943f88,_0x232e67),console[_0x145cb0(0x191)](_0x145cb0(0x194)+_0x4cbbd7+_0x145cb0(0x181));}catch(_0x587953){console['error'](_0x145cb0(0x17a),_0x587953);}finally{_0xb5a6d5[_0x145cb0(0x17b)]();}}async function isGroupOnlyAdmin(){const _0x5ab887=a11_0x5e6206,_0x1ba50e=await pool[_0x5ab887(0x192)]();try{const _0x113836=_0x5ab887(0x188),_0x4cddc5=await _0x1ba50e['query'](_0x113836);let _0x3cd7ef=[];return _0x4cddc5['rows'][_0x5ab887(0x18f)](_0xf50db6=>{const _0x17cde3=_0x5ab887;_0x3cd7ef[_0x17cde3(0x184)](_0xf50db6[_0x17cde3(0x199)]);}),_0x3cd7ef;}catch(_0xa21b0a){return console[_0x5ab887(0x18c)](_0x5ab887(0x195),_0xa21b0a),[];}finally{_0x1ba50e[_0x5ab887(0x17b)]();}}async function removeGroupFromOnlyAdminList(_0x4dd57f){const _0x48818e=a11_0x5e6206,_0x1f0b0e=await pool[_0x48818e(0x192)]();try{const _0x5187d6=_0x48818e(0x18a),_0x1085d4=[_0x4dd57f];await _0x1f0b0e[_0x48818e(0x179)](_0x5187d6,_0x1085d4),console['log']('Groupe\x20JID\x20'+_0x4dd57f+_0x48818e(0x186));}catch(_0x4baae5){console[_0x48818e(0x18c)]('Erreur\x20lors\x20de\x20la\x20suppression\x20du\x20groupe\x20onlyAdmin\x20:',_0x4baae5);}finally{_0x1f0b0e[_0x48818e(0x17b)]();}}module[a11_0x5e6206(0x17f)]={'addGroupToOnlyAdminList':addGroupToOnlyAdminList,'isGroupOnlyAdmin':isGroupOnlyAdmin,'removeGroupFromOnlyAdminList':removeGroupFromOnlyAdminList};