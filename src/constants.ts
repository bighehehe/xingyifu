import type { NavItem, Product, Stat } from './types';
import { ShoppingBag, Coffee, Utensils, Music } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: '首页', path: '/' },
  { label: '产品中心', path: '/products' },
  { label: '行业解决方案', path: '/solutions' },
  { label: '资讯动态', path: '/news' },
  { label: '关于我们', path: '/about' },
  { label: '联系我们', path: '/contact' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: '星驿付智能POS',
    category: '智能POS',
    description: '全触屏智能终端，支持4G/WiFi，内置高速打印机，聚合支付首选。',
    features: ['Android 10.0系统', '5.5英寸高清屏', '极速扫码摄像头', '超长续航'],
    image: '/img/星驿付.jpg',
    isNew: true
  },
  {
    id: 'p2',
    name: '星驿付电签POS',
    category: '电签POS',
    description: '小巧便携，随时随地收款。电子签名，无需纸质小票，环保高效。',
    features: ['4G全网通', '2.4英寸彩屏', '电子签名', '磁条/IC/NFC'],
    image: '/img/星驿付电签.jpg',
  }
];

export const SOLUTIONS_DATA = [
  {
    id: 's1',
    title: '智慧零售',
    description: '为超市、便利店提供进销存一体化管理，提升收银效率。',
    icon: ShoppingBag,
    image: '/img/智慧零售.png',
    benefits: ['会员管理', '库存实时同步', '多门店连锁', '自助收银']
  },
  {
    id: 's2',
    title: '餐饮美食',
    description: '点餐、外卖、后厨联动，打造数字化智慧餐厅。',
    icon: Utensils,
    image: '/img/餐饮美食.png',
    benefits: ['扫码点餐', '后厨打印', '外卖接单', '排队取号']
  },
  {
    id: 's3',
    title: '生活服务',
    description: '美容美发、健身房等场景的会员储值与核销方案。',
    icon: Coffee,
    image: '/img/美容美发、健身房.png',
    benefits: ['次卡/月卡', '技师提成', '预约管理', '营销拓客']
  },
  {
    id: 's4',
    title: '娱乐休闲',
    description: 'KTV、酒吧、游乐场的快速入场与酒水管理。',
    icon: Music,
    image: '/img/酒吧.png',
    benefits: ['计时收费', '包厢管理', '预授权', '移动收银']
  }
];

export const STATS: Stat[] = [
  { label: '服务商户', value: '500', suffix: '万+' },
  { label: '日均交易', value: '3000', suffix: '万笔' },
  { label: '覆盖城市', value: '340', suffix: '+' },
  { label: '合作伙伴', value: '2000', suffix: '+' },
];
