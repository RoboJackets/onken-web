import { resHandler } from '../../fetch-base'
import fetch from 'isomorphic-unfetch'
import * as testData from '../test-data.json'

export const fetchTableData = async () => testData.default

export const fetchTest = async () => resHandler(await fetch('https://api.tvmaze.com/search/shows?q=batman'))