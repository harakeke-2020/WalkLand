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
          distance: 3.00
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
          routeImage: 'https://i1.wp.com/exploringkiwis.com/wp-content/uploads/2019/04/Screen-Shot-2019-04-14-at-8.38.47-PM.png?resize=1393%2C800&ssl=1',
          distance: 3.00
          elevationGain: 200,
          timeTaken: 12352,
          difficulty: 3.5 
        },
        { 
          id: 3,
          title: 'Goldie\'s Bushwalk',
          latitude: -36.845928,
          longitude: 174.474207,
          location: 'Auckland',
          mainPhoto: 'https://images.unsplash.com/photo-1517896470636-9242d3a38392?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80',
          photos: JSON.stringify([
            'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
            'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1440&q=80',
            'https://images.unsplash.com/photo-1504700610630-ac6aba3536d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
          ]),
          routeImage: 'https://i1.wp.com/exploringkiwis.com/wp-content/uploads/2019/04/Screen-Shot-2019-04-14-at-8.38.47-PM.png?resize=1393%2C800&ssl=1',
          distance: 3.00
          elevationGain: 200,
          timeTaken: 12352,
          difficulty: 3.5 
        },
        { 
          id: 4,
          title: 'Goldie\'s Bushwalk',
          latitude: -36.845928,
          longitude: 174.474207,
          location: 'Auckland',
          mainPhoto: 'https://images.unsplash.com/photo-1517896470636-9242d3a38392?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80',
          photos: JSON.stringify([
            'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
            'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1440&q=80',
            'https://images.unsplash.com/photo-1504700610630-ac6aba3536d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
          ]),
          routeImage: 'https://i1.wp.com/exploringkiwis.com/wp-content/uploads/2019/04/Screen-Shot-2019-04-14-at-8.38.47-PM.png?resize=1393%2C800&ssl=1',
          distance: 3.00
          elevationGain: 200,
          timeTaken: 12352,
          difficulty: 3.5 
        }
      ])
    })
}
