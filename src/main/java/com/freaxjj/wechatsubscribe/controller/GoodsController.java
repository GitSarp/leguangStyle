package com.freaxjj.wechatsubscribe.controller;

import com.freaxjj.wechatsubscribe.common.config.TaobaoConfig;
import com.freaxjj.wechatsubscribe.consts.TaobaoApiConsts;
import com.freaxjj.wechatsubscribe.dto.req.GoodsListReq;
import com.freaxjj.wechatsubscribe.dto.req.OptimusGoodsReq;
import com.freaxjj.wechatsubscribe.dto.req.TpwdReq;
import com.freaxjj.wechatsubscribe.dto.resp.ActivityObj;
import com.freaxjj.wechatsubscribe.dto.resp.GoodsListVo;
import com.freaxjj.wechatsubscribe.dto.resp.OptGoodsListVo;
import com.google.common.collect.Lists;
import com.taobao.api.ApiException;
import com.taobao.api.TaobaoClient;
import com.taobao.api.request.*;
import com.taobao.api.response.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

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
     * 通用物料搜索
     * @param request
     * @param qryReq
     * @return
     * @throws ApiException
     */
    @GetMapping("/list")
    public GoodsListVo getGoodsList(HttpServletRequest request, GoodsListReq qryReq) throws ApiException {
        log.info("收到物料搜索请求: {}", qryReq);
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
        log.info("收到获取商品详情请求: {}", goodsId);
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
     * 活动地址获取，包含饿了吗红包等本地化活动。以下链接获取活动会场id
     * https://pub.alimama.com/portal/promo/activity.htm?tab=local&pageNum=1&traceType=4&filterQuery=
     * 美团需要企业资质
     * @return
     * @throws ApiException
     */
    @GetMapping("/activity")
    public List<ActivityObj> activityUrl() throws ApiException {
        TaobaoClient client = taobaoConfig.getTaobaoClient(TaobaoApiConsts.ACTIVITY_INFO_GET);
        TbkActivityInfoGetRequest req = new TbkActivityInfoGetRequest();
        //先写死推广位
        req.setAdzoneId(111719600254L);

        //获取活动数据
        List<ActivityObj> activityObjs = buildActivities();
        activityObjs.stream().forEach(a -> {
            req.setActivityMaterialId(a.getActivityId());
            try {
                TbkActivityInfoGetResponse.Data rsp = client.execute(req).getData();
                a.setClickUrl(rsp.getClickUrl());
                a.setShortClickUrl(rsp.getShortClickUrl());
                a.setWxQrcodeUrl(rsp.getWxQrcodeUrl());
                a.setWxMiniprogramPath(rsp.getWxMiniprogramPath());
            } catch (ApiException e) {
                e.printStackTrace();
            }
        });

        return activityObjs;
    }


    //todo 活动数据维护
    private List<ActivityObj> buildActivities() {
        List<ActivityObj> activityObjs = Lists.newArrayListWithCapacity(2);
        activityObjs.add(new ActivityObj("20150318020002597", "天天领红包", 1, "https://s3.jpg.cm/2021/10/19/IB6OLp.png", "https://z3.ax1x.com/2021/10/19/5aXFF1.png"));
        activityObjs.add(new ActivityObj("20150318020004284", "每日抢限量爆款", 1, "https://s3.jpg.cm/2021/10/19/IB6Zb6.png", "https://z3.ax1x.com/2021/10/19/5aXFF1.png"));
        return activityObjs;
    }

    /**
     * todo 获取商品优惠券
     */
    //@GetMapping("/coupon")


    /**
     * 天天特卖31362
     * 实时热销榜https://mos.m.taobao.com/union/1212shishi2c_2C?pid=mm_0_0_0
     * 特惠4094
     * 领券：综合3756 鞋包配饰3762 母婴3760 女装3767 美妆个护3763 食品3761 家居家装3758 男装3764 运动户外3766 数码家电3759 内衣3765
     * 潮流范4093
     *
     * next 高佣榜:综合13366	 鞋包配饰13370 母婴13374 女装13367 美妆个护13371 食品13375 家居家装13368 男装13372 运动户外13376 数码家电13369 内衣13373
     * next 相似推荐 猜你喜欢6708 选品库
     * next 猫超优质爆款：1元购凑单：27162 第二件0元：27161 单件满减包邮：27160
     * 本地化生活
     * @param optimusGoodsReq
     * @return
     * @throws ApiException
     */
    @GetMapping("/optimus")
    public OptGoodsListVo optimusGoods(@Valid OptimusGoodsReq optimusGoodsReq) throws ApiException {
        TaobaoClient client = taobaoConfig.getTaobaoClient(TaobaoApiConsts.OPTIMUS_MATERIAL);
        TbkDgOptimusMaterialRequest req = buildOptimusMaterialReq(optimusGoodsReq);
        TbkDgOptimusMaterialResponse rsp = client.execute(req);
        OptGoodsListVo vo = new OptGoodsListVo(rsp.getIsDefault(), rsp.getResultList(), rsp.getTotalCount());
        return vo;
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
        log.info("收到获取淘口令请求: {}", tpwdReq);
        TaobaoClient client = taobaoConfig.getTaobaoClient(TaobaoApiConsts.TPWD_GET);
        TbkTpwdCreateRequest req = new TbkTpwdCreateRequest();
        //req.setUserId("123");
        req.setText(tpwdReq.getText());
        req.setUrl(tpwdReq.getUrl());
        //req.setLogo("https://uland.taobao.com/");
        TbkTpwdCreateResponse rsp = client.execute(req);
        //log.info("淘口令返回：{}", JSON.toJSONString(rsp));
        return rsp.getData().getModel();
    }


    /**
     * 创建物料精选请求
     * @param optimusGoodsReq
     * @return
     */
    private TbkDgOptimusMaterialRequest buildOptimusMaterialReq(OptimusGoodsReq optimusGoodsReq){
        log.info("收到物料精选请求: {}", optimusGoodsReq);
        TbkDgOptimusMaterialRequest req = new TbkDgOptimusMaterialRequest();
        req.setAdzoneId(taobaoConfig.getAdzoneId());
        req.setPageNo(optimusGoodsReq.getPageNo());
        req.setPageSize(optimusGoodsReq.getPageSize());
        //相似商品推荐
        req.setItemId(optimusGoodsReq.getItemId());
        //todo
        req.setDeviceType(optimusGoodsReq.getDeviceType());
        req.setDeviceEncrypt(optimusGoodsReq.getDeviceEncrypt());
        req.setDeviceValue(optimusGoodsReq.getDeviceValue());
        req.setMaterialId(optimusGoodsReq.getMaterialId());
        return req;
    }

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
        log.info("获取到请求ip：{}", request.getRemoteAddr());
        req.setIp(request.getRemoteAddr());
        return req;
    }
}
