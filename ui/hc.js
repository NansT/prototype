function hcAddResource (data, callback) {
  var xhr = new XMLHttpRequest()
  var url = '/fn/prototype/addResource'
  xhr.open('POST', url, true)
  xhr.setRequestHeader('Content-type', 'application/json')
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(xhr.responseText)
    }
  }
  xhr.send(JSON.stringify(data))
}

function hcGetResourceFromHash (hash, callback) {
  var xhr = new XMLHttpRequest()
  var url = '/fn/prototype/getResourceFromHash'
  xhr.open('POST', url, true)
  xhr.setRequestHeader('Content-type', 'application/json')
  xhr.onreadystatechange = function () {
  	if (xhr.readyState === 4 && xhr.status === 200) {
      callback(xhr.responseText)
    }
  }
  xhr.send(JSON.stringify(hash))
}

function hcGetResourcesFromType (type, callback) {
  var xhr = new XMLHttpRequest()
  var url = '/fn/prototype/getResourcesFromType'
  xhr.open('POST', url, true)
  xhr.setRequestHeader('Content-type', 'application/json')
  xhr.onreadystatechange = function () {
  	if (xhr.readyState === 4 && xhr.status === 200) {
      callback(xhr.responseText)
    }
  }
  xhr.send(JSON.stringify(type))
}