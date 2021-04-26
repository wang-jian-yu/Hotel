// 保存访问接口
import Axios from 'axios'

export async function getItemList () {
    let result = await Axios.get(`/getItemList`).then(d => d.data);
    return result
}