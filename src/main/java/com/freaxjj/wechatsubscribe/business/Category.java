package com.freaxjj.wechatsubscribe.business;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;

/**
 * @Author: freaxjj
 * @Desc: 商品类别
 * @Date: 10/17/21 3:58 PM
 */
@Data
@Entity
@Table(name = "category")
@org.hibernate.annotations.Table(appliesTo = "category", comment = "商品分类信息")
@EntityListeners(AuditingEntityListener.class)
public class Category {
    @Id
    @GenericGenerator(name = "idGenerator", strategy = "uuid")
    @GeneratedValue(generator = "idGenerator")
    @Column(name = "id", length = 32)
    private String id;

    @Column(name = "name", length = 32)
    private String name;

    @Column(name = "picUrl", length = 512)
    private String picUrl;

    /**
     * 大类id
     */
    @Column(name = "parent_id", length = 32)
    private String parentId;

    /**
     * 小类名称
     */
    @Column(name = "tag", length = 32)
    private String tag;

    @Column(name = "create_time")
    private Date createTime;

    @LastModifiedDate
    @Column(name = "update_time")
    private Date updateTime;
}
