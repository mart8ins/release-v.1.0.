package com.mart8ins.books.configuration;

import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;

@Configuration
public class DataSourceConfig {
    @Bean
    public DataSource getDatabaseDatasource() {
        return DataSourceBuilder.create()
                .driverClassName("org.postgresql.Driver")
//                .url("jdbc:postgresql://postgresContainer:5432/postgres")
                .url("jdbc:postgresql://localhost:5432/postgres")
                .username("postgres")
                .password("postgres")
                .build();
    }
}
