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
            'https://tramper.nz/imgcache/8/8763-feature.jpg',
            'https://www.nstc.org.nz/resources/Pictures/Te%20Henga1.jpg',
            'https://www.nstc.org.nz/resources/Pictures/Te%20Henga8.jpg',
            'https://tomhike.com/wp-content/gallery/goldie-bush/IMG_0178.jpg'
          ]),
          routeImage: 'http://i.imgur.com/tudbIvd.jpg',
          distance: '4.5Kms',
          elevationGain: 200,
          timeTaken: '2 Hours',
          difficulty: 'Intermediate',
          Surface: 'There are numerous stream crossings',
          description: 'Goldies Bush and Mokoroa Falls Loop is a 6.0 kilometer lightly trafficked loop trail located near Auckland, Auckland, New Zealand that features a waterfall and is rated as moderate. The trail is primarily used for hiking, walking, and nature trips.'
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
          distance: '1.80Kms',
          elevationGain: 9999,
          timeTaken: '30 Minutes',
          difficulty: 'beginner',
          Surface: 'Concrete foot path and large grass lawns to walk around on',
          description: 'Western Springs Park Walk is a very easy 1.8k walk that will take you around 30 mins to complete. Highlights of the Western Springs Park Walk are the eels and the free tram ride around Western Spring Park. It surrounds a natural spring-fed lake, one of Auckland\'s early water supplies.'
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
            'https://nzfrenzynorth.files.wordpress.com/2013/01/view-over-bethells-oneill-bay-from-raetahinga-point-viewpoint-on-the-te-henga-walkway.jpg'
          ]),
          routeImage: 'images/tehengawalkway.png',
          distance: '10.0Kms',
          elevationGain: 572,
          timeTaken: '3 Hours',
          difficulty: 'Intermediate',
          Surface: 'traverses coastal cliffs and is uneven and muddy in places',
          description: 'Te Henga Walkway is a 10.0 kilometer lightly trafficked point-to-point trail located near Henderson, Auckland, New Zealand that offers the chance to see wildlife and is rated as moderate. The trail is primarily used for hiking, walking, and nature trips and is accessible year-round.'

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
          distance: '3.10Kms',
          elevationGain: 1442,
          timeTaken: '1 Hour',
          difficulty: 'Easy',
          Surface: 'Formed track – lots of loose, fine scoria',
          description: 'One of Auckland’s iconic landmarks, Rangitoto Island is an amazing day out. Arrive by ferry or private boat and explore, The 360-degree views of Auckland and the Hauraki Gulf from the summit are spectacular. There are plenty of other walking tracks if you are keen to explore further and short lava caves that are worth investigating.'
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
          distance: '3.0Kms',
          elevationGain: 1442,
          timeTaken: '1 Hour',
          difficulty: 'Easy',
          Surface: 'Paths guide you along the walk',
          description: 'The North Head Historical Reserve is considered to be the most significant historical coastal defence site in New Zealand and receives a significant number of visitors each year. The location has commanding views over the Hauraki Gulf and inner harbour. First used by Maori for defence purposes the site was one of three cone pa in the Devonport area.'
        },
        {
          id: 6,
          title: 'Motutapu Walkway',
          latitude: -36.7538775,
          longitude: 174.9138084,
          location: 'Devonport',
          mainPhoto: 'https://www.doc.govt.nz/contentassets/7739db54ace849c5bbc7f397c5cf098c/north-head-interp-map-cropped-525.jpg',
          photos: JSON.stringify([
            'https://i1.wp.com/exploringkiwis.com/wp-content/uploads/2019/04/Screen-Shot-2019-04-14-at-8.38.47-PM.png?resize=1393%2C800&ssl=1',
            'https://i2.wp.com/exploringkiwis.com/wp-content/uploads/2019/04/img_9434.jpg?w=648&h=486&ssl=1',
            'https://i0.wp.com/exploringkiwis.com/wp-content/uploads/2019/04/img_9412.jpg?w=364&h=486&ssl=1',
            'https://i2.wp.com/exploringkiwis.com/wp-content/uploads/2019/04/img_9437.jpg?w=506&h=675&ssl=1'
          ]),
          routeImage: 'https://i1.wp.com/exploringkiwis.com/wp-content/uploads/2019/04/Screen-Shot-2019-04-14-at-8.38.47-PM.png?resize=1393%2C800&ssl=1',
          distance: '4.50Kms',
          elevationGain: 1442,
          timeTaken: '1.50 Hours',
          difficulty: 'Intermediate',
          Surface: 'Three quarters of the walk is on volcanic rock road and tracks',
          description: 'The Motutapu Walkway starts at the southern end of Home Bay. Poles mark the track across farmland, climbing to the island’s 120 m trig station and giving panoramic views of the Hauraki Gulf. The track passes an area of native bush planted by volunteers in 2002 and 2003. '
        },
        {
          id: 7,
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
          distance: '3.50Kms',
          elevationGain: 231,
          timeTaken: '2.0 Hours',
          difficulty: 'Easy',
          Surface: 'Grass surface that has surrounding paths',
          description: 'Easy 2 hour round trip walk to One Tree Hill in Auckland. Excellent 360 views over Auckland from the top of One Tree Hill. Unfortunately the \'one tree\' is now no longer and is only a stump. No car access to the top of One Tree Hill anymore.'
        },
        {
          id: 8,
          title: 'Kitekite Falls',
          latitude: -36.96216,
          longitude: 174.48242,
          location: 'Auckland',
          mainPhoto: 'https://img.theculturetrip.com/wp-content/uploads/2017/05/10135772153_4935a93929_k.jpg',
          photos: JSON.stringify([
            'https://cdn-assets.alltrails.com/static-map/production/at-map/18531131/trail-new-zealand-auckland-region-kitekite-falls-hike-at-map-18531131-1538011453-1200x630-3-5.jpg',
            'https://images.squarespace-cdn.com/content/v1/53ae6e0ce4b0f6113495c6b1/1452405152772-L42CMLOW3OADSOHNJBWZ/ke17ZwdGBToddI8pDm48kB7VtZGBFPr7lZCrlHS4ye0UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcFHn9sAeODwGxZ7mkTPk4lvstZaCL7z4CAlHCpnWsqfoF7VxFElKmyMCgmkHEhWl7/kitekite3.png ',
            'https://media2.trover.com/T/575e9c827eb4f464a8047469/fixedw_large_4x.jpg',
            'https://www.totstoteens.co.nz/wp-content/uploads/2018/03/waterfall-Oakley-1200-by-630.jpg'
          ]),
          routeImage: 'https://www.onetreehillcollege.school.nz/files/5114/3184/8392/Map.gif',
          distance: '3.50Kms',
          elevationGain: 89,
          timeTaken: '1.5 Hours',
          difficulty: 'Easy',
          Surface: 'bush track that can become slippery',
          description: 'Easy 2 hour round trip walk to One Tree Hill in Auckland. Excellent 360 views over Auckland from the top of One Tree Hill. Unfortunately the \'one tree\' is now no longer and is only a stump. No car access to the top of One Tree Hill anymore.'
        }
      ])
    })
}
