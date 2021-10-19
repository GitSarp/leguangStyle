package com.freaxjj.wechatsubscribe.common.config;

import com.freaxjj.wechatsubscribe.wx.aes.AesException;
import com.freaxjj.wechatsubscribe.wx.aes.WXBizMsgCrypt;
import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.ConfigurationPropertiesBinding;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Map;

/**
 * @author 刘亚林
 * @description
 * @create 2020/12/7 14:38
 **/
@Data
@Configuration
@ConfigurationProperties("wechat")
public class WechatConfig {
    private String appId;

    private String token;

    private String encodingAESKey;

    private Map<String, String> apps;

    @Bean
    public WXBizMsgCrypt bizMsgCrypt() throws AesException {
        return new WXBizMsgCrypt(token, encodingAESKey, appId);
    }
}
