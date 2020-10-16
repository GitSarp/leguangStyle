package com.freaxjj.wechatsubscribe.controller.dto;

import lombok.Data;

/**
 * @author 刘亚林
 * @description
 * @create 2020/10/16 17:21
 **/
@Data
public class EchoReq {
    private String signature;

    private String timestamp;

    /**
     * 随机数
     */
    private String nonce;

    private String echostr;
}
