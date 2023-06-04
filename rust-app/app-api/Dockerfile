# 编译
FROM --platform=$TARGETPLATFORM rust:1.68-alpine3.17 as builder

WORKDIR /app

RUN apk add musl-dev openssl openssl-dev pkgconfig upx

RUN echo -e "[source.crates-io]\nreplace-with = 'rsproxy'\n[source.rsproxy]\nregistry = 'https://rsproxy.cn/crates.io-index'\n[source.rsproxy-sparse]\nregistry = 'sparse+https://rsproxy.cn/index/'\n[registries.rsproxy]\nindex = 'https://rsproxy.cn/crates.io-index'\n[net]\ngit-fetch-with-cli = true" ~/.cargo/config

COPY . .

# 主要为了缓存依赖
RUN cargo build --release

# 编译使用upx压缩
RUN RUST_BACKTRACE=1 cargo build  --release && upx /app/target/release/app-api

# 运行
FROM --platform=$TARGETPLATFORM scratch as runtime

WORKDIR /app

COPY --from=builder /app/target/release/app-api /app/bin/

CMD ["/app/bin/app-api"]