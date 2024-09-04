export interface Profile {
  avatar: string
  title: string
  x?: string
  linktr?: string
}

const SPEAKER_LIST = new Map<string, Profile>([
  ['Jan Xie', {
    avatar: '/img/speakers/jan_xie.png',
    title: 'Architect @ Nervos',
    x: 'https://x.com/busyforking'
  }],
  ['Cipher Wang', {
    avatar: '/img/speakers/cipher_wang.png',
    title: 'Founder @ CELL Studio',
    x: 'https://x.com/crypcipher'
  }],
  ['Matt Quinn', {
    avatar: '/img/speakers/matt_quinn.png',
    title: 'CEO @ Nervos Foundation',
    x: 'https://x.com/matt_bitcoin'
  }],
  ['Kevin Wang', {
    avatar: '/img/speakers/kevin_wang.png',
    title: 'Co-Founder @ Khalani Network',
    x: "https://x.com/knwang",
  }],
  [
    'Echo', {
      avatar: '/img/speakers/echo.jpg',
      x: 'https://x.com/Nervape77',
      title: 'Nervape'
    }
  ],
  [
    'Eva', {
      avatar: '/img/speakers/eva.jpg',
      title: 'Growth Manager @ d.id'
    }
  ],
  ['Tannr Allard', {
    avatar: '/img/speakers/tannr_allard.jpg',
    x: 'https://x.com/intent_dev',
    title: 'Co-Founder & CTO @ Khalani Network'
  }],
  ['Code Tsao', {
    avatar: '/img/speakers/code_tsao.jpg',
    title: 'CTO @ Nervape',
    x: 'https://twitter.com/code_monad'
  }],
  ['Sawyer Sun', {
    avatar: '/img/speakers/sawyer_sun.jpg',
    title: 'APRO Oracle',
    linktr: 'https://linktr.ee/apro_oracle'
  }],
  ['James Shih', {
    avatar: '/img/speakers/james_shih.jpg',
    title: 'Community Manager @ Nervape'
  }],
  ['Xuejie Xiao', {
    avatar: '/img/speakers/xuejie_xiao.jpg',
    title: 'Cryptape'
  }],
  ['Eric', {
    avatar: '/img/speakers/eric.jpg',
    title: 'Cellula',

  }],
  ['CHEN YU', {
    avatar: '/img/speakers/chen_yu.png',
    title: 'Founder @ MagiCKBase',
    x: 'https://x.com/CHEN_YU_bio'
  }]
])

export default SPEAKER_LIST
