package com.freaxjj.wechatsubscribe.controller;

import com.freaxjj.wechatsubscribe.config.TaobaoConfig;
import com.freaxjj.wechatsubscribe.consts.TaobaoApiConsts;
import com.freaxjj.wechatsubscribe.dto.GoodsQuery;
import com.taobao.api.ApiException;
import com.taobao.api.DefaultTaobaoClient;
import com.taobao.api.TaobaoClient;
import com.taobao.api.request.TbkDgMaterialOptionalRequest;
import com.taobao.api.response.TbkDgMaterialOptionalResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author 刘亚林
 * @description
 * @create 2020/12/3 14:34
 **/
@RestController
@CrossOrigin("http://localhost:8081")
public class GoodsController {
    @Autowired
    TaobaoConfig taobaoConfig;


    @GetMapping("/goods")
    public List<TbkDgMaterialOptionalResponse.MapData> getGoodsList(GoodsQuery qryReq) throws ApiException {
        String url = taobaoConfig.getUrl().concat(TaobaoApiConsts.MATERIAL_QRY);
        TaobaoClient client = new DefaultTaobaoClient(url, taobaoConfig.getAppkey(), taobaoConfig.getSecret());
        TbkDgMaterialOptionalRequest req = new TbkDgMaterialOptionalRequest();

        req.setAdzoneId(111040950284L);
        req.setCat("16,18");
        req.setQ(qryReq.getQry());
/*        req.setStartDsr(10L);
        req.setPageSize(20L);
        req.setPageNo(1L);
        req.setPlatform(1L);
        req.setEndTkRate(1234L);
        req.setStartTkRate(1234L);
        req.setEndPrice(10L);
        req.setStartPrice(10L);
        req.setIsOverseas(false);
        req.setIsTmall(false);
        req.setSort("tk_rate_des");
        req.setItemloc("杭州");
        req.setMaterialId(2836L);
        req.setHasCoupon(false);
        req.setIp("13.2.33.4");
        req.setNeedFreeShipment(true);
        req.setNeedPrepay(true);
        req.setIncludePayRate30(true);
        req.setIncludeGoodRate(true);
        req.setIncludeRfdRate(true);
        req.setNpxLevel(2L);
        req.setEndKaTkRate(1234L);
        req.setStartKaTkRate(1234L);
        req.setDeviceEncrypt("MD5");
        req.setDeviceValue("xxx");
        req.setDeviceType("IMEI");
        req.setLockRateEndTime(1567440000000L);
        req.setLockRateStartTime(1567440000000L);
        req.setLongitude("121.473701");
        req.setLatitude("31.230370");
        req.setCityCode("310000");
        req.setSellerIds("1,2,3,4");
        req.setSpecialId("2323");
        req.setRelationId("3243");*/
        TbkDgMaterialOptionalResponse rsp = client.execute(req);
        //return rsp.getBody();
        return rsp.getResultList();
    }
}
