import { Pipe, PipeTransform } from '@angular/core';
interface ABC {
    年: number
    月: number,
    周:number,
    天:number,
    小时:number,
    分钟:number,
    秒:number
}
@Pipe({name: 'appAgo'})
export class AgoPipe implements PipeTransform {
    transform(value: any): any {
        if(value) {
            const seconds = Math.floor((+new Date() - +new Date(value))/1000)
            if(seconds<30) {
                return '刚刚'
            }
            const intervals:ABC={
                年:3600 * 24 * 365,
                月:3600 * 24 * 30,
                周:3600 * 24 * 7,
                天:3600 * 24,
                小时:3600,
                分钟:60,
                秒:1 
            };
            let counter=0;
            let unitName:keyof ABC
            for (unitName in intervals) {
                if (intervals.hasOwnProperty(unitName)) {
                    const unitValue = intervals[unitName];
                    counter = Math.floor(seconds / unitValue)
                    if(counter > 0) {
                        return `${counter} ${unitName}前`
                    }
                }
            }
        }
        return value
    }
}