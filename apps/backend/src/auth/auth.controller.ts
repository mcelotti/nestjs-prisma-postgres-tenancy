import {
    Body,
    Controller,
    Post,
    Req
} from '@nestjs/common';

import { Request } from 'express';

import { Public } from './public.decorator';

import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly auth: AuthService) { }

    @Public()
    @Post('/login')
    login(@Req() req: Request, @Body() credentials: { userName: string, password: string; }) {
        return this.auth.login(credentials, req);
    }

    @Public()
    @Post('/tenant')
    tenantLogin(@Req() req: Request, @Body() credentials: { tenantId: number; }) {
        return this.auth.setTenant(credentials, req);
    }

    @Public()
    @Post('/logout')
    logout(@Req() req: Request) {
        return this.auth.logout(req);
    }
}