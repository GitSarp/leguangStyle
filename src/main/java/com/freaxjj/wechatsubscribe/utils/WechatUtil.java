package com.freaxjj.wechatsubscribe.utils;

import com.alibaba.fastjson.JSON;
import com.freaxjj.wechatsubscribe.utils.converter.WxMappingJackson2HttpMessageConverter;
import com.google.common.collect.Maps;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.Map;

@Slf4j
public class WechatUtil {
    private final static String url="https://api.weixin.qq.com/sns/jscode2session";

    private static RestTemplate restTemplate = new RestTemplate();
    //设置contentType
    static {
        restTemplate.getMessageConverters().add(new WxMappingJackson2HttpMessageConverter());
    }

    public static Map doGetWithParam(String url, Map<String,String> params){
        Map result=null;
        try {
             result=restTemplate.getForObject(url, Map.class, params);
        }catch (RestClientException e){
            log.error("请求异常："+e.getMessage());
        }
        return result;
    }

    public static Map doGet(String url){
        Map result=null;
        try {
            result=restTemplate.getForObject(url, Map.class);
        }catch (RestClientException e){
            log.error("请求异常："+e.getMessage());
        }
        return result;
    }

    public static Object doReq(String url, Map<String,Object> map, Class clazz){
        return restTemplate.getForObject(url, clazz,map);
    }

    /**
     * 微信code2Session接口，获取用户id及session
     * @param jsCode
     * @return
     */
    public static Map code2Session(String appId, String secret, String jsCode){
        Map<String, String> params = Maps.newHashMap();
        params.put("appid", appId);
        params.put("secret", secret);
        params.put("grant_type", "authorization_code");
        params.put("js_code", jsCode);
        //构造完整url
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(url);
        params.entrySet().stream().forEach(e -> builder.queryParam(e.getKey(), e.getValue()));
        String uri = builder.build().encode().toString();

        Map res = doGet(uri);
        log.info("小程序code2Session接口返回: {}", JSON.toJSONString(res));
        return res;
    }

    public static void main(String[] args) {
        String  appId="";
        String  secret="";
        Map<String,String> params= Maps.newHashMap();
        params.put("appid",appId);
        params.put("secret",secret);
        params.put("grant_type","authorization_code");
        params.put("js_code","");

        Map testResp = code2Session(appId, secret, url);
        System.out.printf(JSON.toJSONString(testResp));
    }
}
