var siteName = document.getElementById("bookmarkName");
var siteURL = document.getElementById("bookmarkURL");
var bookMarkList = [];

var pattern = /^[(www)(WWW)]{3}\.\w*\.\w*$/i;
// var text = "www.google.com";
var mesegeURL = document.getElementById("mesegeURL")

if( localStorage.getItem("website") != null){
bookMarkList = JSON.parse( localStorage.getItem("website"));
displayData();
}

function addBookmark(){
if( validationURL() ==true){
    var bookMark = {
        siteName:siteName.value,
        siteURL:siteURL.value
    }
    bookMarkList.push(bookMark);
    localStorage.setItem("website", JSON.stringify(bookMarkList));
    displayData();
    clearBookMark();
    console.log(bookMarkList);
}


}

function clearBookMark(){
    siteName.value = "";
    siteURL.value = "";
}

function displayData(){

    var container = "";

    for( var i =0 ; i <bookMarkList.length ; i++ ){
        container += `  <tr>
        <td>${i+1}</td>
        <td> ${bookMarkList[i].siteName}</td>
        <td>
        <button onClick="visitBookMark(${i})" class="btn btn-visit" href= ${bookMarkList[i].siteURl} >
          <i class="fa-solid fa-eye pe-2"></i>Visit
        </button>
      </td>
   
      <td>
        <button onClick="deleteBookMark(${i});" class="btn btn-delete pe-2">
          <i class="fa-solid fa-trash-can"></i>
          Delete
        </button>
      </td>
      
    </tr> `
    }




    document.getElementById("tableBody").innerHTML = container;
}


function deleteBookMark(index){
    bookMarkList.splice(index,1)
    localStorage.setItem("website", JSON.stringify(bookMarkList));
    displayData();
}


function visitBookMark(idx) {
    window.location.href = "https://" + bookMarkList[idx].siteURL;
    console.log("visited", idx);
  }




// Validation
function validationURL(){
var text = siteURL.value
var regexURL = /^[(www)(WWW)]{3}\.\w*\.\w*$/i;

if(regexURL.test( text ) ){
    siteURL.classList.add("is-valid")
    siteURL.classList.remove("is-invalid")
    mesegeURL.classList.add("d-none")
    return true;
}
else{
    siteURL.classList.add("is-invalid")
    siteURL.classList.remove("is-valid")
    mesegeURL.classList.remove("d-none")
    return false;
}
}




















