import { controller } from 'decorator-koa-router';
import { injectable } from 'inversify';

@controller('/user')
@injectable()
export class UserController {}
