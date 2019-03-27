window.onload = function() {
  console.log('ready to go');

  var wrapper = document.querySelector('.wrapper');

  for (var s of data) {
    //create new section for student 
    var section = document.createElement('section');

    //crate a new h3 for studenti add to section
    var h3 = document.createElement('h3')
    h3.innerText = s.name

    section.append(h3);
      //create an image for each imag, add to section
    for (var i of s.imgs) {
      var img = document.createElement('img');
      img.setAttribute('src', 'imgs/' + i);
      section.append(img);
    }
    //add section to wrapper,
    wrapper.append(section);
  }
}

var data = [{
  name: "Brian",
  imgs: ['brian.png', 'brian1.png', 'brian3.png']
}, {
  name: "Daniela",
  imgs: ['daniela.png', 'daniela2.png']
}, {
  name: "Diyorbek",
  imgs: ['diyorbek.png', 'diyorbek2.png', 'diyorbek3.png', 'diyorbek4.png']
}, {
  name: "Edi",
  imgs: ['edi.png']
}, {
  name: "Jack",
  imgs: ['jack.png', 'jack2.png', 'jack3.png']
}, {
  name: "Janiyah",
  imgs: ['janiyah.png']
}, {
  name: "Justis",
  imgs: ['justis.png']
}, {
  name: "Mac",
  imgs: ['mac.png', 'mac2.png', 'mac3.png']
}, {
  name: "Max",
  imgs: ['max.png', 'max2.png']
}, {
  name: "Oliver BH",
  imgs: ['oliverbh.png', 'oliverbh2.png', 'oliverbh3.png']
}, {
  name: "Oliver S",
  imgs: ['olivers.png', 'olivers2.png', 'olivers3.png']
}, {
  name: "quinn",
  imgs: ['quinn.png']
}, {
  name: "Shawn",
  imgs: ['shawn.jpg', 'shawn2.jpg']
}, {
  name: "Talia",
  imgs: ['talia.png', 'talia2.png', 'talia3.png']
}, {
  name: "Tanvir",
  imgs: ['tanvir1.jpg', 'tanvir2.jpg', 'tanvir3.png']
}, {
  name: "Yocelyn",
  imgs: ['yocelyn.png']
}, {
  name: "Yuval",
  imgs: ['yuval.png', 'yuval2.png', 'yuval3.png']
}, ]
