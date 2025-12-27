import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context
      .switchToHttp()
      .getRequest<{ currentUser?: { admin?: boolean } }>();

    if (!request.currentUser) {
      return false;
    }

    return !!request.currentUser.admin;
  }
}
