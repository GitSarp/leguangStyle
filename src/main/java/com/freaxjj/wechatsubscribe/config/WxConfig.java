package com.freaxjj.wechatsubscribe.config;

import com.freaxjj.wechatsubscribe.aes.AesException;
import com.freaxjj.wechatsubscribe.aes.WXBizMsgCrypt;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class WxConfig {
    @Value("${wx.appId}")
    private String appId;

    @Value("${wx.token}")
    private String token;

    @Value("${wx.encodingAESKey}")
    private String encodingAESKey;

    @Bean
    public WXBizMsgCrypt bizMsgCrypt() throws AesException {
        return new WXBizMsgCrypt(token, encodingAESKey, appId);
    }
}
