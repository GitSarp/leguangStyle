package com.freaxjj.wechatsubscribe.common.config;

import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

/**
 * @author 刘亚林
 * @description
 * @create 2020/12/7 14:38
 **/
@Configuration
@Data
public class AppConfig {
    @Value("${app.appId}")
    private String appId;

    @Value("${app.secret}")
    private String secret;
}
