package com.freaxjj.wechatsubscribe.common;

import lombok.Data;

@Data
public class Result<T> {
    Integer code;
    String msg;
    T data;

    public static final Result UNKNOWN_ERROR = new Result(999999, "发生未知错误");

    public static final Result REQ_PARAM_ERROR = new Result(111111, "请求参数错误");

    public static final Result SUCCESS = new Result(000000, "请求成功");


    public Result(int code, String msg) {
        this.code = code;
        this.msg = msg;
    }
}
