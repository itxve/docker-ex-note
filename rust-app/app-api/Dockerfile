# 编译
FROM --platform=$TARGETPLATFORM rust:1.68-alpine3.17 as builder

WORKDIR /app

# 创建一个空项目
RUN USER=root cargo new api

#安装以来
RUN apk add musl-dev openssl openssl-dev pkgconfig upx

RUN echo -e "[source.crates-io]\nreplace-with = 'rsproxy'\n[source.rsproxy]\nregistry = 'https://rsproxy.cn/crates.io-index'\n[source.rsproxy-sparse]\nregistry = 'sparse+https://rsproxy.cn/index/'\n[registries.rsproxy]\nindex = 'https://rsproxy.cn/crates.io-index'\n[net]\ngit-fetch-with-cli = true" ~/.cargo/config

COPY Cargo.toml Cargo.lock /app/api/

WORKDIR /app/api/
# 缓存依赖 
RUN rustup toolchain install nightly
# 加速下载
RUN cargo +nightly build --release -Z sparse-registry

# 
COPY src /app/api/src/

# 编译使用upx压缩
RUN RUST_BACKTRACE=1 cargo +nightly build --release -Z sparse-registry && upx /app/api/target/release/app-api

# 运行 scratch ,busybox
FROM --platform=$TARGETPLATFORM busybox as runtime

WORKDIR /app/api/

COPY --from=builder /app/api/target/release/app-api /app/bin/

CMD ["/app/bin/app-api"]