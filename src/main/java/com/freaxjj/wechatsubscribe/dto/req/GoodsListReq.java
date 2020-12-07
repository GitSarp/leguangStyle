package com.freaxjj.wechatsubscribe.dto.req;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author 刘亚林
 * @description
 * @create 2020/12/3 14:39
 **/
@Data
@AllArgsConstructor
@NoArgsConstructor
public class GoodsListReq {
    /**
     * 搜索的商品
     */
    private String qry;
    /**
     * 商品类目
     */
    private String cat;

    /**
     * 不传时默认物料id=2836；如果直接对消费者投放，可使用官方个性化算法优化的搜索物料id=17004
     * 注意此处传17004报内部错误
     */
    private Long materialId;

    /**
     * 是否有优惠券。true表示该商品有优惠券，false或不设置表示不限
     */
    private Boolean hasCoupon = false;

    /**
     * 排序_des（降序），排序_asc（升序），销量（total_sales），淘客佣金比率（tk_rate）， 累计推广量（tk_total_sales），总支出佣金（tk_total_commi），价格（price）
     */
    private String sort;

    /**
     * 好评率是否高于行业均值。True表示大于等于，false或不设置表示不限
     * 传此参数报内部错误
     */
    private Boolean includeGoodRate = true;

    private Long pageNo = 1L;
    private Long pageSize = 20L;
}
