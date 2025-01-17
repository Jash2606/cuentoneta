import { LinkIcon } from '@sanity/icons';
import { preview } from 'sanity-plugin-icon-picker';
import { defineField, defineType } from 'sanity';

export const resource = defineField({
	name: 'resource',
	title: 'Recurso',
	type: 'object',
	preview: {
		select: {
			title: 'resourceType.title',
			icon: 'resourceType.icon',
		},
		prepare(selection) {
			return {
				title: selection.title,
				media: preview(selection.icon),
			};
		},
	},
	fields: [
		defineField({
			name: 'title',
			title: 'Título',
			type: 'string',
		}),
		defineField({
			name: 'url',
			title: 'URL',
			type: 'string',
		}),
		defineField({
			name: 'resourceType',
			title: 'Tipo de recurso',
			type: 'reference',
			to: { type: 'resourceType' },
		}),
	],
});

export default defineType({
	name: 'resourceType',
	title: 'Tipos de Recursos',
	type: 'document',
	icon: LinkIcon,
	preview: {
		select: {
			title: 'title',
			description: 'description',
			provider: 'icon.provider',
			name: 'icon.name',
			options: 'icon.options',
		},
		prepare({ title, description, provider, name, options }) {
			return {
				title: title,
				subtitle: description,
				media: preview({ provider, name, options }),
			};
		},
	},
	fields: [
		defineField({
			name: 'title',
			title: 'Título',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'description',
			title: 'Descripción',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'icon',
			title: 'Icono',
			type: 'iconPicker',
			options: {
				storeSvg: true,
			},
		}),
	],
});
