package com.freaxjj.wechatsubscribe.dto.resp;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @Author: freaxjj
 * @Desc: 活动返回对象
 * todo 在数据库维护
 * @Date: 10/18/21 4:16 PM
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ActivityObj {
    /**
     * 活动id
     */
    private String activityId;

    private String name;
    /**
     * 1天天可领 2限时秒杀
     */
    private Integer type;
    /**
     * 图片
     */
    private String bannerPic;
    private String icon;


    /**
     * 活动地址
     */
    private String clickUrl;
    private String shortClickUrl;
    private String wxQrcodeUrl;

    /**
     * todo 写死美团的appId，供小程序跳转
     */
    private String appId = "wxece3a9a4c82f58c9";
    /**
     * 小程序路径
     */
    private String wxMiniprogramPath;

    public ActivityObj(String activityId, String name, Integer type, String bannerPic, String icon) {
        this.activityId = activityId;
        this.name = name;
        this.type = type;
        this.bannerPic = bannerPic;
        this.icon = icon;
    }
}
