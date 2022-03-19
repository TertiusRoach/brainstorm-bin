function isPangram(string) {
  let array = [];
  let loop = string.split('');
  let filter = [' ', '!', '”', '#', '$', '%', '&', '’', '(', ')', '*', '+', ',', '-', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~', '.'];

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
  if (array.length < 27) {
    return false;
  } else {
    let eCount = 0;
    let fCount = 0;

    switch (array[i]) {
      case 'e':
        eCount++;
      case 'f':
        fCount++;

      /*
      for(let i = 0; i < array.length; i++){
        if(array[i] === 'e'){
          eCount++;
        } else if (array[i] === 'f'){
          fCount++;
        }
        */
    }
    console.log(eCount);
    console.log(fCount);
  }
}

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

/*
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
