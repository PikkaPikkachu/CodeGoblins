$(function () {
  let url = encodeURI(window.location.href);
  $('#facebookBTN').click(function () {
    window.location.href = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  });
  $('#linkedinBTN').click(function () {
    window.location.href = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=Resume&summary=&source=`
  });
  $('#twitterBTN').click(function () {
    window.location.href = `https://twitter.com/home?status=${url}`;
  });
  $.post('/fundGenerator/getGenerator',{
    username: JSON.parse(localStorage.getItem('userData')).data.username
  },(data)=>{
    makeBlog(data);
  });
  function makeBlog(data) {
    data = data.data;
    console.log(data);
    let d = new Date();
    $('#blogName').text(data.fname + " " + data.lname)
    $('#name').text(data.fname + " " + data.lname)
    $('#modeOfPayment').text(data.mop)
    $('#lastDate').text(d)
    $('#details').text(data.mop)
    $('#purpose').text(data.purpose)
    $('#dateFiled').text(d)
    $('#money').text("₹" + data.money)
    $('#contact').text(data.contactDetails);
  }
});
