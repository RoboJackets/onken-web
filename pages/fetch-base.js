export async function resHandler(res) {
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