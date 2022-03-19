function isPangram(string) {
  const loop = string.split('');
  const filter = [' ', '!', '”', '#', '$', '%', '&', '’', '(', ')', '*', '+', ',', '-', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~', '.'];

  let array = [];
  for (let i = 0; i < loop.length; i++) {
    if (
      loop[i] !== filter[0] &&
      loop[i] !== filter[1] &&
      loop[i] !== filter[2] &&
      loop[i] !== filter[3] &&
      loop[i] !== filter[4] &&
      loop[i] !== filter[5] &&
      loop[i] !== filter[6] &&
      loop[i] !== filter[7] &&
      loop[i] !== filter[8] &&
      loop[i] !== filter[9] &&
      loop[i] !== filter[10] &&
      loop[i] !== filter[11] &&
      loop[i] !== filter[12] &&
      loop[i] !== filter[13] &&
      loop[i] !== filter[14] &&
      loop[i] !== filter[15] &&
      loop[i] !== filter[16] &&
      loop[i] !== filter[17] &&
      loop[i] !== filter[18] &&
      loop[i] !== filter[19] &&
      loop[i] !== filter[20] &&
      loop[i] !== filter[21] &&
      loop[i] !== filter[22] &&
      loop[i] !== filter[23] &&
      loop[i] !== filter[24] &&
      loop[i] !== filter[25] &&
      loop[i] !== filter[26] &&
      loop[i] !== filter[27] &&
      loop[i] !== filter[28] &&
      loop[i] !== filter[29] &&
      loop[i] !== filter[30] &&
      loop[i] !== filter[31]
    ) {
      array.push(loop[i].toLowerCase());
    }
  }

  var aCount = 0;
  var bCount = 0;
  var cCount = 0;
  var dCount = 0;
  var eCount = 0;
  var fCount = 0;
  var gCount = 0;
  var hCount = 0;
  var iCount = 0;
  var jCount = 0;
  var kCount = 0;
  var lCount = 0;
  var mCount = 0;
  var nCount = 0;
  var oCount = 0;
  var pCount = 0;
  var qCount = 0;
  var rCount = 0;
  var sCount = 0;
  var tCount = 0;
  var uCount = 0;
  var vCount = 0;
  var wCount = 0;
  var xCount = 0;
  var yCount = 0;
  var zCount = 0;
  let test = (array) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === 'a') {
        aCount++;
      } else if (array[i] === 'b') {
        bCount++;
      } else if (array[i] === 'c') {
        cCount++;
      } else if (array[i] === 'd') {
        dCount++;
      } else if (array[i] === 'e') {
        eCount++;
      } else if (array[i] === 'f') {
        fCount++;
      } else if (array[i] === 'g') {
        gCount++;
      } else if (array[i] === 'h') {
        hCount++;
      } else if (array[i] === 'i') {
        iCount++;
      } else if (array[i] === 'j') {
        jCount++;
      } else if (array[i] === 'k') {
        kCount++;
      } else if (array[i] === 'l') {
        lCount++;
      } else if (array[i] === 'm') {
        mCount++;
      } else if (array[i] === 'n') {
        nCount++;
      } else if (array[i] === 'o') {
        oCount++;
      } else if (array[i] === 'p') {
        pCount++;
      } else if (array[i] === 'q') {
        qCount++;
      } else if (array[i] === 'r') {
        rCount++;
      } else if (array[i] === 's') {
        sCount++;
      } else if (array[i] === 't') {
        tCount++;
      } else if (array[i] === 'u') {
        uCount++;
      } else if (array[i] === 'v') {
        vCount++;
      } else if (array[i] === 'w') {
        wCount++;
      } else if (array[i] === 'x') {
        xCount++;
      } else if (array[i] === 'y') {
        yCount++;
      } else if (array[i] === 'z') {
        zCount++;
      }
    }
    return [
      aCount,
      bCount,
      cCount,
      dCount,
      eCount,
      fCount,
      gCount,
      hCount,
      iCount,
      jCount,
      kCount,
      lCount,
      mCount,
      nCount,
      oCount,
      pCount,
      qCount,
      rCount,
      sCount,
      tCount,
      uCount,
      vCount,
      wCount,
      xCount,
      yCount,
      zCount,
    ];
  };
  test(array);

  if (array.length < 27) {
    return false;
  } else {
    return true;
  }
}

