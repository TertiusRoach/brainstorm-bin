function telbord() {
  const colleagues = 14;
  const moderators = telbordSheet.getRange('K3:L16').getValues();
  const redakteurs = telbordSheet.getRange('M3:N16').getValues();
  const totaal = telbordSheet.getRange('O3:P16').getValues();
  let sortedModerators = moderators.sort().reverse();
  let sortedRedakteurs = redakteurs.sort().reverse();
  let sortedTotaal = totaal.sort().reverse();

  for (let i = 0; i < colleagues; i++) {
    const row = i + 18;
    let modPunteRef = telbordSheet.getRange(`K${row}`);
    let modNaamRef = telbordSheet.getRange(`L${row}`);
    let redPunteRef = telbordSheet.getRange(`M${row}`);
    let redNaamRef = telbordSheet.getRange(`N${row}`);
    let totPunteRef = telbordSheet.getRange(`O${row}`);
    let totNaamRef = telbordSheet.getRange(`P${row}`);

    let modPointsRef = [['']];
    modPunteRef.setValues(modPointsRef);
    let modNameRef = [['']];
    modNaamRef.setValues(modNameRef);
    let redPointsRef = [['']];
    redPunteRef.setValues(redPointsRef);
    let redNameRef = [['']];
    redNaamRef.setValues(redNameRef);
    let totPointsRef = [['']];
    totPunteRef.setValues(totPointsRef);
    let totNameRef = [['']];
    totNaamRef.setValues(totNameRef);
  }

  for (let i = 0; i < colleagues; i++) {
    const row = i + 18;
    const confirmModerator = parseInt(sortedModerators[i][0]);
    const confirmRedakteur = parseInt(sortedRedakteurs[i][0]);
    const confirmTotaal = parseInt(sortedTotaal[i][0]);

    if (confirmModerator !== 0.0) {
      let modPunteRef = telbordSheet.getRange(`K${row}`);
      let modNaamRef = telbordSheet.getRange(`L${row}`);

      let modPointsRef = [[parseInt(sortedModerators[i][0])]];
      let modNameRef = [[sortedModerators[i][1]]];

      modPunteRef.setValues(modPointsRef);
      modNaamRef.setValues(modNameRef);
    }

    if (confirmRedakteur !== 0.0) {
      let redPunteRef = telbordSheet.getRange(`M${row}`);
      let redNaamRef = telbordSheet.getRange(`N${row}`);

      let redPointsRef = [[parseInt(sortedRedakteurs[i][0])]];
      let redNameRef = [[sortedRedakteurs[i][1]]];

      redPunteRef.setValues(redPointsRef);
      redNaamRef.setValues(redNameRef);
    }

    if (confirmTotaal !== 0.0) {
      let totPunteRef = telbordSheet.getRange(`O${row}`);
      let totNaamRef = telbordSheet.getRange(`P${row}`);

      let totPointsRef = [[parseInt(sortedTotaal[i][0])]];
      let totNameRef = [[sortedTotaal[i][1]]];

      totPunteRef.setValues(totPointsRef);
      totNaamRef.setValues(totNameRef);
    }
  }
}
