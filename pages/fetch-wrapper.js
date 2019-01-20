import unfetch from 'isomorphic-unfetch'

const fetch = async (req, pathname) => {
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
  const res = await unfetch(`${baseUrl}/${pathname}`)

  const resultObj = {
    data: null,
    failed: false,
  }
  if (res.status !== 200)
    resultObj.failed = true
  else
    resultObj.data = await res.json()

  return resultObj
}

export default fetch