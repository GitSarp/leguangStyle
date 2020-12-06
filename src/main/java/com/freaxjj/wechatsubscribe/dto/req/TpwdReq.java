package com.freaxjj.wechatsubscribe.dto.req;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TpwdReq {
    @NotBlank
    private String text;
    @NotBlank
    private String url;
}
