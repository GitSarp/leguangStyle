package com.freaxjj.wechatsubscribe.controller;

import com.alibaba.fastjson.JSON;
import com.freaxjj.wechatsubscribe.aes.AesException;
import com.freaxjj.wechatsubscribe.aes.WXBizMsgCrypt;
import com.freaxjj.wechatsubscribe.dto.EchoReq;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

/**
 * @author 刘亚林
 * @description
 * @create 2020/10/16 17:12
 **/
@RestController
@RequestMapping("/")
@Slf4j
@Validated
public class BaseController {
    @Autowired
    WXBizMsgCrypt wxBizMsgCrypt;

    @GetMapping("/echo")
    public String test(@Valid EchoReq echoReq) throws AesException {
        log.debug("receive msg: " + JSON.toJSONString(echoReq));
        wxBizMsgCrypt.verifyEcho(echoReq.getSignature(), echoReq.getTimestamp(), echoReq.getNonce());
        return echoReq.getEchostr();
    }
}
