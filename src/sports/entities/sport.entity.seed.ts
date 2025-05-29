import { Sport } from './sport.entity';

export const SportSeed = {
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
  ] as Partial<Sport>[],
};
