package com.freaxjj.wechatsubscribe.dto.resp;

import com.taobao.api.response.TbkDgOptimusMaterialResponse;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OptGoodsListVo {
    /**
     * 推荐信息-是否抄底
     */
    private String isDefault;

    /**
     * resultList
     */
    private List<TbkDgOptimusMaterialResponse.MapData> resultList;

    /**
     * 商品总数-目前只有全品库商品查询有该字段
     */
    private Long totalCount;
}
