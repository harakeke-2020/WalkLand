const mockData = [
  {
    id: 1,
    title: 'Goldie\'s Bushwalk',
    latitude: -36.845928,
    longitude: 174.474207,
    location: 'Auckland',
    mainPhoto: 'https://images.unsplash.com/photo-1517896470636-9242d3a38392?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80',
    rating: 4.5,
    photos: [
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
      'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1440&q=80',
      'https://images.unsplash.com/photo-1504700610630-ac6aba3536d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    ],
    routeImage: 'https://i1.wp.com/exploringkiwis.com/wp-content/uploads/2019/04/Screen-Shot-2019-04-14-at-8.38.47-PM.png?resize=1393%2C800&ssl=1',
    info: {
      distance: 3.00,
      elevationGain: 200,
      timeTaken: 12352,
      difficulty: 3.5
    }
  },
  {
    id: 2,
    title: 'Western Springs',
    location: 'Western Springs',
    latitude: -36.866598,
    longitude: 174.729742,
    mainPhoto: 'https://2.bp.blogspot.com/-2egh_2WODWM/UUBHHx9mqiI/AAAAAAAAht4/vUyv-hZoa3w/s1600/march+pasifika+163.jpg',
    rating: 3,
    photos: [
      'https://media2.trover.com/T/5aab8b8385f4f4ae1100603e/fixedw_large_4x.jpg',
      'https://www.healthykids.org.nz/sites/default/files/styles/scale_width_media/public/2018-06/Western%20Springs%20Lakeside%20Park%20Auckland-cropped.jpg?itok=1BuUknQm',
      'https://fastly.4sqi.net/img/general/558x200/582947_fjPVGAWcr82dXboTVM2PMURTsl4asGjAGGEFHQlrxNI.jpg',
      'https://www.aucklandcouncil.govt.nz/parks-recreation/get-outdoors/aklpaths/AKLPathImages/147_WesternSpringsLoopPath05.jpg?RenditionID=8'
    ],
    routeImage: '../public/images/westernspringspath.png',
    info: {
      distance: 1.8,
      elevationGain: 9999,
      timeTaken: 99999,
      difficulty: 1
    }
  },
  {
    id: 3,
    title: 'Te Henga Walkway',
    location: 'Muriwai',
    latitude: -36.884323,
    longitude: 174.450309,
    mainPhoto: 'https://www.doc.govt.nz/thumbs/hero/contentassets/70d774979b3440de8a37068e7a2a8d9e/te-henga-walkway-hero.jpg',
    rating: 4.8,
    photos: [
      'https://www.newzealand.com/assets/Tourism-NZ/Auckland/141d0c557d/img-1536202424-2494-10947-p-18AB2FE5-AD39-F1FE-E87423DF59CE5681-2544003__FocalPointCropWzQ0MCwxMjgwLDYwLDM2LDc1LCJqcGciLDY1LDIuNV0.jpg',
      'https://i0.wp.com/thethingis.co.nz/wp-content/uploads/2017/03/p638_orig.png?fit=1024%2C707',
      'https://nztramper.com/wp-content/gallery/te-henga-walkway/te-henga-walkway-sign.jpg',
      'https://welshkiwi.com/wp-content/uploads/2018/10/0545DF91-87E7-4119-A510-96123BADD452-1440x1080.jpeg8'
    ],
    routeImage: '../public/images/tehengawalkway.png',
    info: {
      distance: '2.1 - 10.3',
      elevationGain: 9999,
      timeTaken: '40min - 3hr20min one way',
      difficulty: '2 - 3'
    }
  },
  {
    id: 4,
    title: 'Rangitoto Summit Track',
    location: 'Rangitoto',
    latitude: -36.806138,
    longitude: 174.861599,
    mainPhoto: 'https://cdn.getyourguide.com/img/tour_img-2408255-146.jpg',
    rating: 4.8,
    photos: [
      'https://www.aa.co.nz/assets/NEW-AA-TRAVELLER/Must-Dos/Hero-Images/_resampled/ScaleWidthWyI3OTUiXQ/Rangitoto-Summit.jpg?m=1562844211?m=1562844211',
      'https://www.we12travel.com/blog/wp-content/uploads/2017/12/hiking-on-rangitoto-island-lava-field1.jpg',
      'https://www.aa.co.nz/assets/NEW-AA-TRAVELLER/EDM-Aggregate-Content/_resampled/ScaleWidthWyI3OTUiXQ/Rangitoto-Walkers.jpg?m=1557466516?m=1557466516',
      'https://media-cdn.tripadvisor.com/media/photo-m/1280/16/1b/93/d7/photo0jpg.jpg'
    ],
    routeImage: '../public/images/tehengawalkway.png',
    info: {
      distance: '2.1 - 10.3',
      elevationGain: 9999,
      timeTaken: '40min - 3hr20min one way',
      difficulty: '2 - 3'
    }
  }
]

export default mockData
