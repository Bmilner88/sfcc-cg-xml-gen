const groupId = document.querySelector('#group-id');
const customerNum = document.querySelector('#customer-num');
const createButton = document.querySelector('#create-btn');

function downloadHandler(event) {
    event.preventDefault();

    const filename = `${groupId.value}.xml`;
    const xmltext = `
<?xml version="1.0" encoding="UTF-8"?>
<customer-groups xmlns="http://www.demandware.com/xml/impex/customergroup/2007-06-30">
<customer-group group-id="${groupId.value}">
<custom-attributes/>
</customer-group>
    <group-assignment group-id="${groupId.value}" customer-no="${customerNum.value}" />
</customer-groups>   
`
    const download = document.createElement('a');
    const bb = new Blob([xmltext], {type: 'text/plain'});

    download.setAttribute('href', window.URL.createObjectURL(bb));
    download.setAttribute('download', filename);

    download.dataset.downloadurl = ['text/plain', download.download, pom.href].join(':');
    download.draggable = true; 
    download.classList.add('dragout');
};

createButton.addEventListener('click', downloadHandler);

/* var xmltext = "<sometag><someothertag></someothertag></sometag>";

var filename = "file.xml";
var pom = document.createElement('a');
var bb = new Blob([xmltext], {type: 'text/plain'});

pom.setAttribute('href', window.URL.createObjectURL(bb));
pom.setAttribute('download', filename);

pom.dataset.downloadurl = ['text/plain', pom.download, pom.href].join(':');
pom.draggable = true; 
pom.classList.add('dragout');

pom.click(); */