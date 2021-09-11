import axios from 'axios'

export const fetchGetQuiitaData = async () => {
  const res = await axios.get('https://qiita.com/api/v2/items')
  return res
}