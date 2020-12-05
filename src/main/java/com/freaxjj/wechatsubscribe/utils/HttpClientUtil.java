package com.freaxjj.wechatsubscribe.utils;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.freaxjj.wechatsubscribe.wx.menu.Button;
import lombok.SneakyThrows;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.client.fluent.Request;
import org.apache.http.util.EntityUtils;
import org.springframework.util.CollectionUtils;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.net.URI;
import java.net.URLEncoder;
import java.util.*;

public class HttpClientUtil {
    final static CloseableHttpClient client = HttpClients.createDefault();


    /**
     * 带url参数的post json请求
     *
     * @param url
     * @param params url参数
     * @param body
     * @return
     * @throws Exception
     */
    @SneakyThrows
    public static String sendPostJsonWithParam(String url, Map<String, String> params, String body) {
        CloseableHttpClient httpClient = null;
        try {
            httpClient = HttpClients.createDefault();
            HttpPost httpPost = new HttpPost(url);
            //设置url查询参数
            List<NameValuePair> query = new ArrayList<>();
            if (params != null) {
                Iterator qryIterator = params.entrySet().iterator();
                while (qryIterator.hasNext()) {
                    Map.Entry<String, String> elem = (Map.Entry<String, String>) qryIterator.next();
                    query.add(new BasicNameValuePair(elem.getKey(), elem.getValue()));
                }
            }
            if (query.size() > 0) {
                URIBuilder uriBuilder = new URIBuilder(url);
                uriBuilder.setParameters(query);
                httpPost = new HttpPost(uriBuilder.build());
            }

            httpPost.addHeader("Content-Type", "application/json");
            StringEntity entity = new StringEntity(body, "utf-8");
            httpPost.setEntity(entity);
            // 执行httpPost对象并获得response
            HttpResponse response = httpClient.execute(httpPost);
            HttpEntity resEntity = response.getEntity();
            // 获得返回来的信息，转化为字符串string
            String resp = EntityUtils.toString(resEntity);
            return resp;
        } finally {
            httpClient.close();
        }
    }

    // 常规调用
    private String sendPostForm(String url, Map<String, String> params) throws Exception {
        HttpPost request = new HttpPost(url);

        // set header
        //request.setHeader("X-Http-Demo", HttpClientUtil.class.getSimpleName());

        // set params
        if (params != null) {
            List<NameValuePair> nameValuePairList = new ArrayList<>();
            for (Map.Entry<String, String> entry : params.entrySet()) {
                nameValuePairList.add(new BasicNameValuePair(entry.getKey(), entry.getValue()));
            }
            //UrlEncodedFormEntity bodyEntity = new UrlEncodedFormEntity(nameValuePairList, "UTF-8");
            //System.out.println("body:" + IOUtils.toString(bodyEntity.getContent()));
            request.setEntity(new UrlEncodedFormEntity(nameValuePairList));
        }

        // send request
        CloseableHttpResponse response = client.execute(request);
        // read rsp code
        //System.out.println("rsp code:" + response.getStatusLine().getStatusCode());
        // return content
        String ret = readResponseContent(response.getEntity().getContent());
        response.close();
        return ret;
    }

    private String sendGet(String url) throws Exception {
        return sendGet(url, null);
    }

    // fluent 链式调用
    private String sendGet(String url, Map<String, String> params) throws Exception {
        if(!CollectionUtils.isEmpty(params)){
            url = buildUrlWithQry(url, params);
        }
        return Request.Get(url)
                .connectTimeout(1000)
                .socketTimeout(1000)
                .execute().returnContent().asString();
    }

    private String buildUrlWithQry(String url, Map<String, String> params) throws UnsupportedEncodingException {
        StringBuilder sb = new StringBuilder(url);
        String concat = "?";
        for(Map.Entry<String, String> param: params.entrySet()){
            sb.append(concat).append(param.getKey()).append("=").append(URLEncoder.encode(param.getValue(), "utf-8"));
            concat = "&";
        }
        return sb.toString();
    }

    private String readResponseContent(InputStream inputStream) throws Exception {
        if (inputStream == null) {
            return "";
        }
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        byte[] buf = new byte[512];
        int len;
        while (inputStream.available() > 0) {
            len = inputStream.read(buf);
            out.write(buf, 0, len);
        }

        return out.toString();
    }

    public static void main(String[] args) throws Exception {
        HttpClientUtil httpUrlConnectionDemo = new HttpClientUtil();

        String url = "https://api.weixin.qq.com/cgi-bin/token";
        Map<String, String> params = new HashMap<>();
        params.put("grant_type","client_credential");
        params.put("appId","wx9d85e417d982b645");
        params.put("secret","");
        String resp = httpUrlConnectionDemo.sendGet(url, params);
        JSONObject respObj = JSON.parseObject(resp);
        String accessToken = respObj.getString("access_token");

        url = "https://api.weixin.qq.com/cgi-bin/menu/create";
        params.clear();
        params.put("access_token", accessToken);
        List<Button> button = new ArrayList<>();
        button.add(Button.createViewBtn("优惠购物", ""));
        button.add(Button.createClickBtn("美女图片", "V1001_BEAUTY_PIC"));
        String body = JSON.toJSONString(button);
        String rsp = sendPostJsonWithParam(url, params, body);
        System.out.println("http post rsp:" + rsp);
    }
}
