package com.freaxjj.wechatsubscribe.config;

import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
@Data
public class TaobaoConfig {
    @Value("${taobao.url}")
    private String url;

    @Value("${taobao.appkey}")
    private String appkey;

    @Value("${taobao.secret}")
    private String secret;

    @Value("${taobao.adzoneId}")
    private Long adzoneId;
}
