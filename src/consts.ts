export const SITE = {
  /** Fundación (organización) */
  acronym: 'F.I.A.H.',
  org: 'Fundación Ayuda Humanitaria Internacional',
  /** Campaña / recaudación */
  campaign: 'Una Corona por la Vida',
  tagline: 'El galardón humanitario que une América y Europa',
  description:
    'F.I.A.H. — Fundación Ayuda Humanitaria Internacional organiza la recaudación Una Corona por la Vida. Gala Internacional en Madrid 2026 al servicio de la infancia, la edad dorada y la protección animal.',
  lang: 'es',
  url: 'https://unacoronaporlavida.org',
  event: {
    city: 'Madrid',
    year: '2026',
    title: 'Gala Internacional Una Corona por la Vida',
  },
  rif: 'J-31638421-1',
  instagram: {
    handle: '@premiounacoronaporlavida',
    url: 'https://www.instagram.com/premiounacoronaporlavida/',
  },
  whatsapp: {
    /** +34 695 19 87 16 */
    number: '34695198716',
    display: '+34 695 19 87 16',
    message:
      'Hola, quiero apoyar a F.I.A.H. en la recaudación Una Corona por la Vida. ¿Cómo puedo donar?',
  },
  payment: {
    zelle: {
      email: 'mariaftuozzolo@gmail.com',
    },
  },
} as const;

export function whatsappHref(): string {
  const text = encodeURIComponent(SITE.whatsapp.message);
  return `https://wa.me/${SITE.whatsapp.number}?text=${text}`;
}
