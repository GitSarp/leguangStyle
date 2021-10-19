package com.freaxjj.wechatsubscribe.controller;

import com.alibaba.fastjson.JSON;
import com.freaxjj.wechatsubscribe.common.Result;
import com.freaxjj.wechatsubscribe.common.config.WechatConfig;
import com.freaxjj.wechatsubscribe.utils.WechatUtil;
import com.freaxjj.wechatsubscribe.wx.aes.AesException;
import com.freaxjj.wechatsubscribe.wx.aes.WXBizMsgCrypt;
import com.freaxjj.wechatsubscribe.dto.req.EchoReq;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.List;
import java.util.Map;

/**
 * @author 刘亚林
 * @description
 * @create 2020/10/16 17:12
 **/
@RestController
@RequestMapping("/")
@Slf4j
@Validated
public class WechatController {
    @Autowired
    WXBizMsgCrypt wxBizMsgCrypt;

    @GetMapping("/echo")
    public String test(@Valid EchoReq echoReq) throws AesException {
        log.debug("receive msg: " + JSON.toJSONString(echoReq));
        wxBizMsgCrypt.verifyEcho(echoReq.getSignature(), echoReq.getTimestamp(), echoReq.getNonce());
        return echoReq.getEchostr();
    }

    @GetMapping("/login")
    public Result login(@RequestHeader(value = "appId") String appId, @RequestAttribute(value = "appSecret") String appSecret, @RequestParam(value = "code") String code){
        if(StringUtils.isEmpty(code)){
            return Result.REQ_PARAM_ERROR;
        }

        Map result= WechatUtil.code2Session(appId, appSecret, code);
        Integer errorCode=(Integer) result.get("errcode");
        String errorMsg=(String)result.get("errmsg");
        String openId=(String)result.get("openid");
        String unionId=(String)result.get("unionid");
        String sessionKey=(String)result.get("session_key");

        if((errorCode!=null)&&(errorCode!=0)){
            return new Result(errorCode,"小程序登录失败,错误信息："+errorMsg);
        }else{
            //TODO 登录成功,存储用户会话,绑定用户，返回token
            return Result.SUCCESS;
        }
    }

}
