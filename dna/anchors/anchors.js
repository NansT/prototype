function anchor(anchor){
  var anchorType = {anchorType: anchor.anchorType, anchorText: ''};
  var rootAnchortype =  {anchorType: 'anchorTypes', anchorText: ''};
  var anchorHash = makeHash('anchor', anchor);
  var anchorGet = get(anchorHash);
  // debug('anchorGet ' + JSON.stringify(anchorGet));

  if(anchorGet === null){
    var anchorType = {anchorType: anchor.anchorType, anchorText: ''};
    var rootAnchortype =  {anchorType: 'anchorTypes', anchorText: ''};
    var anchorTypeGet = get(makeHash('anchor', anchorType));
    // debug('anchorTypeGet ' + JSON.stringify(anchorTypeGet));

    if(anchorTypeGet === null){
      var rootAnchorTypeHash = makeHash('anchor', rootAnchortype);
      if (get(rootAnchorTypeHash) === null){
        rootAnchorTypeHash = commit('anchor', rootAnchortype);
        // debug('Root Anchor Type Created: ' + rootAnchorTypeHash)
      }

      var anchorTypeHash = commit('anchor', anchorType);
      // debug('Anchor Type Created: ' + anchorTypeHash)

      commit('anchor_link', { Links:[{Base: rootAnchorTypeHash, Link: anchorTypeHash, Tag: anchorType.anchorType}]});

    } else {
      anchorTypeHash = makeHash('anchor', anchorType);
    }

    anchorHash = commit('anchor', anchor);
    // debug('Anchor Created ' + anchorHash)

    commit('anchor_link',  { Links:[{Base: anchorTypeHash, Link: anchorHash, Tag: anchor.anchorText}]});
  }

  return anchorHash;
}

function exists(anchor){
  // // debug(get(makeHash('anchor', anchor)));
  var key = get(makeHash('anchor', anchor));
  // // debug(key);
  if(key !== null){
    return true;
  }
  return false;
}

function anchors(type){
  var typeHash = makeHash('anchor', {anchorType: type, anchorText: ''})
  var links = getLinks(typeHash, '');
  // debug(links)
  return links;
}

function genesis() {
  return true;
}

function validatePut(entry_type,entry,header,pkg,sources) {
  // // debug('Anchors validatePut:' + sources)
  return validateCommit(entry_type,entry,header,pkg,sources);
}
function validateCommit(entry_type,entry,header,pkg,sources) {
  // // debug('Anchors validatePut:' + sources)
    if (entry_type == 'anchor') {
        return true;
    }
    if (entry_type == 'anchor_link') {
        return true;
    }
    return false;
}



function validateLink(linkingEntryType,baseHash,linkHash,pkg,sources){
  // // debug('Anchors validateLink:' + sources)
  return true;
}
function validateMod(entry_type,hash,newHash,pkg,sources){
  // // debug('Anchors validateMod:' + sources)
  return true;
}
function validateDel(entry_type,hash,pkg,sources) {
  // // debug('Anchors validateDel:' + sources)
  return true;
}
function validatePutPkg(entry_type) {
  // // debug('Anchors validatePutPkg')
  return null;
}
function validateModPkg(entry_type) {
  // // debug('Anchors validateModPkg')
  return null;
}
function validateDelPkg(entry_type) {
  // // debug('Anchors validateDelPkg')
  return null;
}
function validateLinkPkg(entry_type) {
  // // debug('Anchors validateLinkPkg')
  return null;
}
