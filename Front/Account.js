function AddAds(title, description, time, location, appID, price,image) {
    var divSize = document.createElement('div');
    var divSer = document.createElement('div');
    var divMain = document.createElement('div');
    var divWrap = document.createElement('div');
    var adFig = document.createElement('figure');
    var adlink = document.createElement('a');
    var adlinkIcon = document.createElement('i');
    var adImg = document.createElement('img');
    var divLabel = document.createElement('div');
    
    var divPrice = document.createElement('div');
    var spanPrice = document.createElement('span');
    var divBody = document.createElement('div');
    var Title = document.createElement('h3');
    var divDesc = document.createElement('div');
    var Desc = document.createElement('p');
    var divAddress = document.createElement('div');
    var addrsIcon = document.createElement('i');
    var divFoot = document.createElement('div');
    var divLeft = document.createElement('div');
    var spanLeft = document.createElement('span');
    var leftIcon = document.createElement('i');
    var divRight = document.createElement('div');
    var spanRight = document.createElement('span');
    var rightIcon = document.createElement('i');
    var Location = document.createElement('text');
   


    divSize.setAttribute('class', 'col-md-4 col-sm-12 col-xs-12');
    divSer.setAttribute('class', 'service-widget box');
    divMain.setAttribute('class', 'property-main');
    divWrap.setAttribute('class', 'property-wrap');
    adFig.setAttribute('class', 'post-media wow fadeIn');
    adlink.setAttribute('data-rel', 'prettyPhoto[gal]');
    adlink.setAttribute('class', 'hoverbutton global-radius');
    adlink.setAttribute('href', image);
    
    
    
    adlinkIcon.setAttribute('class', 'flaticon-unlink');
    adImg.setAttribute('src', image);
    adImg.setAttribute('class', 'img-responsive');
    divLabel.setAttribute('class', 'label-inner');
    
    divPrice.setAttribute('class', 'price');
    spanPrice.setAttribute('class', 'item-sub-price');
    divBody.setAttribute('class', 'item-body');
    divDesc.setAttribute('class', 'info');
    divAddress.setAttribute('class', 'adderess');
    addrsIcon.classList.add('fa', 'fa-map-pin');
    addrsIcon.setAttribute('aria-hidden', 'true');
    divFoot.setAttribute('class', 'item-foot');
    divLeft.setAttribute('class', 'pull-left');
    spanLeft.setAttribute('class', 'prop-user-agent');
    leftIcon.classList.add('fa', 'fa-user');
    leftIcon.setAttribute('aria-hidden', 'true');
    divRight.classList.add('pull-right');
    spanRight.classList.add('prop-date');
    rightIcon.classList.add('fa', 'fa-calendar');
    rightIcon.setAttribute('aria-hideen', 'true');
    Title.setAttribute('style','color:black');
    Desc.innerHTML = description.substring(0,100);
    Title.innerHTML = title;
    Location.innerHTML = location.substring(0,40);
    spanPrice.innerHTML = price;

    adlink.appendChild(adlinkIcon);

    divPrice.appendChild(spanPrice);
    adFig.appendChild(adlink);
    adFig.appendChild(adImg);
    adFig.appendChild(divLabel);
    adFig.appendChild(divPrice);
    divDesc.appendChild(Desc);
    divAddress.appendChild(addrsIcon);
    divAddress.appendChild(Location);
    divBody.appendChild(Title);
    divBody.appendChild(divDesc);
    divBody.appendChild(divAddress);
    spanLeft.appendChild(leftIcon);
    divLeft.appendChild(spanLeft);
    spanRight.appendChild(rightIcon);
    spanRight.append(time);
    divRight.appendChild(spanRight);
    divFoot.appendChild(divLeft);
    divFoot.appendChild(divRight);
    divWrap.appendChild(adFig);
    divWrap.appendChild(divBody);
    divWrap.appendChild(divFoot);
    divMain.appendChild(divWrap);
    divSer.appendChild(divMain);
    divSize.setAttribute('style','margin-bottom: 30px;');
    divSize.appendChild(divSer);
    divSize.addEventListener('click', function () {
        localStorage.setItem('appID', appID);
        window.document.location = './ads.html';
    });

    document.getElementById('adHeader').appendChild(divSize);
}
function fetchAllData() {
    
    firebase.database().ref('images').orderByChild("main").equalTo(localStorage.getItem("currMail")).once('value', function (snapshot) {
                        snapshot.forEach(childSnapshot => {
                            image = childSnapshot.val().link;
                            document.getElementById('userPp').setAttribute('src', image);
                        });
                        
                    });
    var images = ['uploads/estate_01.jpg' , 'uploads/estate_02.jpg' , 'uploads/estate_03.jpg','uploads/home_01.jpg' ,'uploads/home_02.jpg','uploads/home_03.jpg'];
    let i=0;
    firebase.database().ref('Favorites').orderByChild("user").equalTo(localStorage.getItem("currMail")).once('value', function (snapshot) {
        snapshot.forEach(childSnapshot => {
           var ad = childSnapshot.val().Ad;
           
           firebase.database().ref('Ads').orderByKey().equalTo(ad).once('value', function (snapshot) {
        snapshot.forEach(childSnapshot => {
            console.log(ad);
           let title = childSnapshot.val().Title;
                            let description = childSnapshot.val().Description;
                            let time = childSnapshot.val().Time;
                            let appID = childSnapshot.key;
                            let location = childSnapshot.val().location;
                            let price = childSnapshot.val().price;



                            AddAds(title, description, time, location, appID, price, images[i]);
                            i++;
           
        });
            
        });
    });
    });
}
function clear(){
        
    document.getElementById('adHeader').innerHTML = "";
}
document.getElementById('fav').addEventListener('click',fetchAllData);
document.getElementById('fav').addEventListener('click',clear);