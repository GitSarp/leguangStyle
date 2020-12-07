package com.freaxjj.wechatsubscribe.common;

import com.alibaba.fastjson.JSON;
import com.freaxjj.wechatsubscribe.common.config.AppConfig;
import com.freaxjj.wechatsubscribe.utils.MD5Util;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * @author 刘亚林
 * @description 拦截器 验签
 * @create 2020/12/7 11:43
 **/
@Slf4j
@Component
public class SignAuthInterceptor implements HandlerInterceptor {
    private static final String NONCE_KEY = "x-nonce-";

    @Autowired
    private AppConfig appConfig;

//    @Autowired
//    private RedisUtils redisUtils;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String allowedAppId = appConfig.getAppId();
        String appId = request.getHeader("appId");
        if (StringUtils.isEmpty(appId) || (!StringUtils.isEmpty(allowedAppId) && !allowedAppId.equals(appId))){
            log.debug("appId不能为空...........");
            renderString(response, JSON.toJSONString(Result.REQ_PARAM_ERROR));
            return false;
        }
        String timestampStr = request.getHeader("timestamp");
        if (StringUtils.isEmpty(timestampStr)){
            log.debug("timestamp不能为空...........");
            renderString(response, JSON.toJSONString(Result.REQ_PARAM_ERROR));
            return false;
        }
        String sign = request.getHeader("sign");
        if (StringUtils.isEmpty(sign)){
            log.debug("sign不能为空...........");
            renderString(response, JSON.toJSONString(Result.REQ_PARAM_ERROR));
            return false;
        }
        String nonce = request.getHeader("nonce");
        if (StringUtils.isEmpty(nonce)){
            log.debug("nonce不能为空...........");
            renderString(response, JSON.toJSONString(Result.REQ_PARAM_ERROR));
            return false;
        }
        String signEcrypt = MD5Util.md5(appId  + appConfig.getSecret() + timestampStr + nonce + new HeadRequest().getVersion());
        long timestamp = 0;
        try {
            timestamp = Long.parseLong(timestampStr);
        } catch (Exception e) {
            log.error(e.getMessage(), e);
        }
        //1.前端传过来的时间戳与服务器当前时间戳差值大于180，则当前请求的timestamp无效
        if (Math.abs(timestamp - System.currentTimeMillis() / 1000) > 180){
            log.debug("timestamp无效...........");
            renderString(response, JSON.toJSONString(Result.REQ_PARAM_ERROR));
            return false;
        }
        //2.通过判断redis中的nonce，确认当前请求是否为重复请求，控制API接口幂等性
/*        boolean nonceExists = redisUtils.hasKey(nonce);
        if (nonceExists){
            log.debug("nonce重复...........");
            renderString(response, JSON.toJSONString(Result.REQ_PARAM_ERROR));
            return false;
        }*/
        //3.通过后台MD5重新签名校验与前端签名sign值比对，确认当前请求数据是否被篡改
        if (!(sign.equalsIgnoreCase(signEcrypt))){
            log.debug("sign签名校验失败...........");
            renderString(response, JSON.toJSONString(Result.REQ_PARAM_ERROR));
            return false;
        }
        //4.将nonce存进redis
        //redisUtils.set(NONCE_KEY+nonce, nonce, 180);
        log.debug("签名校验通过，放行...........");
        //5.放行
        return true;
    }

    /**
     * 将字符串渲染到客户端
     *
     * @param response 渲染对象
     * @param string   待渲染的字符串
     * @return null
     */
    private void renderString(HttpServletResponse response, String string) {
        try {
            response.setContentType("application/json");
            response.setCharacterEncoding("utf-8");
            response.getWriter().print(string);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void writeResponse(HttpServletResponse response, String respData)
            throws IOException {
        response.getOutputStream().write(respData.getBytes());
        response.getOutputStream().flush();
        response.getOutputStream().close();
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {

    }
}
