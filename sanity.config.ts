import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { editionSchema } from './src/sanity/schema';

export default defineConfig({
  basePath: '/studio',
  projectId: 'demo-project-id', // Replace with actual project ID
  dataset: 'production',
  title: 'ExpoMarbella CMS',
  schema: {
    types: [editionSchema],
  },
  plugins: [structureTool()],
});
