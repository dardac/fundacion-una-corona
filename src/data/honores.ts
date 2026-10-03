export const HONORES = {
  categories: [
    {
      id: 'invitados',
      label: 'Invitados de Honor',
      edition: 'I Edición España 2026',
      description: 'Referentes del liderazgo, la excelencia y el impacto social global.',
      items: [
        {
          name: 'Yesenia González',
          detail: 'Activista',
          place: 'Trinidad y Tobago',
        },
        {
          name: 'Jesús Naranjo',
          detail: 'Liderazgo visionario en Salud',
          place: 'Venezuela',
        },
      ],
    },
    {
      id: 'distincion-internacional',
      label: 'Distinción Internacional',
      edition: 'I Edición España 2026',
      description: 'Distinción Internacional',
      items: [
        // {
        //   name: 'Francois Weffer',
        //   detail:
        //     'Abogado / Comunicador Social. Leyenda de la comunicación y el estilo de moda, 42 años de trayectoria',
        //   place: 'Venezuela–Francia',
        // },
        {
          name: 'Oscar Ramírez',
          detail:
            'Lcdo. Comunicación Social. Documentar la historia es el mayor acto de servicio hacia la humanidad (Selva del Darién)',
          place: 'México',
        },
      ],
    },
    {
      id: 'ong',
      label: 'Reconocimientos ONG',
      edition: 'I Edición España 2026',
      description: 'Reconocimientos (placas) ONG',
      items: [
        {
          name: 'ONG Stop Violencia Vicaria',
          detail: 'Reconocimiento institucional',
          place: 'España',
        },
        {
          name: 'ONG DDHHUNIVERSAL',
          detail: 'Reconocimiento institucional',
          place: 'Estados Unidos',
        },
        {
          name: 'ONG Por amor a los niños',
          detail: 'Reconocimiento institucional',
          place: 'Argentina',
        },
      ],
    },
    {
      id: 'salud',
      label: 'Sector Salud',
      edition: 'I Edición España 2026',
      description: 'Distinción especial a los líderes y profesionales del sector salud',
      items: [
        {
          name: 'Dr. Ariel Cherro',
          detail: 'Referente internacional en medicina paliativa',
          place: 'Argentina',
        },
        {
          name: 'Dra. Yaquelina Gricel Torres',
          detail:
            'Referente en Cirugía Reconstructiva, misiones humanitarias y medicina social',
          place: 'Argentina',
        },
        {
          name: 'Dra. Jhorbelys Rojas Dugarte',
          detail:
            'Distinción especial a la trayectoria en excelencia profesional y compromiso con la vida. Especialidades destacadas en Urología y Piso Pélvico',
          place: 'Venezuela',
        },
      ],
    },
    // {
    //   id: 'musical',
    //   label: 'Musical del año',
    //   edition: 'I Edición España 2026',
    //   description: 'Musical del año',
    //   items: [
    //     {
    //       name: 'Jhon Semeco',
    //       detail:
    //         '«El Poeta de las Emociones». Su extraordinaria trayectoria musical no solo conmueve almas, sino que deja una huella imborrable en la cultura global: Miembro de la Academia de los Latin Grammys; Miembro de la Academia de la Música de España; Patrimonio Cultural y Musical de Venezuela',
    //       place: 'Venezuela–España',
    //     },
    //   ],
    // },
    {
      id: 'audiovisual',
      label: 'Productor Audiovisual del año',
      edition: 'I Edición España 2026',
      description: 'Productor Audiovisual del año',
      items: [
        {
          name: 'Jafet Aarón',
          detail:
            'Documentalista y productor audiovisual excepcional nominado en esta importante categoría por su impactante producción «Selva del Darién»',
          place: 'México',
        },
      ],
    },
    {
      id: 'institucionales',
      label: 'Figuras Institucionales',
      edition: 'I Edición España 2026',
      description: 'Figuras Institucionales',
      items: [
        {
          name: 'Excma. Dra. Teresa Peramato',
          detail: 'Fiscal General del Estado de España',
          place: 'España',
        },
        {
          name: 'Ana Peláez Narváez',
          detail:
            'Presidenta del Comité de la ONU (CEDAW) y vicepresidenta de la Fundación CERMI Mujeres',
          place: 'España',
        },
        {
          name: 'Comisionado Oriel Ortega Benítez',
          detail: 'Ex director general de SENAFRONT',
          place: 'Panamá',
        },
        {
          name: 'Jessica Lezzi',
          detail: 'Defensora de DD.HH.',
          place: 'Argentina',
        },
        {
          name: 'Argenis Angulo',
          detail: 'Lcdo. Comunicación Social, experto en Deberes Humanos',
          place: 'Venezuela',
        },
        {
          name: 'Pilar Bernabé',
          detail:
            'Política española, delegada del Gobierno en la Comunidad Valenciana, Secretaria de Igualdad PSOE',
          place: 'España',
        },
      ],
    },
  ],
} as const;

export { EMBAJADORES } from './embajadores';

export const RECOGNITION_TABS = [
  { id: 'nominados', label: 'Nominados' },
  { id: 'honores', label: 'Honores' },
  { id: 'embajadores', label: 'Embajadores' },
] as const;
