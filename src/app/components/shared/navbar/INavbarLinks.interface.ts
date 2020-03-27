/**
 * INavbarLinks is an interface that represent an object with a google material icon name,
 * a name of the field, and a route. This Interface will be mainly used by the navbar component.
 */
export interface INavbarLinks {
  /**
   * Name of the icon of font awesome icons.
   */
  icon: string;
  /**
   * Name of the field, the text that will be displayed.
   */
  field: string;
  /**
   * Name of the route that references.
   */
  route: string;
  /**
   * Order in which the must appear (1 = first and so on0.)
   */
  order: number;
  /**
   * If the element redirects to an external page instead.
   */
  externalLink?: string;
}
