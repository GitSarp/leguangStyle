package com.freaxjj.wechatsubscribe.controller;

import com.freaxjj.wechatsubscribe.config.TaobaoConfig;
import com.freaxjj.wechatsubscribe.consts.TaobaoApiConsts;
import com.freaxjj.wechatsubscribe.dto.req.GoodsListReq;
import com.freaxjj.wechatsubscribe.dto.resp.GoodsListVo;
import com.taobao.api.ApiException;
import com.taobao.api.DefaultTaobaoClient;
import com.taobao.api.TaobaoClient;
import com.taobao.api.request.TbkDgMaterialOptionalRequest;
import com.taobao.api.response.TbkDgMaterialOptionalResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author 刘亚林
 * @description
 * @create 2020/12/3 14:34
 **/
@RestController
@CrossOrigin("http://localhost:8081")
@Slf4j
public class GoodsController {
    @Autowired
    TaobaoConfig taobaoConfig;

    /**
     * 创建搜索物料请求
     * @param goodsListReq
     * @return
     */
    private TbkDgMaterialOptionalRequest buildSearchMaterialReq(GoodsListReq goodsListReq){
        TbkDgMaterialOptionalRequest req = new TbkDgMaterialOptionalRequest();
        req.setAdzoneId(taobaoConfig.getAdzoneId());
        req.setPageNo(goodsListReq.getPageNo());
        req.setPageSize(goodsListReq.getPageSize());
        req.setCat(goodsListReq.getCat());
        req.setQ(goodsListReq.getQry());
        return req;
    }

    @GetMapping("/goods")
    public GoodsListVo getGoodsList(GoodsListReq qryReq) throws ApiException {
        log.info("收到搜索商品请求: {}", qryReq);
        if(StringUtils.isEmpty(qryReq.getQry()) && StringUtils.isEmpty(qryReq.getCat())){
            //查询和类目不能都为空
            new GoodsListVo();
        }
        TbkDgMaterialOptionalRequest req = buildSearchMaterialReq(qryReq);
        String url = taobaoConfig.getUrl().concat(TaobaoApiConsts.MATERIAL_QRY);
        TaobaoClient client = new DefaultTaobaoClient(url, taobaoConfig.getAppkey(), taobaoConfig.getSecret());
        TbkDgMaterialOptionalResponse rsp = client.execute(req);
        GoodsListVo goodsList = new GoodsListVo(rsp.getResultList(), rsp.getTotalResults());
        return goodsList;
    }
}
