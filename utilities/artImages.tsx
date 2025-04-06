export type ArtImage = {
  img: string
  title: string
  date?: string
}

export const drawings: ArtImage[] = [
  {
    img: "/images/paper/20190319.jpg",
    title: "Eye",
    date: "2019-03-19",
  },
  {
    img: "/images/paper/20190320.jpg",
    title: "Girl",
    date: "2019-03-20",
  },
  {
    img: "/images/paper/20190325.jpg",
    title: "Eye Realistic",
    date: "2019-03-25",
  },
  {
    img: "/images/paper/20191229.jpg",
    title: "Scout",
    date: "2019-12-29",
  },
  {
    img: "/images/paper/20200105.jpg",
    title: "Nonna Francesca",
    date: "2020-01-05",
  },
  {
    img: "/images/paper/20200428.jpg",
    title: "Barney Stinson",
    date: "2020-04-28",
  },
  {
    img: "/images/paper/20200521.jpg",
    title: "Mamma",
    date: "2020-05-21",
  },
  {
    img: "/images/paper/20230122-2.jpg",
    title: "Birds Blue",
    date: "2023-01-22",
  },
  {
    img: "/images/paper/20230122.jpg",
    title: "Pettirosso",
    date: "2023-01-22",
  },
  {
    img: "/images/paper/20230823.jpg",
    title: "Apple",
    date: "2023-08-23",
  },
  {
    img: "/images/paper/20240816.jpg",
    title: "Pescatore a Santa Maria la Scala",
    date: "2024-08-16",
  },
  {
    img: "/images/paper/20230924.jpg",
    title: "Santa Maria la Scala",
    date: "2023-09-24",
  },
  {
    img: "/images/paper/20250224.jpg",
    title: "Acquegrandi",
    date: "2025-02-24",
  },
]

export const anime: ArtImage[] = [
  {
    img: "/images/anime/20170824.jpg",
    title: "Luffy & Shanks",
    date: "2017-08-24",
  },
  {
    img: "/images/anime/20170825.jpg",
    title: "Luffy",
    date: "2017-08-25",
  },
  {
    img: "/images/anime/20170828.jpg",
    title: "Luffy 2",
    date: "2017-08-28",
  },
  {
    img: "/images/anime/20170912.jpg",
    title: "Luffy Gear 4",
    date: "2017-09-12",
  },
  {
    img: "/images/anime/20180309.jpg",
    title: "Eren & Reiner giants",
    date: "2018-03-09",
  },
  {
    img: "/images/anime/20180315.jpg",
    title: "Rem",
    date: "2018-03-15",
  },
  {
    img: "/images/anime/20181102.jpg",
    title: "Luffy vs Katakuri",
    date: "2018-11-02",
  },
  {
    img: "/images/anime/20200314.jpg",
    title: "Bojack Horseman",
    date: "2020-03-14",
  },
]

export const pandify: ArtImage[] = [
  {
    img: "/images/pandify/noWritings/1.jpg",
    title: "Ombre",
  },
  {
    img: "/images/pandify/noWritings/2.jpg",
    title: "Record",
  },
  {
    img: "/images/pandify/noWritings/3.jpg",
    title: "Palazzina Gialla",
  },
  {
    img: "/images/pandify/noWritings/4.jpg",
    title: "La tua futura ex moglie",
  },
  {
    img: "/images/pandify/noWritings/5.jpg",
    title: "Non ci sei più",
  },
  {
    img: "/images/pandify/noWritings/6.jpg",
    title: "Festa",
  },
  {
    img: "/images/pandify/noWritings/7.jpg",
    title: "Stanza singola",
  },
  {
    img: "/images/pandify/noWritings/8.jpg",
    title: "Maionese",
  },
  {
    img: "/images/pandify/noWritings/9.jpg",
    title: "Settebello",
  },
  {
    img: "/images/pandify/noWritings/10.jpg",
    title: "Cialde",
  },
  {
    img: "/images/pandify/noWritings/11.jpg",
    title: "Someone to you",
  },
  {
    img: "/images/pandify/noWritings/12.jpg",
    title: "Appuntamento",
  },
  {
    img: "/images/pandify/noWritings/13.jpg",
    title: "Fiamme negli occhi",
  },
  {
    img: "/images/pandify/noWritings/14.jpg",
    title: "Bacio illimitato",
  },
]

export const categories = [
  {
    name: "Pencil & Charchoal",
    logo: () => drawings[Math.floor(Math.random() * drawings.length)].img,
    link: "/art/paper",
  },
  {
    name: "Digital Art",
    logo: () => pandify[Math.floor(Math.random() * pandify.length)].img,
    link: "/art/digital",
  },
  {
    name: "Anime & Manga",
    logo: () => anime[Math.floor(Math.random() * anime.length)].img,
    link: "/art/anime",
  },
]
