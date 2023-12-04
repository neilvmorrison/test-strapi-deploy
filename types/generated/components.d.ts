import type { Schema, Attribute } from '@strapi/strapi';

export interface FormsFormField extends Schema.Component {
  collectionName: 'components_forms_form_fields';
  info: {
    displayName: 'FormField';
    icon: 'apps';
    description: '';
  };
  attributes: {
    Label: Attribute.String & Attribute.Required;
    Value: Attribute.String;
    DisplayLabel: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'forms.form-field': FormsFormField;
    }
  }
}
