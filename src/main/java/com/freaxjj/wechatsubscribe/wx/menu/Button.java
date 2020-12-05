package com.freaxjj.wechatsubscribe.wx.menu;

import lombok.Data;

@Data
public class Button {
    private String name;
    private String type;
    private String key;
    private String url;
    private Button[] sub_button;

    public Button(String name, Button[] sub_button) {
        this.name = name;
        this.sub_button = sub_button;
    }

    public Button(String name, String type) {
        this.name = name;
        this.type = type;
    }

    public static Button createViewBtn(String name, String url) {
        Button button = new Button(name, "view");
        button.setUrl(url);
        return button;
    }

    public static Button createClickBtn(String name, String key) {
        Button button = new Button(name, "click");
        button.setKey(key);
        return button;
    }
}