/*
//     if (
//       aCount < 1 &&
//       bCount < 1 &&
//       cCount < 1 &&
//       dCount < 1 &&
//       eCount < 1 &&
//       fCount < 1 &&
//       gCount < 1 &&
//       hCount < 1 &&
//       iCount < 1 &&
//       jCount < 1 &&
//       kCount < 1 &&
//       lCount < 1 &&
//       mCount < 1 &&
//       nCount < 1 &&
//       oCount < 1 &&
//       pCount < 1 &&
//       qCount < 1 &&
//       rCount < 1 &&
//       sCount < 1 &&
//       tCount < 1 &&
//       uCount < 1 &&
//       vCount < 1 &&
//       wCount < 1 &&
//       xCount < 1 &&
//       yCount < 1 &&
//       zCount < 1
//     ) {
//       return true;
//     }
//     let pangramArray = ;

//     test(pangramArray);

//     console.log(pangramArray);
  
  

//     for (let i = 0; i < pangramArray.length; i++) {
//       if (pangramArray[i] === 0) {
//         return false;
//         break;
//       } else if (
//         pangramArray[0] < 1 &&
//         pangramArray[1] < 1 &&
//         pangramArray[2] < 1 &&
//         pangramArray[3] < 1 &&
//         pangramArray[4] < 1 &&
//         pangramArray[5] < 1 &&
//         pangramArray[6] < 1 &&
//         pangramArray[7] < 1 &&
//         pangramArray[8] < 1 &&
//         pangramArray[9] < 1 &&
//         pangramArray[10] < 1 &&
//         pangramArray[11] < 1 &&
//         pangramArray[12] < 1 &&
//         pangramArray[13] < 1 &&
//         pangramArray[14] < 1 &&
//         pangramArray[15] < 1 &&
//         pangramArray[16] < 1 &&
//         pangramArray[17] < 1 &&
//         pangramArray[18] < 1 &&
//         pangramArray[19] < 1 &&
//         pangramArray[20] < 1 &&
//         pangramArray[21] < 1 &&
//         pangramArray[22] < 1 &&
//         pangramArray[23] < 1 &&
//         pangramArray[24] < 1 &&
//         pangramArray[25] < 1
//       ) {
//         return true;
//       }
      console.log();
//     }

function matchAlphabet(array) {
  let aCount = 0;
  let bCount = 0;
  let cCount = 0;
  let dCount = 0;
  let eCount = 0;
  let fCount = 0;
  let gCount = 0;
  let hCount = 0;
  let iCount = 0;
  let jCount = 0;
  let kCount = 0;
  let lCount = 0;
  let mCount = 0;
  let nCount = 0;
  let oCount = 0;
  let pCount = 0;
  let qCount = 0;
  let rCount = 0;
  let sCount = 0;
  let tCount = 0;
  let uCount = 0;
  let vCount = 0;
  let wCount = 0;
  let xCount = 0;
  let yCount = 0;
  let zCount = 0;

  switch (index) {
    case 'a':
      aCount++;
    case 'b':
      bCount++;
    case 'c':
      cCount++;
    case 'd':
      dCount++;
    case 'e':
      eCount++;
    case 'f':
      fCount++;
    case 'g':
      gCount++;
    case 'h':
      hCount++;
    case 'i':
      iCount++;
    case 'j':
      jCount++;
    case 'k':
      kCount++;
    case 'l':
      lCount++;
    case 'm':
      mCount++;
    case 'n':
      nCount++;
    case 'o':
      oCount++;
    case 'p':
      pCount++;
    case 'q':
      qCount++;
    case 'r':
      rCount++;
    case 's':
      sCount++;
    case 't':
      tCount++;
    case 'u':
      uCount++;
    case 'v':
      vCount++;
    case 'w':
      wCount++;
    case 'x':
      xCount++;
    case 'y':
      yCount++;
    case 'z':
      zCount++;
  }
  console.log(aCount);
}

  let matchAlphabet = (index) => {
    let aCount = 0;
    let bCount = 0;
    let cCount = 0;
    let dCount = 0;
    let eCount = 0;
    let fCount = 0;
    let gCount = 0;
    let hCount = 0;
    let iCount = 0;
    let jCount = 0;
    let kCount = 0;
    let lCount = 0;
    let mCount = 0;
    let nCount = 0;
    let oCount = 0;
    let pCount = 0;
    let qCount = 0;
    let rCount = 0;
    let sCount = 0;
    let tCount = 0;
    let uCount = 0;
    let vCount = 0;
    let wCount = 0;
    let xCount = 0;
    let yCount = 0;
    let zCount = 0;

    
      switch (index) {
        case 'a':
          aCount++;
        case 'b':
          bCount++;
        case 'c':
          cCount++;
        case 'd':
          dCount++;
        case 'e':
          eCount++;
        case 'f':
          fCount++;
        case 'g':
          gCount++;
        case 'h':
          hCount++;
        case 'i':
          iCount++;
        case 'j':
          jCount++;
        case 'k':
          kCount++;
        case 'l':
          lCount++;
        case 'm':
          mCount++;
        case 'n':
          nCount++;
        case 'o':
          oCount++;
        case 'p':
          pCount++;
        case 'q':
          qCount++;
        case 'r':
          rCount++;
        case 's':
          sCount++;
        case 't':
          tCount++;
        case 'u':
          uCount++;
        case 'v':
          vCount++;
        case 'w':
          wCount++;
        case 'x':
          xCount++;
        case 'y':
          yCount++;
        case 'z':
          zCount++;
    }
  

}
  */
