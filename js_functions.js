var inputTemplate = '<div id="input_div_NUM" name="clue"><input id="charades_input_NUM" onkeyup="showCharLen(this)" type="text" spellcheck="true"></input><span id="charlen_NUM"  class="grayed_text"></span><input id="remove_div_NUM" type="button" value="Remove" onclick="removeInput(this)"></div>';

function showCharLen(clue){
    var clueId = clue.id;
    var spanId = clueId.replace("charades_input_","charlen_");
    var clueLen = clue.value.length;
    var spanElement = document.getElementById(spanId);
    spanElement.innerHTML = clueLen;
}

function addInput(){
    var clueDivArray = document.getElementsByName("clue");
    if (clueDivArray.length == 0){
        var num = 0;
        var inputCurrent = inputTemplate.replace(/NUM/g, num.toString());
        document.getElementById('charades_input').insertAdjacentHTML('beforeend',inputCurrent);
    }
    else {
        var lastInputId = clueDivArray[clueDivArray.length - 1].id;
        var lastInputIdNum = parseInt(lastInputId.replace("input_div_",""));
        var num = lastInputIdNum + 1;
        var inputCurrent = inputTemplate.replace(/NUM/g, num.toString());
        document.getElementById('charades_input').insertAdjacentHTML('beforeend',inputCurrent);
    }
}

function removeInput(clue){
    var divId = clue.id.replace("remove_div_","input_div_");
    //Remove div of clue
    document.getElementById(divId).parentElement.removeChild(document.getElementById(divId));

}

function submitClues(){
    //Create Clues JSON
    var cluesJSON = {};
    //Put clues in JSON
    cluesJSON["team"] = document.getElementById("teamselector").value;
    //Get updated clueDivArray
    var clueDivArray = document.getElementsByName("clue");
    for (var item in clueDivArray){
        if (clueDivArray[item].firstChild != undefined){
            //Add Clues to JSON
            cluesJSON[item] = clueDivArray[item].firstChild.value;
        }
    }
    console.log(cluesJSON);
}
