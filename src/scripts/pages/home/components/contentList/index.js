import { API_URL_LIST } from '../../../../config'
import component from '../../../../utils/component'
import get from '../../../../utils/fetch'
import handleClickDetail from './handleOpen'
import htmlContentListRestaurant from './html'
// styling
import './main.css'
import './mobile.css'

/**
 * handle list restaurant
 */
const URL = API_URL_LIST
get(URL, (DATAS) => {
  const { restaurants } = DATAS
  const HTML = htmlContentListRestaurant({ restaurants, title: 'List' })
  component({
    HTML,
    NAME_TAG: 'content-list',
    // eslint-disable-next-line no-undef
    CALLBACK: () => handleClickDetail(DATAS.restaurants),
  })
})
