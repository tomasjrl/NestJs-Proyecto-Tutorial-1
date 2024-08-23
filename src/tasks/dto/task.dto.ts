import { TaskStatus } from '../task.entity';
import {
  Matches,
  IsEnum,
  MinLength,
  IsNotEmpty,
  IsString,
  IsOptional,
} from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title: string;

  @IsString()
  description: string;

  @IsString()
  status: TaskStatus;
}

export class UpdateTaskDto {
  @IsString()
  @IsOptional()
  @MinLength(3)
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  @IsEnum(TaskStatus) 
 // @IsIn([TaskStatus.IN_PROGRESS, TaskStatus.PENDING, TaskStatus.DONE])
  // @Matches(/^[A-Z]+$/, { message: 'Status must be in uppercase' })
  @Matches(/^[A-Z]+$/, {
    message: (args) => `Status '${args.value}' must be in uppercase`,
  })
  status?: TaskStatus;
}
