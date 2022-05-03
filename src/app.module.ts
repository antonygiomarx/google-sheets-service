import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SheetsService } from './services/sheets/sheets.service';
import { ConfigService } from './services/config/config.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, SheetsService, ConfigService],
})
export class AppModule {}
