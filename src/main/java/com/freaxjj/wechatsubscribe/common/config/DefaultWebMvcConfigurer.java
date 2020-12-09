package com.freaxjj.wechatsubscribe.common.config;

import com.freaxjj.wechatsubscribe.common.SignAuthInterceptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnWebApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * @author 刘亚林
 * @description
 * @create 2020/12/7 14:31
 **/
@Configuration
@ConditionalOnWebApplication(type = ConditionalOnWebApplication.Type.SERVLET)
public class DefaultWebMvcConfigurer implements WebMvcConfigurer {
    @Autowired
    private SignAuthInterceptor signAuthInterceptor;

    /**
     * //1.加入的顺序就是拦截器执行的顺序，
     * //2.按顺序执行所有拦截器的preHandle
     * //3.所有的preHandle 执行完再执行全部postHandle 最后是postHandle
     */
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(signAuthInterceptor)
                //所有请求都需要进行报文签名sign
                .excludePathPatterns("/**.html","/static/**")
                .addPathPatterns("/**");
/*        registry.addInterceptor(permissionInterceptor)
                .addPathPatterns("/**")
                .excludePathPatterns("api/user/login"); //排除登录Token拦截*/
    }
}