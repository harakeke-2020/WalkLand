exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('walks').del()
    .then(function () {
      // Inserts seed entries
      return knex('walks').insert([
        {
          id: 1,
          title: 'Goldie\'s Bushwalk',
          latitude: -36.845928,
          longitude: 174.474207,
          location: 'Muriwai',
          mainPhoto: 'https://images.unsplash.com/photo-1517896470636-9242d3a38392?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80',
          photos: JSON.stringify([
            'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
            'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1440&q=80',
            'https://images.unsplash.com/photo-1504700610630-ac6aba3536d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
          ]),
          routeImage: 'https://i1.wp.com/exploringkiwis.com/wp-content/uploads/2019/04/Screen-Shot-2019-04-14-at-8.38.47-PM.png?resize=1393%2C800&ssl=1',
          distance: 3.00,
          elevationGain: 200,
          timeTaken: 12352,
          difficulty: 3.5
        },
        { id: 2,
          title: 'Western Springs',
          latitude: -36.866598,
          longitude: 174.729742,
          location: 'Western Springs',
          mainPhoto: 'https://2.bp.blogspot.com/-2egh_2WODWM/UUBHHx9mqiI/AAAAAAAAht4/vUyv-hZoa3w/s1600/march+pasifika+163.jpg',
          photos: JSON.stringify([
            'https://media2.trover.com/T/5aab8b8385f4f4ae1100603e/fixedw_large_4x.jpg',
            'https://www.healthykids.org.nz/sites/default/files/styles/scale_width_media/public/2018-06/Western%20Springs%20Lakeside%20Park%20Auckland-cropped.jpg?itok=1BuUknQm',
            'https://fastly.4sqi.net/img/general/558x200/582947_fjPVGAWcr82dXboTVM2PMURTsl4asGjAGGEFHQlrxNI.jpg',
            'https://www.aucklandcouncil.govt.nz/parks-recreation/get-outdoors/aklpaths/AKLPathImages/147_WesternSpringsLoopPath05.jpg?RenditionID=8'
          ]),
          routeImage: 'images/westernspringspath.png',
          distance: 1.8,
          elevationGain: 9999,
          timeTaken: 99999,
          difficulty: 1
        },
        {
          id: 3,
          title: 'Te Henga Walkway',
          latitude: -36.884323,
          longitude: 174.450309,
          location: 'Muriwai',
          mainPhoto: 'https://www.doc.govt.nz/thumbs/hero/contentassets/70d774979b3440de8a37068e7a2a8d9e/te-henga-walkway-hero.jpg',
          photos: JSON.stringify([
            'https://www.newzealand.com/assets/Tourism-NZ/Auckland/141d0c557d/img-1536202424-2494-10947-p-18AB2FE5-AD39-F1FE-E87423DF59CE5681-2544003__FocalPointCropWzQ0MCwxMjgwLDYwLDM2LDc1LCJqcGciLDY1LDIuNV0.jpg',
            'https://i0.wp.com/thethingis.co.nz/wp-content/uploads/2017/03/p638_orig.png?fit=1024%2C707',
            'https://nztramper.com/wp-content/gallery/te-henga-walkway/te-henga-walkway-sign.jpg',
            'https://welshkiwi.com/wp-content/uploads/2018/10/0545DF91-87E7-4119-A510-96123BADD452-1440x1080.jpeg8'
          ]),
          routeImage: 'images/tehengawalkway.png',
          distance: 2.1,
          elevationGain: 9999,
          timeTaken: 10101,
          difficulty: 2.5
        },
        {
          id: 4,
          title: 'Rangitoto Summit Track',
          latitude: -36.806138,
          longitude: 174.861599,
          location: 'Rangitoto',
          mainPhoto: 'https://cdn.getyourguide.com/img/tour_img-2408255-146.jpg',
          photos: JSON.stringify([
            'https://www.aa.co.nz/assets/NEW-AA-TRAVELLER/Must-Dos/Hero-Images/_resampled/ScaleWidthWyI3OTUiXQ/Rangitoto-Summit.jpg?m=1562844211?m=1562844211',
            'https://www.we12travel.com/blog/wp-content/uploads/2017/12/hiking-on-rangitoto-island-lava-field1.jpg',
            'https://www.aa.co.nz/assets/NEW-AA-TRAVELLER/EDM-Aggregate-Content/_resampled/ScaleWidthWyI3OTUiXQ/Rangitoto-Walkers.jpg?m=1557466516?m=1557466516',
            'https://media-cdn.tripadvisor.com/media/photo-m/1280/16/1b/93/d7/photo0jpg.jpg'
          ]),
          routeImage: 'images/tehengawalkway.png',
          distance: 3.91,
          elevationGain: 1442,
          timeTaken: 89392,
          difficulty: 2.8
        },
        {
          id: 5,
          title: 'Maungauika/North Head Historic Walk',
          latitude: -36.829496,
          longitude: 174.8128587,
          location: 'Devonport',
          mainPhoto: 'https://docnz.files.wordpress.com/2019/04/north-head-devonport-doc.jpg',
          photos: JSON.stringify([
            'https://nzplaces.nz/media/17640/maungauika-panorama-1.jpg',
            'https://docnz.files.wordpress.com/2019/04/north-head-devonport-doc.jpg',
            'https://www.doc.govt.nz/globalassets/images/places/auckland/north-head/north-head-auckland-gallery.jpg',
            'https://nzplaces.nz/media/17640/maungauika-panorama-1.jpg'
          ]),
          routeImage: 'https://www.doc.govt.nz/contentassets/7739db54ace849c5bbc7f397c5cf098c/north-head-interp-map-cropped-525.jpg',
          distance: 3.91,
          elevationGain: 1442,
          timeTaken: 4500,
          difficulty: 1.5
        },
        {
          id: 7,
          title: 'Motutapu Walkway',
          latitude: -36.763222,
          longitude: 174.8802163,
          location: 'Devonport',
          mainPhoto: 'https://www.doc.govt.nz/contentassets/7739db54ace849c5bbc7f397c5cf098c/north-head-interp-map-cropped-525.jpg',
          photos: JSON.stringify([
            'https://i1.wp.com/exploringkiwis.com/wp-content/uploads/2019/04/Screen-Shot-2019-04-14-at-8.38.47-PM.png?resize=1393%2C800&ssl=1',
            'https://i2.wp.com/exploringkiwis.com/wp-content/uploads/2019/04/img_9434.jpg?w=648&h=486&ssl=1',
            'https://i0.wp.com/exploringkiwis.com/wp-content/uploads/2019/04/img_9412.jpg?w=364&h=486&ssl=1',
            'https://i2.wp.com/exploringkiwis.com/wp-content/uploads/2019/04/img_9437.jpg?w=506&h=675&ssl=1'
          ]),
          routeImage: 'https://i1.wp.com/exploringkiwis.com/wp-content/uploads/2019/04/Screen-Shot-2019-04-14-at-8.38.47-PM.png?resize=1393%2C800&ssl=1',
          distance: 2.2,
          elevationGain: 1442,
          timeTaken: 4500,
          difficulty: 1.5
        },
        {
          id: 9,
          title: 'One Tree Hill Walk',
          latitude: -36.899982,
          longitude: 174.7745785,
          location: 'Auckland',
          mainPhoto: 'https://www.aucklandnz.com/sites/build_auckland/files/styles/carousel_banner/public/tourismnz/p-ECF142B8-05F9-7CD1-25AD2D89ADC6CB87-2544003.jpg',
          photos: JSON.stringify([
            'https://www.aucklandnz.com/sites/build_auckland/files/styles/carousel_banner/public/tourismnz/p-ECF142B8-05F9-7CD1-25AD2D89ADC6CB87-2544003.jpg',
            'https://nomadsworld.com/wp-content/uploads/2017/08/auckland_one_tree_hill_bg_wiki.jpg',
            'https://ourauckland.aucklandcouncil.govt.nz/media/6174/maungakiekie-one-tree-hill-summit-at-20-years.jpg',
            'https://i.ytimg.com/vi/qNWidzkH9gU/maxresdefault.jpg'
          ]),
          routeImage: 'https://www.onetreehillcollege.school.nz/files/5114/3184/8392/Map.gif',
          distance: 3.5,
          elevationGain: 231,
          timeTaken: 2,
          difficulty: 1.5
        }
      ])
    })
}
