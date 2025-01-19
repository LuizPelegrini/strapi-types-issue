import { Schema, Data, UID } from '@strapi/strapi';

let post: GetAttributeValues<'api::post.post'>;
// ERROR: body is possibly null or undefined even though it's marked as required
post.body;

let buttonComponent = post.components.find(c => c.__component === 'atoms.button');

// ERROR: label and url are possibly null or undefined even though they are marked as required
buttonComponent.label;
buttonComponent.url; 

// This type is exported in a npm package, so another client apps can use it
export type GetAttributeValues<
  TSchemaUID extends UID.Schema = UID.Schema, 
  TKeys extends Schema.AttributeNames<TSchemaUID> = Schema.AttributeNames<TSchemaUID>
> = Data.Entity<TSchemaUID, TKeys>;

