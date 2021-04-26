// 保存模拟数据路径
import Mock from 'mockjs'

export default {
    //    test: Mock.mock('/getItemList','get',{ // 数据池
    //         'userTableData|10': [{ // 图表过滤所需数据
    //             'name': '@cname',
    //             'date': '@date',
    //             'province': '@province',
    //             'city': '@city',
    //             'address': '@county(true) @ctitle() @natural(1000,9999) 号',
    //             'zip': '@zip'
    //         }]
    //     })
    // ,
       test: Mock.mock('/login','post',{
        token:'44545454555656',
        "id": 500,
        "rid": 0,
        "username": "admin",
        "mobile": "",
        "email": "",
        "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjUwMCwicmlkIjowLCJpYXQiOjE2MTkxNDA0MTQsImV4cCI6MTYxOTIyNjgxNH0.puyFA4h2PjAq6qwNN3kHmmDVw3Jp3ztvLAtdo5Y2sNM"
      })
    ,
}