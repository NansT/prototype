/*----------------------------------------------------------------------------*/

'use strict';

/*- GENESIS ------------------------------------------------------------------*/

function genesis() {
  return true
}

/*- VALIDATE -----------------------------------------------------------------*/

// Check data before publishing it
function validateCommit(entryType, entry, header, package, sources) {
  switch(entryType) {
    case "resource":
      if( (entry.type==="tree" || entry.type==="log" || entry.type==="plank" || entry.type==="wooden product") && entry.id!=="" )
        return true
    case "type_links":
      return true
  }
  return false
}
function validatePut(entry_type, entry, header, package, sources) {
  return true;
}
function validateLink(linkEntryType, baseHash, links, package, sources) {
  return true;
}
function validateMod(entry_type, entry, header, replaces, package, sources) {
  return true;
}
function validateDel(entry_type, hash, package, sources) {
  return true;
}
function validatePutPkg(entry_type) {
  return null;
}
function validateModPkg(entry_type) {
  return null;
}
function validateDelPkg(entry_type) {
  return null;
}
function validateLinkPkg(entry_type) {
  return null;
}

/*- EXPOSED FUNCTIONS --------------------------------------------------------*/

function addResource(resource) {
  //debug("add: "+resource.type+" - "+resource.id)

  var resourceHash = commit("resource", resource)
  //debug(" -> resource hash: "+resourceHash)

  var typeAnchorHash = anchor("type", resource.type)
  //debug(" -> type anchor hash: "+typeAnchorHash)

  var linkHash = commit('type_links', {
    Links: [{ Base: typeAnchorHash, Link: resourceHash, Tag: 'typeTag' }]
  });
  //debug(" -> link hash: "+linkHash)

  return resourceHash
}

function getResourceFromHash(hash) {
  //debug("get(hash): "+hash)

  var resource = get(hash)
  //debug(" -> resource: "+JSON.stringify(resource))

  return resource
}

function getResourcesFromType(type) {
  //debug("get(type): "+type);

  var typeAnchorHash = anchor("type", type)
  //debug(" -> type anchor hash: "+typeAnchorHash)

  var linkedEntries = getLinks(typeAnchorHash, "typeTag", {Load: true});
  //debug(" -> entries: "+linkedEntries);

  return linkedEntries
}

/*- ANCHOR FUNCTIONS ---------------------------------------------------------*/

// Returns the hash of the anchor
function anchor(anchorType, anchorText) {
  return call('anchors', 'anchor', {
    anchorType: anchorType,
    anchorText: anchorText
  }).replace(/"/g, '');
}

// 
function anchors(anchorType) {
  var links = call('anchors', 'anchors', anchorType)
  return links
}

// Returns true if the anchor exists
function anchorExists(anchorType, anchorText) {
  return call('anchors', 'exists', {
    anchorType: anchorType,
    anchorText: anchorText
  });
}

/*----------------------------------------------------------------------------*/
