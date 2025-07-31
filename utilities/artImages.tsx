export enum BADGES {
  PEN = "Pen",
  PENCIL = "Pencil",
  CHARCOAL = "Charcoal",
  ACRILYC = "Acrylic",
  WATERCOLORS = "Watercolors",
  PENCIL_COLORS = "Pencil Colors",
  DIGITAL = "Digital",
  CHINA_INK = "China Ink",
}

export const BADGE_COLORS: Record<BADGES, string> = {
  [BADGES.PEN]: "var(--black)",
  [BADGES.PENCIL]: "var(--grey)",
  [BADGES.CHARCOAL]: "var(--light-black)",
  [BADGES.ACRILYC]: "var(--pink)",
  [BADGES.WATERCOLORS]: "var(--blue)",
  [BADGES.PENCIL_COLORS]: "var(--orange)",
  [BADGES.DIGITAL]: "var(--violet)",
  [BADGES.CHINA_INK]: "var(--black)",
}

export type ArtImage = {
  img: string
  title: string
  date?: string
  badges?: BADGES[]
}

export const paintings: ArtImage[] = [
  {
    img: "/images/painting/20240117.jpg",
    title: "The Poppy Field",
    date: "2024-01-17",
    badges: [BADGES.ACRILYC],
  },
  {
    img: "/images/painting/20230122-2.jpg",
    title: "Blue Birds",
    date: "2023-01-22",
    badges: [BADGES.WATERCOLORS],
  },
  {
    img: "/images/painting/20230122.jpg",
    title: "Pettirosso",
    date: "2023-01-22",
    badges: [BADGES.WATERCOLORS],
  },
]

export const drawings: ArtImage[] = [
  {
    img: "/images/paper/20190319.jpg",
    title: "Eye",
    date: "2019-03-19",
    badges: [BADGES.PENCIL],
  },
  {
    img: "/images/paper/20190320.jpg",
    title: "Girl",
    date: "2019-03-20",
    badges: [BADGES.PENCIL],
  },
  {
    img: "/images/paper/20190325.jpg",
    title: "Eye Realistic",
    date: "2019-03-25",
    badges: [BADGES.CHARCOAL],
  },
  {
    img: "/images/paper/20191229.jpg",
    title: "Scout",
    date: "2019-12-29",
    badges: [BADGES.PENCIL],
  },
  {
    img: "/images/paper/20200105.jpg",
    title: "Nonna Francesca",
    date: "2020-01-05",
    badges: [BADGES.CHARCOAL],
  },
  {
    img: "/images/paper/20200428.jpg",
    title: "Barney Stinson",
    date: "2020-04-28",
    badges: [BADGES.PENCIL],
  },
  {
    img: "/images/paper/20200521.jpg",
    title: "Mamma",
    date: "2020-05-21",
    badges: [BADGES.CHARCOAL],
  },
  {
    img: "/images/paper/20230823.jpg",
    title: "Apple",
    date: "2023-08-23",
    badges: [BADGES.CHARCOAL],
  },
  {
    img: "/images/paper/20240816.jpg",
    title: "Pescatore a Santa Maria la Scala",
    date: "2024-08-16",
    badges: [BADGES.PENCIL],
  },
  {
    img: "/images/paper/20230924.jpg",
    title: "Santa Maria la Scala",
    date: "2023-09-24",
    badges: [BADGES.CHARCOAL],
  },
  {
    img: "/images/paper/20250224.jpg",
    title: "Acquegrandi",
    date: "2025-02-24",
    badges: [BADGES.CHARCOAL],
  }, 
  {
    img: "/images/paper/IMG_2055.jpeg",
    title: "Undressing",
    date: "2025-08-30",
    badges: [BADGES.PENCIL],
  },
]

export const anime: ArtImage[] = [
  {
    img: "/images/anime/20170917.jpg",
    title: "Goku",
    date: "2017-09-17",
    badges: [BADGES.PENCIL_COLORS],
  },
  {
    img: "/images/anime/20171119.jpg",
    title: "Roy Mustang",
    date: "2017-11-19",
    badges: [BADGES.PENCIL_COLORS],
  },
  {
    img: "/images/anime/20150705.jpg",
    title: "Smoker",
    date: "2015-07-05",
    badges: [BADGES.PENCIL_COLORS],
  },
  {
    img: "/images/anime/20160831.jpg",
    title: "Luffy",
    date: "2016-08-31",
    badges: [BADGES.PEN],
  },
  {
    img: "/images/anime/20170720.jpg",
    title: "Sanji",
    date: "2017-07-20",
    badges: [BADGES.PENCIL],
  },
  {
    img: "/images/anime/20170824.jpg",
    title: "Luffy & Shanks",
    date: "2017-08-24",
    badges: [BADGES.PENCIL_COLORS],
  },
  {
    img: "/images/anime/20170825.jpg",
    title: "Luffy",
    date: "2017-08-25",
    badges: [BADGES.CHINA_INK],
  },
  {
    img: "/images/anime/20170828.jpg",
    title: "Luffy 2",
    date: "2017-08-28",
    badges: [BADGES.CHINA_INK],
  },
  {
    img: "/images/anime/20170912.jpg",
    title: "Luffy Gear 4",
    date: "2017-09-12",
    badges: [BADGES.CHINA_INK],
  },
  {
    img: "/images/anime/20180309.jpg",
    title: "Eren & Reiner giants",
    date: "2018-03-09",
    badges: [BADGES.PENCIL_COLORS],
  },
  {
    img: "/images/anime/20180315.jpg",
    title: "Rem",
    date: "2018-03-15",
    badges: [BADGES.PENCIL_COLORS],
  },
  {
    img: "/images/anime/20181102.jpg",
    title: "Luffy vs Katakuri",
    date: "2018-11-02",
    badges: [BADGES.CHINA_INK],
  },
  {
    img: "/images/anime/20200627.jpg",
    title: "Luffy",
    date: "2020-06-27",
    badges: [BADGES.DIGITAL],
  },
  // {
  //   img: "/images/anime/20200314.jpg",
  //   title: "Bojack Horseman",
  //   date: "2020-03-14",
  //   badges: [BADGES.PENCIL],
  // },
]

