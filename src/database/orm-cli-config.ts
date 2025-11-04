import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';
import { CreateCoursesTable1761850042624 } from 'src/migrations/1761850042624-CreateCoursesTable';
import { CreateTagsTable1762261963464 } from 'src/migrations/1762261963464-CreateTagsTable';
import { CreateCoursesTagsTable1762266196394 } from 'src/migrations/1762266196394-CreateCoursesTagsTable';

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [
    CreateCoursesTable1761850042624,
    CreateTagsTable1762261963464,
    CreateCoursesTagsTable1762266196394,
  ],
});
