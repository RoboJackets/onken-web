import { BASE_URL, resHandler } from '../../fetch-base'
import fetch from 'isomorphic-unfetch'
import * as testData from '../test-data.json'

export async function fetchAdmin() {
  return testData
}

export async function fetchTest() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  return resHandler(res)
}