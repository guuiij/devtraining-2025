import { IsString } from 'class-validator';

export class CreateCourseDTO {
  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsString({ each: true }) // Validar  array, para cada elemnto do array é validado
  readonly tags: string[];
}
