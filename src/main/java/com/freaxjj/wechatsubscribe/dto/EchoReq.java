package com.freaxjj.wechatsubscribe.dto;

import lombok.Data;

import javax.validation.constraints.NotBlank;

/**
 * @author 刘亚林
 * @description
 * @create 2020/10/16 17:21
 **/
@Data
public class EchoReq {
    @NotBlank
    private String signature;

    @NotBlank
    private String timestamp;

    /**
     * 随机数
     */
    @NotBlank
    private String nonce;

    @NotBlank
    private String echostr;
}
