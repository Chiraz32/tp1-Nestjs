import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';

@Controller('premier')
export class PremierController {
  @Get('get')
  getMethod(): String {
    console.log('get Method');
    return 'get Method';
  }

  @Post('post')
  post() {
    console.log('post Method');
  }

  @Patch('patch')
  patch() {
    console.log('pathch method');
  }

  @Delete('delete')
  delete() {
    console.log('delete Method');
  }
  @Put('patch')
   put() {
    console.log('put  method');
  }
}
