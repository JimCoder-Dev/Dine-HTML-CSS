const familyGatheringLink = document.getElementById('family-link');
const specialEventsLink = document.getElementById('special-link');
const socialEventsLink = document.getElementById('social-link');

let familyGatheringImage = './images/homepage/family-gathering-desktop@2x.jpg';
const familyGatheringHeading = 'Family Gathering';
const familyGatheringText =
  "We love catering for entire families. So please bring everyone along for a special with your loved ones. We'll provide a memorable experience for all.";

const gatheringEventImg = document.getElementById('gathering-event-img');
const gatheringEventHeading = document.getElementById(
  'gathering-event-heading'
);
const gatheringEventText = document.getElementById('gathering-event-text');

let socialEventImage = './images/homepage/social-events-desktop@2x.jpg';
const socialEventHeading = 'Social Events';
const socialEventText =
  "Are you looking to have a larget social event? No Problem! We're more than happy to cater for big parties. We'll work with you to make your event a hit with everyone.";

let specialEventImage = './images/homepage/special-events-desktop@2x.jpg';
const specialEventHeading = 'Special Events';
const specialEventText =
  "Whether it's a romantic dinner or special data you're celebrating with other we'll look after you. We'll be sure to mark your special dat with an unforgettable meal.";

const familyLink = document.getElementById('family-link');
const specialLink = document.getElementById('special-link');
const socialLink = document.getElementById('social-link');

const mobileMedia = window.matchMedia('(max-width: 476px)');
const tabletMedia = window.matchMedia('(max-width: 976px)');

function checkMediaQuery() {
  if (window.innerWidth > 976) {
    familyGatheringImage = './images/homepage/family-gathering-desktop@2x.jpg';
    socialEventImage = './images/homepage/social-events-desktop@2x.jpg';
    specialEventImage = './images/homepage/special-events-desktop@2x.jpg';
  } else if (window.innerWidth > 476) {
    familyGatheringImage = './images/homepage/family-gathering-tablet@2x.jpg';
    socialEventImage = './images/homepage/social-events-tablet@2x.jpg';
    specialEventImage = './images/homepage/special-events-tablet@2x.jpg';
  } else {
    familyGatheringImage = './images/homepage/family-gathering-mobile@2x.jpg';
    socialEventImage = './images/homepage/social-events-mobile@2x.jpg';
    specialEventImage = './images/homepage/special-events-mobile@2x.jpg';
  }
}

window.addEventListener('resize', checkMediaQuery);

familyGatheringLink.addEventListener('click', function () {
  gatheringEventImg.src = familyGatheringImage;
  gatheringEventImg.id = 'gathering-event-img';
  gatheringEventHeading.innerHTML = familyGatheringHeading;
  gatheringEventText.innerHTML = familyGatheringText;
  familyLink.classList.remove('text-gray');
  specialLink.classList.add('text-gray');
  socialLink.classList.add('text-gray');
});

socialEventsLink.addEventListener('click', function () {
  gatheringEventImg.src = socialEventImage;
  gatheringEventImg.id = 'social-event-img';
  gatheringEventHeading.innerHTML = socialEventHeading;
  gatheringEventText.innerHTML = socialEventText;
  familyLink.classList.add('text-gray');
  specialLink.classList.add('text-gray');
  socialLink.classList.remove('text-gray');
});

specialEventsLink.addEventListener('click', function () {
  gatheringEventImg.src = specialEventImage;
  gatheringEventImg.id = 'special-event-img';
  gatheringEventHeading.innerHTML = specialEventHeading;
  gatheringEventText.innerHTML = specialEventText;
  familyLink.classList.add('text-gray');
  specialLink.classList.remove('text-gray');
  socialLink.classList.add('text-gray');
});
