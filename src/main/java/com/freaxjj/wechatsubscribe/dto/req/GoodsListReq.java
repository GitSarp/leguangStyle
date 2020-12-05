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
    private String qry;
    private String cat;

    private Long pageNo = 1L;
    private Long pageSize = 20L;
}
