const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

// let photosArray = [
//   {
//     id: "Y785fIi1eXc",
//     created_at: "2021-03-15T16:39:50-04:00",
//     updated_at: "2021-04-07T12:34:15-04:00",
//     promoted_at: "2021-03-16T04:55:09-04:00",
//     width: 2832,
//     height: 4240,
//     color: "#262626",
//     blur_hash: "L14o1d9F00RjM{M{Rjof4n-;ofRj",
//     description: null,
//     alt_description: "grayscale photo of flower in bloom",
//     urls: {
//       raw:
//         "https://images.unsplash.com/photo-1615840788094-a4df00dce64b?ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1",
//       full:
//         "https://images.unsplash.com/photo-1615840788094-a4df00dce64b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1&q=85",
//       regular:
//         "https://images.unsplash.com/photo-1615840788094-a4df00dce64b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1&q=80&w=1080",
//       small:
//         "https://images.unsplash.com/photo-1615840788094-a4df00dce64b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1&q=80&w=400",
//       thumb:
//         "https://images.unsplash.com/photo-1615840788094-a4df00dce64b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1&q=80&w=200",
//     },
//     links: {
//       self: "https://api.unsplash.com/photos/Y785fIi1eXc",
//       html: "https://unsplash.com/photos/Y785fIi1eXc",
//       download: "https://unsplash.com/photos/Y785fIi1eXc/download",
//       download_location:
//         "https://api.unsplash.com/photos/Y785fIi1eXc/download?ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU",
//     },
//     categories: [],
//     likes: 220,
//     liked_by_user: false,
//     current_user_collections: [],
//     sponsorship: null,
//     user: {
//       id: "b4oCm-DV2YE",
//       updated_at: "2021-04-07T15:40:44-04:00",
//       username: "molnj",
//       name: "Jocelyn Morales",
//       first_name: "Jocelyn",
//       last_name: "Morales",
//       twitter_username: "molnj_",
//       portfolio_url: "https://molnj.monopiny.com/",
//       bio: "✉ nmolnj@gmail.com\r\nInstagram @molnj",
//       location: "México City",
//       links: {
//         self: "https://api.unsplash.com/users/molnj",
//         html: "https://unsplash.com/@molnj",
//         photos: "https://api.unsplash.com/users/molnj/photos",
//         likes: "https://api.unsplash.com/users/molnj/likes",
//         portfolio: "https://api.unsplash.com/users/molnj/portfolio",
//         following: "https://api.unsplash.com/users/molnj/following",
//         followers: "https://api.unsplash.com/users/molnj/followers",
//       },
//       profile_image: {
//         small:
//           "https://images.unsplash.com/profile-1617718917124-3ce7f11e141fimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
//         medium:
//           "https://images.unsplash.com/profile-1617718917124-3ce7f11e141fimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
//         large:
//           "https://images.unsplash.com/profile-1617718917124-3ce7f11e141fimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128",
//       },
//       instagram_username: "molnj",
//       total_collections: 1,
//       total_likes: 122,
//       total_photos: 175,
//       accepted_tos: true,
//       for_hire: true,
//     },
//     exif: {
//       make: null,
//       model: null,
//       exposure_time: null,
//       aperture: null,
//       focal_length: null,
//       iso: null,
//     },
//     location: {
//       title: null,
//       name: null,
//       city: null,
//       country: null,
//       position: {
//         latitude: null,
//         longitude: null,
//       },
//     },
//     views: 285865,
//     downloads: 2800,
//   },
//   {
//     id: "exoy_coaujY",
//     created_at: "2021-03-18T17:59:08-04:00",
//     updated_at: "2021-04-07T15:23:09-04:00",
//     promoted_at: "2021-03-19T07:55:47-04:00",
//     width: 6000,
//     height: 3368,
//     color: "#260c0c",
//     blur_hash: "LcFOu,?H0L9Z-;xtIoM{NGWCs:WB",
//     description: null,
//     alt_description: "woman in brown shirt holding round mirror",
//     urls: {
//       raw:
//         "https://images.unsplash.com/photo-1616104672153-a026f009a990?ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1",
//       full:
//         "https://images.unsplash.com/photo-1616104672153-a026f009a990?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1&q=85",
//       regular:
//         "https://images.unsplash.com/photo-1616104672153-a026f009a990?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1&q=80&w=1080",
//       small:
//         "https://images.unsplash.com/photo-1616104672153-a026f009a990?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1&q=80&w=400",
//       thumb:
//         "https://images.unsplash.com/photo-1616104672153-a026f009a990?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1&q=80&w=200",
//     },
//     links: {
//       self: "https://api.unsplash.com/photos/exoy_coaujY",
//       html: "https://unsplash.com/photos/exoy_coaujY",
//       download: "https://unsplash.com/photos/exoy_coaujY/download",
//       download_location:
//         "https://api.unsplash.com/photos/exoy_coaujY/download?ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU",
//     },
//     categories: [],
//     likes: 120,
//     liked_by_user: false,
//     current_user_collections: [],
//     sponsorship: null,
//     user: {
//       id: "v9favhAB7cw",
//       updated_at: "2021-04-07T16:20:48-04:00",
//       username: "eliapelle",
//       name: "Elia Pellegrini",
//       first_name: "Elia",
//       last_name: "Pellegrini",
//       twitter_username: null,
//       portfolio_url: "https://www.instagram.com/eliapelle/",
//       bio:
//         "I'm an italian artist specialized in visual arts (photography, drawing, painting, digital art).\r\nCinematic Mood Online Prints: https://eliapellle.bigcartel.com/  Instagram: @eliapelle",
//       location: "Italy",
//       links: {
//         self: "https://api.unsplash.com/users/eliapelle",
//         html: "https://unsplash.com/@eliapelle",
//         photos: "https://api.unsplash.com/users/eliapelle/photos",
//         likes: "https://api.unsplash.com/users/eliapelle/likes",
//         portfolio: "https://api.unsplash.com/users/eliapelle/portfolio",
//         following: "https://api.unsplash.com/users/eliapelle/following",
//         followers: "https://api.unsplash.com/users/eliapelle/followers",
//       },
//       profile_image: {
//         small:
//           "https://images.unsplash.com/profile-fb-1579509122-20b9241146e6.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
//         medium:
//           "https://images.unsplash.com/profile-fb-1579509122-20b9241146e6.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
//         large:
//           "https://images.unsplash.com/profile-fb-1579509122-20b9241146e6.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128",
//       },
//       instagram_username: "eliapelle",
//       total_collections: 5,
//       total_likes: 104,
//       total_photos: 648,
//       accepted_tos: true,
//       for_hire: false,
//     },
//     exif: {
//       make: "Canon",
//       model: "Canon EOS 80D",
//       exposure_time: "1/8000",
//       aperture: "1.4",
//       focal_length: "35.0",
//       iso: 400,
//     },
//     location: {
//       title: null,
//       name: null,
//       city: null,
//       country: null,
//       position: {
//         latitude: null,
//         longitude: null,
//       },
//     },
//     views: 956844,
//     downloads: 2879,
//   },
//   {
//     id: "TeeSdbW058I",
//     created_at: "2021-03-22T14:37:36-04:00",
//     updated_at: "2021-04-06T14:38:51-04:00",
//     promoted_at: "2021-03-23T04:27:01-04:00",
//     width: 4000,
//     height: 6000,
//     color: "#f3f3f3",
//     blur_hash: "LMFiDT9F4T_3~pMx4--:tSM{Ioxu",
//     description: null,
//     alt_description:
//       "woman in gray coat holding umbrella while walking on street during daytime",
//     urls: {
//       raw:
//         "https://images.unsplash.com/photo-1616438096679-620332ede3a2?ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1",
//       full:
//         "https://images.unsplash.com/photo-1616438096679-620332ede3a2?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1&q=85",
//       regular:
//         "https://images.unsplash.com/photo-1616438096679-620332ede3a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1&q=80&w=1080",
//       small:
//         "https://images.unsplash.com/photo-1616438096679-620332ede3a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1&q=80&w=400",
//       thumb:
//         "https://images.unsplash.com/photo-1616438096679-620332ede3a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1&q=80&w=200",
//     },
//     links: {
//       self: "https://api.unsplash.com/photos/TeeSdbW058I",
//       html: "https://unsplash.com/photos/TeeSdbW058I",
//       download: "https://unsplash.com/photos/TeeSdbW058I/download",
//       download_location:
//         "https://api.unsplash.com/photos/TeeSdbW058I/download?ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU",
//     },
//     categories: [],
//     likes: 59,
//     liked_by_user: false,
//     current_user_collections: [],
//     sponsorship: null,
//     user: {
//       id: "TqZpkp19zt8",
//       updated_at: "2021-04-07T14:00:29-04:00",
//       username: "eskarstein",
//       name: "Eirik Skarstein",
//       first_name: "Eirik",
//       last_name: "Skarstein",
//       twitter_username: null,
//       portfolio_url: "http://www.instagram.com/eskarstein",
//       bio: "Filmmaker and Photographer from Oslo, Norway. \r\n\r\n",
//       location: "Oslo, Norway",
//       links: {
//         self: "https://api.unsplash.com/users/eskarstein",
//         html: "https://unsplash.com/@eskarstein",
//         photos: "https://api.unsplash.com/users/eskarstein/photos",
//         likes: "https://api.unsplash.com/users/eskarstein/likes",
//         portfolio: "https://api.unsplash.com/users/eskarstein/portfolio",
//         following: "https://api.unsplash.com/users/eskarstein/following",
//         followers: "https://api.unsplash.com/users/eskarstein/followers",
//       },
//       profile_image: {
//         small:
//           "https://images.unsplash.com/profile-fb-1509719210-ed5175357479.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
//         medium:
//           "https://images.unsplash.com/profile-fb-1509719210-ed5175357479.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
//         large:
//           "https://images.unsplash.com/profile-fb-1509719210-ed5175357479.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128",
//       },
//       instagram_username: "eskarstein",
//       total_collections: 0,
//       total_likes: 128,
//       total_photos: 114,
//       accepted_tos: true,
//       for_hire: true,
//     },
//     exif: {
//       make: "SONY",
//       model: "ILCE-7M3",
//       exposure_time: "1/4000",
//       aperture: "2.0",
//       focal_length: "55.0",
//       iso: 400,
//     },
//     location: {
//       title: "Hanoi, Vietnam",
//       name: "Hanoi, Vietnam",
//       city: null,
//       country: "Vietnam",
//       position: {
//         latitude: 21.003118,
//         longitude: 105.820141,
//       },
//     },
//     views: 250815,
//     downloads: 959,
//   },
//   {
//     id: "mG1mJ7bSWXw",
//     created_at: "2021-03-22T15:54:05-04:00",
//     updated_at: "2021-04-07T05:20:50-04:00",
//     promoted_at: "2021-03-23T19:06:01-04:00",
//     width: 3500,
//     height: 3302,
//     color: "#404040",
//     blur_hash: "LaF=Ktoc58NeMxoIt8R-0hWYxVsl",
//     description: null,
//     alt_description: "yellow and black star and round silver ornament",
//     urls: {
//       raw:
//         "https://images.unsplash.com/photo-1616442659129-33b20645c7c2?ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1",
//       full:
//         "https://images.unsplash.com/photo-1616442659129-33b20645c7c2?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1&q=85",
//       regular:
//         "https://images.unsplash.com/photo-1616442659129-33b20645c7c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1&q=80&w=1080",
//       small:
//         "https://images.unsplash.com/photo-1616442659129-33b20645c7c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1&q=80&w=400",
//       thumb:
//         "https://images.unsplash.com/photo-1616442659129-33b20645c7c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1&q=80&w=200",
//     },
//     links: {
//       self: "https://api.unsplash.com/photos/mG1mJ7bSWXw",
//       html: "https://unsplash.com/photos/mG1mJ7bSWXw",
//       download: "https://unsplash.com/photos/mG1mJ7bSWXw/download",
//       download_location:
//         "https://api.unsplash.com/photos/mG1mJ7bSWXw/download?ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU",
//     },
//     categories: [],
//     likes: 20,
//     liked_by_user: false,
//     current_user_collections: [],
//     sponsorship: null,
//     user: {
//       id: "rP1U_L0AA_U",
//       updated_at: "2021-04-07T16:11:05-04:00",
//       username: "shmdsgn",
//       name: "stefan moertl",
//       first_name: "stefan",
//       last_name: "moertl",
//       twitter_username: null,
//       portfolio_url: "https://www.instagram.com/smortl/",
//       bio: null,
//       location: "vienna austria",
//       links: {
//         self: "https://api.unsplash.com/users/shmdsgn",
//         html: "https://unsplash.com/@shmdsgn",
//         photos: "https://api.unsplash.com/users/shmdsgn/photos",
//         likes: "https://api.unsplash.com/users/shmdsgn/likes",
//         portfolio: "https://api.unsplash.com/users/shmdsgn/portfolio",
//         following: "https://api.unsplash.com/users/shmdsgn/following",
//         followers: "https://api.unsplash.com/users/shmdsgn/followers",
//       },
//       profile_image: {
//         small:
//           "https://images.unsplash.com/profile-1616442342428-57d7892b5717image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
//         medium:
//           "https://images.unsplash.com/profile-1616442342428-57d7892b5717image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
//         large:
//           "https://images.unsplash.com/profile-1616442342428-57d7892b5717image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128",
//       },
//       instagram_username: "smortl",
//       total_collections: 0,
//       total_likes: 2,
//       total_photos: 11,
//       accepted_tos: true,
//       for_hire: true,
//     },
//     exif: {
//       make: "Canon",
//       model: "Canon EOS 5D Mark III",
//       exposure_time: "1/125",
//       aperture: "4",
//       focal_length: "35.0",
//       iso: 125,
//     },
//     location: {
//       title: null,
//       name: null,
//       city: null,
//       country: null,
//       position: {
//         latitude: null,
//         longitude: null,
//       },
//     },
//     views: 383397,
//     downloads: 1694,
//   },
//   {
//     id: "akqejorpVqo",
//     created_at: "2021-03-25T12:33:38-04:00",
//     updated_at: "2021-04-07T10:42:19-04:00",
//     promoted_at: "2021-03-25T13:39:02-04:00",
//     width: 3872,
//     height: 5808,
//     color: "#f3f3f3",
//     blur_hash: "LCS6PhW.?wxu?wt7MxRPt7RiRP%g",
//     description: "White cherry blossom ",
//     alt_description: "white cherry blossom in close up photography",
//     urls: {
//       raw:
//         "https://images.unsplash.com/photo-1616690005059-24d12f7e7506?ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1",
//       full:
//         "https://images.unsplash.com/photo-1616690005059-24d12f7e7506?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1&q=85",
//       regular:
//         "https://images.unsplash.com/photo-1616690005059-24d12f7e7506?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1&q=80&w=1080",
//       small:
//         "https://images.unsplash.com/photo-1616690005059-24d12f7e7506?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1&q=80&w=400",
//       thumb:
//         "https://images.unsplash.com/photo-1616690005059-24d12f7e7506?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1&q=80&w=200",
//     },
//     links: {
//       self: "https://api.unsplash.com/photos/akqejorpVqo",
//       html: "https://unsplash.com/photos/akqejorpVqo",
//       download: "https://unsplash.com/photos/akqejorpVqo/download",
//       download_location:
//         "https://api.unsplash.com/photos/akqejorpVqo/download?ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU",
//     },
//     categories: [],
//     likes: 106,
//     liked_by_user: false,
//     current_user_collections: [],
//     sponsorship: null,
//     user: {
//       id: "10TBkQXmnSI",
//       updated_at: "2021-04-07T16:15:55-04:00",
//       username: "babybluecat",
//       name: "J Lee",
//       first_name: "J",
//       last_name: "Lee",
//       twitter_username: null,
//       portfolio_url: "https://www.instagram.com/jeileephoto",
//       bio: "Happy to share :)\r\n✉ jeileephoto@gmail.com       ",
//       location: null,
//       links: {
//         self: "https://api.unsplash.com/users/babybluecat",
//         html: "https://unsplash.com/@babybluecat",
//         photos: "https://api.unsplash.com/users/babybluecat/photos",
//         likes: "https://api.unsplash.com/users/babybluecat/likes",
//         portfolio: "https://api.unsplash.com/users/babybluecat/portfolio",
//         following: "https://api.unsplash.com/users/babybluecat/following",
//         followers: "https://api.unsplash.com/users/babybluecat/followers",
//       },
//       profile_image: {
//         small:
//           "https://images.unsplash.com/profile-1599012749910-0d86a35844cdimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
//         medium:
//           "https://images.unsplash.com/profile-1599012749910-0d86a35844cdimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
//         large:
//           "https://images.unsplash.com/profile-1599012749910-0d86a35844cdimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128",
//       },
//       instagram_username: "jeileephoto",
//       total_collections: 2,
//       total_likes: 247,
//       total_photos: 88,
//       accepted_tos: true,
//       for_hire: false,
//     },
//     exif: {
//       make: "Canon",
//       model: "Canon EOS M6",
//       exposure_time: null,
//       aperture: null,
//       focal_length: null,
//       iso: null,
//     },
//     location: {
//       title: null,
//       name: null,
//       city: null,
//       country: null,
//       position: {
//         latitude: null,
//         longitude: null,
//       },
//     },
//     views: 232088,
//     downloads: 1863,
//   },
//   {
//     id: "mWF7hwGwmGA",
//     created_at: "2021-03-27T13:59:25-04:00",
//     updated_at: "2021-04-06T17:38:47-04:00",
//     promoted_at: "2021-03-28T09:54:01-04:00",
//     width: 3627,
//     height: 5440,
//     color: "#260c0c",
//     blur_hash: "L99%u6IX00-Unmour=WD00WX?bNH",
//     description: null,
//     alt_description: "cars parked in front of store during night time",
//     urls: {
//       raw:
//         "https://images.unsplash.com/photo-1616867838073-d17b1244b734?ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1",
//       full:
//         "https://images.unsplash.com/photo-1616867838073-d17b1244b734?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1&q=85",
//       regular:
//         "https://images.unsplash.com/photo-1616867838073-d17b1244b734?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1&q=80&w=1080",
//       small:
//         "https://images.unsplash.com/photo-1616867838073-d17b1244b734?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1&q=80&w=400",
//       thumb:
//         "https://images.unsplash.com/photo-1616867838073-d17b1244b734?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1&q=80&w=200",
//     },
//     links: {
//       self: "https://api.unsplash.com/photos/mWF7hwGwmGA",
//       html: "https://unsplash.com/photos/mWF7hwGwmGA",
//       download: "https://unsplash.com/photos/mWF7hwGwmGA/download",
//       download_location:
//         "https://api.unsplash.com/photos/mWF7hwGwmGA/download?ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU",
//     },
//     categories: [],
//     likes: 26,
//     liked_by_user: false,
//     current_user_collections: [],
//     sponsorship: null,
//     user: {
//       id: "plx1zgl86Bc",
//       updated_at: "2021-04-07T16:35:48-04:00",
//       username: "joshhild",
//       name: "Josh Hild",
//       first_name: "Josh",
//       last_name: "Hild",
//       twitter_username: null,
//       portfolio_url: "https://www.instagram.com/joshhild",
//       bio:
//         "Any donations are appreciated! PayPal: hildmedia@hotmail.com 📸Instagram: joshhild\r\nJoshhild.com",
//       location: "Minneapolis",
//       links: {
//         self: "https://api.unsplash.com/users/joshhild",
//         html: "https://unsplash.com/@joshhild",
//         photos: "https://api.unsplash.com/users/joshhild/photos",
//         likes: "https://api.unsplash.com/users/joshhild/likes",
//         portfolio: "https://api.unsplash.com/users/joshhild/portfolio",
//         following: "https://api.unsplash.com/users/joshhild/following",
//         followers: "https://api.unsplash.com/users/joshhild/followers",
//       },
//       profile_image: {
//         small:
//           "https://images.unsplash.com/profile-1534444770498-421ec361dce5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
//         medium:
//           "https://images.unsplash.com/profile-1534444770498-421ec361dce5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
//         large:
//           "https://images.unsplash.com/profile-1534444770498-421ec361dce5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128",
//       },
//       instagram_username: "joshhild",
//       total_collections: 0,
//       total_likes: 7,
//       total_photos: 349,
//       accepted_tos: true,
//       for_hire: true,
//     },
//     exif: {
//       make: "Canon",
//       model: "Canon EOS 6D",
//       exposure_time: "1/80",
//       aperture: "2.2",
//       focal_length: "85.0",
//       iso: 800,
//     },
//     location: {
//       title: "Philadelphia, PA, USA",
//       name: "Philadelphia, PA, USA",
//       city: "Philadelphia",
//       country: "United States",
//       position: {
//         latitude: 39.952584,
//         longitude: -75.165221,
//       },
//     },
//     views: 176593,
//     downloads: 622,
//   },
//   {
//     id: "ZgD5nlqFFEE",
//     created_at: "2021-03-27T23:34:02-04:00",
//     updated_at: "2021-04-07T09:19:50-04:00",
//     promoted_at: "2021-03-28T04:33:01-04:00",
//     width: 5304,
//     height: 6864,
//     color: "#262626",
//     blur_hash: "LKG8_[4T00kCVs-;4nRjIT?bjGt7",
//     description: null,
//     alt_description:
//       "woman in white crew neck t-shirt and gray plaid pants standing beside red and black",
//     urls: {
//       raw:
//         "https://images.unsplash.com/photo-1616902435726-b9a6d7ed3296?ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1",
//       full:
//         "https://images.unsplash.com/photo-1616902435726-b9a6d7ed3296?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1&q=85",
//       regular:
//         "https://images.unsplash.com/photo-1616902435726-b9a6d7ed3296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1&q=80&w=1080",
//       small:
//         "https://images.unsplash.com/photo-1616902435726-b9a6d7ed3296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1&q=80&w=400",
//       thumb:
//         "https://images.unsplash.com/photo-1616902435726-b9a6d7ed3296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1&q=80&w=200",
//     },
//     links: {
//       self: "https://api.unsplash.com/photos/ZgD5nlqFFEE",
//       html: "https://unsplash.com/photos/ZgD5nlqFFEE",
//       download: "https://unsplash.com/photos/ZgD5nlqFFEE/download",
//       download_location:
//         "https://api.unsplash.com/photos/ZgD5nlqFFEE/download?ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU",
//     },
//     categories: [],
//     likes: 14,
//     liked_by_user: false,
//     current_user_collections: [],
//     sponsorship: null,
//     user: {
//       id: "2GvufItCDLc",
//       updated_at: "2021-04-07T16:35:51-04:00",
//       username: "grahammansfield1",
//       name: "GRAHAM MANSFIELD",
//       first_name: "GRAHAM",
//       last_name: "MANSFIELD",
//       twitter_username: null,
//       portfolio_url: null,
//       bio: "✖️US | Lifestyle & Adventure\r\n✖️INSTA - @GrahamcMansfield",
//       location: "denver, co",
//       links: {
//         self: "https://api.unsplash.com/users/grahammansfield1",
//         html: "https://unsplash.com/@grahammansfield1",
//         photos: "https://api.unsplash.com/users/grahammansfield1/photos",
//         likes: "https://api.unsplash.com/users/grahammansfield1/likes",
//         portfolio: "https://api.unsplash.com/users/grahammansfield1/portfolio",
//         following: "https://api.unsplash.com/users/grahammansfield1/following",
//         followers: "https://api.unsplash.com/users/grahammansfield1/followers",
//       },
//       profile_image: {
//         small:
//           "https://images.unsplash.com/profile-1616089242113-2eeca888d50bimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
//         medium:
//           "https://images.unsplash.com/profile-1616089242113-2eeca888d50bimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
//         large:
//           "https://images.unsplash.com/profile-1616089242113-2eeca888d50bimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128",
//       },
//       instagram_username: "grahamcmansfield",
//       total_collections: 0,
//       total_likes: 0,
//       total_photos: 96,
//       accepted_tos: true,
//       for_hire: true,
//     },
//     exif: {
//       make: "SONY",
//       model: "ILCE-7RM2",
//       exposure_time: "1/320",
//       aperture: "3.2",
//       focal_length: "50.0",
//       iso: 100,
//     },
//     location: {
//       title: null,
//       name: null,
//       city: null,
//       country: null,
//       position: {
//         latitude: null,
//         longitude: null,
//       },
//     },
//     views: 157715,
//     downloads: 571,
//   },
//   {
//     id: "pwir1Mr1eMA",
//     created_at: "2021-03-28T19:28:29-04:00",
//     updated_at: "2021-04-07T06:47:18-04:00",
//     promoted_at: "2021-03-29T03:30:02-04:00",
//     width: 6169,
//     height: 4113,
//     color: "#d9d9d9",
//     blur_hash: "LMK-@4^+~qt7Ats:9EaxD%WU-qj@",
//     description: null,
//     alt_description: "woman in black jacket and green pants",
//     urls: {
//       raw:
//         "https://images.unsplash.com/photo-1616974102173-8c76809d22b7?ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1",
//       full:
//         "https://images.unsplash.com/photo-1616974102173-8c76809d22b7?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1&q=85",
//       regular:
//         "https://images.unsplash.com/photo-1616974102173-8c76809d22b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1&q=80&w=1080",
//       small:
//         "https://images.unsplash.com/photo-1616974102173-8c76809d22b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1&q=80&w=400",
//       thumb:
//         "https://images.unsplash.com/photo-1616974102173-8c76809d22b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1&q=80&w=200",
//     },
//     links: {
//       self: "https://api.unsplash.com/photos/pwir1Mr1eMA",
//       html: "https://unsplash.com/photos/pwir1Mr1eMA",
//       download: "https://unsplash.com/photos/pwir1Mr1eMA/download",
//       download_location:
//         "https://api.unsplash.com/photos/pwir1Mr1eMA/download?ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU",
//     },
//     categories: [],
//     likes: 9,
//     liked_by_user: false,
//     current_user_collections: [],
//     sponsorship: null,
//     user: {
//       id: "y7LfWJF0CcQ",
//       updated_at: "2021-04-07T15:50:51-04:00",
//       username: "lackingnothing",
//       name: "Parker Coffman",
//       first_name: "Parker",
//       last_name: "Coffman",
//       twitter_username: "ParkerCoffman",
//       portfolio_url: "https://www.instagram.com/parker.coffman/",
//       bio: "Things that interest me \r\nFilm & Digital",
//       location: "Tulsa, OK",
//       links: {
//         self: "https://api.unsplash.com/users/lackingnothing",
//         html: "https://unsplash.com/@lackingnothing",
//         photos: "https://api.unsplash.com/users/lackingnothing/photos",
//         likes: "https://api.unsplash.com/users/lackingnothing/likes",
//         portfolio: "https://api.unsplash.com/users/lackingnothing/portfolio",
//         following: "https://api.unsplash.com/users/lackingnothing/following",
//         followers: "https://api.unsplash.com/users/lackingnothing/followers",
//       },
//       profile_image: {
//         small:
//           "https://images.unsplash.com/profile-1600791077428-8dbea50650f0image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
//         medium:
//           "https://images.unsplash.com/profile-1600791077428-8dbea50650f0image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
//         large:
//           "https://images.unsplash.com/profile-1600791077428-8dbea50650f0image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128",
//       },
//       instagram_username: "parker.coffman",
//       total_collections: 0,
//       total_likes: 10,
//       total_photos: 478,
//       accepted_tos: true,
//       for_hire: false,
//     },
//     exif: {
//       make: "Canon",
//       model: "Canon EOS 6D Mark II",
//       exposure_time: "1/2500",
//       aperture: "2.0",
//       focal_length: "50.0",
//       iso: 100,
//     },
//     location: {
//       title: null,
//       name: null,
//       city: null,
//       country: null,
//       position: {
//         latitude: null,
//         longitude: null,
//       },
//     },
//     views: 111637,
//     downloads: 478,
//   },
//   {
//     id: "lCLXITUUOPU",
//     created_at: "2021-03-31T10:44:08-04:00",
//     updated_at: "2021-04-07T13:21:46-04:00",
//     promoted_at: "2021-03-31T16:57:02-04:00",
//     width: 5631,
//     height: 3754,
//     color: "#f3f3f3",
//     blur_hash: "LZOM]J?vxvt8~qRkM{WA4nayflWB",
//     description: null,
//     alt_description: "brown wooden table with chairs",
//     urls: {
//       raw:
//         "https://images.unsplash.com/photo-1617201835753-86a4c2a8c457?ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1",
//       full:
//         "https://images.unsplash.com/photo-1617201835753-86a4c2a8c457?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1&q=85",
//       regular:
//         "https://images.unsplash.com/photo-1617201835753-86a4c2a8c457?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1&q=80&w=1080",
//       small:
//         "https://images.unsplash.com/photo-1617201835753-86a4c2a8c457?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1&q=80&w=400",
//       thumb:
//         "https://images.unsplash.com/photo-1617201835753-86a4c2a8c457?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1&q=80&w=200",
//     },
//     links: {
//       self: "https://api.unsplash.com/photos/lCLXITUUOPU",
//       html: "https://unsplash.com/photos/lCLXITUUOPU",
//       download: "https://unsplash.com/photos/lCLXITUUOPU/download",
//       download_location:
//         "https://api.unsplash.com/photos/lCLXITUUOPU/download?ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU",
//     },
//     categories: [],
//     likes: 22,
//     liked_by_user: false,
//     current_user_collections: [],
//     sponsorship: null,
//     user: {
//       id: "pVJLqUK0Dh4",
//       updated_at: "2021-04-07T16:35:49-04:00",
//       username: "brookelark",
//       name: "Brooke Lark",
//       first_name: "Brooke",
//       last_name: "Lark",
//       twitter_username: null,
//       portfolio_url: "http://www.brookelark.com",
//       bio:
//         "Real Food fanatic. Bike rider. People lover. Running around with a camera.",
//       location: "SLC, UT",
//       links: {
//         self: "https://api.unsplash.com/users/brookelark",
//         html: "https://unsplash.com/@brookelark",
//         photos: "https://api.unsplash.com/users/brookelark/photos",
//         likes: "https://api.unsplash.com/users/brookelark/likes",
//         portfolio: "https://api.unsplash.com/users/brookelark/portfolio",
//         following: "https://api.unsplash.com/users/brookelark/following",
//         followers: "https://api.unsplash.com/users/brookelark/followers",
//       },
//       profile_image: {
//         small:
//           "https://images.unsplash.com/profile-1496175100457-27a8e68786eb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
//         medium:
//           "https://images.unsplash.com/profile-1496175100457-27a8e68786eb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
//         large:
//           "https://images.unsplash.com/profile-1496175100457-27a8e68786eb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128",
//       },
//       instagram_username: "brookelark",
//       total_collections: 0,
//       total_likes: 3,
//       total_photos: 147,
//       accepted_tos: true,
//       for_hire: true,
//     },
//     exif: {
//       make: "Canon",
//       model: "Canon EOS 5D Mark III",
//       exposure_time: "1/125",
//       aperture: "5.0",
//       focal_length: "30.0",
//       iso: 800,
//     },
//     location: {
//       title: null,
//       name: null,
//       city: null,
//       country: null,
//       position: {
//         latitude: null,
//         longitude: null,
//       },
//     },
//     views: 222567,
//     downloads: 956,
//   },
//   {
//     id: "K1GjJQgOqa8",
//     created_at: "2021-04-02T16:06:37-04:00",
//     updated_at: "2021-04-06T18:37:44-04:00",
//     promoted_at: "2021-04-03T09:09:01-04:00",
//     width: 3936,
//     height: 4645,
//     color: "#f3f3f3",
//     blur_hash: "LcQ0Q|jI#,rs*0kBs=t7w0f5JQSz",
//     description: null,
//     alt_description:
//       "blue and white polka dot cake on pink and white heart shaped cake stand",
//     urls: {
//       raw:
//         "https://images.unsplash.com/photo-1617393981368-7274b468d3a9?ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1",
//       full:
//         "https://images.unsplash.com/photo-1617393981368-7274b468d3a9?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1&q=85",
//       regular:
//         "https://images.unsplash.com/photo-1617393981368-7274b468d3a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1&q=80&w=1080",
//       small:
//         "https://images.unsplash.com/photo-1617393981368-7274b468d3a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1&q=80&w=400",
//       thumb:
//         "https://images.unsplash.com/photo-1617393981368-7274b468d3a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU&ixlib=rb-1.2.1&q=80&w=200",
//     },
//     links: {
//       self: "https://api.unsplash.com/photos/K1GjJQgOqa8",
//       html: "https://unsplash.com/photos/K1GjJQgOqa8",
//       download: "https://unsplash.com/photos/K1GjJQgOqa8/download",
//       download_location:
//         "https://api.unsplash.com/photos/K1GjJQgOqa8/download?ixid=MnwyMjEzMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc4Mjc4NjU",
//     },
//     categories: [],
//     likes: 17,
//     liked_by_user: false,
//     current_user_collections: [],
//     sponsorship: null,
//     user: {
//       id: "KanEIwPUA7A",
//       updated_at: "2021-04-07T14:45:31-04:00",
//       username: "biglaughkitchen",
//       name: "Deva Williamson",
//       first_name: "Deva",
//       last_name: "Williamson",
//       twitter_username: "Kitchenlaugh",
//       portfolio_url: "http://www.biglaughkitchen.com",
//       bio:
//         "📷 American Cake Decorating Magazine Columnist - Writer behind the Sweet Shot.\r\n🍰 Food Network Champion. Feel free to reach out - Let's work together! I'm a Content Creator + Cake Stylist + Product Photographer",
//       location: "St. Louis, Missouri",
//       links: {
//         self: "https://api.unsplash.com/users/biglaughkitchen",
//         html: "https://unsplash.com/@biglaughkitchen",
//         photos: "https://api.unsplash.com/users/biglaughkitchen/photos",
//         likes: "https://api.unsplash.com/users/biglaughkitchen/likes",
//         portfolio: "https://api.unsplash.com/users/biglaughkitchen/portfolio",
//         following: "https://api.unsplash.com/users/biglaughkitchen/following",
//         followers: "https://api.unsplash.com/users/biglaughkitchen/followers",
//       },
//       profile_image: {
//         small:
//           "https://images.unsplash.com/profile-fb-1512358526-c076ab264779.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
//         medium:
//           "https://images.unsplash.com/profile-fb-1512358526-c076ab264779.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
//         large:
//           "https://images.unsplash.com/profile-fb-1512358526-c076ab264779.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128",
//       },
//       instagram_username: "big_laugh_kitchen",
//       total_collections: 17,
//       total_likes: 242,
//       total_photos: 61,
//       accepted_tos: true,
//       for_hire: true,
//     },
//     exif: {
//       make: null,
//       model: null,
//       exposure_time: null,
//       aperture: null,
//       focal_length: null,
//       iso: null,
//     },
//     location: {
//       title: null,
//       name: null,
//       city: null,
//       country: null,
//       position: {
//         latitude: null,
//         longitude: null,
//       },
//     },
//     views: 189673,
//     downloads: 601,
//   },
//  ];

//Unsplash API
let photosArray = [];
const count = 10;
const apiKey = "lsGRufaqNIx9KteWg5_ZAXAf1BQFDmkP39uRBS8YHCo";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//Helper Function to Set Attributes on DOM Elements
function setAttributes(element, attributes) {
  for (const key in attributes) {
    // element.setAttribute(key, attributes[key]);
    element[key] = attributes[key];
  }
}

// Create Elements For Links & Photos, Add to DOM
function displayPhotos() {
  // Run function for each object in photosArray

  for (const photo of photosArray) {
    //Create <a> to link to Unsplash
    const anchor = document.createElement("a");
    setAttributes(anchor, {
      href: photo.links.html,
      target: "_blank",
    });

    //Create <img> for photo
    const img = document.createElement("img");
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });

    //Put <img> inside <a>, then put both inside imageContainer element
    anchor.appendChild(img);
    imageContainer.appendChild(anchor);
  }
}

// Get photos from Unsplash API
async function getPhotos() {
  try {
    photosArray = await (await fetch(apiUrl)).json();
    displayPhotos();
    console.log("Photos: ", photosArray);
  } catch (error) {
    // Catch Error Here
    console.log("error: ", error);
    alert(error);
  }
}

// On Load
getPhotos();
