import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import Taro from '@tarojs/taro'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.less'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () {
    // Taro.getSetting({
    //   success: function (res) {
    //     console.log(res);

    //     if (!res.authSetting['scope.userLocation']) {
    //       Taro.authorize({
    //         scope: 'scope.userLocation',
    //         success: function () {
    //           // 用户已经同意小程序使用录音功能，后续调用 Taro.startRecord 接口不会弹窗询问

    //         }
    //       })
    //     }
    //   }
    // })
    Taro.getLocation({
      type: 'wgs84',
      success: function (res) {
        const latitude = res.latitude
        const longitude = res.longitude
        const speed = res.speed
        const accuracy = res.accuracy
        console.log(res);

      }
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        asd
      </View>
    )
  }
}
