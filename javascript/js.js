/*...............................Slide Show...................................*/


 i=0;
  var pics=Array('pic1','pic2','pic3','pic4');
  function slideshow()
  {
    document.getElementById('pictures').className =pics[i];
    if(i>=3)
    {
      i=0;
    }
    else
    {
    i++;
    }
    setTimeout("slideshow()",3000);
  }

/*...............................support......................................*/



  function support()
   {
      var mypage=window.open('','','width=300px,height=300px,left=500px,top=150px');
      mypage.document.write("<p  style='font-family: B Nazanin'> سلام به پشتيباني انلاين شهر بچه ها خوش آمديد از الان مي توانيد با من چت کنيد </p>");
      mypage.document.body.style.backgroundColor="#F6F5F1";
   }


/*...............................Pazzel........................................*/



tmp_src="";
tmp_id="";

function change(id,src)
{
if(tmp_src)
{
document.getElementById(tmp_id).src=src;
document.getElementById(id).src=tmp_src;
tmp_src="";
tmp_id="";

}
else
{
tmp_src=src;
tmp_id=id;


}
}
