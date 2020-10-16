package com.freaxjj.wechatsubscribe.controller;

import com.alibaba.fastjson.JSON;
import com.freaxjj.wechatsubscribe.controller.dto.EchoReq;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author 刘亚林
 * @description
 * @create 2020/10/16 17:12
 **/
@RestController
@RequestMapping("/")
public class BaseController {

    @GetMapping("/echo")
    public String test(EchoReq echoReq){
        System.out.println("receive msg: " + JSON.toJSONString(echoReq));
        return echoReq.getEchostr();
    }
}
