package com.freaxjj.wechatsubscribe.dto.req;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

/**
 * @author 刘亚林
 * @description 商品优惠券请求
 * @create 2020/12/7 16:30
 **/
@Data
@AllArgsConstructor
@NoArgsConstructor
public class GoodCouponReq {
    //private String me;


    /**
     * 商品id
     */
    private Long itemId;

    /**
     * 活动id
     */
    private Long acitivityId;

}
