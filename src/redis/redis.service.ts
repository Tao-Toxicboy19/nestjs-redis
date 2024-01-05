// redis.service.ts

import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService {
  private readonly client: Redis;

  constructor() {
    this.client = new Redis({
      host: '3.80.108.86',
      port: 6379,
      retryStrategy: (times) => Math.min(times * 50, 2000),
    });
  }

  async setKey(key: string, value: string): Promise<void> {
    await this.client.set(key, value);
  }

  async getValue(key: string): Promise<string | null> {
    return await this.client.get(key);
  }
}
