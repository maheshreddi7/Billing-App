package com.mahesh.billingsoftware.io;

import lombok.Builder;
import lombok.Data;
import org.hibernate.annotations.UpdateTimestamp;

import java.sql.Timestamp;
@Builder
@Data
public class CategoryResponce {
    private String categoryId;
    private String name;
    private String description;
    private String bgColour;
    private Timestamp createdAt;
    private Timestamp updatedAt;
    private String imgUrl;
}