export const pandify: ArtImage[] = [
  {
    img: "/images/pandify/20230927.jpg",
    title: "Sicily basket",
    date: "2023-09-27",
    badges: [BADGES.DIGITAL],
  },
  {
    img: "/images/pandify/20231004.jpg",
    title: "My degree",
    date: "2023-10-04",
    badges: [BADGES.DIGITAL],
  },
  {
    img: "/images/pandify/20231112.jpg",
    title: "Mbare",
    date: "2023-11-12",
    badges: [BADGES.DIGITAL],
  },
  {
    img: "/images/pandify/withWritings/1.jpg",
    title: '"Ombre"',
    date: "2020-11-11",
    badges: [BADGES.DIGITAL],
  },
  {
    img: "/images/pandify/withWritings/2.jpg",
    title: '"Record"',
    date: "2020-11-12",
    badges: [BADGES.DIGITAL],
  },
  {
    img: "/images/pandify/withWritings/3.jpg",
    title: '"Palazzina Gialla"',
    date: "2020-11-16",
    badges: [BADGES.DIGITAL],
  },
  {
    img: "/images/pandify/withWritings/4.jpg",
    title: '"La tua futura ex moglie"',
    date: "2020-11-19",
    badges: [BADGES.DIGITAL],
  },
  {
    img: "/images/pandify/withWritings/5.jpg",
    title: '"Non ci sei più"',
    date: "2020-11-28",
    badges: [BADGES.DIGITAL],
  },
  {
    img: "/images/pandify/withWritings/6.jpg",
    title: '"Festa"',
    date: "2020-12-08",
    badges: [BADGES.DIGITAL],
  },
  {
    img: "/images/pandify/withWritings/7.jpg",
    title: '"Stanza singola"',
    date: "2020-12-18",
    badges: [BADGES.DIGITAL],
  },
  {
    img: "/images/pandify/withWritings/8.jpg",
    title: '"Maionese"',
    date: "2020-12-25",
    badges: [BADGES.DIGITAL],
  },
  {
    img: "/images/pandify/withWritings/9.jpg",
    title: '"Settebello"',
    date: "2020-12-27",
    badges: [BADGES.DIGITAL, BADGES.PENCIL],
  },
  {
    img: "/images/pandify/withWritings/10.jpg",
    title: '"Cialde"',
    date: "2021-01-06",
    badges: [BADGES.DIGITAL, BADGES.PENCIL],
  },
  {
    img: "/images/pandify/withWritings/11.jpg",
    title: '"Someone to you"',
    date: "2021-02-22",
    badges: [BADGES.DIGITAL],
  },
  {
    img: "/images/pandify/withWritings/12.jpg",
    title: '"Appuntamento"',
    date: "2021-03-10",
    badges: [BADGES.DIGITAL],
  },
  {
    img: "/images/pandify/withWritings/13.jpg",
    title: '"Fiamme negli occhi"',
    date: "2021-07-11",
    badges: [BADGES.DIGITAL],
  },
  {
    img: "/images/pandify/withWritings/14.jpg",
    title: '"Bacio illimitato"',
    date: "2021-12-26",
    badges: [BADGES.DIGITAL],
  },
  {
    img: "/images/pandify/withWritings/15.jpg",
    title: '"HO SBAGLIATO ANCORA"',
    date: "2025-07-02",
    badges: [BADGES.DIGITAL],
  },
]

export const categories = [
  {
    name: "Pencil & Charchoal",
    logo: (num: number) => drawings[Math.floor(num * drawings.length)].img,
    link: "/art/paper",
    images: drawings,
    description:
      "Nowadays, I like most to draw using pencil and charcoal.<br/><br/>I love to draw realistic portraits, the human body and landscapes from cities.",
  },
  {
    name: "Paintings & Colors",
    logo: (num: number) => paintings[Math.floor(num * paintings.length)].img,
    link: "/art/paintings",
    images: paintings,
    description: "I love to paint with watercolors and acrylics.<br/><br/>I'll start trying oil colors soon.",
  },
  {
    name: "Digital",
    logo: (num: number) => pandify[Math.floor(num * pandify.length)].img,
    link: "/art/digital",
    images: pandify,
    description:
      "Digital art created on my iPad.<br/><br/>The titles in quotes are the names of the songs that inspired the corresponding artwork.<br/>I've published them on <a href='https://www.instagram.com/pandi.fy' class='link' target='_blank'>Instagram</a>.",
  },
  {
    name: "Anime & Manga",
    logo: (num: number) => anime[Math.floor(num * anime.length)].img,
    link: "/art/anime",
    images: anime,
    description:
      "I started drawing at a young age by copying cartoon characters.<br/><br/>Growing up, I continued to draw scenes taken from anime and manga.",
  },
]
