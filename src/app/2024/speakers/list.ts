export interface Profile {
  avatar: string
  title: string
  x?: string
  linktr?: string
  website?: string
  github?: string
}

const SPEAKER_LIST = new Map<string, Profile>([
  // ['Jan Xie', {
  //   avatar: '/img/speakers/jan_xie.png',
  //   title: 'Architect @ Nervos',
  //   x: 'https://x.com/busyforking'
  // }],
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
  // ['Kevin Wang', {
  //   avatar: '/img/speakers/kevin_wang.png',
  //   title: 'Co-Founder @ Khalani Network',
  //   x: "https://x.com/knwang",
  // }],
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
  }],
  ['Grace Gui', {
    avatar: '/img/speakers/grace_gui.jpg',
    title: 'Delta Labs & CKBEcoFund',
    x: 'https://x.com/gracegui43',
  }],
  ['Lareina', {
    avatar: '/img/speakers/lareina.jpg',
    title: 'CMO @ UTXO Stack',
    x: 'https://x.com/0x_lareina',
  }],
  ['Simon Shi', {
    avatar: '/img/speakers/simon_shi.jpg',
    title: 'APRO Oracle',
    x: 'https://twitter.com/ShiehSimon',
  }],
  ['Leigh Blackwood Stringer', {
    avatar: '/img/speakers/leigh_blackwood_stringer.png',
    title: 'Community Lead @ Nervos Foundation'
  }],
  ['contrun', {
    avatar: '/img/speakers/contrun.jpg',
    title: 'Developer @ Cryptape',
    x: 'https://x.com/@self_dual'
  }],
  ['Andrew Tu', {
    avatar: '/img/speakers/andrew_tu.jpeg',
    title: 'Efficient Frontier',
    x: 'https://twitter.com/AndrewTu_'
  }],
  ['Arnau Via', {
    avatar: '/img/speakers/arnau_via.jpg',
    title: 'COO @ CKBULL',
    x: 'http://x.com/ckbull_wallet'
  }],
  ['Ferran', {
    avatar: '/img/speakers/ferran.jpeg',
    title: 'CEO @ CKBULL',
    x: 'http://x.com/ckbull_wallet'
  }],
  ['Flouse', {
    avatar: '/img/speakers/flouse.png',
    title: 'CTO @ CELL Studio'
  }],
  ['mohanson', {
    avatar: '/img/speakers/mohanson.png',
    title: 'Engineer @ Cryptape',
    github: 'https://github.com/mohanson'
  }],
  ['Phroi', {
    avatar: '/img/speakers/phroi.jpg',
    title: 'iCKB'
  }],
  ['Seung Hyun Lee', {
    avatar: '/img/speakers/seung_hyun_lee.jpg',
    title: 'CoinEasy Korea',
    website: 'https://www.coineasy.xyz/'
  }],
  ['Yukang Chen', {
    avatar: '/img/speakers/yukang_chen.png',
    title: 'Software Engineer @ Cryptape',
    x: 'https://x.com/cyukang'
  }],
  [
    'Leona Hioki', {
      avatar: '/img/speakers/leona_hioki.jpg',
      title: 'Co-founder @ INTMAX',
      x: 'https://x.com/leo_hio'
    }
  ]
])

export default SPEAKER_LIST
