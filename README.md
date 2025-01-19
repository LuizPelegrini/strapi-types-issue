1. Install dependencies
`npm install`

2. Start Strapi and generate types
`npm run develop`

3. If types folder is not generated, run
`npm run strapi ts:generate-types`

4. Navigate to packages.ts file

5. Fields marked as required e.g containing `Schema.Attribute.Required` type are still inferred as undefined or null by `Data.Entity<Schema.UID>`