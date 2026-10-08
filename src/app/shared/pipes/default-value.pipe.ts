import { Pipe, PipeTransform } from '@angular/core';

export enum DefaultValues {
  Dash = '-',
}

@Pipe({
  name: 'defaultValue',
})
export class DefaultValuePipe implements PipeTransform {
  transform(value: string | number | undefined | null, placeholder?: string): string {
    value = value?.toString();
    return value ? value : (placeholder ?? DefaultValues.Dash);
  }
}
