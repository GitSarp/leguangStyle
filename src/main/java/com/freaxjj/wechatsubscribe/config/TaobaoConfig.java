package com.freaxjj.wechatsubscribe.config;

import com.freaxjj.wechatsubscribe.consts.TaobaoApiConsts;
import com.taobao.api.DefaultTaobaoClient;
import com.taobao.api.TaobaoClient;
import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
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

    public TaobaoClient getTaobaoClient(String method){
        String urll = url.concat(TaobaoApiConsts.QRY_METHOD).concat(method);
        TaobaoClient taobaoClient = new DefaultTaobaoClient(urll, appkey, secret);
        return taobaoClient;
    }
}
