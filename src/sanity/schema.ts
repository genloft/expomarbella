/* eslint-disable @typescript-eslint/no-explicit-any */
export const editionSchema = {
  name: 'edition',
  title: 'Edición',
  type: 'document',
  fields: [
    {
      name: 'number',
      title: 'Número de Edición',
      type: 'number',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Título (Ej. ExpoMarbella Nº14)',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'dateLabel',
      title: 'Fecha (Ej. Winter/Spring 2026)',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Descripción breve',
      type: 'text',
      validation: (Rule: any) => Rule.required().max(200),
    },
    {
      name: 'coverImage',
      title: 'Imagen de Portada',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'isNew',
      title: '¿Es la edición más reciente?',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'brand',
      title: 'Marca (ExpoMarbella o DecoMarbella)',
      type: 'string',
      options: {
        list: [
          { title: 'ExpoMarbella', value: 'ExpoMarbella' },
          { title: 'DecoMarbella', value: 'DecoMarbella' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'pdfUrl',
      title: 'Enlace al PDF o Issuu',
      type: 'url',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
      subtitle: 'dateLabel',
    },
  },
};
