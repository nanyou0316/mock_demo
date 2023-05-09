const Mock = require('mockjs')
const videos = require('./videos.json')
// Mock.mock('/mock/getVideo', 'get', { code: 200, data: videos })

module.exports = function (app) {
  if (process.env.Mock == 'true') {
    var data = Mock.mock({
      id: '@id()',
      username: '@cname',
      date: '@date(yyyy-MM-dd)',
      description: '@paragraph()',
      email: '@email()',
      'age|18-40': 0,
    })
    app.use('/api/userInfo', (req, res) => {
      res.json(data)
    })
    app.use('/api/userInfo1', (req, res) => {
      res.json({a:1})
    })
    app.use('/mock/getVideo', (req, res) => {
      res.json(videos)
    })
  }

  // app.use('/mock/getVideo',(req,res)=>{
  //   res.json(videos)
  // })
}
