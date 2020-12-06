package com.freaxjj.wechatsubscribe.controller;

import com.freaxjj.wechatsubscribe.config.TaobaoConfig;
import com.freaxjj.wechatsubscribe.consts.TaobaoApiConsts;
import com.freaxjj.wechatsubscribe.dto.req.GoodsListReq;
import com.freaxjj.wechatsubscribe.dto.req.TpwdReq;
import com.freaxjj.wechatsubscribe.dto.resp.GoodsListVo;
import com.taobao.api.ApiException;
import com.taobao.api.TaobaoClient;
import com.taobao.api.request.TbkDgMaterialOptionalRequest;
import com.taobao.api.request.TbkItemInfoGetRequest;
import com.taobao.api.request.TbkTpwdCreateRequest;
import com.taobao.api.response.TbkDgMaterialOptionalResponse;
import com.taobao.api.response.TbkItemInfoGetResponse;
import com.taobao.api.response.TbkTpwdCreateResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.List;

/**
 * @author 刘亚林
 * @description
 * @create 2020/12/3 14:34
 **/
@RestController
@CrossOrigin("http://localhost:8081")
@Slf4j
@RequestMapping(value = "/goods")
@Validated
public class GoodsController {
    @Autowired
    TaobaoConfig taobaoConfig;

    /**
     * 创建搜索物料请求
     * @param goodsListReq
     * @return
     */
    private TbkDgMaterialOptionalRequest buildSearchMaterialReq(HttpServletRequest request, GoodsListReq goodsListReq){
        TbkDgMaterialOptionalRequest req = new TbkDgMaterialOptionalRequest();
        req.setAdzoneId(taobaoConfig.getAdzoneId());
        req.setPageNo(goodsListReq.getPageNo());
        req.setPageSize(goodsListReq.getPageSize());
        req.setCat(goodsListReq.getCat());
        req.setQ(goodsListReq.getQry());
        req.setMaterialId(goodsListReq.getMaterialId());
        req.setHasCoupon(goodsListReq.getHasCoupon());
        req.setIncludeGoodRate(goodsListReq.getIncludeGoodRate());
        req.setSort(goodsListReq.getSort());
        //ip参数影响邮费获取，如果不传或者传入不准确，邮费无法精准提供
        req.setIp(request.getRemoteAddr());
        return req;
    }

    @GetMapping("/list")
    public GoodsListVo getGoodsList(HttpServletRequest request, GoodsListReq qryReq) throws ApiException {
        //todo filter验签
        log.info("收到搜索商品请求: {}", qryReq);
        if(StringUtils.isEmpty(qryReq.getQry()) && StringUtils.isEmpty(qryReq.getCat())){
            //查询和类目不能都为空
            new GoodsListVo();
        }
        TbkDgMaterialOptionalRequest req = buildSearchMaterialReq(request, qryReq);
        TaobaoClient client = taobaoConfig.getTaobaoClient(TaobaoApiConsts.MATERIAL_QRY);
        TbkDgMaterialOptionalResponse rsp = client.execute(req);
        GoodsListVo goodsList = new GoodsListVo(rsp.getResultList(), rsp.getTotalResults());
        return goodsList;
    }

    /**
     * 获取商品详情
     * @param request
     * @return
     * @throws ApiException
     */
    @GetMapping("/detail")
    public TbkItemInfoGetResponse.NTbkItem getGoodsDetail(HttpServletRequest request) throws ApiException {
        String goodsId = request.getParameter("goodsId");
        if(StringUtils.isEmpty(goodsId)){
            return new TbkItemInfoGetResponse.NTbkItem();
        }
        TaobaoClient client = taobaoConfig.getTaobaoClient(TaobaoApiConsts.ITEM_INFO_GET);
        TbkItemInfoGetRequest req = new TbkItemInfoGetRequest();
        req.setNumIids(goodsId);
        req.setIp(request.getRemoteAddr());
        TbkItemInfoGetResponse rsp = client.execute(req);
        List<TbkItemInfoGetResponse.NTbkItem> items = rsp.getResults();
        if(CollectionUtils.isEmpty(items)){
            return new TbkItemInfoGetResponse.NTbkItem();
        }
        return items.get(0);
    }

    /**
     * 获取淘口令
     * @param tpwdReq
     * @param request
     * @return
     * @throws ApiException
     */
    @GetMapping("/tpwd")
    public String getTpWd(@Valid TpwdReq tpwdReq, HttpServletRequest request) throws ApiException {
        TaobaoClient client = taobaoConfig.getTaobaoClient(TaobaoApiConsts.TPWD_GET);
        TbkTpwdCreateRequest req = new TbkTpwdCreateRequest();
        //req.setUserId("123");
        req.setText(tpwdReq.getText());
        req.setUrl(tpwdReq.getUrl());
        //req.setLogo("https://uland.taobao.com/");
        TbkTpwdCreateResponse rsp = client.execute(req);
        return rsp.getData().getModel();
    }
}
