Page({
  data: {
    selectedIndex : -1,
    titles :[
      {
        title: '仅可选择”由公车负责人/组车管员分配',
        lineFontColor: '#222222'
      },
      {
        title: '仅可选择指定车辆',
        lineFontColor: '#222222'
      },
      {
        title: '以上二者都支持',
        lineFontColor: '#222222'
      },
      {
        title: '哈哈',
        lineFontColor: '#222222'
      },
      {
        title: '呵呵',
        lineFontColor: '#222222'
      }
    ]
  },  
  
  lineOnTap(e) {
    for(var i=0; i < this.data.titles.length; i++) {
      var key = 'titles['+ i +'].lineFontColor'
      if(i == e.target.dataset.index) {
        this.setData({
          [key] : '#1E88E5'
        })
      } else {
        this.setData({
          [key] : '#222222'
        })
      }
    }

    this.setData({
        selectedIndex : e.target.dataset.index
    });
  }
});
