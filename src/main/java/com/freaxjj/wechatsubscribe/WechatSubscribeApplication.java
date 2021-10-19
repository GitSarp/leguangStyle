package com.freaxjj.wechatsubscribe;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class WechatSubscribeApplication {

    public static void main(String[] args) {
        SpringApplication.run(WechatSubscribeApplication.class, args);
    }

}
