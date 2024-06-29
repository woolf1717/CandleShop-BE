import { ConfigModule, ConfigService } from './../config';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './google.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from './../user';

@Module({
  imports: [
    UserModule,
    ConfigModule,
    PassportModule,

    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          secret: configService.get('JWT_SECRET_KEY'),
          signOptions: {
            ...(configService.get('JWT_EXPIRATION_TIME')
              ? {
                  expiresIn: Number(configService.get('JWT_EXPIRATION_TIME')),
                }
              : {}),
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, GoogleStrategy],
  exports: [AuthService, PassportModule.register({ defaultStrategy: 'jwt' })],
})
export class AuthModule {}
