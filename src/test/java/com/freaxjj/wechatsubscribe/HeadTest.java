package com.freaxjj.wechatsubscribe;

import com.alibaba.fastjson.JSON;
import com.freaxjj.wechatsubscribe.common.HeadRequest;
import com.freaxjj.wechatsubscribe.utils.MD5Util;

import java.util.UUID;

/**
 * @author 刘亚林
 * @description
 * @create 2020/12/7 14:50
 **/
public class HeadTest {
    private static final String APP_ID = "";
    public static final String APP_SECRET = "";

    public static void main(String[] args) {
        String timesTamp = String.valueOf(System.currentTimeMillis() / 1000);
        String nonce = UUID.randomUUID().toString().replace("-", "");

        HeadRequest head = new HeadRequest();
        head.setAppId(APP_ID);
        head.setAppSecret(APP_SECRET);
        head.setTimestamp(timesTamp);
        head.setNonce(nonce);
        head.setVersion("1.0");
        System.out.println(JSON.toJSONString(head));
        String sign = MD5Util.md5(APP_ID + APP_SECRET + timesTamp + nonce + "1.0");
        System.out.println("sign = " + sign);
    }
}
