package com.freaxjj.wechatsubscribe.business.config;

import org.hibernate.dialect.MySQL5Dialect;
import org.springframework.stereotype.Component;

/**
 * @Author: freaxjj
 * @Desc: 设置数据库引擎及编码
 * @Date: 10/17/21 4:19 PM
 */
@Component
public class MySQL5TableType extends MySQL5Dialect {

    @Override
    public String getTableTypeString() {
        return "ENGINE=InnoDB DEFAULT CHARSET=utf8";
    }
}
