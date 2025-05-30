import { Sport } from '../../../sports/entities/sport.entity';
import type { SeedData } from '../database.seeder';

export const SportSeed: SeedData<Sport> = {
  entity: Sport,
  name: 'Sport',
  data: [
    {
      name: 'Soccer',
      nameISO: {
        en: 'Soccer',
        es: 'Fútbol',
        fr: 'Football',
        de: 'Fußball',
        it: 'Calcio',
        pt: 'Futebol',
      },
      isActive: true,
    },
  ],
};
