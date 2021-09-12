//配置对应的站点设置
const SITE_LIST = [
  {
    label: '高效办公',
    value: 'efficient_office',
    category_setting: [
      {
        label: 'PPT模板',
        value: 'ppt_template',
        site_setting: [
          {
            label: 'Office PLUS',
            description: '微软Office官方在线模板',
            target: 'https://www.officeplus.cn/',
          },
          {
            label: '稻壳儿',
            description: 'WPS模板内容服务平台',
            target: 'https://www.docer.com/',
          },
          {
            label: 'PPT BOSS',
            description: '在线PPT制作工具',
            target: 'https://www.pptboss.com/',
          },
          {
            label: 'Hi PPTer',
            description: 'PPT资源导航，PPT模板图表设计素材免费下载',
            target: 'http://www.hippter.com/',
          },
          {
            label: '吾道幻灯片',
            description: '专业PPT在线制作工具，支持多人协作',
            target: 'https://www.woodo.cn/',
          },
        ],
      },
      {
        label: '数据可视化',
        value: 'data_visualization',
        site_setting: [
          {
            label: '花火Hanabi',
            description: '在线图表制作工具-数据可视',
            target: 'https://hanabi.data-viz.cn/',
          },
          {
            label: '图表秀',
            description: '免费在线图表制作工具，数据可视化工具',
            target: 'https://www.tubiaoxiu.com/',
          },
          {
            label: '文图',
            description: '以最佳方式制作可视化数据报告',
            target: 'https://www.wentu.io/',
          },
          {
            label: 'Apache ECharts',
            description: '一个基于JavaScript的开源可视化图表库',
            target: 'https://echarts.apache.org/',
          },
          {
            label: '雁阵',
            description:
              '专业的在线项目管理工具，在线甘特图，项目计划，进度跟踪，团队协作。',
            target: 'http://www.geeseteam.com/',
          },
        ],
      },
      {
        label: '文档处理',
        value: 'document_processing',
        site_setting: [
          {
            label: 'iLovePDF',
            description: '为PDF爱好者提供的PDF文件在线处理工具',
            target: 'https://www.ilovepdf.com/',
          },
          {
            label: 'PDF24 Tools',
            description: '免费且易于使用的在线PDF工具',
            target: 'https://tools.pdf24.org/',
          },
        ],
      },
      {
        label: '流程图&思维导图',
        value: 'flow_chart_mind_mapping',
        site_setting: [
          {
            label: 'ProcessOn',
            description: '免费在线作图，思维导图，流程图，实时协作',
            target: 'https://www.processon.com/',
          },
          {
            label: '迅捷画图',
            description: '专业的在线作图网站，在线画思维导图、流程图',
            target: 'https://www.liuchengtu.com/',
          },
        ],
      },
      {
        label: '二维码',
        value: 'qr_code',
        site_setting: [
          {
            label: '第九工厂',
            description:
              '艺术二维码生成器、二维码美化设计制作、生成二维码图片、扫描二维码解析',
            target: 'https://www.9thws.com/',
          },
          {
            label: '草料二维码',
            description:
              '二维码解码器，利用电脑摄像头和上传图片读取扫描二维码内容',
            target: 'https://cli.im/',
          },
        ],
      },
      {
        label: '图像处理',
        value: 'image_processing',
        site_setting: [
          {
            label: 'Tiny PNG',
            description: 'Compress PNG images while preserving transparency',
            target: 'https://tinypng.com/',
          },
          {
            label: 'Big jpg',
            description:
              'AI人工智能图片无损放大-使用人工智能深度卷积神经网络(CNN)无损放大图片',
            target: 'https://bigjpg.com/',
          },
        ],
      },
      {
        label: '文字识别',
        value: 'ocr',
        site_setting: [
          {
            label: '白描',
            description: '图片转文字在线，图片文字提取，网页OCR文字识别',
            target: 'https://web.baimiaoapp.com/',
          },
          {
            label: '腾讯优图',
            description: '顶级的人工智能服务，多元化的行业解决方案',
            target: 'https://open.youtu.qq.com/',
          },
        ],
      },
      {
        label: '格式转换',
        value: 'format_convert',
        site_setting: [
          {
            label: 'ALL TO ALL',
            description: 'PDF转WORD 以及更多免费的在线格式转换工具',
            target: 'https://www.alltoall.net/',
          },
          {
            label: 'ConvertIO',
            description: '文件转换器',
            target: 'https://convertio.co/',
          },
        ],
      },
      {
        label: '一站式',
        value: 'one_stop',
        site_setting: [
          {
            label: 'iLoveIMG',
            description: '图像文件在线编辑工具',
            target: 'https://www.iloveimg.com/',
          },
          {
            label: '创客贴',
            description: '平面设计作图神器，免费设计模板，在线稿定设计印刷',
            target: 'https://www.chuangkit.com/',
          },
          {
            label: '图贴士',
            description: '在线图片压缩，视频转GIF软件，GIF裁剪合成工具',
            target: 'https://www.tutieshi.com/',
          },
          {
            label: '123apps',
            description: '免费网络应用',
            target: 'https://123apps.com/',
          },
        ],
      },
      {
        label: '其他',
        value: 'other',
        site_setting: [
          {
            label: '正版中国',
            description: '正版软件限时免费',
            target: 'https://www.zhengban.xin/',
          },
          {
            label: '扩展迷',
            description: 'Chrome插件/扩展，谷歌浏览器插件推荐与下载',
            target: 'https://www.extfans.com/',
          },
          {
            label: 'AnyKnew',
            description: '效率资讯，高效读新闻，5分钟遍历全网热点',
            target: 'https://www.anyknew.com/',
          },
          {
            label: 'MBA智库',
            description: '管理者专业学习成长平台',
            target: 'https://www.mbalib.com/',
          },
          {
            label: '术语在线',
            description: '权威的术语知识服务平台',
            target: 'https://www.termonline.cn/',
          },
        ],
      },
    ],
  },
  {
    label: '设计灵感',
    value: 'design_inspiration',
    category_setting: [
      {
        label: '特效生成器',
        value: 'after_effects',
        site_setting: [
          {
            label: 'Duotone',
            description: 'Duotone Effect Generator',
            target: 'https://duotones.co/',
          },
          {
            label: 'PHOTOMOSH',
            description: 'PhotoMosh',
            target: 'https://photomosh.com/',
          },
          {
            label: 'Halftone',
            description: 'Vector Halftone Maker',
            target: 'https://xoihazard.com/',
          },
          {
            label: 'Algorithmia',
            description: 'Algorithms',
            target: 'https://algorithmia.com/',
          },
          {
            label: 'WeaveSilk',
            description: 'Interactive Generative Art',
            target: 'http://weavesilk.com/',
          },
          {
            label: 'Trianglify',
            description: 'Low Poly Pattern Generator',
            target: 'https://trianglify.io/',
          },
          {
            label: 'Ostagram',
            description: 'Ostagram',
            target: 'https://www.ostagram.me/',
          },
          {
            label: 'amCharts',
            description: 'Pixel Map Generator',
            target: 'https://pixelmap.amcharts.com/',
          },
          {
            label: 'WordArt.com',
            description: 'Word Cloud Art Creator',
            target: 'https://wordart.com/',
          },
        ],
      },
      {
        label: '图库素材',
        value: 'image_repo',
        site_setting: [
          {
            label: 'Unsplash',
            description: 'Beautiful Free Images & Pictures',
            target: 'https://unsplash.com/',
          },
          {
            label: 'cc0图片网',
            description: '免费图片大全、可商业用途的图片素材网',
            target: 'https://cc0.cn/',
          },
          {
            label: 'IMGBIN.com',
            description: 'Download Transparent PNG Images, For Free',
            target: 'https://imgbin.com/',
          },
          {
            label: 'StickPNG',
            description: 'Free Transparent PNG Images, Stickers',
            target: 'https://www.stickpng.com/',
          },
          {
            label: 'icons8',
            description: '297,300 free icons',
            target: 'https://icons8.cn/',
          },
          {
            label: 'LogoMoose',
            description: 'Logo inspiration',
            target: 'https://www.logomoose.com/',
          },
          {
            label: 'Instant Logo Search',
            description: 'Search & download thousands of logos instantly',
            target: 'http://www.instantlogosearch.com/',
          },
          {
            label: 'Shapefest',
            description: 'An massive library of free 3D shapes',
            target: 'https://www.shapefest.com/',
          },
          {
            label: 'Dimmy',
            description: 'Device mockup generator for your screenshots',
            target: 'https://dimmy.club/',
          },
        ],
      },
      {
        label: '配色取色',
        value: 'color_picker',
        site_setting: [
          {
            label: '色轮',
            description: '调色盘产生器',
            target: 'https://color.adobe.com/',
          },
          {
            label: 'Coolors',
            description: 'Create a gradient',
            target: 'https://coolors.co/',
          },
          {
            label: 'Dopely Colors',
            description: 'A Free Solution to all your color problems',
            target: 'https://colors.dopely.top/',
          },
        ],
      },
      {
        label: '智能抠图',
        value: 'cutter',
        site_setting: [
          {
            label: 'Remove Bg',
            description: '消除图片中的背景',
            target: 'https://www.remove.bg/',
          },
          {
            label: 'Slazzer',
            description: 'Remove Image Background Automatically And Free',
            target: 'https://www.slazzer.com/',
          },
        ],
      },
      {
        label: '在线设计',
        value: 'design_online',
        site_setting: [
          {
            label: '在线PS软件',
            description: '在线PS图片处理工具，在线制作编辑图片',
            target: 'https://www.uupoop.com/',
          },
          {
            label: 'Vector Editor',
            description: 'Method Draw Vector Editor',
            target: 'https://editor.method.ac/',
          },
          {
            label: 'Image Vectorizer',
            description:
              'Convert raster images like PNGs, BMPs and JPEGs to scalable vector graphics (SVG, EPS, DXF)',
            target: 'https://www.vectorizer.io/',
          },
          {
            label: 'Vectary',
            description:
              'The Easiest Online 3D Design and 3D Modeling Software',
            target: 'https://www.vectary.com/',
          },
        ],
      },
      {
        label: '灵感资源',
        value: 'inspiration_resource',
        site_setting: [
          {
            label: 'Interfacer',
            description: '300+ free design resources',
            target: 'https://interfacer.xyz/',
          },
          {
            label: 'Muzli',
            description: 'Design Inspiration',
            target: 'https://muz.li/',
          },
          {
            label: 'Design Better',
            description: "Discover the world's best design",
            target: 'https://www.designbetter.co/',
          },
        ],
      },
    ],
  },
  {
    label: '自我提升',
    value: 'self-improvement',
    category_setting: [
      {
        label: '公开课',
        value: 'mooc',
        site_setting: [
          {
            label: 'Coursera',
            description: 'Build skills with online courses',
            target: 'https://www.coursera.org/',
          },
          {
            label: 'edX',
            description: "Start learning from the world's best institutions",
            target: 'https://www.edx.org/',
          },
          {
            label: 'Khan Academy',
            description: 'Free online courses, lessons and practice',
            target: 'https://www.khanacademy.org/',
          },
          {
            label: '中国大学MOOC',
            description: '国家精品课程在线学习平台',
            target: 'https://www.icourse163.org/',
          },
        ],
      },
      {
        label: '学术网站',
        value: 'academic_site',
        site_setting: [
          {
            label: 'OALib',
            description: 'Open Access Library',
            target: 'https://www.oalib.com/',
          },
          {
            label: '文津搜索',
            description: '文化津梁，资源尽享',
            target: 'http://find.nlc.cn/',
          },
          {
            label: '科塔学术导航',
            description: '最专业、准确、及时和全面的科研与学术资源导航平台',
            target: 'https://site.sciping.com/',
          },
        ],
      },
      {
        label: '电子书库',
        value: 'ebook',
        site_setting: [
          {
            label: '中国国家图书馆',
            description: '中国国家数字图书馆',
            target: 'http://www.nlc.cn/',
          },
          {
            label: 'Library Genesis',
            description: 'A guide to effective catalog searching',
            target: 'http://libgen.rs/',
          },
          {
            label: '书格',
            description: '有品格的数字古籍图书馆',
            target: 'https://new.shuge.org/',
          },
          {
            label: '苦瓜书盘',
            description:
              '苦瓜书盘是供网友交流适合电纸书阅读的6寸pdf及mobi格式电子书制作技术的网站，提供电子书分享的平台。',
            target: 'https://kgbook.com/',
          },
          {
            label: '鸠摩搜索',
            description: '文档搜索引擎',
            target: 'https://www.jiumodiary.com/',
          },
        ],
      },
      {
        label: '语言学习',
        value: 'language_learn',
        site_setting: [
          {
            label: '田间小站',
            description: '高级英语学习',
            target: 'https://www.tjxz.cc/',
          },
          {
            label: '多邻国',
            description: '学习外语，寓教于乐，学习外语的最佳途径',
            target: 'https://www.duolingo.cn/',
          },
          {
            label: '声同小语种论坛',
            description: '声同此声，心通此心',
            target: 'http://www.somdom.com/',
          },
          {
            label: 'Lang-8',
            description: '多国语言学习交流平台',
            target: 'https://lang-8.com/',
          },
        ],
      },
      {
        label: '翻译工具',
        value: 'translate_tools',
        site_setting: [
          {
            label: 'DeepL',
            description: '全世界最准确的翻译',
            target: 'https://www.deepl.com/',
          },
          {
            label: 'DocTranslator',
            description: '立即翻译任何文档格式为任意语言，并保持排版不变，免费',
            target: 'https://www.onlinedoctranslator.com/',
          },
          {
            label: '海词词典',
            description: '在线词典，在线翻译，海量正版权威词典官方网站',
            target: 'http://dict.cn/',
          },
          {
            label: '有道翻译',
            description: '免费、即时的多语种在线翻译',
            target: 'https://fanyi.youdao.com/',
          },
        ],
      },
      {
        label: '知识图谱',
        value: 'knowledge_map',
        site_setting: [
          {
            label: '世界数字图书馆',
            description: '19147个条目、有关193个国家、涵盖公元前8000年至2000年',
            target: 'https://www.wdl.org/',
          },
          {
            label: '《环球科学》',
            description: '《科学美国人》中文版',
            target: 'https://huanqiukexue.com/',
          },
          {
            label: '中国科普博览',
            description: '与科学同行',
            target: 'http://www.kepu.net.cn/',
          },
          {
            label: '微科普',
            description: '《微科普》是专注于科普知识传播的高层次科普媒体',
            target: 'https://www.wkepu.com/',
          },
        ],
      },
      {
        label: '学科知识',
        value: 'subject_knowledge',
        site_setting: [
          {
            label: '人体解剖学知识平台',
            description:
              'The Ultimate Resource for Healthcare Professionals & Medical Students',
            target: 'https://teachmeanatomy.info/',
          },
          {
            label: '美丽化学',
            description:
              '美丽化学起始于中国科学技术大学先进技术研究院和清华大学出版社联合制作的原创科学传播项目，其主旨是将化学的美丽和神奇传递给大众。',
            target: 'https://www.beautifulchemistry.net/',
          },
          {
            label: '全历史',
            description:
              '全历史以AI知识图谱为核心引擎，通过高度时空化、关联化数据的方式构造及展现数字人文内容',
            target: 'https://www.allhistory.com/',
          },
          {
            label: 'Desmos',
            description: '致力于帮助每一位学生学习数学并爱上数学',
            target: 'https://www.desmos.com/',
          },
          {
            label: 'Symbolab数学求解器',
            description:
              'Symbolab is an advanced math education tool. It allows users to learn, practice and discover math topics using mathematical symbols and scientific notations as well as text.',
            target: 'https://zs.symbolab.com/',
          },
        ],
      },
    ],
  },
]

export { SITE_LIST }
