package com.freaxjj.wechatsubscribe.dto.resp;

import com.taobao.api.response.TbkDgMaterialOptionalResponse;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class GoodsListVo {
    List<TbkDgMaterialOptionalResponse.MapData> resultList;
    Long totalCount;
}
