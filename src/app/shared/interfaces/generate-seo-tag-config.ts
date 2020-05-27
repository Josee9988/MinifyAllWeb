/**
 * Interface used by the seo service to load the config.
 */
export interface GenerateSeoTagConfig {
  /**
   * The title of the actual page.
   */
  title: string;
  /**
   * The description of the actual page.
   */
  description: string;
  /**
   * The slug of the page we are on. eg: If we are on "https://minifyall.jgracia.es/info" the slug will be "info".
   */
  slug: string;
}
