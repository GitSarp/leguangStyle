package com.freaxjj.wechatsubscribe.dto.req;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

/**
 * @author 刘亚林
 * @description
 * @create 2020/12/7 16:30
 **/
@Data
@AllArgsConstructor
@NoArgsConstructor
public class OptimusGoodsReq {
    @NotBlank
    private Long materialId;

    /**
     * 智能推荐，猜你喜欢
     */
    private String deviceValue;
    private String deviceEncryt;
    private String deviceType;

    /**
     * 商品ID，用于相似商品推荐
     */
    private Long itemId;

    private Long pageNo = 1L;
    private Long pageSize = 20L;
}
