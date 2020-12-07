package com.freaxjj.wechatsubscribe.common;

import lombok.Data;

/**
 * @desc: 请求头公共请求参数
 * @author: 刘亚林
 * @date: 、
 */
@Data
public class HeadRequest {
    /**
     * appId
     */
    private String appId;

    /**
     * appSecret秘钥
     */
    private String appSecret;

    /**
     * 10位时间戳
     */
    private String timestamp;

    /**
     * 参数签名
     */
    private String sign;

    /**
     * 随机字符串
     */
    private String nonce;

    /**
     * api版本号
     */
    private String version = "1.0";

}
