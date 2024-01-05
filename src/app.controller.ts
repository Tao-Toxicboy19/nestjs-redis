import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { RedisService } from './redis/redis.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly redisService: RedisService
  ) { }

  @Get()
  async getKey(): Promise<string | null> {
    // เรียกใช้งาน getValue ใน RedisService
    const value = await this.redisService.getValue('exampleKey');

    if (value) {
      return `Value from Redis: ${value}`;
    } else {
      return 'Key not found in Redis';
    }
  }
  
  // @Get()
  // async setKey(): Promise<string> {
  //   // เรียกใช้งาน setKey ใน RedisService
  //   await this.redisService.setKey('exampleKey', 'exampleValue');
  //   return 'Key has been set!';
  // }
}
