package com.freaxjj.wechatsubscribe;

import com.alibaba.fastjson.JSON;
import com.taobao.api.DefaultTaobaoClient;
import com.taobao.api.TaobaoClient;
import com.taobao.api.request.TbkActivityInfoGetRequest;
import com.taobao.api.request.TbkCouponGetRequest;
import com.taobao.api.request.TbkDgOptimusMaterialRequest;
import com.taobao.api.response.TbkActivityInfoGetResponse;
import com.taobao.api.response.TbkCouponGetResponse;
import com.taobao.api.response.TbkDgOptimusMaterialResponse;

/**
 * @Author: freaxjj
 * @Desc:
 * @Date: 10/16/21 5:02 PM
 */
public class TaobaoTest {
    public static void main(String[] args) throws Exception {
        String url = "http://gw.api.taobao.com/router/rest?method=";
        String appkey = "";
        String secret = "";

        //url = url.concat("taobao.tbk.dg.optimus.material");
        url = url.concat("taobao.tbk.activity.info.get");


        TaobaoClient client = new DefaultTaobaoClient(url, appkey, secret);


/*      TbkDgOptimusMaterialRequest req = new TbkDgOptimusMaterialRequest();
        req.setAdzoneId(111040950284L);
        req.setMaterialId(6708L);

//        req.setDeviceEncrypt();
//        req.setDeviceType();
//        req.setDeviceValue();
        TbkDgOptimusMaterialResponse rsp = client.execute(req);*/


        //商品详情 desc没有
        //商品评论api需要收费

        //查找商品优惠券id
/*        TbkCouponGetRequest req1 = new TbkCouponGetRequest();
        req1.setItemId(123L);
        //req1.setActivityId("sdfwe3eefsdf");
        TbkCouponGetResponse rsp = client.execute(req1);
        System.out.println(rsp.getBody());*/



        //获取活动url
        TbkActivityInfoGetRequest req = new TbkActivityInfoGetRequest();
        req.setAdzoneId(111719600254L);
        //美团需要企业资质
        //饿了吗活动 https://pub.alimama.com/portal/promo/activity.htm?tab=local&pageNum=1&traceType=4&filterQuery=
        //20150318020004284
        req.setActivityMaterialId("20150318020002597");
        TbkActivityInfoGetResponse rsp = client.execute(req);
        System.out.println(rsp.getBody());
    }
}