/*
  function unlock = (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z) => {
    if (a < 1 &&
       b < 1 &&
       c < 1 &&
       d < 1 &&
       e < 1 &&
       f < 1 &&
       g < 1 &&
       h < 1 &&
       i < 1 &&
       j < 1 &&
       k < 1 &&
       l < 1 &&
       m < 1 &&
       n < 1 &&
       o < 1 &&
       p < 1 &&
       q < 1 &&
       r < 1 &&
       s < 1 &&
       t < 1 &&
       u < 1 &&
       v < 1 &&
       w < 1 &&
       x < 1 &&
       y < 1 &&
       z < 1) {
      return false;
    } else {
      return true;
    }
  };
function matchAlphabet(array) {
  let aCount = 0;
  let bCount = 0;
  let cCount = 0;
  let dCount = 0;
  let eCount = 0;
  let fCount = 0;
  let gCount = 0;
  let hCount = 0;
  let iCount = 0;
  let jCount = 0;
  let kCount = 0;
  let lCount = 0;
  let mCount = 0;
  let nCount = 0;
  let oCount = 0;
  let pCount = 0;
  let qCount = 0;
  let rCount = 0;
  let sCount = 0;
  let tCount = 0;
  let uCount = 0;
  let vCount = 0;
  let wCount = 0;
  let xCount = 0;
  let yCount = 0;
  let zCount = 0;

  for (let i = 0; i < array.length; i++) {
    switch(array[i]){
        case 'a':
        aCount++;
        case 'b':
        bCount++;
        case 'c':
        cCount++;
        case 'd':
        dCount++;
        case 'e':
        eCount++;
        case 'f':
        fCount++;
        case 'g':
        gCount++;
        case 'h':
        hCount++;
        case 'i':
        iCount++;
        case 'j':
        jCount++;
        case 'k':
        kCount++;
        case 'l':
        lCount++;
        case 'm':
        mCount++;
        case 'n':
        nCount++;
        case 'o':
        oCount++;
        case 'p':
        pCount++;
        case 'q':
        qCount++;
        case 'r':
        rCount++;
        case 's':
        sCount++;
        case 't':
        tCount++;
        case 'u':
        uCount++;
        case 'v':
        vCount++;
        case 'w':
        wCount++;
        case 'x':
        xCount++;
        case 'y':
        yCount++;
        case 'z':
        zCount++;
    }
    
  }
      unlock(
    bCount,
    cCount,
    dCount,
    eCount,
    fCount,
    gCount,
    hCount,
    iCount,
    jCount,
    kCount,
    lCount,
    mCount,
    nCount,
    oCount,
    pCount,
    qCount,
    rCount,
    sCount,
    tCount,
    uCount,
    vCount,
    wCount,
    xCount,
    yCount,
    zCount
  );
  console.log(aCount);
}
function countPoints() {}
*/
/*-Do not touch----------------------Sample Tests
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test1", () => {
    var string = "The quick brown fox jumps over the lazy dog."
    assert.strictEqual(isPangram(string), true)
  })
  it("test2", () => {
    var string = "This is not a pangram."
    assert.strictEqual(isPangram(string), false)
  });
});
*/
