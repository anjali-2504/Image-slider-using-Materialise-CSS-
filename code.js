var file=DriveApp.getFilesByName("abc.jpeg").next();
var id = file.getId();
 //("abc.jpeg");
 //Logger.log(file);
  function doGet(e) 
{
//
  var tmp= HtmlService.createTemplateFromFile("p");
  tmp.imagesource= "<img src=\"https://drive.google.com/uc?export=view&id=" + id +"\">";
 Logger.log(tmp.imagesource);
//tmp.heading="MY HEADING";
 return tmp.evaluate();

}
