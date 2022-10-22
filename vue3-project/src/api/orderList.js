const orderList = [
    { id: '1', name:'蛋糕', price: '100.23', discount: '1折',img: require('../assets/img/1.jpg')},
    { id: '2', name:'饼干', price: '20', discount: '2折',img: require('../assets/img/2.jpg')},
    { id: '3', name:'奶茶', price: '99', discount: '3折',img: require('../assets/img/3.jpg')},
    { id: '4', name:'绿茶', price: '10', discount: '4折',img: require('../assets/img/4.jpg')},
    { id: '5', name:'水果', price: '88', discount: '5折',img: require('../assets/img/5.jpg')},
    { id: '6', name:'瓜子', price: '5', discount: '6折',img: require('../assets/img/6.jpg')},
]

const orderDetail = [
    { id: '1', name:'蛋糕', price: '100.23', discount: '1折',img:require('../assets/img/1.jpg'), desc: '风中有多余做的云，一朵雨做的云，云在风里伤透了心，不知又将吹向哪儿去。。。'},
    { id: '2', name:'饼干', price: '20', discount: '2折',img:require('../assets/img/2.jpg'), desc: '窈窕淑女，君子好逑。参差荇菜，左右流之。窈窕淑女，寤寐求之。求之不得，寤寐思服。悠哉悠哉。辗转反侧。参差荇菜，左右采之。窈窕淑女，琴瑟友之。参差荇菜，左右毛之。窈窕淑女，钟鼓乐之。'},
    { id: '3', name:'奶茶', price: '99', discount: '3折',img:require('../assets/img/3.jpg'), desc: '蒹葭苍苍，白露为霜。所谓伊人，在水一方。溯洄从之，道阻且长。溯游从之，宛在水中央。蒹葭萋萋，白露未晞。所谓伊人，在水之湄。溯洄从之，道阻且跻。溯游从之，宛在水中坻。蒹葭采采，白露未已。所谓伊人，在水之涘。溯洄从之，道阻且右。溯游从之，宛在水中沚。'},
    { id: '4', name:'绿茶', price: '10', discount: '4折',img:require('../assets/img/4.jpg'), desc: '东临碣石，以观沧海。水何澹澹，山岛竦峙。树木丛生，百草丰茂。秋风萧瑟，洪波涌起。日月之行，若出其中。星汉灿烂，若出其里。幸甚至哉，歌以咏志。'},
    { id: '5', name:'水果', price: '88', discount: '5折',img:require('../assets/img/5.jpg'), desc: '饮酒（东晋·陶潜）：结庐在人境，而无车马喧。问君何能尔？心远地自偏。采菊东篱下，悠然见南山。山气日夕佳，飞鸟相与还。此中有真意，欲辨已忘言。。。。。'},
    { id: '6', name:'瓜子', price: '5', discount: '6折',img:require('../assets/img/6.jpg'), desc: '行路难（唐·李白）：金樽清酒斗十千，玉盘珍羞值万钱。停杯投箸不能食，拔剑四顾心茫然。欲渡黄河冰塞川，将登太行雪满山。闲来垂钓碧溪上，忽复乘舟梦日边。行路难，行路难！多歧路，今安在？长风破浪会有时，直挂云帆济沧海。 10 望岳（唐·杜甫）：岱宗夫如何？齐鲁青未了。造化钟神秀，阴阳割昏晓。荡胸生层云，决眦入归鸟。会当凌绝顶，一览众山小。 '},
]

const obj = {
    orderList,
    orderDetail
}

export default obj