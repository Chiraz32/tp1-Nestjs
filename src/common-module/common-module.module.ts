import { Global, Module } from '@nestjs/common';
import {v4 as uuid} from 'uuid';

export const TOKENS = {
    uuid: 'UUID'
}

@Global()
@Module({
    providers: [
        {useValue :uuid(),
        provide: TOKENS.uuid }
    ],
    exports:[
        {
            useValue : uuid(),
            provide: 'uuid',
        }
    ]
})
export class CommonModuleModule {}


