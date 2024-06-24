;$$=s=>{return document.querySelectorAll(s)};var lbh = 0;(_=>{
    let hc={'<':'&lt;','&':'&amp;',"'":'&apos;','"':'&quot;'},he=x=>x.replace(/[<&'"]/g,c=>hc[c]) //html chars and escape fn
    ,tcs='<-←xx×/\\×:-÷*O⍟[-⌹-]⌹OO○77⌈FF⌈ll⌊LL⌊T_⌶II⌶|_⊥TT⊤-|⊣|-⊢=/≠L-≠<=≤<_≤>=≥>_≥==≡=_≡7=≢Z-≢vv∨^^∧^~⍲v~⍱^|↑v|↓((⊂cc⊂(_⊆c_⊆))⊃[|⌷|]⌷A|⍋V|⍒ii⍳i_⍸ee∊e_⍷' +
    'uu∪UU∪nn∩/-⌿\\-⍀,-⍪rr⍴pp⍴O|⌽O-⊖O\\⍉::¨""¨~:⍨~"⍨*:⍣*"⍣oo∘o:⍤o"⍤O:⍥O"⍥[\'⍞\']⍞[]⎕[:⍠:]⍠[=⌸=]⌸[<⌺>]⌺o_⍎oT⍕o-⍕<>⋄^v⋄on⍝->→aa⍺ww⍵VV∇v-∇--¯0~⍬' +
    'AA∆^-∆A_⍙^=⍙[?⍰?]⍰:V⍢∇"⍢||∥ox¤)_⊇_)⊇V~⍫\'\'`'
    ,lbs=['←←\nASSIGN', ' ', '++\nconjugate\nplus', '--\nnegate\nminus', '××\ndirection\ntimes', '÷÷\nreciprocal\ndivide', '**\nexponential\npower', '⍟⍟\nnatural logarithm\nlogarithm',
    '⌹⌹\nmatrix inverse\nmatrix divide', '○○\npi times\ncircular', '!!\nfactorial\nbinomial', '??\nroll\ndeal', ' ', '||\nmagnitude\nresidue',
    '⌈⌈\nceiling\nmaximum', '⌊⌊\nfloor\nminimum', '⊥⊥\ndecode', '⊤⊤\nencode', '⊣⊣\nsame\nleft', '⊢⊢\nsame\nright', ' ', '==\nequal', '≠≠\nunique mask\nnot equal',
    '≤≤\nless than or equal to', '<<\nless than', '>>\ngreater than', '≥≥\ngreater than or equal to', '≡≡\ndepth\nmatch', '≢≢\ntally\nnot match', ' ', '∨∨\ngreatest common divisor/or',
    '∧∧\nlowest common multiple/and', '⍲⍲\nnand', '⍱⍱\nnor', ' ', '↑↑\nmix\ntake', '↓↓\nsplit\ndrop', '⊂⊂\nenclose\npartioned enclose', '⊃⊃\nfirst\npick', '⊆⊆\nnest\npartition', '⌷⌷\nmaterialise\nindex', '⍋⍋\ngrade up\ngrades up',
    '⍒⍒\ngrade down\ngrades down', ' ', '⍳⍳\nindices\nindices of', '⍸⍸\nwhere\ninterval index', '∊∊\nenlist\nmember of', '⍷⍷\nfind', '∪∪\nunique\nunion', '∩∩\nintersection', '~~\nnot\nwithout', ' ',
    '//\nreplicate\nReduce', '\\\\\n\expand\nScan', '⌿⌿\nreplicate first\nReduce First', '⍀⍀\nexpand first\nScan First', ' ', ',,\nravel\ncatenate/laminate',
    '⍪⍪\ntable\ncatenate first/laminate', '⍴⍴\nshape\nreshape', '⌽⌽\nreverse\nrotate', '⊖⊖\nreverse first\nrotate first',
    '⍉⍉\ntranspose\nreorder axes', ' ', '¨¨\nEach', '⍨⍨\nConstant\nSelf\nSwap', '⍣⍣\nRepeat\nUntil', '..\nOuter Product (∘.)\nInner Product',
    '∘∘\nOUTER PRODUCT (∘.)\nBind\nBeside', '⍤⍤\nRank\nAtop', '⍥⍥\nOver', '@@\nAt', ' ', '⍞⍞\nSTDIN\nSTDERR', '⎕⎕\nEVALUATED STDIN\nSTDOUT\nSYSTEM NAME PREFIX', '⍠⍠\nVariant',
    '⌸⌸\nIndex Key\nKey', '⌺⌺\nStencil', '⌶⌶\nI-Beam', '⍎⍎\nexecute', '⍕⍕\nformat', ' ', '⋄⋄\nSTATEMENT SEPARATOR', '⍝⍝\nCOMMENT', '→→\nABORT\nBRANCH', '⍵⍵\nRIGHT ARGUMENT\nRIGHT OPERAND (⍵⍵)', '⍺⍺\nLEFT ARGUMENT\nLEFT OPERAND (⍺⍺)',
    '∇∇\nrecursion\nRecursion (∇∇)', '&&\nSpawn', ' ', '¯¯\nNEGATIVE', '⍬⍬\nEMPTY NUMERIC VECTOR', '∆∆\nIDENTIFIER CHARACTER', '⍙⍙\nIDENTIFIER CHARACTER']
    ,bqk=' =1234567890-qwertyuiop\\asdfghjk∙l;\'zxcvbnm,./`[]+!@#$%^&*()_QWERTYUIOP|ASDFGHJKL:"ZXCVBNM<>?~{}'.replace(/∙/g,'')
    ,bqv='`÷¨¯<≤=≥>≠∨∧×?⍵∊⍴~↑↓⍳○*⊢∙⍺⌈⌊_∇∆∘\'⎕⍎⍕∙⊂⊃∩∪⊥⊤|⍝⍀⌿⋄←→⌹⌶⍫⍒⍋⌽⍉⊖⍟⍱⍲!⍰W⍷R⍨YU⍸⍥⍣⊣ASDF⍢H⍤⌸⌷≡≢⊆⊇CVB¤∥⍪⍙⍠⌺⍞⍬'.replace(/∙/g,'')
    ,tc={},bqc={} //tab completions and ` completions
    for(let i=0;i<bqk.length;i++)bqc[bqk[i]]=bqv[i]
    for(let i=0;i<tcs.length;i+=3)tc[tcs[i]+tcs[i+1]]=tcs[i+2]
    for(let i=0;i<tcs.length;i+=3){let k=tcs[i+1]+tcs[i];tc[k]=tc[k]||tcs[i+2]}
    let lbh='';for(let i=0;i<lbs.length;i++){
      let ks=[]
      for(let j=0;j<bqk.length;j++)if(lbs[i][0]===bqv[j])ks.push('\nPrefix:\t<prefix> '+bqk[j])
      for(let j=0;j<tcs.length;j+=3)if(lbs[i][0]===tcs[j+2])ks.push('\nTab:\t'+tcs[j]+' '+tcs[j+1]+' <tab>')
      lbh+='<b title="'+he(lbs[i].slice(1)+(ks.length?'\n'+ks.join(''):''))+'">'+lbs[i][0]+'</b>'
    }
    el=document.createElement('div');el.classList.add("ngn_lb");el.innerHTML=`<span>${lbh}</span>`
    document.body.getElementsByTagName("header")[0].appendChild(el)
    let t,ts=[],lb=el.firstChild,bqm=0 //t:textarea or input, lb:language bar, bqm:backquote mode
    let pd=x=>x.preventDefault()
    let ev=(x,t,f,c)=>x.addEventListener(t,f,c)
    ev(lb,'mousedown',x=>{
      //if(x.target.classList.contains('ngn_x')){hide();upd();pd(x);return}
      if(x.target.nodeName==='B'&&t){
        let i=t.selectionStart,j=t.selectionEnd,v=t.value,s=x.target.textContent
        if(i!=null&&j!=null){t.value=v.slice(0,i)+s+v.slice(j);t.selectionStart=t.selectionEnd=i+s.length}
        pd(x);return
      }
    })
    let fk=x=>{
      let t=x.target
      if(bqm){let i=t.selectionStart,v=t.value,c=bqc[x.key];if(x.which>31){bqm=0;document.body.classList.remove('ngn_bq')}
              if(c){t.value=v.slice(0,i)+c+v.slice(i);t.selectionStart=t.selectionEnd=i+1;pd(x);return!1}}
      if (!x.ctrlKey && !x.shiftKey && !x.altKey && !x.metaKey) {
        if ("`½²^º§ùµ°".indexOf(x.key) > -1) {
          bqm=1;document.body.classList.add('ngn_bq');pd(x); // ` or other trigger symbol pressed, wait for next key
        } else if (x.key == "Tab") {
          let i=t.selectionStart,v=t.value,c=tc[v.slice(i-2,i)]
          if(c){t.value=v.slice(0,i-2)+c+v.slice(i);t.selectionStart=t.selectionEnd=i-1;pd(x)}
        }
      }
    }
    let ff=x=>{
      let t0=x.target,nn=t0.nodeName.toLowerCase()
      if(nn!=='textarea'&&(nn!=='input'||t0.type!=='text'&&t0.type!=='search'))return
      t=t0;if(!t.ngn){t.ngn=1;ts.push(t);ev(t,'keydown',fk)}
    }
    ev(document,'focus',ff,!0);let ae=document.activeElement;ae&&ff({type:'focus',target:ae})
    })();
