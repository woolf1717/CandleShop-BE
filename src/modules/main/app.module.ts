import { ConfigModule, ConfigService } from './../config';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './../auth';
import { CartModule } from 'modules/cart/cart.module';
import { CategoryModule } from 'modules/category/category.module';
import { CommonModule } from './../common';
import { CouponModule } from 'modules/coupon/coupon.module';
import { Module } from '@nestjs/common';
import { NotificationModule } from 'modules/notification/notification.module';
import { OrderModule } from 'modules/order/order.module';
import { ProductModule } from 'modules/product/product.module';
import { ReviewModule } from 'modules/review/review.module';
import { StripeModule } from 'modules/stripe/stripe.module';
import { UserModule } from 'modules/user';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule, StripeModule.forRootAsync()],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          type: configService.get('DB_TYPE'),
          host: configService.get('DB_HOST'),
          port: configService.get('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_DATABASE'),
          entities: [__dirname + './../**/**.entity{.ts,.js}'],
          synchronize: configService.get('DB_SYNC') === 'true',
        } as TypeOrmModuleAsyncOptions;
      },
    }),
    ConfigModule,
    AuthModule,
    CommonModule,
    ProductModule,
    CouponModule,
    NotificationModule,
    ReviewModule,
    UserModule,
    StripeModule,
    OrderModule,
    CartModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
