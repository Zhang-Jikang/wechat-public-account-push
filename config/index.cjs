/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx10b676451ba64864',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '09118d245ef6bececb0c87d29d69b5ee',

  PROVINCE: '江苏',
  CITY: '南京',

  USERS: [
    {
      // 想要发送的人的名字
      name: '晴晴小可爱',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oJ1qO6QXviF4aYG8F_iHtAAbPUM0',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'kopDQj4dlyzBJEDPGr_m4_hJo9wVRPjKfbglw8ENsiU',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-11',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '晴晴', year: '1995', date: '10-20',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-10-22' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'kopDQj4dlyzBJEDPGr_m4_hJo9wVRPjKfbglw8ENsiU',

  CALLBACK_USERS: [
    {
      name: '小张',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oJ1qO6b7R0bX8M84QQS8CON48DpM',
    }
  ],

}

module.exports = USER_CONFIG

