# Development Dockerfile for Cursor Agent
FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive

# Install core dependencies
RUN apt-get update && apt-get install -y \
    curl \
    wget \
    git \
    build-essential \
    python3 \
    python3-pip \
    python3-venv \
    nano \
    vim \
    less \
    unzip \
    zip \
    tmux \
    jq \
    software-properties-common \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Install GitHub CLI (gh)
RUN type -p curl >/dev/null || (apt-get update && apt-get install -y curl) \
    && curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg \
    && chmod go+r /usr/share/keyrings/githubcli-archive-keyring.gpg \
    && echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | tee /etc/apt/sources.list.d/github-cli.list > /dev/null \
    && apt-get update \
    && apt-get install -y gh

# Install Node.js (LTS) and npm
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - && \
    apt-get install -y nodejs

# Install yarn, pnpm, and expo-cli globally
RUN npm install -g yarn pnpm expo-cli

# Install watchman (for React Native/Expo)
RUN apt-get update && apt-get install -y \
    autoconf \
    automake \
    python3-dev \
    libtool \
    pkg-config \
    libssl-dev \
    && git clone https://github.com/facebook/watchman.git /tmp/watchman \
    && cd /tmp/watchman && git checkout v2023.06.19.00 && ./autogen.sh && ./configure && make && make install \
    && cd / && rm -rf /tmp/watchman

# Set up a user (optional, for non-root dev)
RUN useradd -ms /bin/bash devuser
USER devuser
WORKDIR /home/devuser

# Expose common dev ports (adjust as needed)
EXPOSE 8080 3000 19000 19001 19002

CMD ["/bin/bash"]
