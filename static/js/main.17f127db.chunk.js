(this["webpackJsonpairbnb-clone"]=this["webpackJsonpairbnb-clone"]||[]).push([[0],{60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){"use strict";c.r(t);var i=c(1),n=c(0),s=c.n(n),a=c(22),r=c.n(a),o=(c(60),c(21)),j=c(5);c(61),c(62);var d=function(){return Object(i.jsxs)("div",{className:"footer",children:[Object(i.jsx)("p",{children:"\xa9 2020 Airbnb clone! No rights reserved - this is a demo!"}),Object(i.jsx)("p",{children:"Privacy \xb7 Terms \xb7 Sitemap \xb7 Company Details"})]})},l=(c(63),c(42)),h=c.n(l),b=c(46),m=c.n(b),p=c(48),u=c.n(p),x=c(47),O=c.n(x);var f=function(){return Object(i.jsxs)("div",{className:"header",children:[Object(i.jsx)(o.b,{to:"/",children:Object(i.jsx)("img",{className:"header__icon",src:"https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png",alt:""})}),Object(i.jsxs)("div",{className:"header__search",children:[Object(i.jsx)("input",{type:"text"}),Object(i.jsx)(h.a,{})]}),Object(i.jsxs)("div",{className:"header__featureBar",children:[Object(i.jsx)("p",{children:"Become a host"}),Object(i.jsx)(m.a,{}),Object(i.jsx)(O.a,{}),Object(i.jsx)(u.a,{})]})]})};c(70);var g=function(e){var t=e.src,c=e.price,n=e.title,s=e.description;return Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("img",{src:t,alt:""}),Object(i.jsxs)("div",{className:"card__info",children:[Object(i.jsx)("h2",{children:n}),Object(i.jsx)("h4",{children:s}),Object(i.jsx)("h3",{children:c})]})]})},v=c(27),_=c(98),w=(c(71),c(72),c(73),c(74),c(49)),N=c(50),y=c.n(N);var F=function(){var e=Object(j.f)(),t=Object(n.useState)(new Date),c=Object(v.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)(new Date),o=Object(v.a)(r,2),d=o[0],l=o[1],h={startDate:s,endDate:d,key:"selection"};return Object(i.jsxs)("div",{className:"search",children:[Object(i.jsx)(w.DateRangePicker,{ranges:[h],onChange:function(e){a(e.selection.startDate),l(e.selection.endDate)}}),Object(i.jsxs)("h2",{children:["Number of guest",Object(i.jsx)(y.a,{})]}),Object(i.jsx)("input",{min:0,defaultValue:2,type:"number"}),Object(i.jsx)(_.a,{onClick:function(){return e.push("/search")},children:"Search Airbnb"})]})};var S=function(){var e=Object(j.f)(),t=Object(n.useState)(!1),c=Object(v.a)(t,2),s=c[0],a=c[1];return Object(i.jsxs)("div",{className:"banner",children:[Object(i.jsxs)("div",{className:"banner__search",children:[Object(i.jsx)(_.a,{onClick:function(){return a(!s)},className:"banner__searchBtn",variant:"outlined",children:s?"Hide":"Search Dates"}),s&&Object(i.jsx)(F,{})]}),Object(i.jsxs)("div",{className:"banner__info",children:[Object(i.jsx)("h1",{children:"Get out and stretch your imagination"}),Object(i.jsx)("h5",{children:"Plan a different kind of getaway to uncover the hidden gems near you"}),Object(i.jsx)(_.a,{onClick:function(){return e.push("/search")},variant:"outlined",children:"Explore Nearby"})]})]})};c(81);var k=function(){return Object(i.jsxs)("div",{className:"home",children:[Object(i.jsx)(S,{}),Object(i.jsxs)("div",{className:"home__section",children:[Object(i.jsx)(g,{src:"https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720",title:"Online Experiences",description:"Unique activities we can do together, led by a world of hosts."}),Object(i.jsx)(g,{src:"https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720",title:"Unique stays",description:"Spaces that are more than just a place to sleep."}),Object(i.jsx)(g,{src:"https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720",title:"Entire homes",description:"Comfortable private places, with room for friends or family."})]}),Object(i.jsxs)("div",{className:"home__section",children:[Object(i.jsx)(g,{src:"https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg",title:"3 Bedroom Flat in Bournemouth",description:"Superhost with a stunning view of the beachside in Sunny Bournemouth",price:"\xa3130/night"}),Object(i.jsx)(g,{src:"https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg",title:"Penthouse in London",description:"Enjoy the amazing sights of London with this stunning penthouse",price:"\xa3350/night"}),Object(i.jsx)(g,{src:"https://media.nomadicmatt.com/2018/apartment.jpg",title:"1 Bedroom apartment",description:"Superhost with great amenities and a fabolous shopping complex nearby",price:"\xa370/night"})]})]})},P=(c(82),c(51)),B=c.n(P),L=c(52),D=c.n(L);c(83);var C=function(e){var t=e.img,c=e.location,n=e.title,s=e.description,a=e.star,r=e.price,o=e.total;return Object(i.jsxs)("div",{className:"searchResult",children:[Object(i.jsx)("img",{src:t,alt:""}),Object(i.jsx)(B.a,{className:"searchResult__heartIcon"}),Object(i.jsxs)("div",{className:"searchResult__info",children:[Object(i.jsxs)("div",{className:"searchResult__infoTop",children:[Object(i.jsx)("p",{children:c}),Object(i.jsx)("h2",{children:n}),Object(i.jsx)("p",{children:"___"}),Object(i.jsx)("p",{children:s})]}),Object(i.jsxs)("div",{className:"searchResult__infoBottom",children:[Object(i.jsxs)("div",{className:"infoBottom__rate",children:[Object(i.jsx)(D.a,{className:"searchResult__rateIcon"}),Object(i.jsx)("p",{children:Object(i.jsx)("strong",{children:a})})]}),Object(i.jsxs)("div",{className:"infoBottom__price",children:[Object(i.jsx)("h2",{children:r}),Object(i.jsx)("p",{children:o})]})]})]})]})};var R=function(){return Object(i.jsxs)("div",{className:"searchPage",children:[Object(i.jsxs)("div",{className:"searchPage__info",children:[Object(i.jsx)("p",{children:"62 stays\u30fb26 august to 30 august\u30fb2 guest"}),Object(i.jsx)("h1",{children:"Stays nearby"}),Object(i.jsx)(_.a,{variant:"outlined",children:"Cancellation Flexibility"}),Object(i.jsx)(_.a,{variant:"outlined",children:"Type of place"}),Object(i.jsx)(_.a,{variant:"outlined",children:"Price"}),Object(i.jsx)(_.a,{variant:"outlined",children:"Rooms and beds"}),Object(i.jsx)(_.a,{variant:"outlined",children:"More filtersF"})]}),Object(i.jsx)(C,{img:"https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg",location:"Private room in center of London",title:"Independant luxury studio apartment",description:"2 guest \xb7 3 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Kitchen",star:4.3,price:"\xa340 / night",total:"\xa3157 total"}),Object(i.jsx)(C,{img:"https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg",location:"Private room in center of London",title:"London Studio Apartments",description:"4 guest \xb7 4 bedroom \xb7 4 bed \xb7 2 bathrooms \xb7 Free parking \xb7 Washing Machine",star:3.8,price:"\xa335 / night",total:"\xa3207 total"}),Object(i.jsx)(C,{img:"https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI",location:"Private room in center of London",title:"30 mins to Oxford Street, Excel London",description:"1 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Kitchen \xb7 Free parking \xb7 Washing Machine",star:4.1,price:"\xa355 / night",total:"\xa3320 total"}),Object(i.jsx)(C,{img:"https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg",location:"Private room in center of London",title:"Spacious Peaceful Modern Bedroom",description:"3 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Free parking \xb7 Dry Cleaning",star:5,price:"\xa360 / night",total:"\xa3450 total"}),Object(i.jsx)(C,{img:"https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937",location:"Private room in center of London",title:"The Blue Room In London",description:"2 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Washing Machine",star:4.23,price:"\xa365 / night",total:"\xa3480 total"}),Object(i.jsx)(C,{img:"https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp",location:"Private room in center of London",title:"5 Star Luxury Apartment",description:"3 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Kitchen \xb7 Free parking \xb7 Washing Machine",star:3.85,price:"\xa390 / night",total:"\xa3650 total"})]})};var W=function(){return Object(i.jsx)("div",{className:"app",children:Object(i.jsxs)(o.a,{children:[Object(i.jsx)(f,{}),Object(i.jsxs)(j.c,{children:[Object(i.jsx)(j.a,{path:"/search",children:Object(i.jsx)(R,{})}),Object(i.jsx)(j.a,{path:"/",children:Object(i.jsx)(k,{})})]}),Object(i.jsx)(d,{})]})})};r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(W,{})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.17f127db.chunk.js.map